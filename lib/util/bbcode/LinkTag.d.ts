import { Tag } from 'bbcode-to-react';
import * as React from 'react';
declare class LinkTag extends Tag {
    toHTML(): any;
    toReact(): JSX.Element | React.ReactChild[];
    private clicked;
}
export default LinkTag;
