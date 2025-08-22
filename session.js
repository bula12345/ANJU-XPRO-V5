//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJxcTdYczNhOURyN0k2YjZoTGRGa2NnbW5oNnl2UGcvSXU4WXQ2bWxXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3JCdEVIaXBDY0UwcXYrOUNvYXc4SmhoWjEzUldQTHd0T3I0d1ZVV0sxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSlVRUWRDbTBHTzlmSkkzcFpVeWhHaUE0dHZrMkF4Z2sxNUhJU1BlQUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ZGRFWDZTTjk4aWJBZ1RrL0lsSEkycDhTWGRkRWNYTm1SY3JocEtZa2swPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOUWk4WmUxNDZGS0V1akl3MFBMQXM3Y21aT0pjUHlBam9hb0RpVkx4bEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB2dWVwaFY1UXBXL2RYcUxHdlFnR01FZGdnYWJmWE1wQzZmYjY0Q2k4UjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtINU5BcGZ2enBtQzExUmRDZHNuOEVHUVpHYnZQVGhqM2QydHEwS1NGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0JBUzVGcFpEY25YaEZ0N2xCbUk3YTNRalhkalYvNlVqM0JRTERBM0F6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitXb01Pbk0wbm5oM2FXZ0xkNkxpakpoY0FHK2RMM1BDK05XV2Z2Ry96Z0t2bDMyd2dJZnl5TTFQak1sNjVORDhVTi84NmJpUW11TU1uWVU3V3FzUGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiI1NHFYZ1IvRElMTVVEWVpZdkQ2dUlWWlZmVFRTV0FLSVI0Slp0cEYzQ2ZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIR2tPcHZTOFE4VzBYQzZQTXNkU0pBIiwicGhvbmVJZCI6ImM1NDMzZDgwLTQ2MDEtNDlkMC04MTBhLTdlN2M5NmMzYjVhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0L0ZCSllHd09MRUoxL0VPSzVhWXV1THVxa0k9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml2SlI3bzI5aEkvMFJYeXpRUDBQWHA3Zi9GMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052V2diWUdFS3pYb01VR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind2RVZKUkVuSUs2QWdhUjFtcHdtMkRHZ1JJcWJQVDNHT1doSUJuc2ZwQTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRZckE4eVZjSjNwaHBhVEZ3dkhEdEs4amN2SzJENVVHalVyUkJ6dVNQenZOSG03UnZFaWUzYVdaS29mcit0QWhKeDFZWkRIbjlwamhqR3FSNk5yRkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3K0hQeGg4dytBV09zYVNjSWV5MlVhZlgxbGhBcVlLS09vSlRJWnZyckkzbFlTWXVvNUhwRjcrcC95K0FGUWJMVXkxcWUzTGQ4Z29JS3ZDZXZZdXdoZz09In0sIm1lIjp7ImlkIjoiOTQ3NDAwMDgxMDE6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzIyNDY1NzMwOTcyMzoxNUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAwMDgxMDE6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0x4RlNVUkp5Q3VnSUdrZFpxY0p0Z3hvRVNLbXowOXhqbG9TQVo3SDZRTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1ODUxNjk1LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0FRIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94740008101",
  PASSWORD: 
    process.env.PASSWORD || "binal123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
