"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../actions/notifications");
const notificationSettings_1 = require("../../actions/notificationSettings");
const ComponentEx_1 = require("../../util/ComponentEx");
const Icon_1 = __importDefault(require("../controls/Icon"));
const RadialProgress_1 = __importDefault(require("../controls/RadialProgress"));
const Debouncer_1 = __importDefault(require("../../util/Debouncer"));
const Notification_1 = __importDefault(require("./Notification"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
function sortValue(noti) {
    let value = noti.createdTime;
    if (noti.progress !== undefined || noti.type === "activity") {
        value /= 10;
    }
    return value;
}
function inverseSort(lhs, rhs) {
    return sortValue(lhs) - sortValue(rhs);
}
class NotificationButton extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mButtonRef = React.createRef();
        this.mUpdateTimer = undefined;
        this.mMounted = false;
        this.resizeUpdate = _.debounce(() => {
            this.forceUpdate();
        }, 300, { maxWait: 1000, trailing: true });
        this.resizeUpdating = _.debounce(() => {
            this.nextState.resizing = false;
        }, 1000, { leading: false, trailing: true });
        this.displayTime = (item) => {
            if (item.displayMS !== undefined) {
                return item.displayMS;
            }
            return ({
                warning: 10000,
                error: 10000,
                success: 5000,
                info: 5000,
                activity: null,
            }[item.type] || 10000);
        };
        this.onResize = () => {
            if (!this.state.resizing) {
                this.nextState.resizing = true;
            }
            this.resizeUpdate();
            this.resizeUpdating();
        };
        this.triggerFilter = () => {
            this.updateFiltered();
            return Promise.resolve();
        };
        this.toggle = (evt) => {
            evt.preventDefault();
            this.context.api.events.emit("analytics-track-click-event", "Notifications", `${this.state.open ? "Close" : "Open"} Notifications`);
            this.nextState.open = !this.state.open;
            setTimeout(() => {
                this.mUpdateDebouncer.runNow(() => null);
            }, 0);
        };
        this.groupNotifications = (previous, notification, collapsed) => {
            if (notification.group !== undefined &&
                notification.group !== this.state.expand) {
                if (collapsed[notification.group] === undefined) {
                    previous.push(notification);
                    collapsed[notification.group] = 0;
                }
                collapsed[notification.group]++;
            }
            else {
                previous.push(notification);
            }
            return previous;
        };
        this.expand = (groupId) => {
            this.nextState.expand = groupId;
        };
        this.unExpand = () => {
            this.nextState.expand = undefined;
        };
        this.renderNotification = (notification, collapsed) => {
            const { t } = this.props;
            const translated = Object.assign({}, notification);
            translated.title =
                translated.title !== undefined &&
                    (notification.localize === undefined ||
                        notification.localize.title !== false)
                    ? t(translated.title, { replace: translated.replace })
                    : translated.title;
            if (collapsed[notification.group] > 1 && translated.title !== undefined) {
                translated.message = t("<Multiple>");
            }
            else {
                translated.message =
                    notification.localize === undefined ||
                        notification.localize.message !== false
                        ? t(translated.message, { replace: translated.replace })
                        : translated.message;
            }
            return (React.createElement(Notification_1.default, { t: t, key: notification.id, params: translated, collapsed: collapsed[notification.group], onExpand: this.expand, onTriggerAction: this.triggerAction, onDismiss: this.dismissAll, onSuppress: this.suppress }));
        };
        this.triggerAction = (notificationId, actionTitle) => {
            const { notifications, onDismiss } = this.props;
            const noti = notifications.find((iter) => iter.id === notificationId);
            if (noti === undefined) {
                return;
            }
            const callAction = (id, action, idx) => {
                if (idx === -1) {
                    return;
                }
                if (action.action !== undefined) {
                    action.action(() => onDismiss(id));
                }
                else {
                    (0, notifications_1.fireNotificationAction)(id, noti.process, idx, () => onDismiss(id));
                }
            };
            if (noti.group === undefined || noti.group === this.state.expand) {
                const actionIdx = noti.actions.findIndex((iter) => iter.title === actionTitle);
                callAction(noti.id, noti.actions[actionIdx], actionIdx);
            }
            else {
                notifications
                    .filter((iter) => iter.group === noti.group)
                    .forEach((iter) => {
                    const actionIdx = iter.actions.findIndex((actIter) => actIter.title === actionTitle);
                    callAction(iter.id, iter.actions[actionIdx], actionIdx);
                });
            }
        };
        this.dismissAll = (notificationId) => {
            const { notifications, onDismiss } = this.props;
            const noti = notifications.find((iter) => iter.id === notificationId);
            this.context.api.events.emit("analytics-track-click-event", "Notifications", "Dismiss");
            if (noti === undefined) {
                return;
            }
            if (noti.group === undefined || noti.group === this.state.expand) {
                onDismiss(notificationId);
            }
            else {
                notifications
                    .filter((iter) => iter.group === noti.group)
                    .forEach((iter) => {
                    onDismiss(iter.id);
                });
            }
        };
        this.suppress = (notificationId) => {
            this.props.onDismiss(notificationId);
            this.props.onSuppress(notificationId);
        };
        this.initState({
            expand: undefined,
            open: false,
            resizing: false,
            filtered: [],
        });
        this.mUpdateDebouncer = new Debouncer_1.default(this.triggerFilter, 200);
    }
    componentDidMount() {
        this.updateFiltered();
        this.mMounted = true;
        window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        this.mMounted = false;
        if (this.mUpdateTimer !== undefined) {
            clearTimeout(this.mUpdateTimer);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.notifications !== this.props.notifications) {
            if (prevProps.notifications.length !== this.props.notifications.length) {
                this.mUpdateDebouncer.runNow(() => null);
            }
            else {
                this.quickUpdate();
                this.mUpdateDebouncer.schedule();
            }
        }
    }
    render() {
        const { t, hide, notifications } = this.props;
        const { filtered, resizing } = this.state;
        const collapsed = {};
        const items = filtered
            .slice()
            .reduce((prev, notification) => this.groupNotifications(prev, notification, collapsed), [])
            .sort(inverseSort)
            .map((notification) => this.renderNotification(notification, collapsed));
        const popover = (React.createElement(react_bootstrap_1.Popover, { id: "notifications-popover", arrowOffsetLeft: 64, style: { display: hide ? "none" : "block" } }, items.length > 0 ? items : t("No Notifications")));
        const combinedProgress = [];
        const progress = notifications.filter((iter) => iter.progress !== undefined);
        if (progress.length > 0) {
            const percentages = Math.min(...progress.map((iter) => iter.progress));
            combinedProgress.push({
                class: "running",
                min: 0,
                max: 100,
                value: percentages,
            });
        }
        const pendingActivities = notifications.filter((iter) => iter.type === "activity" && iter.progress === undefined);
        return (React.createElement("div", { style: { display: "inline-block" } },
            React.createElement(react_bootstrap_1.Button, { id: "notifications-button", onClick: this.toggle, ref: this.mButtonRef },
                React.createElement(Icon_1.default, { name: "notifications" }),
                React.createElement(RadialProgress_1.default, { className: "notifications-progress", data: combinedProgress, spin: pendingActivities.length >= 1, offset: 8, totalRadius: 8 }),
                notifications.length === 0 ? null : (React.createElement(react_bootstrap_1.Badge, null, notifications.length))),
            React.createElement(react_bootstrap_1.Overlay, { placement: "bottom", rootClose: false, onExit: this.unExpand, show: items.length > 0, target: this.mButtonRef.current, shouldUpdatePosition: resizing }, popover)));
    }
    quickUpdate() {
        // updating only progress and message
        const { notifications } = this.props;
        const { filtered } = this.state;
        for (let i = 0; i < filtered.length; ++i) {
            // there shouldn't be notifications without id here but just to be safe
            if (filtered[i].id !== undefined) {
                const ref = notifications.find((n) => n.id === filtered[i].id);
                // if the notification no longer exists we're not removing it here,
                // it will be removed in the "big" update (updateFiltered) a bit later
                if (ref !== undefined &&
                    (filtered[i].message !== ref.message ||
                        filtered[i].progress !== ref.progress)) {
                    this.nextState.filtered[i] = Object.assign(Object.assign({}, filtered[i]), { message: ref.message, progress: ref.progress });
                }
            }
        }
    }
    updateFiltered() {
        const { notifications } = this.props;
        const { open } = this.state;
        this.mUpdateTimer = undefined;
        if (!this.mMounted) {
            return;
        }
        let filtered = notifications
            .slice()
            .filter((item) => item.type !== "silent");
        let nextTimeout = null;
        const now = Date.now();
        if (!open) {
            filtered = filtered.filter((item) => {
                const displayTime = this.displayTime(item);
                if (displayTime === null) {
                    return true;
                }
                const timeout = (item.type === "activity" ? item.createdTime : item.updatedTime) +
                    displayTime;
                if (timeout > now) {
                    if (nextTimeout === null || timeout < nextTimeout) {
                        nextTimeout = timeout;
                    }
                    return true;
                }
                return false;
            });
        }
        this.nextState.filtered = filtered;
        if (!open) {
            if (filtered.length > 0) {
                if (this.mUpdateTimer !== undefined) {
                    // should never happen
                    clearTimeout(this.mUpdateTimer);
                }
                if (nextTimeout !== null) {
                    // if one of the displayed notifications has a timeout, refresh once that timeout expires
                    // (adding 100ms for good measure)
                    this.mUpdateTimer = setTimeout(this.triggerFilter, nextTimeout - now + 100);
                }
            }
        }
    }
}
function mapStateToProps(state) {
    return {
        notifications: state.session.notifications.notifications,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onDismiss: (id) => dispatch((0, notifications_1.dismissNotification)(id)),
        onSuppress: (id) => dispatch((0, notificationSettings_1.suppressNotification)(id, true)),
    };
}
exports.default = (0, ComponentEx_1.translate)(["common"])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(NotificationButton));
