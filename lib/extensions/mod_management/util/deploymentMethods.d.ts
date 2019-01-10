import { IDeploymentMethod } from '../types/IDeploymentMethod';
import { IState } from '../../../types/IState';
export declare function registerDeploymentMethod(activator: IDeploymentMethod): void;
export declare function getAllActivators(): IDeploymentMethod[];
/**
 * return only those activators that are supported based on the current state
 *
 * @param {*} state
 * @returns {IDeploymentMethod[]}
 */
export declare function getSupportedActivators(state: IState): IDeploymentMethod[];
export declare function getCurrentActivator(state: IState, gameId: string, allowFallback: boolean): IDeploymentMethod;
export declare function getActivator(activatorId: string): IDeploymentMethod;
