import { IReference, IRule } from 'modmeta-db';
export { IReference, IRule };
export declare type ModState = 'downloading' | 'downloaded' | 'installing' | 'installed';
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
    rules?: IRule[];
    enabledINITweaks?: string[];
    fileOverrides?: string[];
}
export interface IModReference extends IReference {
    id?: string;
    description?: string;
}
/**
 * a mod (requires/recommends) rule can provide a list of files to control how the referenced
 * mod is to be installed if it gets installed as a dependency.
 *
 * At this time Vortex does not verify that an already-installed mod contains these files
 */
export interface IFileListItem {
    path: string;
    md5: string;
}
export interface IModRule extends IRule {
    reference: IModReference;
    fileList?: IFileListItem[];
}
