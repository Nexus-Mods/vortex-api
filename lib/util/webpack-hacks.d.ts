export declare function webpackRequireHack(id: string): ReturnType<NodeJS.Require>;
/**
 * Get the real Node.js module resolution paths for a given directory.
 * Inside a webpack bundle, `module.paths` and `__dirname` are synthetic values
 * that don't reflect the actual filesystem. This uses the real Node.js Module
 * API to compute correct resolution paths.
 */
export declare function getRealNodeModulePaths(baseDir: string): string[];
