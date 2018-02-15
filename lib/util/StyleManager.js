"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debouncer_1 = require("./Debouncer");
const Promise = require("bluebird");
const electron_1 = require("electron");
const _ = require("lodash");
const sass = require("node-sass");
const path = require("path");
const app = electron_1.app || electron_1.remote.app;
function asarUnpacked(input) {
    return input.replace('app.asar' + path.sep, 'app.asar.unpacked' + path.sep);
}
class StyleManager {
    constructor(api) {
        this.mPartials = [
            { key: '__functions', file: 'functions' },
            { key: '__variables', file: 'variables' },
            { key: 'variables', file: undefined },
            { key: '__details', file: 'details' },
            { key: 'details', file: undefined },
            { key: '__thirdparty', file: 'thirdparty' },
            { key: '__desktop', file: 'desktop' },
            { key: '__style', file: 'style' },
            { key: 'style', file: undefined },
        ];
        this.mRenderDebouncer = new Debouncer_1.default(() => {
            return this.render()
                .catch(err => {
                api.showErrorNotification('Style failed to compile', err, {
                    allowReport: false,
                });
            });
        }, StyleManager.RENDER_DELAY);
    }
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
    setSheet(key, filePath) {
        const idx = this.mPartials.findIndex(partial => partial.key === key);
        if (idx !== -1) {
            this.mPartials[idx] = { key, file: filePath };
        }
        else {
            this.mPartials.splice(this.mPartials.length - 2, 0, { key, file: filePath });
        }
        this.mRenderDebouncer.schedule(undefined);
    }
    renderNow() {
        return new Promise((resolve, reject) => {
            this.mRenderDebouncer.runNow(err => {
                if (err !== null) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
    render() {
        const stylesheets = this.mPartials
            .filter(partial => partial.file !== undefined)
            .map(partial => path.isAbsolute(partial.file)
            ? asarUnpacked(partial.file)
            : partial.file);
        const sassIndex = stylesheets.map(name => `@import "${name.replace(/\\/g, '\\\\')}";\n`).join('\n');
        // development builds are always versioned as 0.0.1
        const isDevel = app.getVersion() === '0.0.1';
        const basePath = asarUnpacked(__dirname);
        const assetsPath = path.resolve(basePath, '..', 'assets', 'css');
        const modulesPath = isDevel
            ? path.resolve(basePath, '..', '..', 'node_modules')
            : path.resolve(basePath, '..', 'node_modules');
        return new Promise((resolve, reject) => {
            sass.render({
                outFile: path.join(assetsPath, 'theme.css'),
                includePaths: [assetsPath, asarUnpacked(modulesPath)],
                data: sassIndex,
                outputStyle: isDevel ? 'expanded' : 'compressed',
            }, (err, output) => {
                if (err !== null) {
                    // the error has its own class and it's message is missing relevant information
                    reject(new Error(err.formatted));
                }
                else {
                    // remove utf8-bom if it's there
                    const css = _.isEqual(Array.from(output.css.slice(0, 3)), [0xEF, 0xBB, 0xBF])
                        ? output.css.slice(3)
                        : output.css;
                    const style = document.createElement('style');
                    style.id = 'theme';
                    style.type = 'text/css';
                    style.innerHTML = css.toString();
                    const head = document.getElementsByTagName('head')[0];
                    let found = false;
                    for (let i = 0; i < head.children.length && !found; ++i) {
                        if (head.children.item(i).id === 'theme') {
                            head.replaceChild(style, head.children.item(i));
                            found = true;
                        }
                    }
                    if (!found) {
                        head.appendChild(style);
                    }
                    resolve();
                }
            });
        });
    }
}
StyleManager.RENDER_DELAY = 200;
exports.default = StyleManager;
