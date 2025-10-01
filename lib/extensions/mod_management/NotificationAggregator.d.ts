import { IExtensionApi } from '../../types/IExtensionContext';
export interface IAggregatedNotification {
    id: string;
    type: 'error' | 'warning' | 'info';
    title: string;
    message: string;
    text: string;
    items: string[];
    count: number;
    allowReport?: boolean;
    actions?: any[];
}
export interface IPendingNotification {
    type: 'error' | 'warning' | 'info';
    title: string;
    message: string;
    item: string;
    allowReport?: boolean;
    actions?: any[];
}
/**
 * Service for aggregating similar notifications to avoid spam during bulk operations
 * like dependency installations. Collects notifications during an operation and
 * presents them as consolidated notifications at the end.
 */
export declare class NotificationAggregator {
    private mPendingNotifications;
    private mActiveAggregations;
    private mTimeouts;
    private mApi;
    private mNormalizedMessageCache;
    private mAddNotificationQueue;
    constructor(api: IExtensionApi);
    /**
     * Start aggregating notifications for a specific operation
     * @param aggregationId Unique identifier for the aggregation session
     * @param timeoutMs Optional timeout in milliseconds to auto-flush notifications (default: 1000ms)
     */
    startAggregation(aggregationId: string, timeoutMs?: number): void;
    /**
     * Add a notification to be aggregated
     * @param aggregationId The aggregation session to add to
     * @param type Notification type
     * @param title Notification title
     * @param message Notification message
     * @param item The specific item this notification refers to (e.g., mod name)
     * @param options Additional notification options
     */
    addNotification(aggregationId: string, type: 'error' | 'warning' | 'info', title: string, message: string, item: string, options?: {
        allowReport?: boolean;
        actions?: any[];
    }): void;
    private addNotificationBatched;
    /**
     * Flush all pending notifications for an aggregation session
     * @param aggregationId The aggregation session to flush
     */
    flushAggregation(aggregationId: string): void;
    private processNotificationsAsync;
    /**
     * Stop aggregation and flush any pending notifications
     * @param aggregationId The aggregation session to stop
     */
    stopAggregation(aggregationId: string): void;
    /**
     * Check if an aggregation is currently active
     * @param aggregationId The aggregation session to check
     */
    isAggregating(aggregationId: string): boolean;
    private cleanupAggregation;
    private aggregateNotifications;
    private getGroupingKey;
    private normalizeMessage;
    private buildAggregatedMessage;
    private showAggregatedNotification;
}
