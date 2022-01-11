import { ICollectionInfo, IRevision, SourceType, UpdatePolicy } from '@nexusmods/nexus-api';
import * as types from '../../../types/api';
import { ILoadOrder } from '../types/types';
export interface ICollectionLoadOrder {
    loadOrder: ILoadOrder;
}
export interface ICollectionSourceInfo {
    type: SourceType;
    url?: string;
    instructions?: string;
    modId?: number;
    fileId?: number;
    updatePolicy?: UpdatePolicy;
    md5?: string;
    fileSize?: number;
    logicalFilename?: string;
    fileExpression?: string;
}
export interface ICollectionModDetails {
    type?: string;
}
export interface ICollectionMod {
    name: string;
    version: string;
    optional: boolean;
    domainName: string;
    source: ICollectionSourceInfo;
    hashes?: any;
    choices?: any;
    instructions?: string;
    author?: string;
    details?: ICollectionModDetails;
}
export declare type RuleType = 'before' | 'after' | 'requires' | 'conflicts' | 'recommends' | 'provides';
export interface ICollectionModRule {
    source: types.IModReference;
    type: RuleType;
    reference: types.IModReference;
}
export interface ICollection extends Partial<ICollectionLoadOrder> {
    info: ICollectionInfo;
    mods: ICollectionMod[];
    modRules: ICollectionModRule[];
    loadOrder: ILoadOrder;
}
export interface IGameSpecificInterfaceProps {
    t: types.TFunction;
    collection: types.IMod;
    revisionInfo: IRevision;
}
export interface ICollectionsGameSupportEntry {
    gameId: string;
    generator: (state: types.IState, gameId: string, stagingPath: string, modIds: string[], mods: {
        [modId: string]: types.IMod;
    }) => Promise<any>;
    parser: (api: types.IExtensionApi, gameId: string, collection: ICollection) => Promise<void>;
    interface: (props: IGameSpecificInterfaceProps) => JSX.Element;
}
export declare class CollectionGenerateError extends Error {
    constructor(why: string);
}
export declare class CollectionParseError extends Error {
    private mCollection;
    constructor(collection: ICollection, why: string);
    get collectionName(): string;
}
