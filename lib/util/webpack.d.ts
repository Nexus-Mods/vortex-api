/// <reference types="webpack" />
import * as webpack from 'webpack';
export declare function externals(): webpack.ExternalsElement;
export declare function output(moduleName: string, basePath: any): webpack.Output;
export declare function loaders(): webpack.Rule[];
export default function config(moduleName: string, basePath: string): webpack.Configuration;
