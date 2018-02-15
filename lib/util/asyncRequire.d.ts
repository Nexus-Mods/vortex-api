/// <reference types="bluebird" />
/// <reference types="react" />
import * as Promise from 'bluebird';
import * as React from 'react';
/**
 * require a module asynchronously.
 * This makes only the file read asynchronous, compilation is still
 * synchronous (node is single threaded after all)
 * Use with care: does not add the module to the cache so using it
 * only makes sense if you know the module is required only once.
 *
 * @export
 * @param {string} id
 * @param {string} [basedir]
 * @returns {Promise<any>}
 */
export default function (id: string, basedir?: string): Promise<any>;
export declare class Placeholder extends React.Component<any, {}> {
    render(): any;
}
