import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51955336417', '@ππππ_πππππππ', true],
  ['51936402349'], 
  ['573215492342'] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '@ππππ_πππππππ' 
global.author = '@ππππ_πππππππ' 
global.fgig = 'β’ SΓ­gueme en Instagram\nhttps://www.instagram.com/lytz_oficial\n' 
global.dygp = 'https://chat.whatsapp.com/LBL3QA0JywLAAqHWrssF27'
global.fgsc = 'https://github.com/JhonatanPpp/botmmm' 
global.fgyt = 'https://youtube.com/lytzzzz_ff'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*β _Cargando..._*\n*β°β°β°β±β±β±β±β±*'
global.rwait = 'β'
global.dmoji = 'π€­'
global.done = 'β'
global.error = 'β' 
global.xmoji = 'π₯' 

global.multiplier = 69 
global.maxwarn = '2' // mΓ‘xima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
