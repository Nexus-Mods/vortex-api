/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class MoreTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default MoreTag;
