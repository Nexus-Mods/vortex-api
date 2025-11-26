import { IPreference } from '@nexusmods/nexus-api';
/**
 * Data retrieved with a correct API Key
 *
 * @export
 * @interface IValidateKeyData
 */
export interface IValidateKeyData {
    email: string;
    isPremium: boolean;
    isSupporter: boolean;
    name: string;
    profileUrl: string;
    userId: number;
}
export declare enum IAccountStatus {
    Premium = 0,
    Supporter = 1,
    Free = 2,
    Banned = 3,
    Closed = 4
}
export interface IValidateKeyDataV2 extends IValidateKeyData, Partial<IPreference> {
    isLifetime?: boolean;
    isBanned?: boolean;
    isClosed?: boolean;
    status?: IAccountStatus;
}
