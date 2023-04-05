const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  openDialog: (title, desc) => ipcRenderer.send('dialog', title, desc)
  // we can also expose variables, not just functions
})