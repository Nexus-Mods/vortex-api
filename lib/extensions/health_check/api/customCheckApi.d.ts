/**
 * Custom Health Check API - Renderer Process
 * Manages custom health checks registered by extensions
 */
import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { IHealthCheck, IHealthCheckResult, HealthCheckTrigger, IHealthCheckEntry } from "../../../types/IHealthCheck";
import type { HealthCheckRegistry } from "../core/HealthCheckRegistry";
import type { HealthCheckId } from "../types";
export interface ICustomCheckApi {
    register: (healthCheck: IHealthCheck) => void;
    unregister: (checkId: HealthCheckId) => void;
    run: (checkId: HealthCheckId, force?: boolean) => Promise<IHealthCheckResult | undefined>;
    runByTrigger: (trigger: HealthCheckTrigger) => Promise<IHealthCheckResult[]>;
    getAll: () => IHealthCheckEntry[];
}
export declare function createCustomCheckApi(registry: HealthCheckRegistry, api: IExtensionApi): ICustomCheckApi;
