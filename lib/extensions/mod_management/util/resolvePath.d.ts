import { IStatePaths } from '../../../types/IState';
export declare type PathKey = 'base' | 'download' | 'install';
export declare const pathDefaults: {
    base: string;
    download: string;
    install: string;
};
declare function resolvePath(key: PathKey, paths: {
    [gameId: string]: IStatePaths;
}, gameMode: string): string;
export default resolvePath;
