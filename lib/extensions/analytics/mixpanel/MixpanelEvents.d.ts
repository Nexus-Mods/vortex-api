/**
 * Interface for all Mixpanel events
 */
export interface MixpanelEvent {
    readonly eventName: string;
    readonly properties: Record<string, any>;
}
/**
 * APP EVENTS
 */
/**
 * App launched event - sent when Vortex starts up
 * @param os Operating system
 */
export declare class AppLaunchedEvent implements MixpanelEvent {
    readonly eventName = "app_launched";
    readonly properties: Record<string, any>;
    constructor(os: string);
}
/**
 * DNU - NEEDS TO BE FIRED BEFORE ANALYTICS ARE INITIALIZED
 * Event sent when the application is updated.
 * @param from_version Previous version
 * @param to_version New version
 * @param os Operating system
 */
export declare class AppUpdatedEvent implements MixpanelEvent {
    readonly eventName = "app_updated";
    readonly properties: Record<string, any>;
    constructor(from_version: string, to_version: string, os: string);
}
/**
 * Event sent when the application crashes.
 * @param os Operating system
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class AppCrashedEvent implements MixpanelEvent {
    readonly eventName = "app_crashed";
    readonly properties: Record<string, any>;
    constructor(os: string, error_code: string, error_message: string);
}
/**
 * Event sent when an upsell prompt is clicked in the application.
 */
export declare class AppUpsellClickedEvent implements MixpanelEvent {
    readonly eventName = "app_upsell_clicked";
    readonly properties: Record<string, any>;
    constructor();
}
/**
 * COLLECTION EVENTS
 */
/**
 * (DO NOT USE) This event is currently being tracked SERVER side
 *
 * Event sent when a collection download is started.
 * @param collection_id ID of the collection
 * @param mod_count Number of mods in the collection
 * @param game_id ID of the game
 * @param revision_id ID of the revision
 */
export declare class CollectionsDownloadStartedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_started";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, mod_count: number, game_id: string, revision_id: string);
}
/**
 * Event sent when a collection download is completed.
 * @param collection_id ID of the collection
 * @param mod_count Number of mods in the collection
 * @param duration_ms Duration in milliseconds
 * @param game_id ID of the game
 * @param revision_id ID of the revision
 */
export declare class CollectionsDownloadCompletedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_completed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, mod_count: number, duration_ms: number, game_id: string, revision_id: string);
}
/**
 * Event sent when a collection download fails.
 * @param collection_id ID of the collection
 * @param error_code Error code
 * @param error_message Error message
 * @param game_id ID of the game
 * @param revision_id ID of the revision
 */
export declare class CollectionsDownloadFailedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_failed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, error_code: string, error_message: string, game_id: string, revision_id: string);
}
/**
 * MOD EVENTS
 */
/**
 * (DO NOT USE) This event is currently being tracked SERVER side
 *
 * Event sent when a mod download is started.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 */
export declare class ModsDownloadStartedEvent implements MixpanelEvent {
    readonly eventName = "mods_download_started";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string);
}
/** DONE
 * Event sent when a mod download is completed.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 * @param file_size Size of the file
 * @param duration_ms Duration in milliseconds
 */
export declare class ModsDownloadCompletedEvent implements MixpanelEvent {
    readonly eventName = "mods_download_completed";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string, file_size: number, duration_ms: number);
}
/**
 * Event sent when mod download is cancelled.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 */
export declare class ModsDownloadCancelledEvent implements MixpanelEvent {
    readonly eventName = "mods_download_cancelled";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string);
}
/** DONE
 * Event sent when a mod download fails.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class ModsDownloadFailedEvent implements MixpanelEvent {
    readonly eventName = "mods_download_failed";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string, error_code: string, error_message: string);
}
/** DONE
 * Event sent when mod installation is started.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 */
export declare class ModsInstallationStartedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_started";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string);
}
/** DONE
 * Event sent when mod installation is completed.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 * @param duration_ms Duration in milliseconds
 */
export declare class ModsInstallationCompletedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_completed";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string, duration_ms: number);
}
/**
 * Event sent when mod installation is cancelled.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 */
export declare class ModsInstallationCancelledEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_cancelled";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string);
}
/** DONE
 * Event sent when mod installation fails.
 * @param file_id ID of the file
 * @param mod_id ID of the mod
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class ModsInstallationFailedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_failed";
    readonly properties: Record<string, any>;
    constructor(file_id: string, mod_id: string, game_id: string, error_code: string, error_message: string);
}
