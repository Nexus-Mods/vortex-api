/// <reference types="react" />
import { Tag } from 'bbcode-to-react';
declare class YoutubeTag extends Tag {
    toHTML(): string[];
    toReact(): JSX.Element;
}
export default YoutubeTag;
