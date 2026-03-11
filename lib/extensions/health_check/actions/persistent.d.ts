/**
 * Set whether a specific requirement is hidden for a mod
 * Uses the unique requirement ID from Nexus API instead of modId to properly support external requirements
 */
export declare const setRequirementHidden: import("redux-act").ComplexActionCreator3<number, string, boolean, {
    modId: number;
    requirementId: string;
    hidden: boolean;
}, {}>;
/**
 * Set all requirements for a mod as hidden
 */
export declare const setAllModRequirementsHidden: import("redux-act").ComplexActionCreator2<number, string[], {
    modId: number;
    requirementIds: string[];
}, {}>;
/**
 * Clear all hidden requirements for all mods
 */
export declare const clearAllHiddenRequirements: import("redux-act").ComplexActionCreator1<unknown, any, {}>;
/**
 * Enable or disable mod requirements health check suggestions
 */
export declare const setModRequirementsEnabled: import("redux-act").ComplexActionCreator1<boolean, {
    enabled: boolean;
}, {}>;
/**
 * Record that feedback was given for a specific requirement
 */
export declare const setFeedbackGiven: import("redux-act").ComplexActionCreator2<number, string, {
    modId: number;
    requirementId: string;
}, {}>;
