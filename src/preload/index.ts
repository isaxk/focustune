import { contextBridge, ipcRenderer } from 'electron'

import { mac, windows } from "./detectos"




contextBridge.exposeInMainWorld('electronAPI', {
  isWindows: windows,
  isMac: mac,
  windowControl: (action: "close" | "maximize" | "minimize") => {
    ipcRenderer.send('windowAction', action);
    console.log(action);
  }
});

