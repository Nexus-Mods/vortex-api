export default class StyleManager {
    #private;
    constructor();
    private static getDefaultPartials;
    addStylesheet(key: string, filePath: string): void;
    render(): Promise<void>;
    static renderDefault(): Promise<void>;
    private static addStylesheet;
    private static render;
    private static applyCSS;
}
