/**
 * Legacy Test API
 * Adapter for converting old Vortex tests to health checks
 */
import type { CheckFunction } from "../../../types/IExtensionContext";
import type { HealthCheckCategory } from "../../../types/IHealthCheck";
import type { HealthCheckRegistry } from "../core/HealthCheckRegistry";
import type { LegacyTestAdapter } from "../core/LegacyTestAdapter";
export interface ILegacyApi {
    registerTest: (id: string, eventType: string, check: CheckFunction, category?: HealthCheckCategory) => void;
}
export declare function createLegacyApi(adapter: LegacyTestAdapter, registry: HealthCheckRegistry): ILegacyApi;
