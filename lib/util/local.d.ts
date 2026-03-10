/**
 * create a global variable that is available through an id.
 * This is basically a hack to get around the fact js can't have
 * proper singletons.
 */
declare function local<T>(id: string, init: T): T;
export default local;
