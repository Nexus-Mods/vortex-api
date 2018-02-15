export declare const addMod: any;
export declare const addMods: any;
export declare const removeMod: any;
/**
 * sets the state of a mod (whether it's downloaded, installed, ...)
 */
export declare const setModState: any;
/**
 * sets the (final) installation path of the mod. This should be set as soon as
 * any data is written to disk so that it can be cleaned/removed in case of an error.
 * The actual path on disk may be a variation of this path during installation.
 */
export declare const setModInstallationPath: any;
/**
 * sets the value of an attribute on a mod
 */
export declare const setModAttribute: any;
/**
 * sets the type of a mod
 */
export declare const setModType: any;
/**
 * add a dependency rule for this mod
 */
export declare const addModRule: any;
/**
 * remove a dependency rule from this mod
 */
export declare const removeModRule: any;
export declare const setINITweakEnabled: any;
