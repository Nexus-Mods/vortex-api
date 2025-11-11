import { IReference, IRule } from 'modmeta-db';
export { IReference, IRule };
export type ModState = 'downloading' | 'downloaded' | 'installing' | 'installed';
/**
 * Attributes specific to Nexus Mods Collections (when IMod.type === "collection")
 */
export interface ICollectionAttributes {
    collectionId: number;
    collectionSlug: string;
    revisionId: number;
    revisionNumber: number;
    downloadGame: string;
    customFileName?: string;
    shortDescription?: string;
    pictureUrl?: string;
    uploader?: string;
    uploaderId?: number;
    uploaderAvatar?: string;
    uploadedTimestamp?: number;
    updatedTimestamp?: number;
    rating?: {
        average: number;
        total: number;
    };
    recommendNewProfile?: boolean;
    installInstructions?: string;
    bugMessage?: string;
    modSize?: number;
}
/**
 * Common attributes shared by all mods
 */
export interface ICommonModAttributes {
    author?: string;
    version?: string;
    modName?: string;
    modVersion?: string;
    name?: string;
    description?: string;
    shortDescription?: string;
    source?: string;
    fileName?: string;
    fileSize?: number;
    fileMD5?: string;
    logicalFileName?: string;
    additionalLogicalFileNames?: string[];
    customFileName?: string;
    downloadGame?: string;
    game?: string[];
    fileType?: string;
    modId?: number;
    fileId?: number;
    category?: string | number;
    homepage?: string;
    pictureUrl?: string;
    uploader?: string;
    uploaderUrl?: string;
    uploaderId?: number;
    uploadedTimestamp?: number;
    updatedTimestamp?: number;
    installTime?: string;
    installedAsDependency?: boolean;
    referenceTag?: string;
    installerChoices?: any;
    patches?: any;
    fileList?: IFileListItem[];
    newestVersion?: string;
    newestFileId?: number;
    allowRating?: boolean;
    endorsement?: string;
    endorsed?: string;
    scriptExtender?: boolean;
    is4GBPatcher?: boolean;
    isPrimary?: number | boolean;
    modSize?: number;
    bugMessage?: string;
}
/**
 * Comprehensive type for mod attributes that can be either common mod attributes,
 * collection-specific attributes, or any custom attributes
 */
export type IModAttributes = Partial<ICommonModAttributes & ICollectionAttributes> & {
    [key: string]: any;
};
/**
 * represents a mod in all states (being downloaded, downloaded, installed)
 *
 * @interface IMod
 */
export interface IMod {
    id: string;
    state: ModState;
    /**
     * mod type (empty string is the default)
     * this type is primarily used to determine how and where to deploy the mod, it
     * could be "enb" for example to tell vortex the mod needs to be installed to the game
     * directory. Different games will have different types.
     *
     * Special types:
     * - "" (empty string): Default mod type
     * - "collection": Nexus Mods collection
     * - "dinput": Direct input mod (e.g., 4GB patch)
     * - "enb": ENB graphics mod
     * - game-specific types defined by game extensions
     */
    type: string;
    archiveId?: string;
    installationPath: string;
    /**
     * dictionary of extended information fields
     *
     * Type-safe access to common attributes and collection attributes:
     * - Use ICommonModAttributes for standard mod properties (author, version, etc.)
     * - Use ICollectionAttributes when type === "collection"
     * - Index signature allows any custom attributes for game-specific extensions
     */
    attributes?: IModAttributes;
    rules?: IModRule[];
    enabledINITweaks?: string[];
    fileOverrides?: string[];
}
export interface IModRepoId {
    gameId?: string;
    modId?: string;
    fileId: string;
}
export interface IModReference extends IReference {
    id?: string;
    idHint?: string;
    md5Hint?: string;
    tag?: string;
    archiveId?: string;
    repo?: {
        repository: string;
        campaign?: string;
    } & IModRepoId;
    description?: string;
    instructions?: string;
    installerChoices?: any;
    fileList?: IFileListItem[];
    patches?: any;
}
/**
 * a mod (requires/recommends) rule can provide a list of files to control how the referenced
 * mod is to be installed if it gets installed as a dependency.
 *
 * At this time Vortex does not verify whether an already-installed mod contains these files,
 * meaning the requires rule will not show red if these files get removed after installation
 * of the dependency.
 */
export interface IFileListItem {
    path: string;
    md5?: string;
    xxh64?: string;
}
export interface IDownloadHint {
    mode: 'direct' | 'browse' | 'manual';
    url?: string;
    instructions?: string;
}
export interface IModRule extends IRule {
    reference: IModReference;
    fileList?: IFileListItem[];
    installerChoices?: any;
    downloadHint?: IDownloadHint;
    extra?: {
        [key: string]: any;
    };
    ignored?: boolean;
}
