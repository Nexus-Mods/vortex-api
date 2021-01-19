import { Tag } from 'bbcode-to-react';
import * as React from 'react';
declare class SizeTag extends Tag {
    toHTML(): string[];
    toReact(): React.ReactChild[] | JSX.Element;
    private calc;
}
export default SizeTag;
