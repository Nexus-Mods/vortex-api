export interface IHeaderImage {
    path: string;
    showFade: boolean;
    height: number;
}
export declare type OrderType = 'AlphaAsc' | 'AlphaDesc' | 'Explicit';
export declare type GroupType = 'SelectAtLeastOne' | 'SelectAtMostOne' | 'SelectExactlyOne' | 'SelectAll' | 'SelectAny';
export declare type PluginType = 'Required' | 'Optional' | 'Recommended' | 'NotUsable' | 'CouldBeUsable';
export interface IPlugin {
    id: number;
    selected: boolean;
    name: string;
    description: string;
    image: string;
    type: PluginType;
}
export interface IGroup {
    id: number;
    name: string;
    type: GroupType;
    options: IPlugin[];
}
export interface IGroupList {
    group: IGroup[];
    order: OrderType;
}
export interface IInstallStep {
    id: number;
    name: string;
    visible: boolean;
    optionalFileGroups?: IGroupList;
}
export declare type Direction = 'forward' | 'back';
export interface IStateParameters {
    stepId: number;
    groupId: number;
    plugins: number[];
}
export declare type StateCallback = (parameters: IStateParameters) => void;
export interface IInstallerInfo {
    moduleName: string;
    image: IHeaderImage;
    select?: StateCallback;
    cont?: (direction: Direction) => void;
    cancel?: () => void;
}
export interface IInstallerState {
    installSteps: IInstallStep[];
    currentStep: number;
}
export interface IReportError {
    title: string;
    message: string;
    details: string;
}
