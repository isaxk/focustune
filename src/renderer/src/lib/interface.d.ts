export interface IElectronAPI {
    isMac: boolean,
    isWindows: boolean,
    windowControl: (action:string) => Promise<void>
}

declare global {
    interface Window {
        electronAPI: IElectronAPI
    }
}