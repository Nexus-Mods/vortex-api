import { IModRepoId } from '../../mod_management/types/IMod';
export declare function makeFileUID(repoInfo: IModRepoId): string;
export declare function makeModUID(repoInfo: IModRepoId): string;
export declare function makeModAndFileUIDs(gameId: string, modId: string, fileId: string): {
    modUID: string;
    fileUID: string;
};
