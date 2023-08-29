import * as React from 'react';
/**
 * This is pointless at this point and could probably be removed, moving the style
 * up to the parent, but I'll have to admit I don't understand 100% how "context" and
 * "manager" work in react-dnd and what changed in its api since we needed this.
 */
declare class DNDContainer extends React.Component<{
    style?: React.CSSProperties;
}, {}> {
    render(): JSX.Element;
}
export default DNDContainer;
