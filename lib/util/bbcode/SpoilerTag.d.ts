/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class SpoilerTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default SpoilerTag;
