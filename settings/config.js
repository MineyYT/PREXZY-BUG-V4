const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "393291958600"
global.name = "NexusTrappy"
global.ch = 'https://whatsapp.com/channel/'
global.status = true

global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = 'PREXZY-BUG-V4'
global.author = 'Nexus'

global.pairing = "PREXZY"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
  
