const { ipcRenderer } = require('electron')

ipcRenderer.on('reload-apidoc', (event, arg) => {
  console.log(arg) // prints "pong"
})
