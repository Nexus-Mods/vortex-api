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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCancelLoginImpl = onCancelLoginImpl;
exports.bringToFront = bringToFront;
exports.requestLogin = requestLogin;
exports.oauthCallback = oauthCallback;
exports.ensureLoggedIn = ensureLoggedIn;
exports.startDownload = startDownload;
exports.getInfo = getInfo;
exports.getInfoGraphQL = getInfoGraphQL;
exports.getCollectionInfo = getCollectionInfo;
exports.processErrorMessage = processErrorMessage;
exports.resolveGraphError = resolveGraphError;
exports.endorseDirectImpl = endorseDirectImpl;
exports.endorseThing = endorseThing;
exports.refreshEndorsements = refreshEndorsements;
exports.checkForCollectionUpdates = checkForCollectionUpdates;
exports.checkModVersionsImpl = checkModVersionsImpl;
exports.transformUserInfoFromApi = transformUserInfoFromApi;
exports.getOAuthTokenFromState = getOAuthTokenFromState;
exports.updateToken = updateToken;
exports.updateKey = updateKey;
exports.retrieveNexusGames = retrieveNexusGames;
exports.nexusGames = nexusGames;
exports.nexusGamesProm = nexusGamesProm;
const nexus_api_1 = require("@nexusmods/nexus-api");
const UIDs_1 = require("./util/UIDs");
const bluebird_1 = __importDefault(require("bluebird"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
const actions_1 = require("../../actions");
const CustomErrors_1 = require("../../util/CustomErrors");
const errorHandling_1 = require("../../util/errorHandling");
const fs = __importStar(require("../../util/fs"));
const getVortexPath_1 = __importDefault(require("../../util/getVortexPath"));
const github_1 = require("../../util/github");
const lazyRequire_1 = __importDefault(require("../../util/lazyRequire"));
const log_1 = require("../../util/log");
const message_1 = require("../../util/message");
const network_1 = require("../../util/network");
const opn_1 = __importDefault(require("../../util/opn"));
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const DownloadManager_1 = require("../download_management/DownloadManager");
const constants_1 = require("../gamemode_management/constants");
const selectors_2 = require("../gamemode_management/selectors");
const modName_1 = __importDefault(require("../mod_management/util/modName"));
const persistent_1 = require("./actions/persistent");
const session_1 = require("./actions/session");
const constants_2 = require("./constants");
const NXMUrl_1 = __importDefault(require("./NXMUrl"));
const selectors_3 = require("./selectors");
const checkModsVersion_1 = require("./util/checkModsVersion");
const convertGameId_1 = require("./util/convertGameId");
const endorseMod_1 = require("./util/endorseMod");
const graphQueries_1 = require("./util/graphQueries");
const oauth_1 = __importDefault(require("./util/oauth"));
const IValidateKeyData_1 = require("./types/IValidateKeyData");
const remote = (0, lazyRequire_1.default)(() => require('@electron/remote'));
const UPDATE_CHECK_DELAY = 60 * 60 * 1000;
const GAMES_JSON_URL = 'https://data.nexusmods.com/file/nexus-data/games.json';
let cancelLogin;
function onCancelLoginImpl(api) {
    if (cancelLogin !== undefined) {
        try {
            cancelLogin();
        }
        catch (err) {
            // the only time we ever see this happen is a case where the websocket connection
            // wasn't established yet so the cancelation failed because it wasn't necessary.
            (0, log_1.log)('info', 'login not canceled', err.message);
        }
    }
    api.store.dispatch((0, session_1.setLoginId)(undefined));
    api.events.emit('did-login', new CustomErrors_1.UserCanceled());
}
function bringToFront() {
    // if window is snapped in windows (aero snap), bringing the window to front
    // will unsnap it and it will be moved/resized to where it was before snapping.
    // This is quite irritating so this will store the (snapped) window position
    // and return to it after bringing the window to front.
    // This will cause a short "flicker" if the window was snapped and it will
    // still unsnap the window as far as windows is concerned.
    const window = remote.getCurrentWindow();
    const [x, y] = window.getPosition();
    const [w, h] = window.getSize();
    window.setAlwaysOnTop(true);
    window.show();
    window.setAlwaysOnTop(false);
    setTimeout(() => {
        window.setPosition(x, y);
        window.setSize(w, h);
    }, 100);
}
function genId() {
    try {
        const uuid = require('uuid');
        return uuid.v4();
    }
    catch (err) {
        // odd, still unidentified bugs where bundled modules fail to load.
        (0, log_1.log)('warn', 'failed to import uuid module', err.message);
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return Array.apply(null, Array(10))
            .map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
        // the probability that this fails for another user at exactly the same time
        // and they both get the same random number is practically 0
    }
}
/*
function legacyConnect(api: IExtensionApi, callback: (err: Error) => void) {
  const loginMessage: INexusLoginMessage = {
    id: genId(),
    appid: 'Vortex',
    protocol: 2,
  };

  let keyReceived: boolean = false;
  let connectionAlive: boolean = true;
  let error: Error;
  let attempts = 5;


  const connection = new WebSocket(`wss://sso.${NEXUS_DOMAIN}`)
    .on('open', () => {
      cancelLogin = () => {
        connection.close();
      };
      connection.send(JSON.stringify(loginMessage), err => {
        api.store.dispatch(setLoginId(loginMessage.id));
        if (err) {
          api.showErrorNotification('Failed to start login', err);
          connection.close();
        }
      });
      // open the authorization page - but not on reconnects!
      if (loginMessage.token === undefined) {
        opn(getPageURL(loginMessage.id)).catch(err => undefined);
      }
      const keepAlive = setInterval(() => {
        if (!connectionAlive) {
          connection.terminate();
          clearInterval(keepAlive);
        } else if (connection.readyState === WebSocket.OPEN) {
          connection.ping();
        } else {
          clearInterval(keepAlive);
        }
      }, 30000);
    })
    .on('close', (code: number, reason: string) => {
      if (!keyReceived) {
        if (code === 1005) {
          api.store.dispatch(setLoginId(undefined));
          cancelLogin = undefined;
          bringToFront();
          callback(new UserCanceled());
        } else if (attempts-- > 0) {
          // automatic reconnect
          legacyConnect(api, callback);
        } else {
          cancelLogin = undefined;
          bringToFront();
          api.store.dispatch(setLoginId('__failed'));
          api.store.dispatch(setLoginError((error !== undefined)
            ? prettifyNodeErrorMessage(error).message
            : 'Log-in connection closed prematurely'));

          let err = error;
          if (err === undefined) {
            err = new ProcessCanceled(
              `Log-in connection closed prematurely (Code ${code})`);
          }
          callback(err);
        }
      }
    })
    .on('pong', () => {
      connectionAlive = true;
      attempts = 5;
    })
    .on('message', data => {
      try {
        const response = JSON.parse(data.toString());

        if (response.success) {
          if (response.data.connection_token !== undefined) {
            loginMessage.token = response.data.connection_token;
          } else if (response.data.api_key !== undefined) {
            connection.close();
            api.store.dispatch(setLoginId(undefined));
            api.store.dispatch(setUserAPIKey(response.data.api_key));
            bringToFront();
            keyReceived = true;
            callback(null);
          }
        } else {
          const err = new Error(response.error);
          callback(err);
        }
      } catch (err) {
        if (err.message.startsWith('Unexpected token')) {
          err.message = 'Failed to parse: ' + data.toString();
        }
        callback(err);
      }
    })
    .on('error', err => {
      // Cloudflare will serve 503 service unavailable errors when/if
      //  it is unable to reach the SSO server.
      error = err.message.startsWith('Unexpected server response')
        ? new ServiceTemporarilyUnavailable('Login')
        : err;

      connection.close();
    });
}
*/
const oauth = new oauth_1.default({
    baseUrl: constants_2.OAUTH_URL,
    clientId: constants_2.OAUTH_CLIENT_ID,
    redirectUrl: constants_2.OAUTH_REDIRECT_URL, // Keep for backward compatibility
    getRedirectUrl: constants_2.getOAuthRedirectUrl, // Use the new function
});
function requestLogin(nexus, api, callback) {
    const stackErr = new Error();
    return oauth.sendRequest((err, token) => __awaiter(this, void 0, void 0, function* () {
        // received reply from site for this state
        bringToFront();
        api.store.dispatch((0, session_1.setLoginId)(undefined));
        // set state to undefined so that we can close the modal?
        api.store.dispatch((0, actions_1.setDialogVisible)(undefined));
        api.store.dispatch((0, session_1.setOauthPending)(undefined));
        if (err !== null) {
            return callback(err);
        }
        const tokenDecoded = jsonwebtoken_1.default.decode(token.access_token);
        //log('info', 'JWT Token', { token: token.access_token });
        api.store.dispatch((0, actions_1.setOAuthCredentials)(token.access_token, token.refresh_token, tokenDecoded.fingerprint));
        callback(null);
    }), (url) => {
        // url has been generated by sentRequest
        // open browser with oauth url
        (0, opn_1.default)(url).catch(() => null);
        // set state to url
        api.store.dispatch((0, session_1.setOauthPending)(url));
    })
        .catch(err => {
        err.stack = stackErr.stack;
        callback(err);
    });
}
function oauthCallback(api, code, state) {
    // the result of this is reported to the callback from requestLogin;
    return oauth.receiveCode(code, state);
}
function ensureLoggedIn(api) {
    if (!(0, selectors_3.isLoggedIn)(api.getState())) {
        return new bluebird_1.default((resolve, reject) => {
            api.events.on('did-login', (err) => {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
            api.store.dispatch((0, actions_1.setDialogVisible)('login-dialog'));
        });
    }
    else {
        return bluebird_1.default.resolve();
    }
}
function startDownload(api, nexus, nxmurl, redownload, fileName, allowInstall, handleErrors = true, referenceTag) {
    let url;
    (0, log_1.log)('debug', 'start download', { fileName, referenceTag });
    try {
        url = new NXMUrl_1.default(nxmurl);
    }
    catch (err) {
        return bluebird_1.default.reject(err);
    }
    if ((['vortex', 'site'].includes(url.gameId)) && url.view) {
        api.events.emit('show-extension-page', url.modId);
        return bluebird_1.default.reject(new DownloadManager_1.DownloadIsHTML(nxmurl));
    }
    if (!['mod', 'collection'].includes(url.type)) {
        return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Not a download url'));
    }
    return (url.type === 'mod')
        ? startDownloadMod(api, nexus, nxmurl, url, redownload, fileName, allowInstall, handleErrors, referenceTag)
        : startDownloadCollection(api, nexus, nxmurl, url, handleErrors, referenceTag);
}
function startDownloadCollection(api, nexus, urlStr, url, handleErrors = true, referenceTag) {
    const state = api.getState();
    const games = (0, selectors_2.knownGames)(state);
    const gameId = (0, convertGameId_1.convertNXMIdReverse)(games, url.gameId);
    const pageId = (0, convertGameId_1.nexusGameId)((0, selectors_2.gameById)(state, gameId), url.gameId);
    let revisionInfo;
    const revNumber = url.revisionNumber >= 0 ? url.revisionNumber : undefined;
    return bluebird_1.default.resolve(nexus.getCollectionRevisionGraph(graphQueries_1.FULL_REVISION_INFO, url.collectionSlug, revNumber))
        .then(revision => {
        revisionInfo = revision;
        api.sendNotification({
            id: revision.id.toString(),
            type: 'global',
            message: 'Downloading Collection',
            displayMS: 40000,
        });
        return nexus.getCollectionDownloadLink(revision.downloadLink);
    })
        .then(downloadUrls => {
        return (0, util_1.toPromise)(cb => {
            var _a, _b;
            return api.events.emit('start-download', (downloadUrls !== null && downloadUrls !== void 0 ? downloadUrls : []).map(iter => iter.URI), {
                game: gameId,
                source: 'nexus',
                name: (_a = revisionInfo.collection) === null || _a === void 0 ? void 0 : _a.name,
                referenceTag,
                nexus: {
                    ids: {
                        gameId: pageId,
                        collectionId: revisionInfo.collectionId,
                        revisionId: revisionInfo.id,
                        collectionSlug: url.collectionSlug,
                        revisionNumber: (_b = revisionInfo.revisionNumber) !== null && _b !== void 0 ? _b : url.revisionNumber,
                    },
                    revisionInfo,
                },
            }, revisionInfo.file_name, cb, undefined, { allowInstall: false });
        })
            .catch(err => bluebird_1.default.reject((0, errorHandling_1.contextify)(err)));
    })
        .tap(dlId => api.events.emit('did-download-collection', dlId))
        .catch(err => {
        var _a;
        err['collectionSlug'] = url.collectionSlug;
        err['revisionNumber'] = (_a = revisionInfo === null || revisionInfo === void 0 ? void 0 : revisionInfo.revisionNumber) !== null && _a !== void 0 ? _a : url.revisionNumber;
        if (!handleErrors) {
            return bluebird_1.default.reject(err);
        }
        if (err.code === 'NOT_FOUND') {
            api.showErrorNotification('Failed to download collection', 'The collection was not found. This usually happens when you try to download '
                + 'an unpublished collection.', { allowReport: false });
        }
        else if (!(err instanceof CustomErrors_1.UserCanceled)) {
            api.showErrorNotification('Failed to download collection', err, {
                allowReport: !(err instanceof CustomErrors_1.ProcessCanceled),
            });
        }
        return null;
    });
}
function getInfo(nexus, domain, modId, fileId) {
    return bluebird_1.default.resolve((() => __awaiter(this, void 0, void 0, function* () {
        try {
            // Run both API calls concurrently for better performance
            const [modInfo, fileInfo] = yield Promise.all([
                nexus.getModInfo(modId, domain),
                nexus.getFileInfo(modId, fileId, domain)
            ]);
            return { modInfo, fileInfo };
        }
        catch (err) {
            err['attachLogOnReport'] = true;
            throw err;
        }
    }))());
}
// GraphQL-based version of getInfo function
function getInfoGraphQL(nexus, domain, modId, fileId) {
    // Define the GraphQL query for file information
    const fileQuery = {
        categoryId: true,
        count: true,
        date: true,
        description: true,
        fileId: true,
        mod: {
            author: true,
            category: true,
            game: {
                id: true,
                domainName: true,
            },
            gameId: true,
            id: true,
            modCategory: {
                id: true,
                name: true,
            },
            pictureUrl: true,
            status: true,
            uid: true,
        },
        modId: true,
        name: true,
        primary: true,
        size: true,
        uid: true,
        uri: true,
        version: true,
    };
    // const query: Partial<IModFileQuery> = {
    //   name: true,
    //   categoryId: true,
    //   description: true,
    //   size: true,
    //   version: true,
    //   game: {
    //     id: true,
    //     domainName: true,
    //   },
    //   uid: true,
    //   uri: true,
    //   mod: {
    //     author: true,
    //     modCategory: {
    //       id: true,
    //     },
    //   },
    // } as any;
    return new bluebird_1.default((resolve, reject) => {
        nexus.modFilesByUid(fileQuery, [(0, UIDs_1.makeFileUID)({ fileId: fileId.toString(), modId: modId.toString(), gameId: domain })])
            .then(fileResult => {
            const fileInfo = transformGraphQLFileToIFileInfo(fileResult[0]);
            const modInfo = transformGraphQLModToIModInfo(fileResult[0]);
            return resolve({ modInfo, fileInfo });
        })
            .catch(err => {
            err['attachLogOnReport'] = true;
            return reject(err);
        });
    });
}
// Helper function to transform GraphQL mod data to IModInfo format
function transformGraphQLModToIModInfo(graphqlFile) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const mod = graphqlFile.mod;
    return {
        mod_id: graphqlFile.modId || (mod === null || mod === void 0 ? void 0 : mod.id),
        name: mod === null || mod === void 0 ? void 0 : mod.name,
        summary: mod === null || mod === void 0 ? void 0 : mod.summary,
        description: mod === null || mod === void 0 ? void 0 : mod.description,
        picture_url: mod === null || mod === void 0 ? void 0 : mod.pictureUrl,
        version: mod === null || mod === void 0 ? void 0 : mod.version,
        author: mod === null || mod === void 0 ? void 0 : mod.author,
        uploaded_by: mod === null || mod === void 0 ? void 0 : mod.author,
        uploaded_users_profile_url: ((_a = mod === null || mod === void 0 ? void 0 : mod.user) === null || _a === void 0 ? void 0 : _a.memberId) ? `https://www.nexusmods.com/users/${mod.user.memberId}` : '',
        allow_rating: true, // Default value, might need to be fetched separately
        category_id: ((_b = mod === null || mod === void 0 ? void 0 : mod.modCategory) === null || _b === void 0 ? void 0 : _b.id) || ((_c = mod === null || mod === void 0 ? void 0 : mod.category) === null || _c === void 0 ? void 0 : _c.id),
        user: {
            member_id: (_d = mod === null || mod === void 0 ? void 0 : mod.user) === null || _d === void 0 ? void 0 : _d.memberId,
            name: (_e = mod === null || mod === void 0 ? void 0 : mod.user) === null || _e === void 0 ? void 0 : _e.name,
            avatar: (_f = mod === null || mod === void 0 ? void 0 : mod.user) === null || _f === void 0 ? void 0 : _f.avatar,
        },
        uploaded_timestamp: mod === null || mod === void 0 ? void 0 : mod.uploadedTimestamp,
        updated_timestamp: mod === null || mod === void 0 ? void 0 : mod.updatedTimestamp,
        game_id: (mod === null || mod === void 0 ? void 0 : mod.gameId) || ((_g = mod === null || mod === void 0 ? void 0 : mod.game) === null || _g === void 0 ? void 0 : _g.id),
        domain_name: (mod === null || mod === void 0 ? void 0 : mod.domainName) || ((_h = mod === null || mod === void 0 ? void 0 : mod.game) === null || _h === void 0 ? void 0 : _h.domainName),
        contains_adult_content: (mod === null || mod === void 0 ? void 0 : mod.adultContent) || false,
        status: (mod === null || mod === void 0 ? void 0 : mod.status) || 'published',
        available: (mod === null || mod === void 0 ? void 0 : mod.available) !== false,
        mod_downloads: (mod === null || mod === void 0 ? void 0 : mod.modDownloads) || 0,
        mod_unique_downloads: (mod === null || mod === void 0 ? void 0 : mod.modUniqueDownloads) || 0,
        uid: mod === null || mod === void 0 ? void 0 : mod.uid,
    };
}
// Helper function to transform GraphQL file data to IFileInfo format
function transformGraphQLFileToIFileInfo(graphqlFile) {
    var _a, _b, _c;
    return {
        id: [graphqlFile.fileId || parseInt((_a = graphqlFile.uid) === null || _a === void 0 ? void 0 : _a.split(':')[2], 10) || 0],
        file_id: graphqlFile.fileId || parseInt((_b = graphqlFile.uid) === null || _b === void 0 ? void 0 : _b.split(':')[2], 10) || 0,
        name: graphqlFile.name,
        version: graphqlFile.version,
        category_name: graphqlFile.categoryName,
        category_id: graphqlFile.categoryId || 1,
        is_primary: graphqlFile.primary || false,
        size: graphqlFile.sizeInBytes || graphqlFile.size || 0,
        size_kb: Math.round((graphqlFile.sizeInBytes || graphqlFile.size || 0) / 1024),
        uploaded_timestamp: graphqlFile.uploadedTimestamp || graphqlFile.date,
        changelog_html: graphqlFile.changelogHtml || '',
        file_name: graphqlFile.name,
        description: graphqlFile.description || '',
        content_preview_link: '', // Default value
        external_virus_scan_url: '', // Default value
        mod_version: ((_c = graphqlFile.mod) === null || _c === void 0 ? void 0 : _c.version) || graphqlFile.version,
    };
}
function getCollectionInfo(nexus, collectionSlug, revisionNumber, revisionId) {
    const query = {
        adultContent: true,
        id: true,
        collection: {
            viewerIsBlocked: true,
            category: {
                id: true,
                name: true,
            },
            id: true,
            slug: true,
            createdAt: true,
            endorsements: true,
            name: true,
            summary: true,
            description: true,
            user: {
                name: true,
                memberId: true,
                avatar: true,
            },
            tileImage: {
                url: true,
            },
        },
        createdAt: true,
        updatedAt: true,
        installationInfo: true,
        revisionNumber: true,
        rating: {
            average: true,
            total: true,
        },
    };
    if (revisionNumber <= 0) {
        revisionNumber = undefined;
    }
    return bluebird_1.default.resolve(nexus.getCollectionRevisionGraph(query, collectionSlug, revisionNumber))
        .then(revision => ({ revisionInfo: revision }))
        .catch(err => {
        err['collectionSlug'] = collectionSlug;
        err['revisionNumber'] = revisionNumber;
        err['revisionId'] = revisionId;
        return bluebird_1.default.reject(err);
    });
}
function startDownloadMod(api, nexus, urlStr, url, redownload, fileName, allowInstall, handleErrors = true, referenceTag) {
    (0, log_1.log)('info', 'start download mod', { urlStr, allowInstall });
    let state = api.getState();
    const games = (0, selectors_2.knownGames)(state);
    const gameId = (0, convertGameId_1.convertNXMIdReverse)(games, url.gameId);
    const pageId = (0, convertGameId_1.nexusGameId)((0, selectors_2.gameById)(state, gameId), url.gameId);
    let nexusFileInfo;
    return getInfoGraphQL(nexus, pageId, url.modId, url.fileId)
        .then(({ modInfo, fileInfo }) => {
        nexusFileInfo = fileInfo;
        return new bluebird_1.default((resolve, reject) => {
            api.events.emit('start-download', [urlStr], {
                game: gameId,
                source: 'nexus',
                name: fileInfo.name,
                referenceTag,
                nexus: {
                    ids: { gameId: pageId, modId: url.modId, fileId: url.fileId },
                    modInfo,
                    fileInfo,
                },
            }, fileName !== null && fileName !== void 0 ? fileName : nexusFileInfo.file_name, (err, downloadId) => ((0, util_1.truthy)(err)
                ? reject((0, errorHandling_1.contextify)(err))
                : resolve(downloadId)), redownload, { allowInstall });
        });
    })
        .tap(() => {
        api.sendNotification({
            id: url.fileId.toString(),
            type: 'global',
            title: 'Downloading from Nexus',
            message: nexusFileInfo.name,
            displayMS: 4000,
            noToast: true,
        });
    })
        .then(downloadId => {
        var _a;
        if (gameId === constants_1.SITE_ID) {
            return downloadId;
        }
        state = api.getState();
        const download = state.persistent.downloads.files[downloadId];
        // might be paused at this point
        if (!((_a = state.settings.automation) === null || _a === void 0 ? void 0 : _a.install) && ((download === null || download === void 0 ? void 0 : download.state) === 'finished')) {
            api.sendNotification({
                id: `ready-to-install-${downloadId}`,
                type: 'success',
                title: 'Download finished',
                group: 'download-finished',
                message: nexusFileInfo.name,
                actions: [
                    {
                        title: 'Install All', action: dismiss => {
                            api.events.emit('start-install-download', downloadId, undefined, (err, id) => {
                                if (err) {
                                    processInstallError(api, err, downloadId, fileName !== null && fileName !== void 0 ? fileName : nexusFileInfo.file_name);
                                }
                            });
                            dismiss();
                        },
                    },
                ],
            });
        }
        return downloadId;
    })
        .catch((err) => {
        var _a, _b, _c;
        if (!handleErrors) {
            return bluebird_1.default.reject(err);
        }
        const t = api.translate;
        // Handle "UNKNOWN" error code with errno 22 (EINVAL) as a non-fatal, warning.
        if (err.code === 'UNKNOWN' && err.errno === 22) {
            api.sendNotification({
                id: (_c = (_b = (_a = url.fileId) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : 'unknown-download-error',
                type: 'warning',
                title: 'Download failed',
                message: t('The operation completed successfully, but the file could not be processed. '
                    + 'This may be due to a temporary issue or a problem with the downloaded file. Please '
                    + 'try again or check the file integrity.'),
                localize: {
                    message: false,
                },
            });
        }
        else if (err.message === 'Provided key and expire time isn\'t correct for this user/file.') {
            const userName = (0, storeHelper_1.getSafe)(state, ['persistent', 'nexus', 'userInfo', 'name'], undefined);
            api.sendNotification({
                id: url.fileId.toString(),
                type: 'warning',
                title: 'Download failed',
                message: userName === undefined
                    ? t('You need to be logged in to Nexus Mods.')
                    : t('The link was not created for this account ({{ userName }}). You have to be logged '
                        + 'into nexusmods.com with the same account that you use in Vortex.', {
                        replace: {
                            userName,
                        },
                    }),
                localize: {
                    message: false,
                },
            });
        }
        else if (err instanceof nexus_api_1.RateLimitError) {
            api.sendNotification({
                id: 'rate-limit-exceeded',
                type: 'warning',
                title: 'Rate-limit exceeded',
                message: 'You wont be able to use network features until the next full hour.',
            });
        }
        else if (err instanceof nexus_api_1.NexusError) {
            const detail = processErrorMessage(err);
            let allowReport = detail.Servermessage === undefined;
            if (detail.noReport) {
                allowReport = false;
                delete detail.noReport;
            }
            (0, message_1.showError)(api.store.dispatch, 'Download failed', detail, { allowReport });
        }
        else if (err.statusCode >= 400) {
            api.showErrorNotification('Download failed', err, { allowReport: false });
        }
        else if (err instanceof CustomErrors_1.HTTPError) {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'This may be a temporary issue, please try again later',
            }, { allowReport: false });
        }
        else if (err instanceof nexus_api_1.TimeoutError) {
            api.showErrorNotification('Download failed', err, { allowReport: false });
        }
        else if (err instanceof CustomErrors_1.ProcessCanceled) {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'This may be a temporary issue, please try again later',
            }, { allowReport: false });
        }
        else if ((err.message.indexOf('DECRYPTION_FAILED_OR_BAD_RECORD_MAC') !== -1)
            || (err.message.indexOf('WRONG_VERSION_NUMBER') !== -1)
            || (err.message.indexOf('BAD_SIGNATURE') !== -1)
            || (err.message.indexOf('TLSV1_ALERT_ACCESS_DENIED') !== -1)) {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'This may be a temporary issue, please try again later',
            }, { allowReport: false });
        }
        else if (err instanceof CustomErrors_1.TemporaryError) {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'This may be a temporary issue, please try again later',
            }, { allowReport: false });
        }
        else if (err instanceof DownloadManager_1.AlreadyDownloaded) {
            return err.downloadId;
        }
        else if (err instanceof CustomErrors_1.UserCanceled) {
            // nop
        }
        else if (err.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'Certificate validation failed',
            }, { allowReport: false });
        }
        else if (IGNORE_ERRORS.includes(err['code'])) {
            api.showErrorNotification('Download failed', {
                error: err,
                message: 'This may be a temporary issue, please try again later',
            }, { allowReport: false });
        }
        else {
            const allowReport = (err['nativeCode'] != null) || ([225].indexOf(err['nativeCode']) === -1);
            api.showErrorNotification('Download failed', err, { allowReport });
        }
        (0, log_1.log)('warn', 'failed to get mod info', { err: util.inspect(err) });
        return null;
    });
}
function expectedErrorMessage(code) {
    switch (code) {
        case 'TOO_SOON_AFTER_DOWNLOAD': return 'You have to wait 15 minutes before endorsing a mod.';
        case 'NOT_DOWNLOADED_MOD': return 'You have not downloaded this mod (with this account).';
        case 'API_UNREACHABLE': return 'The server API is currently not reachable, please try again later';
        default: return undefined;
    }
}
function processErrorMessage(err) {
    const errorMessage = typeof (err) === 'string' ? err : err.message;
    if (err.statusCode === undefined) {
        if (errorMessage
            && ((errorMessage.indexOf('APIKEY') !== -1)
                || (errorMessage.indexOf('API Key') !== -1))) {
            return { message: 'You are not logged in to Nexus Mods!', noReport: true };
        }
        else {
            const res = { message: errorMessage };
            if (err.stack !== undefined) {
                res.stack = err.stack;
            }
            return res;
        }
    }
    else if ((err.statusCode >= 400) && (err.statusCode < 500)) {
        const expected = expectedErrorMessage(err.code);
        return {
            message: expected !== null && expected !== void 0 ? expected : 'Server couldn\'t process this request.\nMaybe the locally stored '
                + 'info about the mod is wrong\nor the mod was removed from Nexus.',
            Servermessage: errorMessage,
            URL: err.request,
            fatal: errorMessage === undefined,
        };
    }
    else if ((err.statusCode >= 500) && (err.statusCode < 600)) {
        return {
            message: 'The server reported an internal error. Please try again later.',
            Servermessage: errorMessage,
            URL: err.request,
            noReport: true,
        };
    }
    else if (errorMessage.includes('unable to get local issuer certificate')) {
        return {
            message: 'Secure communication with server failed',
            Servermessage: errorMessage,
            URL: err.request,
            noReport: true,
        };
    }
    else {
        return {
            message: 'Unexpected error reported by the server',
            Servermessage: (errorMessage || '') + ' ( Status Code: ' + err.statusCode + ')',
            URL: err.request,
            stack: err.stack,
        };
    }
}
function resolveGraphError(t, isLoggedIn, err) {
    if (err.message === 'You must provide a version') {
        // is this still reported in this way?
        return t('You can\'t endorse a mod that has no version set.');
    }
    const msg = {
        NOT_DOWNLOADED_MOD: 'You have not downloaded this mod from Nexus Mods yet.',
        TOO_SOON_AFTER_DOWNLOAD: 'You have to wait {{waitingTime}} after downloading before you can endorse/rate things.',
        IS_OWN_MOD: 'You can\'t endorse your own mods.',
        IS_OWN_CONTENT: 'You can\'t endorse your own content.',
        UNAUTHORIZED: (isLoggedIn)
            ? 'You cannot interact with this collection because you have been blocked by the curator.'
            : 'You have to be logged in to vote.'
    }[err['code']];
    return msg;
}
const IGNORE_ERRORS = ['ENOENT', 'EPROTO', 'ECONNRESET', 'ECONNABORTED', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'];
function reportEndorseError(api, err, type, gameId, modId, version) {
    var _a;
    const loggedIn = (0, selectors_3.isLoggedIn)(api.getState());
    const expectedError = resolveGraphError(api.translate, loggedIn, err);
    if (expectedError !== undefined) {
        api.sendNotification({
            type: 'info',
            message: expectedError,
            replace: {
                waitingTime: type === 'mod' ? api.translate('15 minutes') : api.translate('12 hours'),
            },
        });
    }
    else if (err instanceof nexus_api_1.TimeoutError) {
        const message = `A timeout occurred trying to endorse the ${type}, please try again later.`;
        api.sendNotification({
            type: 'error',
            title: 'Timeout',
            message,
            displayMS: (0, message_1.calcDuration)(message.length),
        });
    }
    else if (IGNORE_ERRORS.includes(err['code'])
        || (err instanceof CustomErrors_1.ProcessCanceled)
        || ((_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : '').includes('getaddrinfo')) {
        api.showErrorNotification(`Endorsing ${type} failed, please try again later`, err, {
            allowReport: false,
        });
    }
    else {
        const detail = processErrorMessage(err);
        detail.Game = gameId !== null && gameId !== void 0 ? gameId : (0, selectors_1.activeGameId)(api.getState());
        if (type === 'mod') {
            detail.Mod = modId;
        }
        else {
            detail.Collection = modId;
        }
        if (version !== undefined) {
            detail.Version = version;
        }
        let allowReport = detail.Servermessage === undefined;
        if (detail.noReport) {
            allowReport = false;
            delete detail.noReport;
        }
        (0, message_1.showError)(api.store.dispatch, `An error occurred endorsing a ${type}`, detail, { allowReport });
    }
}
function endorseDirectImpl(api, nexus, gameId, nexusId, version, endorsedStatus) {
    return (0, endorseMod_1.endorseMod)(nexus, gameId, nexusId, version, endorsedStatus)
        .catch(err => {
        reportEndorseError(api, err, 'mod', gameId, nexusId, version);
        return endorsedStatus;
    });
}
function endorseThing(api, nexus, gameId, modId, endorsedStatus) {
    var _a, _b;
    const { store } = api;
    const gameMode = (0, selectors_1.activeGameId)(store.getState());
    const mod = (0, storeHelper_1.getSafe)(store.getState(), ['persistent', 'mods', gameMode, modId], undefined);
    if (mod === undefined) {
        (0, log_1.log)('warn', 'tried to endorse unknown mod', { gameId, modId });
        return;
    }
    if (((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.modId) !== undefined) {
        endorseModImpl(api, nexus, gameMode, mod, endorsedStatus);
    }
    else if (((_b = mod.attributes) === null || _b === void 0 ? void 0 : _b.collectionId) !== undefined) {
        endorseCollectionImpl(api, nexus, gameMode, mod, endorsedStatus);
    }
}
function convertCollectionEndorseStatus(input) {
    // transform collection endorsed status to match what we store for mods
    return _.capitalize(input);
}
function endorseCollectionImpl(api, nexus, gameMode, mod, endorsedStatus) {
    var _a;
    const { store } = api;
    const gameId = (_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.downloadGame;
    const nexusCollectionId = parseInt(mod.attributes.collectionId, 10);
    store.dispatch((0, actions_1.setModAttribute)(gameId, mod.id, 'endorsed', 'pending'));
    const game = (0, selectors_2.gameById)(api.store.getState(), gameId);
    (0, endorseMod_1.endorseCollection)(nexus, (0, convertGameId_1.nexusGameId)(game), nexusCollectionId, endorsedStatus)
        .then((result) => {
        store.dispatch((0, actions_1.setModAttribute)(gameMode, mod.id, 'endorsed', convertCollectionEndorseStatus(result.endorsement.status)));
    })
        .catch((err) => {
        store.dispatch((0, actions_1.setModAttribute)(gameMode, mod.id, 'endorsed', 'Undecided'));
        reportEndorseError(api, err, 'collection', gameId, nexusCollectionId);
    });
}
function endorseModImpl(api, nexus, gameMode, mod, endorsedStatus) {
    var _a;
    const { store } = api;
    const gameId = (_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.downloadGame;
    const nexusModId = parseInt(mod.attributes.modId, 10);
    const version = (0, storeHelper_1.getSafe)(mod.attributes, ['version'], undefined)
        || (0, storeHelper_1.getSafe)(mod.attributes, ['modVersion'], undefined);
    if (!(0, util_1.truthy)(version)) {
        api.sendNotification({
            type: 'info',
            message: api.translate('You can\'t endorse a mod that has no version set.'),
        });
        return;
    }
    store.dispatch((0, actions_1.setModAttribute)(gameId, mod.id, 'endorsed', 'pending'));
    const game = (0, selectors_2.gameById)(api.store.getState(), gameId);
    (0, endorseMod_1.endorseMod)(nexus, (0, convertGameId_1.nexusGameId)(game), nexusModId, version, endorsedStatus)
        .then((endorsed) => {
        store.dispatch((0, actions_1.setModAttribute)(gameMode, mod.id, 'endorsed', endorsed));
    })
        .catch((err) => {
        store.dispatch((0, actions_1.setModAttribute)(gameMode, mod.id, 'endorsed', 'Undecided'));
        reportEndorseError(api, err, 'mod', gameId, nexusModId, version);
    });
}
function processInstallError(api, error, downloadId, archiveName) {
    // This installation error handling function is intended to be used to
    //  handle installation errors that are obfuscated for some reason, and
    //  the installManager's error handling is not sufficient or is unable
    //  to relay certain pieces of information to the user.
    if (error instanceof CustomErrors_1.DataInvalid) {
        const downloadExists = api.getState().persistent.downloads.files[downloadId] !== undefined;
        if (!downloadExists) {
            error['message'] = 'Vortex attempted to install a mod archive which is no longer available '
                + 'in its internal state - this usually happens if the archive was scheduled '
                + 'to be installed but was removed before the installation was able to start.';
            error['archiveName'] = archiveName;
            api.showErrorNotification('Install Failed', error, { allowReport: false });
        }
    }
}
function nexusLink(state, mod, gameMode) {
    var _a, _b;
    const gameId = (0, convertGameId_1.nexusGameId)((0, selectors_2.gameById)(state, (0, storeHelper_1.getSafe)(mod.attributes, ['downloadGame'], undefined) || gameMode));
    if (((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.collectionSlug) !== undefined) {
        return `https://www.nexusmods.com/${gameId}/mods/${(_b = mod.attributes) === null || _b === void 0 ? void 0 : _b.collectionSlug}`;
    }
    else {
        const nexusModId = parseInt((0, storeHelper_1.getSafe)(mod.attributes, ['modId'], undefined), 10);
        return `https://www.nexusmods.com/${gameId}/mods/${nexusModId}`;
    }
}
function refreshEndorsements(store, nexus) {
    return bluebird_1.default.resolve(nexus.getEndorsements())
        .then(endorsements => {
        const endorseMap = endorsements.reduce((prev, endorsement) => {
            // can't trust anyone these days...
            if ((endorsement.domain_name === undefined)
                || (endorsement.status === undefined)
                || (endorsement.mod_id === undefined)) {
                return prev;
            }
            const gameId = (0, convertGameId_1.convertGameIdReverse)((0, selectors_2.knownGames)(store.getState()), endorsement.domain_name);
            const modId = endorsement.mod_id;
            if (prev[gameId] === undefined) {
                prev[gameId] = {};
            }
            prev[gameId][modId] = endorsement.status;
            return prev;
        }, {});
        const state = store.getState();
        Object.keys(state.session.extensions.installed).forEach(extId => {
            const modId = state.session.extensions.installed[extId].modId;
            if (modId !== undefined) {
                const endorsed = (0, storeHelper_1.getSafe)(endorseMap, [constants_1.SITE_ID, modId], 'Undecided');
                store.dispatch((0, actions_1.setExtensionEndorsed)(extId, endorsed));
            }
        });
        const allMods = state.persistent.mods;
        Object.keys(allMods).forEach(gameId => {
            Object.keys(allMods[gameId]).forEach(modId => {
                const dlGame = (0, storeHelper_1.getSafe)(allMods, [gameId, modId, 'attributes', 'downloadGame'], gameId);
                const nexModId = (0, storeHelper_1.getSafe)(allMods, [gameId, modId, 'attributes', 'modId'], undefined);
                const oldEndorsed = (0, storeHelper_1.getSafe)(allMods, [gameId, modId, 'attributes', 'endorsed'], 'Undecided');
                const endorsed = (0, storeHelper_1.getSafe)(endorseMap, [dlGame, nexModId], 'Undecided');
                if (endorsed !== oldEndorsed) {
                    store.dispatch((0, actions_1.setModAttribute)(gameId, modId, 'endorsed', endorsed));
                }
            });
        });
    });
}
function filterByUpdateList(store, nexus, gameId, input) {
    const getGameId = (mod) => (0, storeHelper_1.getSafe)(mod.attributes, ['downloadGame'], undefined) || gameId;
    // all game ids for which we have mods installed
    const gameIds = Array.from(new Set(input.map(getGameId)));
    // for each game, stores the update time of the least recently updated mod
    const minAge = input.reduce((prev, mod) => {
        const modGameId = getGameId(mod);
        const lastUpdate = (0, storeHelper_1.getSafe)(mod.attributes, ['lastUpdateTime'], undefined);
        if ((lastUpdate !== undefined)
            && ((prev[modGameId] === undefined) || (prev[modGameId] > lastUpdate))) {
            prev[modGameId] = lastUpdate;
        }
        return prev;
    }, {});
    return bluebird_1.default.reduce(gameIds, (prev, iterGameId) => 
    // minAge map may be missing certain gameIds when none of the installed mods
    //  for that gameId have the lastUpdateTime attribute. We still want to check for
    //  updates in this scenario - the lastUpdateTime attribute will be populated immediately
    //  after the update.
    (0, checkModsVersion_1.fetchRecentUpdates)(store, nexus, iterGameId, minAge[iterGameId] || 0)
        .then(entries => {
        prev[iterGameId] = entries;
        return prev;
    }), {})
        .then((updateLists) => {
        const updateMap = {};
        Object.keys(updateLists).forEach(iterGameId => {
            updateMap[iterGameId] = updateLists[iterGameId].reduce((prev, entry) => {
                prev[entry.mod_id] = Math.max(entry.latest_file_update, entry.latest_mod_activity) * 1000;
                return prev;
            }, {});
        });
        const now = Date.now();
        return input.filter(mod => {
            const modGameId = getGameId(mod);
            if (updateMap[modGameId] === undefined) {
                // the game hasn't been checked for updates for so long we can't fetch an update range
                // long enough
                return true;
            }
            const lastUpdate = (0, storeHelper_1.getSafe)(mod.attributes, ['lastUpdateTime'], 0);
            // check anything for updates that is either in the update list and has been updated as
            // well as anything that has last been checked before the range of the update list
            return (lastUpdate < (0, storeHelper_1.getSafe)(updateMap, [modGameId, mod.attributes.modId], 1))
                || ((now - lastUpdate) > 28 * checkModsVersion_1.ONE_DAY);
        });
    });
}
function checkForCollectionUpdates(store, nexus, gameId, mods) {
    const collectionIds = Object.keys(mods)
        .filter(modId => { var _a; return ((_a = mods[modId].attributes) === null || _a === void 0 ? void 0 : _a.collectionId) !== undefined; });
    return bluebird_1.default.all(collectionIds.map(modId => {
        var _a;
        const query = {
            viewerIsBlocked: true,
            revisions: {
                revisionNumber: true,
                id: true,
                revisionStatus: true,
            },
        };
        const mod = mods[modId];
        return nexus.getCollectionGraph(query, (_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.collectionSlug)
            .then(collection => {
            var _a;
            const currentRevision = collection.revisions
                .filter(rev => rev.revisionStatus === 'published')
                .sort((lhs, rhs) => rhs.revisionNumber - lhs.revisionNumber)[0];
            const batched = [(0, actions_1.setModAttribute)(gameId, modId, 'lastUpdateTime', Date.now())];
            if (((currentRevision === null || currentRevision === void 0 ? void 0 : currentRevision.id) !== ((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.revisionId))
                && ((currentRevision === null || currentRevision === void 0 ? void 0 : currentRevision.revisionNumber) !== undefined)) {
                batched.push((0, actions_1.setModAttribute)(gameId, modId, 'newestFileId', currentRevision.revisionNumber));
                batched.push((0, actions_1.setModAttribute)(gameId, modId, 'newestVersion', currentRevision.revisionNumber.toString()));
            }
            (0, util_1.batchDispatch)(store, batched);
            return undefined;
        })
            .catch(err => {
            const name = (0, modName_1.default)(mod, { version: true });
            const nameLink = `[url=${nexusLink(store.getState(), mod, gameId)}]${name}[/url]`;
            return `${nameLink}:<br/>${err.message}`;
        });
    }))
        .then(messages => ({
        errorMessages: messages,
        updatedIds: collectionIds,
    }));
}
function checkForModUpdates(store, nexus, gameId, modsList, forceFull, now) {
    return filterByUpdateList(store, nexus, gameId, modsList)
        .then((filteredMods) => checkForModUpdatesImpl(store, nexus, gameId, modsList, filteredMods, forceFull, now));
}
function checkForModUpdatesImpl(store, nexus, gameId, modsList, filteredMods, forceFull, now) {
    const filtered = new Set(filteredMods.map(mod => mod.id));
    const tStore = store;
    let pos = 0;
    const progress = () => {
        tStore.dispatch((0, actions_1.addNotification)({
            id: 'check-update-progress',
            type: 'activity',
            message: 'Checking mods for update',
            progress: (pos * 100) / filteredMods.length,
        }));
        ++pos;
    };
    progress();
    if (forceFull) {
        (0, log_1.log)('info', '[update check] forcing full update check (nexus)', { count: modsList.length });
    }
    else {
        (0, log_1.log)('info', '[update check] optimized update check (nexus)', { count: filteredMods.length, of: modsList.length });
    }
    const updatedIds = [];
    const updatesMissed = [];
    const verP = ['attributes', 'version'];
    const fileIdP = ['attributes', 'fileId'];
    const newWerP = ['attributes', 'newestVersion'];
    const newFileIdP = ['attributes', 'newestFileId'];
    return bluebird_1.default.map(modsList, (mod) => {
        if (!forceFull && !filtered.has(mod.id)) {
            store.dispatch((0, actions_1.setModAttribute)(gameId, mod.id, 'lastUpdateTime', now - 15 * checkModsVersion_1.ONE_MINUTE));
            return;
        }
        return (0, checkModsVersion_1.checkModVersion)(store, nexus, gameId, mod)
            .then(() => {
            const modNew = (0, storeHelper_1.getSafe)(store.getState(), ['persistent', 'mods', gameId, mod.id], undefined);
            const newestVerChanged = (0, storeHelper_1.getSafe)(modNew, newWerP, undefined) !== (0, storeHelper_1.getSafe)(mod, newWerP, undefined);
            const verChanged = (0, storeHelper_1.getSafe)(modNew, newWerP, undefined) !== (0, storeHelper_1.getSafe)(modNew, verP, undefined);
            const newestFileIdChanged = (0, storeHelper_1.getSafe)(modNew, newFileIdP, undefined) !== (0, storeHelper_1.getSafe)(mod, newFileIdP, undefined);
            const fileIdChanged = (0, storeHelper_1.getSafe)(modNew, newFileIdP, undefined) !== (0, storeHelper_1.getSafe)(modNew, fileIdP, undefined);
            const updateFound = (newestVerChanged && verChanged)
                || (newestFileIdChanged && fileIdChanged);
            if (updateFound) {
                updatedIds.push(mod.id);
                if ((0, util_1.truthy)(forceFull) && !filtered.has(mod.id)) {
                    (0, log_1.log)('warn', '[update check] Mod update would have been missed with regular check', {
                        modId: mod.id,
                        lastUpdateTime: (0, storeHelper_1.getSafe)(mod, ['attributes', 'lastUpdateTime'], 0),
                        'before.newestVersion': (0, storeHelper_1.getSafe)(mod, newWerP, ''),
                        'before.newestFileId': (0, storeHelper_1.getSafe)(mod, newFileIdP, ''),
                        'after.newestVersion': (0, storeHelper_1.getSafe)(modNew, newWerP, ''),
                        'after.newestFileId': (0, storeHelper_1.getSafe)(modNew, newFileIdP, ''),
                    });
                    updatesMissed.push(mod);
                }
                else {
                    (0, log_1.log)('info', '[update check] Mod update detected', {
                        modId: mod.id,
                        lastUpdateTime: (0, storeHelper_1.getSafe)(mod, ['attributes', 'lastUpdateTime'], 0),
                        'before.newestVersion': (0, storeHelper_1.getSafe)(mod, newWerP, ''),
                        'before.newestFileId': (0, storeHelper_1.getSafe)(mod, newFileIdP, ''),
                        'after.newestVersion': (0, storeHelper_1.getSafe)(modNew, newWerP, ''),
                        'after.newestFileId': (0, storeHelper_1.getSafe)(modNew, newFileIdP, ''),
                    });
                }
                store.dispatch((0, actions_1.setModAttribute)(gameId, mod.id, 'lastUpdateTime', now));
            }
        })
            .catch(nexus_api_1.TimeoutError, err => {
            const name = (0, modName_1.default)(mod, { version: true });
            return bluebird_1.default.resolve(`${name}:\nRequest timeout`);
        })
            .catch(err => {
            const detail = processErrorMessage(err);
            if (detail.fatal) {
                return bluebird_1.default.reject(detail);
            }
            if (detail.message === undefined) {
                return bluebird_1.default.resolve(undefined);
            }
            const name = (0, modName_1.default)(mod, { version: true });
            const nameLink = `[url=${nexusLink(store.getState(), mod, gameId)}]${name}[/url]`;
            return (detail.Servermessage !== undefined)
                ? `${nameLink}:<br/>${detail.message}<br/>Server said: "${detail.Servermessage}"<br/>`
                : `${nameLink}:<br/>${detail.message}`;
        })
            .finally(() => {
            progress();
        });
    }, { concurrency: 4 })
        .finally(() => {
        (0, log_1.log)('info', '[update check] done');
        tStore.dispatch((0, actions_1.dismissNotification)('check-update-progress'));
        // if forceFull is 'silent' we show no notifications
        // if (forceFull === true) {
        //   if (updatesMissed.length === 0) {
        //     tStore.dispatch(addNotification({
        //       id: 'check-update-progress',
        //       type: 'info',
        //       message: 'Full update check found no updates that the regular check didn\'t.',
        //     }));
        //   } else {
        //     tStore.dispatch(addNotification({
        //       id: 'check-update-progress',
        //       type: 'info',
        //       message:
        //         'Full update found {{count}} updates that the regular check would have missed. '
        //         + 'Please send in a feedback with your log attached to help debug the cause.',
        //       replace: {
        //         count: updatesMissed.length,
        //       },
        //     }));
        //   }
        // }
    })
        .then((messages) => ({
        errorMessages: messages,
        updatedIds,
    }));
}
function checkModVersionsImpl(store, nexus, gameId, mods, forceFull) {
    const now = Date.now();
    const modsList = Object.keys(mods)
        .map(modId => mods[modId])
        .filter(mod => (0, storeHelper_1.getSafe)(mod.attributes, ['source'], undefined) === 'nexus')
        .filter(mod => (now - ((0, storeHelper_1.getSafe)(mod.attributes, ['lastUpdateTime'], 0) || 0)) > UPDATE_CHECK_DELAY);
    (0, log_1.log)('info', '[update check] checking mods for update (nexus)', { count: modsList.length });
    const updatedIds = [];
    return refreshEndorsements(store, nexus)
        .then(() => bluebird_1.default.all([
        checkForCollectionUpdates(store, nexus, gameId, mods),
        checkForModUpdates(store, nexus, gameId, modsList, forceFull, now),
    ]))
        .then((result) => ({
        errors: [].concat(...result.map(r => r.errorMessages.filter(msg => msg !== undefined))),
        modIds: [].concat(...result.map(r => r.updatedIds)),
    }));
}
function errorFromNexusError(err) {
    switch (err.statusCode) {
        case 401: return 'Login was refused, please review your API key.';
        default: return err.message;
    }
}
function getAccountStatus(apiUserInfo) {
    if (apiUserInfo.group_id === 5)
        return IValidateKeyData_1.IAccountStatus.Banned;
    else if (apiUserInfo.group_id === 41)
        return IValidateKeyData_1.IAccountStatus.Closed;
    else if (apiUserInfo.membership_roles.includes('premium'))
        return IValidateKeyData_1.IAccountStatus.Premium;
    else if (apiUserInfo.membership_roles.includes('supporter') && !apiUserInfo.membership_roles.includes('premium'))
        return IValidateKeyData_1.IAccountStatus.Supporter;
    else
        return IValidateKeyData_1.IAccountStatus.Free;
}
function transformUserInfoFromApi(input) {
    const stateUserInfo = {
        email: input.email,
        isPremium: input.membership_roles.includes('premium'),
        isSupporter: input.membership_roles.includes('supporter'),
        name: input.name,
        profileUrl: input.avatar,
        userId: Number.parseInt(input.sub),
        isLifetime: input.membership_roles.includes('lifetimepremium'),
        isBanned: input.group_id === 5,
        isClosed: input.group_id === 41,
        status: getAccountStatus(input)
    };
    //log('info', 'transformUserInfoFromApi()', stateUserInfo);
    return stateUserInfo;
}
function userInfoFromJWTToken(input) {
    return {
        email: '',
        isPremium: input.user.membership_roles.includes('premium'),
        isSupporter: input.user.membership_roles.includes('supporter'),
        name: input.user.username,
        profileUrl: '',
        userId: input.user.id,
    };
}
function getOAuthTokenFromState(api) {
    var _a, _b, _c, _d;
    const state = api.getState();
    const apiKey = (_b = (_a = state.confidential.account) === null || _a === void 0 ? void 0 : _a['nexus']) === null || _b === void 0 ? void 0 : _b['APIKey'];
    const oauthCred = (_d = (_c = state.confidential.account) === null || _c === void 0 ? void 0 : _c['nexus']) === null || _d === void 0 ? void 0 : _d['OAuthCredentials'];
    //log('info', 'getOAuthTokenFromState()');
    //log('info', 'api key', apiKey !== undefined);
    //log('info', 'oauth cred', oauthCred !== undefined);
    return oauthCred !== undefined ? oauthCred.token : undefined;
}
function getUserInfo(api, nexus) {
    (0, log_1.log)('info', 'updateUserInfo()');
    /**
     * This is where we are primarily updating the user info in the state.
     * I've added a check for the oauth token in the state, and if it exists, updates
     * from the nexus api instead of the information that was supplied in
     * oauth token itself as this could be out of date
     */
    //const token = getOAuthTokenFromState(api);
    if ((0, selectors_3.isLoggedIn)(api.getState())) {
        // get userinfo from api
        return bluebird_1.default.resolve(nexus.getUserInfo())
            .then(apiUserInfo => {
            // update state with new info from endpoint
            api.store.dispatch((0, persistent_1.setUserInfo)(transformUserInfoFromApi(apiUserInfo)));
            //log('info', 'getUserInfo() nexus.getUserInfo response', apiUserInfo);
            return true;
        })
            .catch((err) => {
            //log('error', `getUserInfo() nexus.getUserInfo response ${err.message}`, err);
            (0, message_1.showError)(api.store.dispatch, 'An error occurred refreshing user info', err, {
                allowReport: false,
            });
            return false;
        });
    }
    else {
        (0, log_1.log)('warn', 'updateUserInfo() not logged in');
    }
    /*
    return github.fetchConfig('api')
      .then(configObj => {
        const currentVer = getApplication().version;
        if ((currentVer !== '0.0.1')
          && (semver.lt(currentVer, configObj.minversion))) {
          nexus['disable']();
          api.sendNotification({
            type: 'warning',
            title: 'Vortex outdated',
            message: 'Your version of Vortex is quite outdated. Network features disabled.',
            actions: [
              {
                title: 'Check for update', action: () => {
                  ipcRenderer.send('check-for-updates', 'stable');
                },
              },
            ],
          });
        }
      })
      .catch(err => {
        log('warn', 'Failed to fetch api config', { message: err.message });
      })
      .then(() => true);*/
}
function onJWTTokenRefresh(api, credentials, nexus) {
    (0, log_1.log)('info', 'onJWTTokenRefresh');
    // sets state oauth credentials
    api.store.dispatch((0, actions_1.setOAuthCredentials)(credentials.token, credentials.refreshToken, credentials.fingerprint));
    // if we've had a token refresh, then we need to update userinfo
    // EDIT: we don't want this as it doesnt' make sense if the refresh is completed by a userInfo check.
    // we will leave thie as an 'oauth credentials only' function. updating the state with updated token
    // and then that will perform updateToken below and make sure both node-neuxs and state are in sync.
    //Promise.resolve(getUserInfo(api, nexus)); 
}
function updateToken(api, nexus, credentials) {
    (0, errorHandling_1.setOauthToken)(credentials); // used for reporting, unimportant right now
    (0, log_1.log)('info', 'updateToken()');
    // update the nexus-node object with our credentials.
    // could be from nexus_integration once() or from when the credentials are updated in state
    return bluebird_1.default.resolve(nexus.setOAuthCredentials({
        fingerprint: credentials.fingerprint,
        refreshToken: credentials.refreshToken,
        token: credentials.token,
    }, {
        id: constants_2.OAUTH_CLIENT_ID,
    }, (credentials) => onJWTTokenRefresh(api, credentials, nexus) // callback for when token is refreshed by nexus-node    
    ))
        .then(() => getUserInfo(api, nexus)) // update userinfo as we've set some new nexus credentials, either by launch, login or token refresh
        .then(() => true)
        .catch(err => {
        api.showErrorNotification('Authentication failed, please log in again', err, {
            allowReport: false,
        });
        api.store.dispatch((0, persistent_1.setUserInfo)(undefined));
        api.events.emit('did-login', err);
        return false;
    });
}
function updateKey(api, nexus, key) {
    (0, errorHandling_1.setApiKey)(key);
    return bluebird_1.default.resolve(nexus.setKey(key))
        .then(() => true)
        //.then(userInfo => updateUserInfo(api, nexus))
        // don't stop the login just because the github rate limit is exceeded
        .catch(github_1.RateLimitExceeded, () => bluebird_1.default.resolve(true))
        .catch(nexus_api_1.TimeoutError, err => {
        api.sendNotification({
            type: 'error',
            message: 'API Key validation timed out',
            actions: [
                { title: 'Retry', action: dismiss => { updateKey(api, nexus, key); dismiss(); } },
            ],
        });
        api.store.dispatch((0, persistent_1.setUserInfo)(undefined));
        api.events.emit('did-login', err);
        return false;
    })
        .catch(nexus_api_1.NexusError, err => {
        api.sendNotification({
            id: 'nexus-login-failed',
            type: 'error',
            title: 'Failed to log in',
            message: errorFromNexusError(err),
            actions: [
                { title: 'Try again', action: dismiss => {
                        updateKey(api, nexus, key);
                        dismiss();
                    } },
            ],
        });
        api.store.dispatch((0, persistent_1.setUserInfo)(undefined));
        api.events.emit('did-login', err);
        return false;
    })
        .catch(CustomErrors_1.ProcessCanceled, err => {
        (0, log_1.log)('debug', 'login canceled', err.message);
        api.sendNotification({
            id: 'nexus-login-failed',
            type: 'error',
            title: 'Failed to log in',
            message: err.message,
            actions: [
                { title: 'Try again', action: dismiss => {
                        updateKey(api, nexus, key);
                        dismiss();
                    } },
            ],
        });
        api.store.dispatch((0, persistent_1.setUserInfo)(undefined));
        api.events.emit('did-login', err);
        return false;
    })
        .catch(err => {
        const t = api.translate;
        api.showErrorNotification(err.code === 'ESOCKETTIMEDOUT'
            ? 'Connection to nexusmods.com timed out, please check your internet connection'
            : 'Failed to log in', err, {
            actions: [{
                    title: 'Retry',
                    action: dismiss => {
                        updateKey(api, nexus, key);
                        dismiss();
                    },
                }],
        });
        api.store.dispatch((0, persistent_1.setUserInfo)(undefined));
        api.events.emit('did-login', err);
        return false;
    });
}
let nexusGamesCache = [];
let onCacheLoaded;
const cachePromise = new bluebird_1.default(resolve => onCacheLoaded = resolve);
function cachePath() {
    return path.join((0, getVortexPath_1.default)('temp'), 'nexus_gamelist.json');
}
function retrieveNexusGames(nexus) {
    return fs.readFileAsync(cachePath(), { encoding: 'utf8' })
        .then(cacheData => {
        nexusGamesCache = JSON.parse(cacheData);
        ;
    })
        .catch(() => {
        // ignore missing cache
    })
        .then(() => bluebird_1.default.resolve((0, network_1.jsonRequest)(GAMES_JSON_URL)))
        .then(gamesList => {
        nexusGamesCache = gamesList.sort((lhs, rhs) => lhs.name.localeCompare(rhs.name));
        return fs.writeFileAsync(cachePath(), JSON.stringify(gamesList));
    })
        .catch(err => {
        // maybe network issues, may not be problematic
        (0, log_1.log)('warn', 'failed to fetch list of nexus games', {
            error: err.message,
        });
    })
        .then(() => {
        onCacheLoaded();
    });
    /* could also do this through the API but fetching a static file is more efficient
    nexus.getGames()
      .then(games => {
        nexusGamesCache = games.sort((lhs, rhs) => lhs.name.localeCompare(rhs.name));
        onCacheLoaded();
      })
      .catch(err => null);
    */
}
function nexusGames() {
    return nexusGamesCache;
}
function nexusGamesProm() {
    return cachePromise.then(() => nexusGamesCache);
}
