const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('proc', {
  send: (data) => {
    ipcRenderer.invoke('data', JSON.stringify(data))
  }
})

ipcRenderer.on('data', (c, e) => {
  window.postMessage(e, '*');
});