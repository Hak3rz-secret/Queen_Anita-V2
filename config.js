//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pjMWNaU2VWQmhKeXVvajd6ZU1pNFA0SmxiWTVPaXNxWGROSUdhSDJIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia003c2ljejMvc3ZsZlZmZittNmthbkJSQjMzMUFqeW4xUEJ5M3pHVU1VND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QnFseWdRcDVBcG83K3d5ZkxWV3YwSTVQaWlpNTJOSCsxSUFZYWRoRkg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVUU4ZmROV2sxWXpJRmhFZXZOSTIrMHVCSVJaemtuZ2pXZU9hY0U1RmlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKTTYvaU9GbkNBUHJPRVlONUo3eGJTYlkzTVk2dzJXNkJPNXdOaU5YbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx3Uk1Qek5WcXJaMmlzODFWQlh0VUxGU01MeXRKUlNteEJ2QXlwZXBKQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBWdzhYUWpXQk1DMktKUzFNSFJyZTBtUDQxTmljVFVKWjZuWVNvN0MyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGs5bE1Sb3VoZ045VHlWN0NaSnNtQTV2WlNVOTFRWENtNllkNmJmdDB4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNTc1dZNHdHc0xJRFNpNDRNVC9sUU8wKzZVQTEvMk9Cb2hnVC9BRkJsR3NRekJUK1BJcHpYbm9tZ08vSFZPMGdHWk1sbW9LYzFFeVM0SWlVbTV6c0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiI2Rno2aXhqUlorS3Z5QkxaOWlWYkVBeG04T3Z2UENTdXZxdnZ4bjk0RGFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1Nzc4OTI3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMjZDMUI5OTRDNjc4RDJDQTlEMjFCODlGODExN0RFNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzM4MzQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyNTc3ODkyNzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDg1QjMzQUVDMjhERTg3M0E0NUMwMDAyQkM0Q0UyM0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTczODM0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaXN6TDJpcEpUQTJRUlZiZEtfMmVNUSIsInBob25lSWQiOiJjODk1YjhlZS04ODFhLTRhMjQtYjFmZi02NGNjZDI1ZjZlZTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3JpRDJJYjNVOXFPaldpQXJoUnF2ZHlGd2trPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhlalBUNTRTSWNaNUJ1YzdoZzBJMlRuN2s0UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIOUhFUEpXSCIsIm1lIjp7ImlkIjoiMjMzMjU3Nzg5MjcyOjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhc3VrZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZIaTZJR0VOaS9oTFFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1NwVnZYcmRXSHBjYS8zdVZDN3F0eHZRaVhsZUszblNTOXlBUzBlWmVSST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ1RoclVrd0FTdGluV2pZUVJBWDQvZlk4S3hQVUk5UTBKQSttTVdUZkh0TmwzR0hxZ3lvUGQxeERNb1pWcEdiQ245VHUvTUVtWjg2Ym9SS1Y4Z2tyQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImN0RnJ6VjdMTGtqKzN0MkxoSnh3WnRoMHNWQ1c0WjFTb05lK01DZ0tNVmkzMHJLaklNOVJOdzRjcWZwMHdjeG04Yis1bG1udnNXYjhoenNPZkw5aERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjU3Nzg5MjcyOjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJFcVZiMTYzVmg2WEd2OTdsUXU2cmNiMElsNVhpdDUwa3ZjZ0V0SG1Ya1MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MzgzNDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUtLIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "233257789272";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/fd7eae51955895f2aed29.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/fd7eae51955895f2aed29.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©SASUKE_MD@QUEENANITA`",
  author: process.env.PACK_AUTHER || "Sasuke",
  packname: process.env.PACK_NAME || "Uchiha",
  botname: process.env.BOT_NAME || "SASUKE_MD",
  ownername: process.env.OWNER_NAME || "Sasuke Uchiha",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "doktakobby@gmail.com";
global.location = "Kumasi,Ghana";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
