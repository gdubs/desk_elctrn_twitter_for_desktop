const electron = require('electron');
const url = require('url');
const path = require('path');
const http = require('http');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;



app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/windows/mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', () => { app.quit(); });

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
})


const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'win32' ? 'Ctrl+Q' : 'Command+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
]