import { IExtensionApi } from '../../types/IExtensionContext';
import { IProfile } from '../../types/IState';
interface IActiveInstallation {
    installId: string;
    archiveId: string;
    archivePath: string;
    modId: string;
    gameId: string;
    callback: (error: Error, id: string) => void;
    startTime: number;
    baseName: string;
}
import { IInstallResult } from './types/IInstallResult';
import { IFileListItem } from './types/IMod';
import { InstallFunc } from './types/InstallFunc';
import { TestSupported } from './types/TestSupported';
import Bluebird from 'bluebird';
export declare class ArchiveBrokenError extends Error {
    constructor(message: string);
}
export declare const INI_TWEAKS_PATH = "Ini Tweaks";
export declare const INSTALL_ACTION = "Update current profile";
export declare const REPLACE_ACTION = "Update all profiles";
export declare const VARIANT_ACTION = "Add Variant";
/**
 * central class for the installation process
 *
 * @class InstallManager
 */
declare class InstallManager {
    private mInstallers;
    private mGetInstallPath;
    private mDependencyInstalls;
    private mDependencyDownloadsLimit;
    private mDependencyInstallsLimit;
    private mPendingInstalls;
    private mActiveInstalls;
    private mMainInstallsLimit;
    constructor(api: IExtensionApi, installPath: (gameId: string) => string);
    /**
     * Get information about all currently active installations
     */
    getActiveInstallations(): IActiveInstallation[];
    /**
     * Get information about a specific active installation
     */
    getActiveInstallation(installId: string): IActiveInstallation | undefined;
    /**
     * Check if an installation is currently active
     */
    isInstallationActive(installId: string): boolean;
    /**
     * Get count of active installations
     */
    getActiveInstallationCount(): number;
    /**
     * Debug method: Get details about active installations
     */
    debugActiveInstalls(): any[];
    /**
     * Force cleanup of stuck installations (for debugging)
     * @param maxAgeMinutes - installations older than this will be force-cleaned
     */
    forceCleanupStuckInstalls(api: IExtensionApi, maxAgeMinutes?: number): number;
    /**
     * add an installer extension
     *
     * @param {number} priority priority of the installer. the lower the number the higher
     *                          the priority, so at priority 0 the extension would always be
     *                          the first to be queried
     * @param {TestSupported} testSupported
     * @param {IInstall} install
     *
     * @memberOf InstallManager
     */
    addInstaller(id: string, priority: number, testSupported: TestSupported, install: InstallFunc): void;
    simulate(api: IExtensionApi, gameId: string, archivePath: string, tempPath: string, extractList?: IFileListItem[], unattended?: boolean, installChoices?: any, progress?: (entries: string[], percent: number) => void): Bluebird<IInstallResult>;
    /**
     * start installing a mod.
     *
     * @param {string} archiveId id of the download. may be null if the download isn't
     *                           in our download archive
     * @param {string} archivePath path to the archive file
     * @param {string} downloadGameId gameId of the download as reported by the downloader
     * @param {IExtensionApi} extension api
     * @param {*} info existing information about the mod (i.e. stuff retrieved
     *                 from the download page)
     * @param {boolean} processDependencies if true, test if the installed mod is dependent
     *                                      of others and tries to install those too
     * @param {boolean} enable if true, enable the mod after installation
     * @param {Function} callback callback once this is finished
     * @param {boolean} forceGameId set if the user has already been queried which game
     *                              to install the mod for
     * @param {IFileListItem[]} fileList if set, the listed files (and only those) get extracted
     *                                   directly, ignoring any installer scripts
     * @param {boolean} unattended if set and there is an option preset, the installation
     *                             will happen automatically without user interaction
     * @param {boolean} forceInstaller if set, this should be the id of an installer
     *                                 (registerInstaller) to be used, instead of going through
     *                                 the auto-detection.
     */
    install(archiveId: string, archivePath: string, downloadGameIds: string[], api: IExtensionApi, info: any, processDependencies: boolean, enable: boolean, callback: (error: Error, id: string) => void, forceGameId?: string, fileList?: IFileListItem[], unattended?: boolean, forceInstaller?: string, allowAutoDeploy?: boolean): void;
    installDependencies(api: IExtensionApi, profile: IProfile, gameId: string, modId: string, allowAutoDeploy: boolean): Bluebird<void>;
    installRecommendations(api: IExtensionApi, profile: IProfile, gameId: string, modId: string): Bluebird<void>;
    private augmentRules;
    private withDependenciesContext;
    private hasFuzzyReference;
    private setModSize;
    /**
     * Clean up pending and active installations for a specific source mod
     */
    private cleanupPendingInstalls;
    /**
     * Queue an installation to run asynchronously without blocking downloads.
     * Installers are gated by phase so higher phases won't start until lower phases finish.
     */
    private queueInstallation;
    private startQueuedInstallation;
    private mInstallPhaseState;
    private ensurePhaseState;
    private scheduleDeployOnPhaseSettled;
    private markPhaseDownloadsFinished;
    private startPendingForPhase;
    private maybeAdvancePhase;
    /**
     * when installing a mod from a dependency rule we store the id of the installed mod
     * in the rule for quicker and consistent matching but if - at a later time - we
     * install those same dependencies again we have to unset those ids, otherwise the
     * dependence installs would fail.
     */
    private repairRules;
    private isBrowserAssistantError;
    private isCritical;
    /**
     * find the right installer for the specified archive, then install
     */
    private installInner;
    private determineModType;
    private queryContinue;
    private queryPassword;
    private validateInstructions;
    private transformInstructions;
    private reportUnsupported;
    private processMKDir;
    private processGenerateFiles;
    private processSubmodule;
    private processAttribute;
    private processEnableAllPlugins;
    private processSetModType;
    private processRule;
    private processIniEdits;
    private modTypeExists;
    private processInstructions;
    private checkModVariantsExist;
    private checkModNameExists;
    private findPreviousVersionMod;
    private queryIgnoreDependent;
    private queryProfileCount;
    private userVersionChoice;
    private queryUserReplace;
    private getInstaller;
    /**
     * determine the mod name (on disk) from the archive path
     * TODO: this currently simply uses the archive name which should be fine
     *   for downloads from nexus but in general we need the path to encode the
     *   mod, the specific "component" and the version. And then we need to avoid
     *   collisions.
     *   Finally, the way I know users they will want to customize this.
     *
     * @param {string} archiveName
     * @param {*} info
     * @returns
     */
    private deriveInstallName;
    private downloadURL;
    private downloadMatching;
    private downloadDependencyAsync;
    private applyExtraFromRule;
    private dropUnfulfilled;
    private doInstallDependenciesPhase;
    private doInstallDependencies;
    private updateModRule;
    private updateRules;
    private doInstallDependencyList;
    private showMemoDialog;
    private installDependenciesImpl;
    private installRecommendationsQueryMain;
    private installRecommendationsQuerySelect;
    private installRecommendationsImpl;
    private withInstructions;
    private installModAsync;
    /**
     * extract an archive
     *
     * @export
     * @param {string} archivePath path to the archive file
     * @param {string} destinationPath path to install to
     */
    private extractArchive;
}
export default InstallManager;
