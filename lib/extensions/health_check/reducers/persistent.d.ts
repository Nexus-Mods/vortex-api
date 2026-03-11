import type { IReducerSpec } from "../../../types/IExtensionContext";
export interface IHealthCheckPersistentState {
    /**
     * Map of mod nexusModId to array of hidden requirement IDs (from Nexus API)
     * Uses requirement.id instead of requirement.modId to properly support external requirements
     * Example: { 95885: ["req-id-1", "req-id-2", "req-id-3"] }
     * This means mod 95885 has requirements with IDs "req-id-1", "req-id-2", and "req-id-3" hidden
     */
    hiddenRequirements: {
        [modId: number]: string[];
    };
    /**
     * Map of mod nexusModId to array of requirement IDs that have received feedback
     * Prevents users from submitting feedback multiple times for the same requirement
     */
    feedbackGiven: {
        [modId: number]: string[];
    };
    /** Whether mod requirements health check suggestions are enabled */
    modRequirementsEnabled: boolean;
}
/**
 * Reducer for health check persistent state
 */
export declare const persistentReducer: IReducerSpec<IHealthCheckPersistentState>;
