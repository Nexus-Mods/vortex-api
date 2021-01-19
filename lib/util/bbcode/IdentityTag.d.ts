/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class IdentityTag extends Tag {
    toHTML(): string[];
    toReact(): import("react").ReactChild[];
}
export default IdentityTag;
