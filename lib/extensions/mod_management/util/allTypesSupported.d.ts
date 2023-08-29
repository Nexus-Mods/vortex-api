import { IDeploymentMethod, IUnavailableReason } from '../types/IDeploymentMethod';
declare function allTypesSupported(activator: IDeploymentMethod, state: any, gameId: string, types: string[]): {
    errors: IUnavailableReason[];
    warnings: IUnavailableReason[];
};
export default allTypesSupported;
