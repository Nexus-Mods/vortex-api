import { Tag } from 'bbcode-to-react';
import * as React from 'react';
declare class LinkTag extends Tag {
    toHTML(): any;
    toReact(): React.ReactChild[] | JSX.Element;
    private clicked;
}
export default LinkTag;
