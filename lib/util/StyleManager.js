"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Debouncer_1 = __importDefault(require("./Debouncer"));
const fs = __importStar(require("./fs"));
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const log_1 = require("./log");
const util_1 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const electron_1 = require("electron");
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
const url_1 = require("url");
function asarUnpacked(input) {
    return input.replace('app.asar' + path.sep, 'app.asar.unpacked' + path.sep);
}
function cachePath() {
    return path.join((0, getVortexPath_1.default)('temp'), 'css-cache.json');
}
if (electron_1.ipcMain !== undefined) {
    let initial = true;
    const renderSASSCB = (evt, stylesheets, requested) => {
        let cache;
        if (requested) {
            try {
                // TODO: evil sync read
                cache = JSON.parse(fs.readFileSync(cachePath(), { encoding: 'utf8' }));
                if (_.isEqual(cache.stylesheets, stylesheets)) {
                    evt.sender.send('__renderSASS_result', null, cache.css);
                    (0, log_1.log)('debug', 'using cached css', { cached: cache.stylesheets, stylesheets });
                    if (requested && initial) {
                        initial = false;
                        renderSASSCB(evt, stylesheets, false);
                    }
                    return;
                }
                (0, log_1.log)('debug', 'updating css cache', {
                    cached: cache.stylesheets,
                    current: stylesheets,
                });
            }
            catch (err) {
                (0, log_1.log)('debug', 'no css cache', { cachePath: cachePath() });
            }
        }
        else {
            (0, log_1.log)('debug', 'updating css cache, just to be sure');
        }
        let themePath = '.';
        let sassIndex = stylesheets.map(name => {
            const imp = `@import "${name.replace(/\\/g, '\\\\')}";`;
            // slightly hackish but I think this should work.
            // imports ending in .scss are extensions,
            // imports with no path are the core files.
            // what's left is the imports for the theme.
            // In addition, the style.scss from the theme should be the very last
            // import so even without the condition, the very last item should have
            // the correct path
            if ((path.dirname(name) !== '.') && (path.extname(name) !== '.scss')) {
                themePath = path.dirname(name);
            }
            if (path.extname(name) === '.scss') {
                // nest every extension-provided rule in '*, #added_by_<extname>'
                // this way it's easier to find out where a rule comes from
                // that breaks the layout.
                // the #added_by_ selector should never match anything, * matches
                // everything without modifying the specificity of the selector, so
                // this change shouldn't affect how the rule works
                const extname = (0, util_1.sanitizeCSSId)(path.basename(name, '.scss'));
                return `*, #added_by_${extname} { ${imp} }\n`;
            }
            else {
                return imp + '\n';
            }
        }).join('\n');
        sassIndex = `$theme-path: "${(0, url_1.pathToFileURL)(themePath)}";\n` + sassIndex;
        // development builds are always versioned as 0.0.1
        const isDevel = (process.env.NODE_ENV === 'development');
        const assetsPath = path.join((0, getVortexPath_1.default)('assets_unpacked'), 'css');
        const modulesPath = (0, getVortexPath_1.default)('modules_unpacked');
        const replyEvent = requested
            ? '__renderSASS_result'
            : '__renderSASS_update';
        /*
        process.env.SASS_BINARY_PATH = path.resolve(getVortexPath('modules'), 'node-sass', 'bin',
          `${process.platform}-${process.arch}-${process.versions.modules}`, 'node-sass.node');
        */
        const sass = require('sass');
        setTimeout(() => {
            const started = Date.now();
            sass.render({
                outFile: path.join(assetsPath, 'theme.css'),
                includePaths: [assetsPath, modulesPath],
                data: sassIndex,
                outputStyle: isDevel ? 'expanded' : 'compressed',
            }, (err, output) => {
                var _a;
                (0, log_1.log)('info', 'sass compiled in', `${Date.now() - started}ms`);
                if ((_a = evt.sender) === null || _a === void 0 ? void 0 : _a.isDestroyed()) {
                    return;
                }
                if (err !== null) {
                    // the error has its own class and its message is missing relevant information
                    evt.sender.send(replyEvent, new Error(err.formatted));
                }
                else {
                    // remove utf8-bom if it's there
                    const css = _.isEqual(Array.from(output.css.slice(0, 3)), [0xEF, 0xBB, 0xBF])
                        ? output.css.slice(3)
                        : output.css;
                    evt.sender.send(replyEvent, null, css.toString());
                    fs.writeFileAsync(cachePath(), JSON.stringify({
                        stylesheets,
                        css: css.toString(),
                    }), { encoding: 'utf8' })
                        .catch(() => null);
                }
            });
        }, requested ? 0 : 2000);
    };
    electron_1.ipcMain.on('__renderSASS', (evt, stylesheets) => renderSASSCB(evt, stylesheets, true));
}
class StyleManager {
    constructor(api) {
        this.mAutoRefresh = false;
        this.mSetQueue = bluebird_1.default.resolve();
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
        }, StyleManager.RENDER_DELAY, true);
        electron_1.ipcRenderer.on('__renderSASS_result', (evt, err, css) => {
            (0, log_1.log)('info', 'css result', { err: err === null || err === void 0 ? void 0 : err.message });
            if (this.mExpectingResult === undefined) {
                (0, log_1.log)('warn', 'unexpected sass render result');
                return;
            }
            if (err !== null) {
                this.mExpectingResult.reject(err);
            }
            else {
                this.mExpectingResult.resolve(css);
            }
            this.mExpectingResult = undefined;
        });
        electron_1.ipcRenderer.on('__renderSASS_update', (evt, err, css) => {
            (0, log_1.log)('info', 'css updated', { err: err === null || err === void 0 ? void 0 : err.message });
            if (err !== null) {
                // logging as warning because we don't know if this will be a problem
                // but it may lead to a messed up look
                (0, log_1.log)('warn', 'css render failed', err.message);
            }
            else {
                this.applyCSS(css);
            }
        });
    }
    startAutoUpdate() {
        this.mAutoRefresh = true;
    }
    clearCache() {
        this.mSetQueue = this.mSetQueue.then(() => fs.removeAsync(cachePath())
            .catch({ code: 'ENOENT' }, () => null)
            .catch(err => (0, log_1.log)('error', 'failed to remove css cache', { error: err.message })));
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
        (0, log_1.log)('debug', 'setting stylesheet', { key, filePath });
        try {
            const statProm = () => (filePath === undefined)
                ? bluebird_1.default.resolve(undefined)
                : (path.extname(filePath) === '')
                    ? bluebird_1.default.any([fs.statAsync(filePath + '.scss'), fs.statAsync(filePath + '.css')])
                        .then(() => null)
                    : fs.statAsync(filePath).then(() => null);
            this.mSetQueue = this.mSetQueue
                .then(() => statProm())
                .then(() => {
                const idx = this.mPartials.findIndex(partial => partial.key === key);
                if (idx !== -1) {
                    this.mPartials[idx] = { key, file: filePath };
                }
                else {
                    this.mPartials.splice(this.mPartials.length - 2, 0, { key, file: filePath });
                }
                if (this.mAutoRefresh) {
                    this.mRenderDebouncer.schedule(undefined);
                }
            })
                .catch(err => {
                (0, log_1.log)('warn', 'stylesheet can\'t be read', err.message);
            });
        }
        catch (err) {
            (0, log_1.log)('warn', 'stylesheet can\'t be read', { key, path: filePath, err: err.message });
        }
    }
    renderNow() {
        this.mSetQueue = this.mSetQueue.then(() => new bluebird_1.default((resolve, reject) => {
            this.mRenderDebouncer.runNow(err => {
                if (err !== null) {
                    return reject(err);
                }
                (0, log_1.log)('debug', 'style rendered successfully');
                resolve();
            });
        }));
        return this.mSetQueue;
    }
    render() {
        const stylesheets = this.mPartials
            .filter(partial => partial.file !== undefined)
            .map(partial => path.isAbsolute(partial.file)
            ? asarUnpacked(partial.file)
            : partial.file);
        return new bluebird_1.default((resolve, reject) => {
            this.mExpectingResult = { resolve, reject };
            electron_1.ipcRenderer.send('__renderSASS', stylesheets);
        })
            .then((css) => {
            this.applyCSS(css);
        });
    }
    applyCSS(css) {
        const style = document.createElement('style');
        style.id = 'theme';
        style.type = 'text/css';
        style.innerHTML = css;
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
    }
}
StyleManager.RENDER_DELAY = 200;
exports.default = StyleManager;
