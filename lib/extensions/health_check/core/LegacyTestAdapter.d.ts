import type { CheckFunction, IExtensionApi } from "../../../types/IExtensionContext";
import type { ILegacyTestAdapter } from "../../../types/IHealthCheck";
import type { HealthCheckRegistry } from "./HealthCheckRegistry";
import { HealthCheckCategory } from "../../../types/IHealthCheck";
export declare class LegacyTestAdapter {
    private mRegistry;
    private mApi;
    constructor(registry: HealthCheckRegistry, api: IExtensionApi);
    private generateHealthCheckId;
    private generateDisplayName;
    private generateDescription;
    private inferCategory;
    private mapEventTypeToTriggers;
    private wrapLegacyCheck;
    private mapLegacySeverityToStatus;
    private mapLegacySeverity;
    private getExtensionName;
    createLegacyHealthCheck(id: string, eventType: string, check: CheckFunction, category?: HealthCheckCategory): ILegacyTestAdapter;
}
