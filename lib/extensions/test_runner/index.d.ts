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
import { IExtensionContext } from '../../types/IExtensionContext';
export declare type TestEvent = 'settings-changed' | 'gamemode-activated' | 'profile-did-change' | 'mod-installed' | 'mod-activated';
declare function init(context: IExtensionContext): boolean;
export default init;
