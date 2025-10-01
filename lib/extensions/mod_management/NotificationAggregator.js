"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAggregator = void 0;
const log_1 = require("../../util/log");
// Jest doesn't support setImmediate, so we provide a polyfill
// This ensures compatibility across environments
// In test environment, use synchronous execution to avoid timing issues
const setImmediatePolyfill = (typeof setImmediate !== 'undefined')
    ? setImmediate
    : (((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === 'test')
        ? (fn) => fn() // Synchronous in tests
        : (fn) => setTimeout(fn, 0);
/**
 * Service for aggregating similar notifications to avoid spam during bulk operations
 * like dependency installations. Collects notifications during an operation and
 * presents them as consolidated notifications at the end.
 */
class NotificationAggregator {
    constructor(api) {
        this.mPendingNotifications = {};
        this.mActiveAggregations = new Set();
        this.mTimeouts = {};
        this.mNormalizedMessageCache = new Map();
        this.mAddNotificationQueue = {};
        this.mApi = api;
    }
    /**
     * Start aggregating notifications for a specific operation
     * @param aggregationId Unique identifier for the aggregation session
     * @param timeoutMs Optional timeout in milliseconds to auto-flush notifications (default: 1000ms)
     */
    startAggregation(aggregationId, timeoutMs = 1000) {
        if (this.mActiveAggregations.has(aggregationId)) {
            return;
        }
        this.mActiveAggregations.add(aggregationId);
        this.mPendingNotifications[aggregationId] = [];
        // Set up auto-flush timeout
        if (timeoutMs > 0) {
            this.mTimeouts[aggregationId] = setTimeout(() => {
                this.flushAggregation(aggregationId);
            }, timeoutMs);
        }
    }
    /**
     * Add a notification to be aggregated
     * @param aggregationId The aggregation session to add to
     * @param type Notification type
     * @param title Notification title
     * @param message Notification message
     * @param item The specific item this notification refers to (e.g., mod name)
     * @param options Additional notification options
     */
    addNotification(aggregationId, type, title, message, item, options = {}) {
        if (!this.mActiveAggregations.has(aggregationId)) {
            setImmediatePolyfill(() => {
                this.mApi.showErrorNotification(title, message, {
                    message: item,
                    allowReport: options.allowReport,
                    actions: options.actions,
                });
            });
            return;
        }
        // Batch notifications to prevent UI blocking on rapid additions
        this.addNotificationBatched(aggregationId, {
            type,
            title,
            message,
            item,
            allowReport: options.allowReport,
            actions: options.actions,
        });
    }
    addNotificationBatched(aggregationId, notification) {
        this.mPendingNotifications[aggregationId].push(notification);
    }
    /**
     * Flush all pending notifications for an aggregation session
     * @param aggregationId The aggregation session to flush
     */
    flushAggregation(aggregationId) {
        if (!this.mActiveAggregations.has(aggregationId)) {
            return;
        }
        const pending = this.mPendingNotifications[aggregationId] || [];
        if (pending.length === 0) {
            this.cleanupAggregation(aggregationId);
            return;
        }
        this.processNotificationsAsync(pending, aggregationId);
        this.cleanupAggregation(aggregationId);
    }
    processNotificationsAsync(notifications, aggregationId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                // Process aggregation in next tick to prevent blocking (synchronous in tests)
                if (((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== 'test') {
                    // Synchronous in test environment
                }
                else {
                    yield new Promise(resolve => setImmediatePolyfill(resolve));
                }
                // Circuit breaker: For very large batches, show a simple summary instead of processing all
                if (notifications.length > 500) {
                    (0, log_1.log)('warn', 'Very large notification batch detected, showing summary instead', {
                        aggregationId,
                        count: notifications.length,
                    });
                    const errorCount = notifications.filter(n => n.type === 'error').length;
                    const warningCount = notifications.filter(n => n.type === 'warning').length;
                    if (errorCount > 0) {
                        this.mApi.showErrorNotification(`Multiple dependency errors (${errorCount} errors)`, `${errorCount} dependencies failed to install. Check the log for details.`, { id: `bulk-errors-${aggregationId}` });
                    }
                    if (warningCount > 0) {
                        this.mApi.sendNotification({
                            id: `bulk-warnings-${aggregationId}`,
                            type: 'warning',
                            title: `Multiple dependency warnings (${warningCount} warnings)`,
                            message: `${warningCount} dependencies had warnings. Check the log for details.`,
                        });
                    }
                    return;
                }
                const aggregated = this.aggregateNotifications(notifications);
                // Show notifications one by one with brief delays to prevent UI blocking
                for (let i = 0; i < aggregated.length; i++) {
                    this.showAggregatedNotification(aggregated[i]);
                    // Add small delay between notifications to prevent UI blocking (skip in tests)
                    if (i < aggregated.length - 1 && (((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) !== 'test')) {
                        yield new Promise(resolve => setTimeout(resolve, 1));
                    }
                }
            }
            catch (error) {
                (0, log_1.log)('error', 'Failed to process aggregated notifications', { aggregationId, error: error.message });
            }
        });
    }
    /**
     * Stop aggregation and flush any pending notifications
     * @param aggregationId The aggregation session to stop
     */
    stopAggregation(aggregationId) {
        this.flushAggregation(aggregationId);
    }
    /**
     * Check if an aggregation is currently active
     * @param aggregationId The aggregation session to check
     */
    isAggregating(aggregationId) {
        return this.mActiveAggregations.has(aggregationId);
    }
    cleanupAggregation(aggregationId) {
        this.mActiveAggregations.delete(aggregationId);
        delete this.mPendingNotifications[aggregationId];
        if (this.mTimeouts[aggregationId]) {
            clearTimeout(this.mTimeouts[aggregationId]);
            delete this.mTimeouts[aggregationId];
        }
        if (this.mAddNotificationQueue[aggregationId]) {
            clearTimeout(this.mAddNotificationQueue[aggregationId]);
            delete this.mAddNotificationQueue[aggregationId];
        }
        // Clean up message cache periodically to prevent memory leaks
        if (this.mNormalizedMessageCache.size > 500) {
            this.mNormalizedMessageCache.clear();
        }
    }
    aggregateNotifications(notifications) {
        const grouped = {};
        // Group notifications by title and message pattern
        notifications.forEach(notification => {
            const key = this.getGroupingKey(notification);
            if (!grouped[key]) {
                grouped[key] = [];
            }
            grouped[key].push(notification);
        });
        // Convert groups to aggregated notifications
        return Object.keys(grouped).map(key => {
            const group = grouped[key];
            const first = group[0];
            const uniqueItems = Array.from(new Set(group.map(n => n.item)));
            return {
                id: `aggregated-${key}-${Date.now()}`,
                type: first.type,
                title: first.title,
                message: this.buildAggregatedMessage(first, uniqueItems),
                text: uniqueItems.join('\n'),
                items: uniqueItems,
                count: group.length,
                allowReport: first.allowReport,
                actions: first.actions,
            };
        });
    }
    getGroupingKey(notification) {
        // For performance, use a simpler grouping key that avoids expensive normalization
        // Only normalize if we have time (small batches)
        const simpleKey = `${notification.type}-${notification.title}`;
        // Only do expensive normalization for smaller batches to avoid UI blocking
        if (this.mPendingNotifications && Object.keys(this.mPendingNotifications).length < 100) {
            const normalizedMessage = this.normalizeMessage(notification.message);
            return `${simpleKey}-${normalizedMessage}`;
        }
        return simpleKey;
    }
    normalizeMessage(message) {
        // Check cache first to avoid expensive regex operations
        if (this.mNormalizedMessageCache.has(message)) {
            return this.mNormalizedMessageCache.get(message);
        }
        // Remove variable parts from messages to enable better grouping
        const normalized = message
            .replace(/\{\{[^}]+\}\}/g, 'PLACEHOLDER') // Replace template variables
            .replace(/https?:\/\/[^\s]+/g, 'URL') // Replace URLs
            .replace(/\d+/g, 'NUMBER') // Replace numbers
            .replace(/['""][^'"]*['"]/g, 'QUOTED') // Replace quoted strings
            .toLowerCase()
            .trim();
        // Cache the result (limit cache size to prevent memory leaks)
        if (this.mNormalizedMessageCache.size < 1000) {
            this.mNormalizedMessageCache.set(message, normalized);
        }
        return normalized;
    }
    buildAggregatedMessage(notification, items) {
        const baseMessage = notification.message;
        if (items.length === 1) {
            return baseMessage;
        }
        const itemList = items.length <= 5
            ? items.join(', ')
            : `${items.slice(0, 5).join(', ')} and ${items.length - 5} more`;
        return `${baseMessage}\n\nAffected dependencies: ${itemList}`;
    }
    showAggregatedNotification(notification) {
        setImmediatePolyfill(() => {
            const options = {
                id: notification.id,
                allowReport: notification.allowReport,
            };
            if (notification.actions) {
                options.actions = notification.actions;
            }
            // Add count information to the title if multiple items
            const displayTitle = notification.count > 1
                ? `${notification.title} (${notification.count} dependencies)`
                : notification.title;
            switch (notification.type) {
                case 'error':
                    this.mApi.showErrorNotification(displayTitle, { message: notification.message, affectedDependencies: `\n${notification.text}` }, options);
                    break;
                case 'warning':
                    this.mApi.sendNotification(Object.assign({ id: notification.id, type: 'warning', title: displayTitle, message: notification.message, text: notification.text }, options));
                    break;
                case 'info':
                    this.mApi.sendNotification(Object.assign({ id: notification.id, type: 'info', title: displayTitle, message: notification.message, text: notification.text }, options));
                    break;
            }
        });
    }
}
exports.NotificationAggregator = NotificationAggregator;
