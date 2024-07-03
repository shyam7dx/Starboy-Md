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
global.gurl = process.env.GURL  || "wa.me/917026104109";
global.website =process.env.GURL|| "wa.me/917026104109" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d663ffba5dacc88d02537.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917026104109";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917026104109";

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


  sessionName:process.env.SESSION_ID|| "SESSION_07_28_07_03_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NoWks2c24rL2E5NHpQMlBwelVGcjVQYlh2YXJkK2lNWm8vS1FVSlFGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic21qUnJwTnJhSDVpQjlOYVFFZjBaU2N3dHM4dWNLQ1V5b01iTWxORXFTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSE5HZHpOb0tRZG5PY0wxNFFhL1B0QWxhNUd5TXBpd2lZY0xlOVlONlY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bmQ1SG9XVktOcnpOR05kMTdZSlBMT1h1Z0I4VzZSS0tXa2s3cFQyY1M4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CeTZ2cGFXQmxZb0VnMXpMSHZRZkZxOWErTXprbTlZNHQxOEgyMkpkR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisvUzFlMkFKZTh0bnREeXBjSjdNdENtNGJjbnlxaTh1Y1c3QUJ6eU1TM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpXUERTcUVTLzdyM0VRSkFlTmhQaklIWVdyemhINndwYVk0OTZhbXFHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnhBdWpJT0UvTThNbHg5ZTlyazZuV0Jyc0RmMGF2cGJWcHI0ZlQvMXNsOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik93eFJ5U3NiSDdPb2JuWDVETS9oYy9CWFExMUJHdW9WVm1kUVphTDFRNU1PYVViNjFFL21USmszK3NrcU42TFVPeVBudklPSXRtRVdLb01jc2JROWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Iiswc1ltbjJDL3ByblljZmN5T0RhbHYwM0I2NW1wNGMzZzFsQjJHL0F4cEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3MDI2MTA0MTA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFEMEQ4NzU4MDgxNzYxOTRGQTYxNUYxMTRFRUFEMzBEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5OTE3MDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAyNjEwNDEwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGN0E1NUQwRkU2RTI0REMxOTExREVEMjE4REM3MzhERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTkxNzA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwMjYxMDQxMDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzQ3MzBBQkRCMjZBQjREQzEzM0MxNjg2M0ZFRTQwMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTk5MTcwOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3MDI2MTA0MTA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA1QTU5NDAzNjYyRDFBMTgxRkVCNUFGOTcyQTY4OUM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5OTE3MDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpvTThuZldPU0x1bVhkUEZXU2pMZWciLCJwaG9uZUlkIjoiYWJhOGIxYmItM2UzZC00MGE2LTljYjAtYWFhMzYyNmIxZTQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVrdkMwVm9uMW40Umw0dG5WOTB1Q25SSVFNMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiN2xlbERSZ2k5bmhMUEY2a2RZUi9WNHpvems9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFRQVFcyTUMiLCJtZSI6eyJpZCI6IjkxNzAyNjEwNDEwOTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkknbVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblNoeWFtIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJclRnYlVDRUpiN2s3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJISlY4SklKdjdkdHgxOTl3M1MxaXRvTGU1NU5palVVVk9pQmZWTWhkcVVnPSIsImFjY291bnRTaWduYXR1cmUiOiJXb0ZGVjQ1OEVqS0Z1WTVmTEF3WndVTU5MTjFZSTRDN1ZLanJ4RCtUd28yckxwdDJ6WW5sZXVVQU1zSVFQS0NBdmVoVUdVMzVVOEFqRXRyRUdVWFFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2RLNm8vVVFGR2czSldHZTJCSWRhb0ZaVHNJK29wMkdLWGE5UjYxOG1IbXN2RnRXbDZjSE01TlNJdGluRHhCTFl4SDNRSXdIQ0w4bk1DamcyYjJhaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMjYxMDQxMDk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSeVZmQ1NDYiszYmNkZmZjTjB0WXJhQzN1ZVRZbzFGRlRvZ1gxVElYYWxJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTkxNzA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNRZCJ9",  // PUT SESSION ID HERE 
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
 
