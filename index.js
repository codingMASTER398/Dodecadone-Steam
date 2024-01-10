console.log(`                                                                                                                   
Hi, I'm Chris Pratt, and you are DO- DECA- DONE!!!                             

Welcome to the Terminal! Nothing special is normally logged here, aside from occasional errors.
This screen may help if Mark isn't running properly.
If there's an error here you can't solve, or it's just not working properly...

Email me: coding398@outlook.com

## And if you're someone from Steam reviewing this, have a great day! love the work that you do. ##

`)

const { app, BrowserWindow, protocol, net, session, ipcMain, shell, dialog } = require('electron')
const path = require('node:path')
const fs = require(`fs`)

const { localStorage, sessionStorage } = require('electron-browser-storage');

const isLinux = process.platform == "linux";

const dev = false
const STEAM_APP_ID = 2754840;

let steamworks, sw, mainWindow;

if(isLinux){
  try{
    steamworks = require('./steamworks_linux/steamworksjs.linux-x64-gnu.node')
    sw = steamworks
  
    steamworks.init(STEAM_APP_ID)
  
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
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    transparent: isLinux ? true : false,
    webSecurity: true,
    contextIsolation: true,
    webPreferences: {
      preload: path.join(__dirname, '/preloads/transmitter.js')
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

  if(!fs.existsSync("./workshopUpload")){
    //fs.mkdirSync(`./workshopUpload`)
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

  setInterval(()=>{
    if(dev) fetch(`http://localhost:3008/dodecacheck/${steamworks.localplayer.getSteamId().steamId64}`)
    else fetch(`https://ticker.coding398.dev/dodecacheck/${steamworks.localplayer.getSteamId().steamId64}`);
  }, 120_000)
  if(dev) fetch(`http://localhost:3008/dodecacheck/${steamworks.localplayer.getSteamId().steamId64}`)
  else fetch(`https://ticker.coding398.dev/dodecacheck/${steamworks.localplayer.getSteamId().steamId64}`);

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

  ipcMain.handle('data', async(e,data) => {
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
      case 6:
        steamworks.achievement.activate(data.achievement)
        break;
      case 9:
        switch(data.a){
          case 1:
            shell.openExternal("https://store.steampowered.com/app/2755530/")
            break;
          case 2:
            shell.openExternal("https://store.steampowered.com/app/2755540/")
            break;
          case 3:
            shell.openExternal("https://store.steampowered.com/app/2755550/")
            break;
        }
        break;
      case 10:
        let url = dev ? `http://localhost:3008/deca` : `https://ticker.coding398.dev/deca`
        fetch(url).then(async(r)=>{
          if(r.status == 200){
            mainWindow.webContents.send("data", await r.text())
          }
        })
        break;
      /*case 7: // scrapped steam workshop
        console.log("YES", data)
        
        steamworks.workshop.createItem(STEAM_APP_ID).then(async(item)=>{
          fs.mkdirSync(`./workshopUpload/${item.itemId}`)
          fs.mkdirSync(`./workshopUpload/${item.itemId}/c`)
          fs.writeFileSync(`./workshopUpload/${item.itemId}/preview.png`, data.previewImage, 'base64url')
          fs.writeFileSync(`./workshopUpload/${item.itemId}/c/mod.js`, data.content)
          console.log(item)

          let res = await steamworks.workshop.updateItem(item.itemId, {
            title: data.name,
            description: data.description,
            changeNote: "Initial Upload",
            previewPath: __dirname + `/workshopUpload/${item.itemId}/preview.png`,
            contentPath: __dirname + `/workshopUpload/${item.itemId}/c`,
            tags: [],
            visibility: data.visibility
          }, STEAM_APP_ID)
          steamworks.overlay.activateToWebPage(`steam://url/CommunityFilePage/${STEAM_APP_ID}`)
          console.log(res)
        }).catch((e)=>{
          console.log("ERR", e)
        })
        break;*/
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
