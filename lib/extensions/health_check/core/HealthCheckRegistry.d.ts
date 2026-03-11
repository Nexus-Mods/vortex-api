import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { IHealthCheck, IHealthCheckEntry, IHealthCheckResult, ILegacyTestAdapter } from "../../../types/IHealthCheck";
import type { HealthCheckId } from "../types";
import { HealthCheckCategory, HealthCheckTrigger } from "../../../types/IHealthCheck";
export declare class HealthCheckRegistry {
    private mHealthChecks;
    private mTriggerMap;
    private mExecutionQueue;
    private mApi;
    private mResults;
    constructor(api: IExtensionApi);
    /**
     * Register a new health check
     */
    register(healthCheck: IHealthCheck | ILegacyTestAdapter): void;
    /**
     * Get all registered health checks
     */
    getAll(): IHealthCheckEntry[];
    /**
     * Get health checks by category
     */
    getByCategory(category: HealthCheckCategory): IHealthCheckEntry[];
    /**
     * Get health checks by trigger
     */
    getByTrigger(trigger: HealthCheckTrigger): IHealthCheckEntry[];
    /**
     * Get a specific health check by ID
     */
    get(id: HealthCheckId): IHealthCheckEntry | undefined;
    /**
     * Unregister a health check
     */
    unregisterHealthCheck(checkId: HealthCheckId): void;
    /**
     * Enable or disable a health check
     */
    setEnabled(id: HealthCheckId, enabled: boolean): void;
    /**
     * Execute a specific health check
     */
    runHealthCheck(checkId: HealthCheckId, api: IExtensionApi, force?: boolean): Promise<IHealthCheckResult | undefined>;
    /**
     * Execute all health checks for a specific trigger
     */
    runChecksByTrigger(trigger: HealthCheckTrigger, api: IExtensionApi): Promise<IHealthCheckResult[]>;
    /**
     * Execute all registered health checks
     */
    runAllHealthChecks(api: IExtensionApi): Promise<IHealthCheckResult[]>;
    /**
     * Get all cached results
     */
    getResults(): {
        [checkId in HealthCheckId]?: IHealthCheckResult;
    };
    /**
     * Clear all cached results
     */
    clearResults(): void;
    /**
     * Get the API instance
     */
    getApi(): IExtensionApi;
    /**
     * Get summary statistics
     */
    getSummary(): {
        total: number;
        enabled: number;
        categories: Record<HealthCheckCategory, number>;
        lastResults: {
            passed: number;
            failed: number;
            warning: number;
            error: number;
        };
    };
    /**
     * Store a health check result manually (for intercepted test notifications)
     */
    storeResult(id: HealthCheckId, result: IHealthCheckResult): void;
}
