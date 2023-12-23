// OSS Mister Mark Builder Man

const packager = require('electron-packager')

console.log(`Packaging for Linux...`)
packager({
  dir: "./",
  icon: `./favicon.ico`,
  executableName: 'dodecadone',
  name: `Dodecadone`,
  out: `../Dodecadone Built/Linux`,
  overwrite: true,
  platform: `linux`,
  asar: false,
  appCopyright: `Lachlan Noble (coding398) 2023. CC BY-NC-SA 4.0`
})

console.log(`Packaging for Michaelsoft Binbows...`)
packager({
  dir: "./",
  icon: `./favicon.ico`,
  executableName: 'dodecadone',
  name: `Dodecadone`,
  out: `../Dodecadone Built/Windows`,
  overwrite: true,
  platform: `win32`,
  asar: false,
  appCopyright: `Lachlan Noble (coding398) 2023. CC BY-NC-SA 4.0`
})