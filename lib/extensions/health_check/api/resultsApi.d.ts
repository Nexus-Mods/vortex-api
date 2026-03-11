/**
 * Results API
 * Manages health check results and summaries
 */
import type { IHealthCheckResult } from "../../../types/IHealthCheck";
import type { HealthCheckRegistry } from "../core/HealthCheckRegistry";
import type { HealthCheckId } from "../types";
export interface IResultsApi {
    get: () => {
        [checkId in HealthCheckId]?: IHealthCheckResult;
    };
    clear: () => void;
    getSummary: () => any;
}
export declare function createResultsApi(registry: HealthCheckRegistry): IResultsApi;
