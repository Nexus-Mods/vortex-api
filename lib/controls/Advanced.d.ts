import { ComponentEx } from '../util/ComponentEx';
import * as React from 'react';
interface IConnectedProps {
    advancedMode: boolean;
}
declare type IProps = IConnectedProps;
/**
 * simple control to present advanced features only if the corresponding settings
 * has been set.
 * This can have one or two children. If there is only one child, this child
 * will be rendered in advanced mode.
 * If there are two, the first will be rendered in advanced mode, the second
 * otherwise.
 *
 * @class Advanced
 * @extends {ComponentEx<IProps, {}>}
 */
declare class Advanced extends ComponentEx<IProps, {}> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Advanced, Pick<React.ClassAttributes<Advanced> & IConnectedProps & Partial<import("react-i18next").WithTranslation>, "ref" | "key" | "i18n" | "tReady" | "t">>;
export default _default;
