/**
 * Interface for all Mixpanel events
 */
export interface MixpanelEvent {
    readonly eventName: string;
    readonly properties: Record<string, any>;
}
/**
 * Maps Node.js process.platform values to Mixpanel's expected OS format
 * @param platform - Node.js platform string (win32, darwin, linux, etc.)
 * @returns Mixpanel-compatible OS name (Windows, Mac OS X, Linux, etc.)
 */
export declare function mapPlatformToMixpanel(platform: string): string;
/**
 * APP EVENTS
 */
/**
 * App launched event - sent when Vortex starts up
 * @param os Operating system (Node.js platform string: win32, darwin, linux)
 * @param os_version Operating system version (e.g., "10.0.22000" for Windows 11)
 * @param architecture CPU architecture (e.g., "x64", "arm64")
 */
export declare class AppLaunchedEvent implements MixpanelEvent {
    readonly eventName = "app_launched";
    readonly properties: Record<string, any>;
    constructor(os: string, os_version?: string, architecture?: string);
}
/**
 * DNU - NEEDS TO BE FIRED BEFORE ANALYTICS ARE INITIALIZED
 * Event sent when the application is updated.
 * @param from_version Previous version
 * @param to_version New version
 * @param os Operating system (Node.js platform string: win32, darwin, linux)
 */
export declare class AppUpdatedEvent implements MixpanelEvent {
    readonly eventName = "app_updated";
    readonly properties: Record<string, any>;
    constructor(from_version: string, to_version: string, os: string);
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
 * Event sent when a collection draft is created in Vortex.
 * @param collection_name Name of the collection
 * @param game_name Name of the game
 * @param creation_method How the collection was created
 */
export declare class CollectionsDraftedEvent implements MixpanelEvent {
    readonly eventName = "collection_drafted";
    readonly properties: Record<string, any>;
    constructor(collection_name: string, game_name: string, creation_method: "from_profile" | "quick_collection" | "empty");
}
/**
 * Event sent when a new draft collection is uploaded.
 * @param collection_name Name of the collection
 * @param game_name Name of the game
 */
export declare class CollectionsDraftUploadedEvent implements MixpanelEvent {
    readonly eventName = "collection_draft_uploaded";
    readonly properties: Record<string, any>;
    constructor(collection_name: string, game_name: string);
}
/**
 * Event sent when a draft collection update is uploaded.
 * @param collection_name Name of the collection
 * @param game_name Name of the game
 */
export declare class CollectionsDraftUpdateUploadedEvent implements MixpanelEvent {
    readonly eventName = "collection_draft_updated";
    readonly properties: Record<string, any>;
    constructor(collection_name: string, game_name: string);
}
/**
 * Event sent when a collection download is clicked/initiated by the user.
 * @param collection_slug Slug of the collection
 * @param game_id ID of the game
 */
export declare class CollectionsDownloadClickedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_clicked";
    readonly properties: Record<string, any>;
    constructor(collection_slug: string, game_id: number);
}
/**
 * Event sent when a collection download is completed.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 * @param duration_ms Duration in milliseconds
 */
export declare class CollectionsDownloadCompletedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_completed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number, file_size: number, duration_ms: number);
}
/**
 * Event sent when a collection download fails.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class CollectionsDownloadFailedEvent implements MixpanelEvent {
    readonly eventName = "collections_download_failed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number, error_code: string, error_message: string);
}
/**
 * Event sent when a collection download is cancelled.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 */
export declare class CollectionsDownloadCancelledEvent implements MixpanelEvent {
    readonly eventName = "collections_download_cancelled";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number);
}
/** *
 * Event sent when a collection installation is started.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 */
export declare class CollectionsInstallationStartedEvent implements MixpanelEvent {
    readonly eventName = "collections_installation_started";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number, mod_count: number);
}
/**
 * Event sent when a collection installation is completed.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 * @param duration_ms Duration in milliseconds
 */
export declare class CollectionsInstallationCompletedEvent implements MixpanelEvent {
    readonly eventName = "collections_installation_completed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number, mod_count: number, duration_ms: number);
}
/**
 * Event sent when a collection installation fails.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class CollectionsInstallationFailedEvent implements MixpanelEvent {
    readonly eventName = "collections_installation_failed";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number, error_code: string, error_message: string);
}
/**
 * Event sent when a collection installation is cancelled.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 */
export declare class CollectionsInstallationCancelledEvent implements MixpanelEvent {
    readonly eventName = "collections_installation_cancelled";
    readonly properties: Record<string, any>;
    constructor(collection_id: string, revision_id: string, game_id: number);
}
/**
 * MOD EVENTS
 */
/**
 * Event sent when a mod download is started from the client.
 * This client-side event complements the server-side mods_download_started event
 * to enable success rate calculations by matching with _completed or _failed events.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @note "mods_download_started" event name is taken by server-side. Use "mods_download_started_client" instead.
 */
export declare class ModsDownloadStartedClientEvent implements MixpanelEvent {
    readonly eventName = "mods_download_started_client";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string);
}
/** DONE
 * Event sent when a mod download is completed.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @param file_size Size of the file
 * @param duration_ms Duration in milliseconds
 */
export declare class ModsDownloadCompletedEvent implements MixpanelEvent {
    readonly eventName = "mods_download_completed";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string, file_size: number, duration_ms: number);
}
/**
 * Event sent when mod download is cancelled.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
export declare class ModsDownloadCancelledEvent implements MixpanelEvent {
    readonly eventName = "mods_download_cancelled";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string);
}
/** DONE
 * Event sent when a mod download fails.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class ModsDownloadFailedEvent implements MixpanelEvent {
    readonly eventName = "mods_download_failed";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string, error_code: string, error_message: string);
}
/** DONE
 * Event sent when mod installation is started. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
export declare class ModsInstallationStartedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_started";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string);
}
/** DONE
 * Event sent when mod installation is completed. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @param duration_ms Duration in milliseconds
 */
export declare class ModsInstallationCompletedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_completed";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string, duration_ms: number);
}
/**
 * Event sent when mod installation is cancelled. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
export declare class ModsInstallationCancelledEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_cancelled";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string);
}
/** DONE
 * Event sent when mod installation fails. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @param error_code Error code
 * @param error_message Error message
 */
export declare class ModsInstallationFailedEvent implements MixpanelEvent {
    readonly eventName = "mods_installation_failed";
    readonly properties: Record<string, any>;
    constructor(mod_id: string, file_id: string, game_id: number, mod_uid: string, file_uid: string, error_code: string, error_message: string);
}
/**
 * HEALTH CHECK EVENTS
 */
/**
 * Event sent when a user provides feedback on a health check requirement.
 * @param feedback_type Whether the feedback was positive or negative
 * @param game_id Game domain ID
 * @param mod_id Nexus mod ID of the missing requirement
 * @param required_by_mod_id Nexus mod ID of the mod that requires the dependency
 * @param feedback_reasons Array of reason keys (only for negative feedback)
 */
export declare class HealthCheckFeedbackEvent implements MixpanelEvent {
    readonly eventName = "health_check_feedback";
    readonly properties: Record<string, any>;
    constructor(feedback_type: "positive" | "negative", game_id: string, mod_id: number, required_by_mod_id: number, feedback_reasons?: string[]);
}
