// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// require('./ipc-renderer')

const { ipcRenderer } = require('electron')
const { dialog } = require('electron').remote

const webview = document.getElementById('docView')

window.addEventListener('resize', (e) => {
  if (e.isTrusted) {
    const { innerWidth, innerHeight } = e.target
    webview.style.width = innerWidth + 'px'
    webview.style.height = innerHeight + 'px'
  }
})

ipcRenderer.on('reload-apidoc', (event, arg) => {
  webview.reload()
})
