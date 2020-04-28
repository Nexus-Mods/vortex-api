import * as React from 'react';
/**
 * wraps a control that was added by an extension.
 *
 * This attaches to all objects created with makeReactive, to ensure the wrapped
 * component gets updated when that object changes.
 *
 * TODO: the object created by makeReactive gets mutated (otherwise the proxy that
 *   triggers rerenders wouldn't work). This would cause components to not pick up on
 *   changes to that object if they only compare by reference so this gate creates
 *   copies of those parameters and re-copies them whenever they change (by value).
 *   Thereby the wrapped components work as expected but it defeats the whole point
 *   of shallow comparing props. At some point we should see if we can find a better
 *   solution.
 *
 * @class ExtensionGate
 * @extends {React.Component<{}, {}>}
 */
declare class ExtensionGate extends React.Component<{
    id: string;
}, {}> {
    private mWrappers;
    private mValid;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private initialize;
    private updateWrappers;
}
export default ExtensionGate;
