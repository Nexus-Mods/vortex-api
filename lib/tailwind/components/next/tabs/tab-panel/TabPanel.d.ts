import * as React from 'react';
import { ReactNode } from 'react';
/**
 * Tab Content component acts as a wrapper that shows/hides content
 * depending on whether the tab is selected
 */
export declare const TabPanel: ({ children, name }: {
    children: ReactNode;
    name: string;
}) => React.JSX.Element;
