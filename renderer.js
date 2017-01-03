// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// require('./ipc-renderer')

const { ipcRenderer } = require('electron')
const { dialog } = require('electron').remote

const webview = document.getElementById('docView')
const inputSrc = document.getElementById('input-src-path')
const inputDest = document.getElementById('input-dest-path')

ipcRenderer.on('reload-apidoc', (event, arg) => {
  webview.src = inputDest.value + '/index.html'
  webview.reload()
})

window.generateApidoc = () => {
  if (!inputSrc.value || inputSrc.value.length == 0) {
    return swal('please select project folder')
  }

  if (!inputDest.value || inputDest.value.length == 0) {
    return swal('please select output folder')
  }

  ipcRenderer.send('generate-apidoc', { src: inputSrc.value, dest: inputDest.value })
}

window.openSourceDirectory = () => {
  const path = dialog.showOpenDialog({properties: ['openDirectory']})
  if (path) {
    inputSrc.value = path[0]
  }
}

window.openDestDirectory = () => {
  const path = dialog.showOpenDialog({properties: ['openDirectory']})
  if (path) {
    inputDest.value = path[0]
  }
}
