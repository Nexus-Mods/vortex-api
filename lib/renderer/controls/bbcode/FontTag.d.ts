import { Tag } from "bbcode-to-react";
import * as React from "react";
declare class FontTag extends Tag {
    toHTML(): string[];
    toReact(): React.JSX.Element;
}
export default FontTag;
