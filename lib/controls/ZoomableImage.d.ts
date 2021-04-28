import * as React from 'react';
export interface IZoomableImageProps {
    className: string;
    url: string;
    container?: JSX.Element;
    overlayClass?: string;
}
declare class ZoomableImage extends React.Component<IZoomableImageProps, {
    showOverlay: boolean;
}> {
    static contextTypes: React.ValidationMap<any>;
    context: {
        menuLayer: JSX.Element;
    };
    constructor(props: any);
    render(): JSX.Element;
    private toggleOverlay;
}
export default ZoomableImage;
