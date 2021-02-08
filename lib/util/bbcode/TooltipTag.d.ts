import { Tag } from 'bbcode-to-react';
declare class TooltipTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default TooltipTag;
