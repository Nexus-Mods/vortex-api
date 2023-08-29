/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class IdentityTag extends Tag {
    toHTML(): string[];
    toReact(): React.ReactChild[];
}
export default IdentityTag;
