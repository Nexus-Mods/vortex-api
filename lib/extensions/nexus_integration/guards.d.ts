import type { IValidateKeyDataV2 } from "./types/IValidateKeyData";
import type { IState } from "../../types/IState";
type IStatePersistent = IState["persistent"];
type IStateConfidential = IState["confidential"];
export interface IStatePersistentWithNexus extends IStatePersistent {
    nexus: {
        userInfo?: IValidateKeyDataV2;
        newestVersion?: string;
    };
}
export interface IStateConfidentialWithNexus extends IStateConfidential {
    account: {
        nexus?: {
            APIKey?: string;
            OAuthCredentials?: unknown;
        };
    };
}
export declare const hasPersistentWithNexus: (statePersistent: IStatePersistent) => statePersistent is IStatePersistentWithNexus;
export declare const hasConfidentialWithNexus: (stateConfidential: IStateConfidential) => stateConfidential is IStateConfidentialWithNexus;
export {};
