import Promise from "bluebird";
declare function smoothScroll(element: HTMLElement, targetPos: number, duration: number): Promise<boolean>;
export default smoothScroll;
