import { Tag } from "bbcode-to-react";
import * as React from "react";
declare class StyleTag extends Tag {
    toHTML(): string[];
    toReact(): React.JSX.Element;
}
export default StyleTag;
