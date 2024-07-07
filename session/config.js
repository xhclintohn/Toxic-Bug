const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_19_31_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkN4c3BrNmEzQ2hBazllU1YzTURxSjFhaC9PMFZvbkxtY1phYkV2ckZjb2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZmdUN1NTBTUXFTTmk0VXZRczQ2M0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjkzODhkZDctOGQ1MC00MTQyLThlY2UtZmI1MzExM2U0NGE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDIyNSxcbiAgICAgIDIwMixcbiAgICAgIDE4MCxcbiAgICAgIDE5MixcbiAgICAgIDExOSxcbiAgICAgIDEzMixcbiAgICAgIDc0LFxuICAgICAgNzYsXG4gICAgICAxOCxcbiAgICAgIDIyOSxcbiAgICAgIDE2NCxcbiAgICAgIDQ2LFxuICAgICAgMjEzLFxuICAgICAgMTMsXG4gICAgICAxNDYsXG4gICAgICAyMDYsXG4gICAgICAyMTIsXG4gICAgICAxNyxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDgsXG4gICAgICAzMSxcbiAgICAgIDk2LFxuICAgICAgOSxcbiAgICAgIDIxMixcbiAgICAgIDExMSxcbiAgICAgIDE3NixcbiAgICAgIDIxMyxcbiAgICAgIDU2LFxuICAgICAgMjM1LFxuICAgICAgOTksXG4gICAgICA3MCxcbiAgICAgIDIyOCxcbiAgICAgIDE4NyxcbiAgICAgIDI5LFxuICAgICAgMjQxLFxuICAgICAgNTEsXG4gICAgICAyMDgsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSE1SSllBQUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc3OTMwMzc3NjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1MDE0MDM1NTc0OTg5OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iZXpka0NFSldmL0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZUxwQ0Z4cEJicDlXNkpJMlZSeVVERUQ4OUovMXFoOXB5a1BBeGRZTUVYdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaTndVeno3NGZHYzZ4NXFRM3dFbDJjQVZiNlVBQWszK3V5R1d1aGgxNTRPUk1IdnR3Sjh5cmtYSURkUGVjZ1VPKzNXQ2p6K1U0TWNlcVhUdHBXdmpEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4ODdGY1VPRlB1OVFFY2ZYeDIxMXlGbkd1cTJmM29zdUJpb2hiTFV6Z1dUb3pYS2xrbjZ6VHNPU2srYlY2d3ZEVXNjaTdIblhjUGdodXN2STl1VklpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA3NzkzMDM3NzY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjAzMDk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWhZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNaFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNaWRWM1NsS2t4Q2VCRE9qSHE2eU5IbytWTjZpWDRIc3VJdytQdVpSeElRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyNDc5MTE0MSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
