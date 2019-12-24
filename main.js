const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;


app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1000, 
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit();
  }

});


