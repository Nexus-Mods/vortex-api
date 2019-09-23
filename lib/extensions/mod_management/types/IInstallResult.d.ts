/// <reference types="node" />
import { IRule } from './IMod';
export declare type InstructionType = 'copy' | 'mkdir' | 'submodule' | 'generatefile' | 'iniedit' | 'unsupported' | 'attribute' | 'setmodtype' | 'error' | 'rule';
export interface IInstruction {
    type: InstructionType;
    path?: string;
    source?: string;
    destination?: string;
    section?: string;
    key?: string;
    value?: any;
    submoduleType?: string;
    data?: Buffer;
    rule?: IRule;
}
export interface IInstallResult {
    instructions: IInstruction[];
}
