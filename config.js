const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_34_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtmQTJ3WUsvbnpXVzRRc0ZKN0dMOGhyWHNnYVFObUtTUjEreGF5M0Jyelk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlh4YWxYTGRmUk1PVHNzclRSZi00NEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTVlMDE5ZDMtM2Q3Zi00OGZhLWI1YmItNTg3MjRkNGFlY2Q0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE5OCxcbiAgICAgIDE4MixcbiAgICAgIDE5NixcbiAgICAgIDg5LFxuICAgICAgMjI5LFxuICAgICAgMjQ3LFxuICAgICAgMTEwLFxuICAgICAgODEsXG4gICAgICA1NSxcbiAgICAgIDEyNCxcbiAgICAgIDczLFxuICAgICAgMjE1LFxuICAgICAgODIsXG4gICAgICA3LFxuICAgICAgMTQ2LFxuICAgICAgMjQ4LFxuICAgICAgMzMsXG4gICAgICAxNjgsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMDksXG4gICAgICAxMSxcbiAgICAgIDE4OSxcbiAgICAgIDcyLFxuICAgICAgOTAsXG4gICAgICA5NyxcbiAgICAgIDI0NixcbiAgICAgIDE4MyxcbiAgICAgIDE2NixcbiAgICAgIDIyNCxcbiAgICAgIDIxOCxcbiAgICAgIDIxNyxcbiAgICAgIDE2NyxcbiAgICAgIDM4LFxuICAgICAgMjYsXG4gICAgICAyMDAsXG4gICAgICAyMTYsXG4gICAgICAxNDAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTFgrT2tERUpLem5zSUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVvRmJYOUEvd0xYTEtkMVdtcHd2cHd0N1NybVVTRjkzajk2ajdjN2REVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXVBTzE4OXBYZWhiRlhTVWx4UVdPeWdqcGxqS2RvNy9qUzZ5clRKK3JpUGVCcnVscXMvdlB2TjNJZVBGNUYyQkV6MW9oSkpobUtlLzhaa0ZRdnhxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWRGSE9WQVNFa1hqbzJQQVhUSWN4dU0raHFvbUNiYUI4ekpVbHptcFpQN1JjZmlyMy9BSGRTSVRWTWRGa1hySjVraTJDQXdqZUFYNFRUUEdPSG5PaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2OTE2NDk2Nzc6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNDQwNDE4MDc3MDk5NTo0N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjY5MTY0OTY3Nzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5NTIyODM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb3QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsQ2ZucHFHSW82WXhSUTdpUEk4SzVSV1U4M09IdTQ5aVArZUQ2N1l2Si84PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0ODQ2NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjcxMTE4OTg2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhvdS5qc29uIjogIntcImtleURhdGFcIjpcInRkUkJLWVZ5UlNaRXQrekFhcU1ET2t2aEFucUUyZUVZb0o3dVVwQ1Q3cEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ4NDY0MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSEZ2M25iQkJsbXY5TkhBakxveThmek1BWGNBWm4yZjZTUXlGQ2V1S2tNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0ODQ2NDIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDk1MTgwNzM3MTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4L1VCMS9peGlad0s1ZnR6a2xXSjlOakxTWHFiM0M4YW1iNlVWbU9JZVRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0ODQ2NDIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG94Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDFudXhsMldVS0pJSExxMlhLV3didXdtVHQ0VnBRTTFDdkVsTVlsQXdnUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3NDg0NjQyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzMjhjMmpWanlISGVqWVVOWjh5SWd2bE9pY1pWTWZxZ2dJNzFUTDRUWE9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc0ODQ2NDIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0OTUyMjgyMDEzOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ3dBQUhvdS5qc29uIjogIntcImtleURhdGFcIjpcImVGbEtTTEd1Uk5XMmdQVTBQYnJ1dndiMGttK0FPS0xjMHZEZWNCRW1RT0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzQ4NDY0MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDkzMDc2NTY2ODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
