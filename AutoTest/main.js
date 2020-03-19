const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
// process.env.NODE_ENV = 'development';

const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;
const fs = require('fs');

let mainWindow;

// Listen for app to be ready
app.on('ready', function () {
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    });

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle add item window
function createAddWindow() {
    //   addWindow = new BrowserWindow({
    //     width: 300,
    //     height:200,
    //     title:'Add Shopping List Item'
    //   });
    //   addWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, 'addWindow.html'),
    //     protocol: 'file:',
    //     slashes:true
    //   }));
    //   // Handle garbage collection
    //   addWindow.on('close', function(){
    //     addWindow = null;
    //   });
}

// Catch item:add
ipcMain.on('item:add', function (e, item) {
    mainWindow.webContents.send('item:add', item);
    // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
    //addWindow = null;
});

function loadFile() {
    const files = dialog.showOpenDialogSync(mainWindow, {
        properties: ['openFile'],
        filters: [
            { name: 'Choose File Excel', extensions: ['xlsx'] }
        ]
    });

    if (!files) return;

    const file = files[0];
    console.log(file)
    const fileContent = fs.readFileSync(file);
    console.log(fileContent)
    console.log(fileContent.toString())

    console.log('load success!');
}

// Create menu template
const mainMenuTemplate = [
    // Each object is a dropdown
    {
        label: 'File',
        submenu: [
            {
                label: 'Load File',
                accelerator: 'CmdOrCtrl+O',
                click() {
                    loadFile();
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// If OSX, add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// Add developer tools option if in dev
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                role: 'reload'
            },
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}