export declare type ActionCreator<Sig> = any;
declare function safeCreateAction<P, M>(description: string): ActionCreator<(...args: any[]) => any>;
declare function safeCreateAction<P, M, Sig>(description: string, payloadReducer: Sig): ActionCreator<Sig>;
export default safeCreateAction;
