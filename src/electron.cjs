const windowStateManager = require('electron-window-state');
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const contextMenu = require('electron-context-menu');
const serve = require('electron-serve');
const path = require('path');

try {
	require('electron-reloader')(module);
} catch (e) {
	console.error(e);
}

const serveURL = serve({ directory: '.' });
const port = process.env.PORT || 5173;
const dev = true;
let mainWindow;

function createWindow() {
	let windowState = windowStateManager({
		defaultWidth: 800,
		defaultHeight: 600,
	});

	let mainWindow = new BrowserWindow({
		backgroundColor: '#121212',
		titleBarStyle: 'hiddenInset',
		autoHideMenuBar: true,
		minWidth: 750,
		minHeight: 450,
		height: 450,
		trafficLightPosition: {
			x: 15,
			y: 18,
		},
		webPreferences: {
			enableRemoteModule: true,
			contextIsolation: true,
			nodeIntegration: true,
			spellcheck: false,
			devTools: dev,
			preload: path.join(__dirname, 'preload.cjs'),
		},
		x: windowState.x,
		y: windowState.y,
		width: windowState.width,
		height: windowState.height,
	});

	mainWindow.webContents.setWindowOpenHandler(({url}) => {
		shell.openExternal(url);
		return { action: 'deny' }
	  })

	windowState.manage(mainWindow);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('close', () => {
		windowState.saveState(mainWindow);
	});

	return mainWindow;
}

contextMenu({
	showLookUpSelection: false,
	showSearchWithGoogle: false,
	showCopyImage: false,
	prepend: (defaultActions, params, browserWindow) => [
		{
			label: 'Make App 💻',
		},
	],
});

function loadVite(port) {
	mainWindow.loadURL(`http://localhost:${port}`).catch((e) => {
		console.log('Error loading URL, retrying', e);
		setTimeout(() => {
			loadVite(port);
		}, 200);
	});
}

function createMainWindow() {
	mainWindow = createWindow();
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	if (dev) loadVite(port);
	else serveURL(mainWindow);
}

app.once('ready', createMainWindow);
app.on('activate', () => {
	if (!mainWindow) {
		createMainWindow();
	}
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('to-main', (event, count) => {
	return mainWindow.webContents.send('from-main', `next count is ${count + 1}`);
});

