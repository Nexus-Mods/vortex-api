import { IReference, IRule } from 'modmeta-db';
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
    attributes: {
        [id: string]: any;
    };
    rules?: IRule[];
    enabledINITweaks?: string[];
    fileOverrides?: string[];
}
export interface IModReference extends IReference {
    id?: string;
}
export interface IModRule extends IRule {
    reference: IModReference;
}
