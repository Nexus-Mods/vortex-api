/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class LineTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default LineTag;
