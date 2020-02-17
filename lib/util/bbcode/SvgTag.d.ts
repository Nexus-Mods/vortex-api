/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class SvgTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default SvgTag;
