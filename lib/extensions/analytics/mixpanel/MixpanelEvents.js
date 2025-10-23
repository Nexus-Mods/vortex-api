"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModsInstallationFailedEvent = exports.ModsInstallationCancelledEvent = exports.ModsInstallationCompletedEvent = exports.ModsInstallationStartedEvent = exports.ModsDownloadFailedEvent = exports.ModsDownloadCancelledEvent = exports.ModsDownloadCompletedEvent = exports.ModsDownloadStartedEvent = exports.CollectionsInstallationCancelledEvent = exports.CollectionsInstallationFailedEvent = exports.CollectionsInstallationCompletedEvent = exports.CollectionsInstallationStartedEvent = exports.CollectionsDownloadCancelledEvent = exports.CollectionsDownloadFailedEvent = exports.CollectionsDownloadCompletedEvent = exports.CollectionsDownloadClickedEvent = exports.AppUpsellClickedEvent = exports.AppCrashedEvent = exports.AppUpdatedEvent = exports.AppStartGameEvent = exports.AppLaunchedEvent = void 0;
exports.mapPlatformToMixpanel = mapPlatformToMixpanel;
/**
 * Maps Node.js process.platform values to Mixpanel's expected OS format
 * @param platform - Node.js platform string (win32, darwin, linux, etc.)
 * @returns Mixpanel-compatible OS name (Windows, Mac OS X, Linux, etc.)
 */
function mapPlatformToMixpanel(platform) {
    switch (platform) {
        case 'win32':
            return 'Windows';
        case 'darwin':
            return 'Mac OS X';
        case 'linux':
            return 'Linux';
        default:
            return platform;
    }
}
/**
 * APP EVENTS
 */
/**
 * App launched event - sent when Vortex starts up
 * @param os Operating system (Node.js platform string: win32, darwin, linux)
 * @param os_version Operating system version (e.g., "10.0.22000" for Windows 11)
 * @param architecture CPU architecture (e.g., "x64", "arm64")
 */
class AppLaunchedEvent {
    constructor(os, os_version, architecture) {
        this.eventName = 'app_launched';
        this.properties = {
            $os: mapPlatformToMixpanel(os), // Override auto-detected OS for accuracy
            $os_version: os_version, // Not auto-tracked by mixpanel-browser
            architecture, // Custom property for CPU architecture
        };
    }
}
exports.AppLaunchedEvent = AppLaunchedEvent;
/**
 * App start game event - sent when Vortex launches a game
 * @param game_id ID of the game being launched
 * @param enabled_mods_count Number of enabled mods for the game
 * @param enabled_collections_count Number of enabled collections for the game
 */
class AppStartGameEvent {
    constructor(game_id, enabled_mods_count, enabled_collections_count) {
        this.eventName = 'app_start_game';
        this.properties = {
            game_id: game_id,
            enabled_mods_count: enabled_mods_count,
            enabled_collections_count: enabled_collections_count,
        };
    }
}
exports.AppStartGameEvent = AppStartGameEvent;
/**
 * DNU - NEEDS TO BE FIRED BEFORE ANALYTICS ARE INITIALIZED
 * Event sent when the application is updated.
 * @param from_version Previous version
 * @param to_version New version
 * @param os Operating system (Node.js platform string: win32, darwin, linux)
 */
class AppUpdatedEvent {
    constructor(from_version, to_version, os) {
        this.eventName = 'app_updated';
        this.properties = { from_version, to_version, $os: mapPlatformToMixpanel(os) };
    }
}
exports.AppUpdatedEvent = AppUpdatedEvent;
/**
 * Event sent when the application crashes.
 * @param os Operating system (Node.js platform string: win32, darwin, linux)
 * @param error_code Error code
 * @param error_message Error message
 */
class AppCrashedEvent {
    constructor(os, error_code, error_message) {
        this.eventName = 'app_crashed';
        this.properties = { $os: mapPlatformToMixpanel(os), error_code, error_message };
    }
}
exports.AppCrashedEvent = AppCrashedEvent;
/**
 * Event sent when an upsell prompt is clicked in the application.
 */
class AppUpsellClickedEvent {
    constructor() {
        this.eventName = 'app_upsell_clicked';
        this.properties = {};
    }
}
exports.AppUpsellClickedEvent = AppUpsellClickedEvent;
/**
 * COLLECTION EVENTS
 */
/* COLLECTION DOWNLOAD */
/**
 * Event sent when a collection download is clicked/initiated by the user.
 * @param collection_slug Slug of the collection
 * @param game_id ID of the game
 */
class CollectionsDownloadClickedEvent {
    constructor(collection_slug, game_id) {
        this.eventName = 'collections_download_clicked';
        this.properties = { collection_slug, game_id };
    }
}
exports.CollectionsDownloadClickedEvent = CollectionsDownloadClickedEvent;
/**
 * Event sent when a collection download is completed.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 * @param duration_ms Duration in milliseconds
 */
class CollectionsDownloadCompletedEvent {
    constructor(collection_id, revision_id, game_id, file_size, duration_ms) {
        this.eventName = 'collections_download_completed';
        this.properties = { collection_id, revision_id, game_id, file_size, duration_ms };
    }
}
exports.CollectionsDownloadCompletedEvent = CollectionsDownloadCompletedEvent;
/**
 * Event sent when a collection download fails.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
class CollectionsDownloadFailedEvent {
    constructor(collection_id, revision_id, game_id, error_code, error_message) {
        this.eventName = 'collections_download_failed';
        this.properties = { collection_id, revision_id, game_id, error_code, error_message };
    }
}
exports.CollectionsDownloadFailedEvent = CollectionsDownloadFailedEvent;
/**
 * Event sent when a collection download is cancelled.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 */
class CollectionsDownloadCancelledEvent {
    constructor(collection_id, revision_id, game_id) {
        this.eventName = 'collections_download_cancelled';
        this.properties = { collection_id, revision_id, game_id };
    }
}
exports.CollectionsDownloadCancelledEvent = CollectionsDownloadCancelledEvent;
/* COLLECTION INSTALLATION */
/** *
 * Event sent when a collection installation is started.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 */
class CollectionsInstallationStartedEvent {
    constructor(collection_id, revision_id, game_id, mod_count) {
        this.eventName = 'collections_installation_started';
        this.properties = { collection_id, revision_id, game_id, mod_count };
    }
}
exports.CollectionsInstallationStartedEvent = CollectionsInstallationStartedEvent;
/**
 * Event sent when a collection installation is completed.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param mod_count Number of mods in the collection
 * @param duration_ms Duration in milliseconds
 */
class CollectionsInstallationCompletedEvent {
    constructor(collection_id, revision_id, game_id, mod_count, duration_ms) {
        this.eventName = 'collections_installation_completed';
        this.properties = { collection_id, revision_id, game_id, mod_count, duration_ms };
    }
}
exports.CollectionsInstallationCompletedEvent = CollectionsInstallationCompletedEvent;
/**
 * Event sent when a collection installation fails.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 * @param error_code Error code
 * @param error_message Error message
 */
class CollectionsInstallationFailedEvent {
    constructor(collection_id, revision_id, game_id, error_code, error_message) {
        this.eventName = 'collections_installation_failed';
        this.properties = { collection_id, revision_id, game_id, error_code, error_message };
    }
}
exports.CollectionsInstallationFailedEvent = CollectionsInstallationFailedEvent;
/**
 * Event sent when a collection installation is cancelled.
 * @param collection_id ID of the collection
 * @param revision_id ID of the revision
 * @param game_id ID of the game
 */
class CollectionsInstallationCancelledEvent {
    constructor(collection_id, revision_id, game_id) {
        this.eventName = 'collections_installation_cancelled';
        this.properties = { collection_id, revision_id, game_id };
    }
}
exports.CollectionsInstallationCancelledEvent = CollectionsInstallationCancelledEvent;
/**
 * MOD EVENTS
 */
/**
 * (DO NOT USE) This event is currently being tracked SERVER side
 *
 * Event sent when a mod download is started.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
class ModsDownloadStartedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid) {
        this.eventName = 'mods_download_started';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid };
    }
}
exports.ModsDownloadStartedEvent = ModsDownloadStartedEvent;
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
class ModsDownloadCompletedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid, file_size, duration_ms) {
        this.eventName = 'mods_download_completed';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid, file_size, duration_ms };
    }
}
exports.ModsDownloadCompletedEvent = ModsDownloadCompletedEvent;
/**
 * Event sent when mod download is cancelled.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
class ModsDownloadCancelledEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid) {
        this.eventName = 'mods_download_cancelled';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid };
    }
}
exports.ModsDownloadCancelledEvent = ModsDownloadCancelledEvent;
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
class ModsDownloadFailedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid, error_code, error_message) {
        this.eventName = 'mods_download_failed';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid, error_code, error_message };
    }
}
exports.ModsDownloadFailedEvent = ModsDownloadFailedEvent;
/** DONE
 * Event sent when mod installation is started. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
class ModsInstallationStartedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid) {
        this.eventName = 'mods_installation_started';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid };
    }
}
exports.ModsInstallationStartedEvent = ModsInstallationStartedEvent;
/** DONE
 * Event sent when mod installation is completed. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 * @param duration_ms Duration in milliseconds
 */
class ModsInstallationCompletedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid, duration_ms) {
        this.eventName = 'mods_installation_completed';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid, duration_ms };
    }
}
exports.ModsInstallationCompletedEvent = ModsInstallationCompletedEvent;
/**
 * Event sent when mod installation is cancelled. Not sent for collection bundle/manifest mod.
 * @param mod_id ID of the mod
 * @param file_id ID of the file
 * @param game_id ID of the game
 * @param mod_uid UID of the mod
 * @param file_uid UID of the file
 */
class ModsInstallationCancelledEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid) {
        this.eventName = 'mods_installation_cancelled';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid };
    }
}
exports.ModsInstallationCancelledEvent = ModsInstallationCancelledEvent;
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
class ModsInstallationFailedEvent {
    constructor(mod_id, file_id, game_id, mod_uid, file_uid, error_code, error_message) {
        this.eventName = 'mods_installation_failed';
        this.properties = { mod_id, file_id, game_id, mod_uid, file_uid, error_code, error_message };
    }
}
exports.ModsInstallationFailedEvent = ModsInstallationFailedEvent;
