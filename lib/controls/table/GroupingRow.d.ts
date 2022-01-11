import { ComponentEx } from '../../util/ComponentEx';
import { TFunction } from '../../util/i18n';
export declare const EMPTY_ID = "<Unspecified>";
export interface IGroupingRowProps {
    t: TFunction;
    groupId: string;
    groupName: string;
    count: number;
    expanded: boolean;
    width: number;
    onToggle: (group: string, expand: boolean) => void;
    onExpandAll: () => void;
    onCollapseAll: () => void;
}
interface IGroupingRowState {
    context?: {
        x: number;
        y: number;
    };
}
declare class GroupingRow extends ComponentEx<IGroupingRowProps, IGroupingRowState> {
    private mContextActions;
    constructor(props: IGroupingRowProps);
    render(): JSX.Element;
    private toggleGroup;
    private onContext;
    private onHideContext;
}
export default GroupingRow;
