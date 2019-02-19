import { IState } from '../../../types/IState';
import { IDeploymentMethod } from '../types/IDeploymentMethod';
export declare function registerDeploymentMethod(activator: IDeploymentMethod): void;
export declare function getAllActivators(): IDeploymentMethod[];
/**
 * return only those activators that are supported based on the current state
 *
 * @param {*} state
 * @returns {IDeploymentMethod[]}
 */
export declare function getSupportedActivators(state: IState): IDeploymentMethod[];
export declare function getSelectedActivator(state: IState, gameId: string): IDeploymentMethod;
export declare function getCurrentActivator(state: IState, gameId: string, allowDefault: boolean): IDeploymentMethod;
export declare function getActivator(activatorId: string): IDeploymentMethod;
