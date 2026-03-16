import type { VortexPaths } from "@vortex/shared/ipc";
export type AppPath = keyof VortexPaths;
declare function getVortexPath(id: AppPath): string;
export default getVortexPath;
