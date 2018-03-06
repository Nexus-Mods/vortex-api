/// <reference types="react" />
/**
 * React Component Wrapper for async require. This requires the
 * component asynchronously (assuming it's the default export),
 * showing nothing until loading is finished.
 *
 * @export
 * @template T
 * @param {string} moduleId
 * @param {string} [basedir]
 * @returns
 */
export default function <T>(moduleId: string, basedir?: string): (props: any) => JSX.Element;
