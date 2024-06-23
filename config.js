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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124456771";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_22_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwaTZzbUVHZmJxZ1loaUkyd0NDdlFLenhnV3BSVXVsRXc5WEdWR21PL044PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIM29GVHNhYVF0T1VOZVBkV05IUFdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlNjUwMTRkLTIxNjUtNDM5YS1hMjdiLTIzZjYxN2IwOTRkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMjUxLFxuICAgICAgMTIxLFxuICAgICAgMjE4LFxuICAgICAgMTk1LFxuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAxNTAsXG4gICAgICA1MyxcbiAgICAgIDE5NixcbiAgICAgIDIzLFxuICAgICAgMjE3LFxuICAgICAgMjAyLFxuICAgICAgNixcbiAgICAgIDYsXG4gICAgICAxNDIsXG4gICAgICA3OSxcbiAgICAgIDE0LFxuICAgICAgMzEsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNDQsXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICA1NSxcbiAgICAgIDg0LFxuICAgICAgMjExLFxuICAgICAgMTE2LFxuICAgICAgMjE4LFxuICAgICAgODgsXG4gICAgICAxOTcsXG4gICAgICAxNTAsXG4gICAgICAyMTQsXG4gICAgICAyMTksXG4gICAgICAxMjAsXG4gICAgICAxNjUsXG4gICAgICA5MCxcbiAgICAgIDYwLFxuICAgICAgNTIsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTNSQkdKRjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQ0NTY3NzE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDSElERVggRElHSVRBTCBTUEFDRVwiLFxuICAgIFwibGlkXCI6IFwiMTc1MTUxNDUwODA4MzY6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlXd3ZnSEVOL3gzYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMHBkVzgxYVAybEJwWjIwUFpuYlZ5TmZUMzZKaHk5WnZuV29La3QyMGxzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNQWjhuZ3RlSEIyVDhRSW15R1ZOczZvKzJnQjV6Rm9KbFJ2WTlGdHpwUkJ3cnhWY2FCQ3k3M01qRFYwbWU5TmJCdGpIdzY0RW9ud0pFWFJkU3pkQkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpKMjVxenBIMzRpTzdqY0hkdXZ4QUI4SnR1dkYvb1J5eTRYb1lCWG5VQ3JVNm5GcUtvd0hlQXJ1L25KZms0UmRMWlVXSEI0cDV2RDA0NjdxWithbGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQ0NTY3NzE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTEwNTc2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
