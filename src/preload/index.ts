import { contextBridge, ipcRenderer } from 'electron/renderer'

import { mac, windows } from "./detectos"
// Custom APIs for renderer

const isMac = mac;
const isWindows = windows;


// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld('electron', {
  isWindows, isMac, windowControl: (action: "close" | "maximize" | "minimize") => {
    ipcRenderer.send('windowAction', action);
    console.log(action);
  }
});

