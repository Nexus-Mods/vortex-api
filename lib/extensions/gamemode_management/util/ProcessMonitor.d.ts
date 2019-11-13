import { IExtensionApi } from '../../../types/IExtensionContext';
declare class ProcessMonitor {
    private mTimer;
    private mStore;
    private mWindow;
    private mActive;
    constructor(api: IExtensionApi);
    start(): void;
    end(): void;
    private check;
    private doCheck;
}
export default ProcessMonitor;
