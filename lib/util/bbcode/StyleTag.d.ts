/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class StyleTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default StyleTag;
