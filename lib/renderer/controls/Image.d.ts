import * as React from 'react';
interface IExtraImageProps<T> extends React.ImgHTMLAttributes<T> {
    srcs: string[];
    circle?: boolean;
}
export type IImageProps = React.DetailedHTMLProps<IExtraImageProps<HTMLImageElement>, HTMLImageElement>;
/**
 * image component that supports alternative images, using the first that renders
 * successfully
 */
declare function Image(props: IImageProps): JSX.Element;
export default Image;
