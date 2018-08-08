"use strict";
/**
 * This extension is a host for automated tests against the current
 * setup to find problems with Vortex in general, the setup for the current game,
 * ...
 *
 * This extension is only responsible to run checks provided by other extensions
 * and to displays the results to the user, it does not contain its own checks.
 * It also allows users to suppress the check.
 *
 * New API:
 *   registerTest(id: string, eventType: string, check: function) - registers a test.
 *      _id_ a unique id for this test.
 *      _eventType_ specifies when the test runs and what parameters will be passed to
 *      the check function.
 *      _check_ is the check function. It should return (a promise of) null if the problem
 *      isn't present, otherwise a test result with - at the very least - a short description.
 *
 * Currently implemented event types:
 *   settings-changed: called on startup and whenever the user has changed settings. This will
 *      not necessarily be called on every single settings change, multiple changes may be
 *      aggregated.
 *   gamemode-activated: called on startup and whenever the active game changes.
 *   profile-did-change: called on startup and whenever the active profile changes.
 *   mod-installed: called whenever one or more mods were installed or removed
 *   mod-activated: called whenever one or more mods were activated or deactivated
 * Further event types can be triggered by extensions
 */
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../actions/notifications");
const log_1 = require("../../util/log");
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const Promise = require("bluebird");
const _ = require("lodash");
const checks = {};
const triggerDelays = {};
function runCheck(api, check) {
    return check.check()
        .then(result => {
        const id = `test-${check.id}`;
        if (result === undefined) {
            api.dismissNotification(id);
        }
        else {
            const actions = [{
                    title: 'More',
                    action: () => api.store.dispatch(notifications_1.showDialog('info', 'Check failed', {
                        bbcode: result.description.long,
                    }, [{ label: 'Close' }])),
                }];
            if (result.automaticFix !== undefined) {
                actions.push({
                    title: 'Fix',
                    action: () => result.automaticFix()
                        .then(() => runCheck(api, check))
                        .catch(err => api.showErrorNotification('Failed to run automatic fix', err)),
                });
            }
            else {
                actions.push({
                    title: 'Check again',
                    action: () => runCheck(api, check),
                });
            }
            api.sendNotification({
                id,
                type: 'warning',
                message: result.description.short,
                actions,
                noDismiss: true,
            });
        }
    })
        .catch((err) => {
        log_1.log('warn', 'check failed to run', {
            id: check.id,
            event,
            err: err.message,
            stack: err.stack,
        });
    });
}
function runChecks(api, event, delay) {
    if (triggerDelays[event] !== undefined) {
        clearTimeout(triggerDelays[event]);
    }
    triggerDelays[event] = setTimeout(() => {
        const eventChecks = storeHelper_1.getSafe(checks, [event], []);
        log_1.log('debug', 'running checks', { event, count: eventChecks.length });
        Promise.map(eventChecks, (par) => runCheck(api, par))
            .then(() => {
            log_1.log('debug', 'all checks completed', { event });
        });
    }, delay || 500);
}
function init(context) {
    context.registerTest = (id, eventType, check) => {
        log_1.log('debug', 'register test', { id, eventType });
        util_1.setdefault(checks, eventType, []).push({ id, check });
    };
    context.once(() => {
        context.api.events.on('trigger-test-run', (eventType, delay) => {
            runChecks(context.api, eventType, delay);
        });
        context.api.events.on('gamemode-activated', () => {
            runChecks(context.api, 'gamemode-activated');
        });
        context.api.events.on('profile-did-change', () => {
            runChecks(context.api, 'profile-did-change');
        });
        context.api.events.on('startup', () => {
            runChecks(context.api, 'startup');
        });
        context.api.onStateChange(['settings'], () => {
            runChecks(context.api, 'settings-changed');
        });
        context.api.onStateChange(['persistent', 'mods'], (prevMods, newMods) => {
            const gameMode = selectors_1.activeGameId(context.api.store.getState());
            if (gameMode === undefined) {
                return;
            }
            if (!_.isEqual(Object.keys(prevMods[gameMode] || {}), Object.keys(newMods[gameMode] || {}))) {
                runChecks(context.api, 'mod-installed', 5000);
            }
        });
        context.api.onStateChange(['persistent', 'profiles'], (prevProfiles, newProfiles) => {
            const currentProfile = selectors_1.activeProfile(context.api.store.getState());
            if (currentProfile === undefined) {
                // nop
                return;
            }
            if (prevProfiles[currentProfile.id].modState !== newProfiles[currentProfile.id].modState) {
                runChecks(context.api, 'mod-activated', 5000);
            }
        });
    });
    return true;
}
exports.default = init;
