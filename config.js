const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="shyam7dx@gmail.com"
global.location="Thiruvannamalai,Tamilnadu,India"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://shyam-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/Shyam7dx/Starboy-Md";
global.gurl = process.env.GURL  || "wa.me/13304089487";
global.website =process.env.GURL|| "wa.me/13304089487" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d663ffba5dacc88d02537.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "13304089487";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13304089487";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Starboy-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴛᴀʀʙᴏʏ-ʙᴏᴛ ʙʏ ꜱʜʏᴀᴍ』```",

 
  author: process.env.PACK_AUTHER || "ꜱʜʏᴀᴍ",
  packname: process.env.PACK_NAME || "⚡ꜱᴛᴀʀʙᴏʏ-ʙᴏᴛ🔥",
  botname : process.env.BOT_NAME  || "ꜱᴛᴀʀʙᴏʏ-ʙᴏᴛ",
  ownername:process.env.OWNER_NAME|| "ꜱʜʏᴀᴍ",


  sessionName:process.env.SESSION_ID|| "SESSION_06_11_01_07_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR04ycnRDTUVlc2Rpc1YySXEwWXE0c2h6a29hNk5LV2ZGTStJTm14TllGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHY1NTZvcWFFZWxTUXhYSnZCK21YbmlWYVlBK041anRRbFNsVUVaZmhoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRGM0UUFnR3BxQmpYbm1qMVNjN0ptbWVtRWNQOXBnYThPZFczWFpQTldvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZzZyZ1FjR0kxU0QwcFFHWkV2eTRBcHhWZ0F4SDJhTzRMd1grQTJjRm1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJNlZFTmhrajhPZGVUVDlaTGVtUGJuZzJXRWNYUU1tb2FKVW10a283bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsSVZkK29jdkVMVk82Z2RuQzcyVHZFanQyTVRzQnBLaUVLREw2ZURSWDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFKc2Q1WE5ycGNTb1JIT0tyMkkwY1Y4R1JhcVh3Smx1VjBtSldsaFVtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREZKZGszbzZzMTEweFBqMzk0OWhGSmxmUTQ3TDE3dHQrU3BIMUZBRWIydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImREZWwva3V5cGQ5N09RQ2ZGSnJFZWtRK0Zaa3l0ZENTdTRxY1ZmQk5tYytmS2dYMGhoNWZRTWFnZloyUGlBUC9sTmZ4K08vNWhyN0FVWDJNMHl3V2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJ0R3ZYN21ERTNuaXQ5ZTlqb2JybFNNSlNTQStGclplT21GZFVvWW1KNjA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzMzA0MDg5NDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFERjk3RjhDNDA3MTYxOTI3MThBMTlGRTcxQTY5NEJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ2MDc4OTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEzMzA0MDg5NDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg0OUExRDczMjk4RDlBNkY1MTc4Q0QyOUJCMzA0QUQ3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ2MDc4OTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5PYXZqczVjUzBlOGgxSjBMcWNHT1EiLCJwaG9uZUlkIjoiMmFmNjkzMTAtOGY2Yy00MWIwLTgwNGEtZWVlODk1M2EzNGE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM4eTE2MjRKMDBTbFduRVVkVVF0bWR1ODRRND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzaG4rNFdkbVR0cGNXSXZEZGJUV1J1QW1TMXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUJGN0pCR1EiLCJtZSI6eyJpZCI6IjEzMzA0MDg5NDg3OjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdm6rwnZGHJ/CdkYZcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4g8J2Qv/Cdm6/wnZupXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG7wnZul8J2RhfCdkYfwnZuo8J2RiPCdkYUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tyY2w5UUZFSStCNmF3R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYXozTlR0dUtvTGMzQzVESStjVUFsZVdudEl0VTNUcTBrd1hWblRCUGxBVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRENLczNXU2NYUkh2WU5BM1hKQWtUOUdMbWNMUDhxWEQvcWNhei9FRWNVZHhGRzI2ZmF3a2h3YnRvMDFiK3ZyQzNtb25sRldud0tkQ2lSSFhTNlhXRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNGV0h3WGh1bHdVOWdpYWxybnBsT3Q2OWU1SndJZ20yQ3hsOFVYZ1JtL2pTc0VxdHM0eFdVY2VDNFlaZk9zTW0wZkl6WWFxbEgyUG5vZDJUWTBDd2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMzMDQwODk0ODc6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3M5elU3YmlxQzNOd3VReVBuRkFKWGxwN1NMVk4wNnRKTUYxWjB3VDVRRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDYwNzg5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcnQifQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SHYAM",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
