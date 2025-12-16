import { IExtensionApi } from "../types/IExtensionContext";
import Promise from "bluebird";
declare class StyleManager {
    private static RENDER_DELAY;
    private mPartials;
    private mRenderDebouncer;
    private mExpectingResult;
    private mAutoRefresh;
    private mSetQueue;
    constructor(api: IExtensionApi);
    startAutoUpdate(): void;
    clearCache(): void;
    /**
     * insert or replace a sheet.
     * By default, the sheets "variables", "details" and "style" are intended to customize the
     * look of the application.
     * - "variables" is a set of variables representing colors, sizes and
     *   margins that will be used throughout the application.
     * - "details" applies these variables to different generic controls (like tabs, lists, ...)
     * - "style" is where you should customize individual controls with css rules
     *
     * If your extension sets a sheet that didn't exist before then that sheet will
     * remain with the style and not be touched by anyone else (unless you have a name collision).
     *
     * new sheets will be inserted before the "style" sheet but after everything else. This allows
     * themes to affect extension styles
     *
     * @param {string} key identify the key to set. If this is an existing sheet, that sheet will be
     *                     replaced
     * @param {string} filePath path of the corresponding stylesheet file
     */
    setSheet(key: string, filePath: string): void;
    renderNow(): Promise<void>;
    private render;
    private applyCSS;
}
export default StyleManager;
