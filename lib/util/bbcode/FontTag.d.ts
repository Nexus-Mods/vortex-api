/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class FontTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default FontTag;
