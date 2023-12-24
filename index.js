console.log(`                                                                                                                   
Hi, I'm Chris Pratt, and you are DO- DECA- DONE!!!                             

Welcome to the Terminal! Nothing special is normally logged here, aside from occasional errors.
This screen may help if Mark isn't running properly.
If there's an error here you can't solve, or it's just not working properly...

Email me: coding398@outlook.com

## And if you're someone from Steam reviewing this, have a great day! love the work that you do. ##

`)

const { app, BrowserWindow, protocol, net, session, ipcMain, shell } = require('electron')
const path = require('node:path')
const fs = require(`fs`)

const { localStorage, sessionStorage } = require('electron-browser-storage');

const isLinux = process.platform == "linux";

const STEAM_APP_ID = 2754840;

let steamworks, sw;

if(isLinux){
  try{
    steamworks = require('./steamworks_linux/steamworksjs.linux-x64-gnu.node')
    sw = steamworks
  
    steamworks = steamworks.init(STEAM_APP_ID)
  
    console.log(`Succeed Linux steamworks`)
  }catch{
    steamworks = false;
  }
}else{
  try{
    steamworks = require(`steamworks.js`)

    steamworks = steamworks.init(STEAM_APP_ID)
    sw = steamworks

    console.log(`Succeed Windows steamworks`)
  }catch(e){
    console.error(`Steamworks failed to initialize on Windows`)

    steamworks = false;
  }
}

const createWindow = async() => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    transparent: true,
    webSecurity: true,
    contextIsolation: true,
    webPreferences: {
      preload: path.join(__dirname, '/preloads/transmitter.js'),
      contextIsolation: false,
      nodeIntegration: true
    },
    icon: process.cwd() + '/favicon.ico'
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.fullScreen = await localStorage.getItem(`settingFullscreen`) == "1" ? true : false
  mainWindow.loadFile('./src/intro.html')

  setInterval(async()=>{
    if(await localStorage.getItem(`settingFullscreen`) !== "0"){
      mainWindow.fullScreen = true
    }else  mainWindow.fullScreen = false;
  },1000)

  require('steamworks.js').electronEnableSteamOverlay()
}

async function updateMods(){
  let files = fs.readdirSync(`./mods`), data = []

  for (let i = 0; i < files.length; i++) {
    if(!files[i].endsWith(".js") || files[i].includes("DONOTSHOW")) continue;
    let file = fs.readFileSync(`./mods/${files[i]}`).toString()
    let name = file.split('\n')[0]?.startsWith("// ") ? file.split('\n')[0].replace("// ", "").slice(0, 30) : "Unknown",
      by = file.split('\n')[1]?.startsWith("// ") ? file.split('\n')[1].replace("// ", "").slice(0, 30) : "Unknown";
    
    data.push({
      file: files[i], name, by
    })
  }

  await localStorage.setItem(`mods`, JSON.stringify(data))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async() => {
  if(steamworks == false){
    dialog.showErrorBox(`Steam must be opened for Dodecadone to run!`, ``)
    process.exit()
  }

  if(!fs.existsSync("./mods")){
    fs.mkdirSync(`./mods`)
    fs.writeFileSync(`./mods/watermelonMod.js`, await (await net.fetch(`file:///${__dirname}/src/watermelonMod.js`)).text())
  }

  let denied = ['https', 'steam', 'ms-calculator', 'ws', 'wss', 'admin']
  denied.forEach((d)=>{
    protocol.handle(d, (req) => {
      return new Response('<h1>Unacceptable</h1>', {
        headers: { 'content-type': 'text/html' },
        status: 403
      })
    })
  })

  setInterval(async()=>{
    updateMods()
  }, 2000)

  protocol.handle('http', async(request) => {
    if(!request.url.startsWith("http://127.0.0.1:4622/")) return;
    return await fetch('http://127.0.0.1:4622/' + request.url.slice('http://127.0.0.1:4622/'.length))
  })

  protocol.interceptFileProtocol('file', (req, callback) => {
    let url = decodeURIComponent(req.url.substring(isLinux ? 7 : 8)).split('?')[0]
    let dn = __dirname.replace(/\\/g,"/") + "/src/"

    if (url.startsWith(dn) || url.startsWith(__dirname.replace(/\\/g,"/") + "/node_modules/") || url.startsWith(__dirname.replace(/\\/g,"/") + "/mods/")) {
      callback({
        path: url
      })
    }else{
      console.log(`DENY ${url}`)
      callback({
        data: 'Guess what? BAU-BAU. X. DENIED. UNACCEPTABLE. you sir shall be extinguished with fire. seriously though, if you got this error legit, dm me on discord @coding398 rn.',
        statusCode: 403
      })
    }
  })

  createWindow()

  ipcMain.handle('data', (e,data) => {
    data = JSON.parse(data)

    switch(data.type){
      case 1:
        console.log(`recieved mod start`)
        break;
      case 2:
        if(data.name = data.name.replaceAll("./", "").replaceAll("../", "").replaceAll("/", ""))
        fs.writeFileSync(`./mods/${data.name}`, data.content)
        break;
      case 3:
        if(data.name = data.name.replaceAll("./", "").replaceAll("../", "").replaceAll("/", ""))
        fs.unlinkSync(`./mods/${data.name}`)
        updateMods()
        break;
      case 4:
        shell.openExternal("https://discord.gg/uRGAHkHRdC")
        break;
      case 5:
        app.quit()
        break;
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

require(`./modserver.js`)