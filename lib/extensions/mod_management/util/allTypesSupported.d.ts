import { IDeploymentMethod, IUnavailableReason } from '../types/IDeploymentMethod';
declare function allTypesSupported(activator: IDeploymentMethod, state: any, gameId: string, types: string[]): IUnavailableReason;
export default allTypesSupported;
