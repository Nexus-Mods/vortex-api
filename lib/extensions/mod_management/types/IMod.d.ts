import { IReference, IRule } from 'modmeta-db';
export { IReference, IRule };
export type ModState = 'downloading' | 'downloaded' | 'installing' | 'installed';
/**
 * represents a mod in all states (being downloaded, downloaded, installed)
 *
 * @interface IMod
 */
export interface IMod {
    id: string;
    state: ModState;
    type: string;
    archiveId?: string;
    installationPath: string;
    attributes?: {
        [id: string]: any;
    };
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
