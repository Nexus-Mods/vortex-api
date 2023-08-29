/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class BrTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default BrTag;
