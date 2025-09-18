import React = require('react');
/**
 * options that can be passed into the bbcode parser to configure how bbcode
 * tags are being translated.
 */
export interface IBBCodeContext {
    /**
     * callbacks that can be triggered through the [link] or [url] tags
     * callback functions registered here can be triggered with
     * [url=cb://<callback name>/<arg1>/<arg2>/...] (arguments are optional of course)
     */
    callbacks?: {
        [name: string]: (...args: any[]) => void;
    };
    /**
     * if enabled, [link] or [url] tags may link to local files, which then get opened
     * with opn.
     * This should only be set for bbcode hard coded into Vortex, not bbcode taken from a
     * website or anything for security reasons
     */
    allowLocal?: boolean;
}
export declare function preProcess(input: string): string;
declare function renderBBCode(input: string, context?: any): React.ReactChild[];
export declare function stripBBCode(input: string): string;
export declare function bbcodeToHTML(input: string): string;
export default renderBBCode;
