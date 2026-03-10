import { IMod, IModReference, IModRule, ModState } from "../types/IMod";
import * as reduxAct from "redux-act";
export declare const addMod: reduxAct.ComplexActionCreator2<string, IMod, {
    gameId: string;
    mod: IMod;
}, {}>;
export declare const addMods: reduxAct.ComplexActionCreator2<string, IMod[], {
    gameId: string;
    mods: IMod[];
}, {}>;
export declare const removeMod: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    modId: string;
}, {}>;
export declare const setModArchiveId: reduxAct.ComplexActionCreator3<string, string, string, {
    gameId: string;
    modId: string;
    archiveId: string;
}, {}>;
/**
 * sets the state of a mod (whether it's downloaded, installed, ...)
 */
export declare const setModState: reduxAct.ComplexActionCreator3<string, string, ModState, {
    gameId: string;
    modId: string;
    modState: ModState;
}, {}>;
/**
 * sets the (final) installation path of the mod. This should be set as soon as
 * any data is written to disk so that it can be cleaned/removed in case of an error.
 * The actual path on disk may be a variation of this path during installation.
 */
export declare const setModInstallationPath: reduxAct.ComplexActionCreator3<string, string, string, {
    gameId: string;
    modId: string;
    installPath: string;
}, {}>;
/**
 * sets the value of an attribute on a mod
 */
export declare const setModAttribute: reduxAct.ComplexActionCreator4<string, string, string, any, {
    gameId: string;
    modId: string;
    attribute: string;
    value: any;
}, {}>;
/**
 * set multiple mod attributes at once
 */
export declare const setModAttributes: reduxAct.ComplexActionCreator3<string, string, {
    [attribute: string]: any;
}, {
    gameId: string;
    modId: string;
    attributes: {
        [attribute: string]: any;
    };
}, {}>;
/**
 * sets the type of a mod
 */
export declare const setModType: reduxAct.ComplexActionCreator3<string, string, string, {
    gameId: string;
    modId: string;
    type: string;
}, {}>;
export declare const clearModRules: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    modId: string;
}, {}>;
/**
 * add a dependency rule for this mod
 */
export declare const addModRule: reduxAct.ComplexActionCreator3<string, string, IModRule, {
    gameId: string;
    modId: string;
    rule: IModRule;
}, {}>;
/**
 * remove a dependency rule from this mod
 */
export declare const removeModRule: reduxAct.ComplexActionCreator3<string, string, IModRule, {
    gameId: string;
    modId: string;
    rule: IModRule;
}, {}>;
/**
 * store the mod id for a resolved rule, so we can resolve it quicker and more
 * reliably in the future
 */
export declare const cacheModReference: reduxAct.ComplexActionCreator4<string, string, IModReference, string, {
    gameId: string;
    modId: string;
    reference: IModReference;
    refModId: string;
}, {}>;
export declare const setINITweakEnabled: reduxAct.ComplexActionCreator4<string, string, string, boolean, {
    gameId: string;
    modId: string;
    tweak: string;
    enabled: boolean;
}, {}>;
/**
 * set list of files that will always be provided by this mod, no matter the deployment order
 */
export declare const setFileOverride: reduxAct.ComplexActionCreator3<string, string, string[], {
    gameId: string;
    modId: string;
    files: string[];
}, {}>;
