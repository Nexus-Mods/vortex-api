/**
 * Health Check API - Main Export
 * Combines all API modules into a single interface
 */
import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { HealthCheckRegistry } from "../core/HealthCheckRegistry";
import type { LegacyTestAdapter } from "../core/LegacyTestAdapter";
import type { IHealthCheckApi } from "../types";
import { type ICustomCheckApi } from "./customCheckApi";
import { type ILegacyApi } from "./legacyApi";
import { type IResultsApi } from "./resultsApi";
export declare function createHealthCheckApi(registry: HealthCheckRegistry, legacyAdapter: LegacyTestAdapter, api: IExtensionApi): IHealthCheckApi;
export type { ICustomCheckApi, ILegacyApi, IResultsApi };
