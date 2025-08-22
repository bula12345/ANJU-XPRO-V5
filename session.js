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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJZDY5ZXFkYzhIQVpLQ3dPVFdYY0xGZEMwTitUelNIYXR3bnhObTJtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTBzUi9jODlmWXBKN29JYlhzTVpLaFNVTEk1dmUrWlNXL0laMUd0Qml3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSFlyK2ViVnd0Q3hxYkFrd1lTOFBaQ0dYUzNUOWFOQ296T01tdHVJTDJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRK0tMb2pmTWdLc0orc0dUbFQ4UFNuUFlPd3BhUXZCV3lzYnllMG5qZW4wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMSkFGVVhhc3VQd093R2ZQR3pweTMvRnFDV3lXc2lDTkxlVUVreFZpV3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0SFl5UHpia2NFanhiTFJJQ1JQQ3JSbExId0ZST2lpbUphU1BsVWoxV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RZTmhncTkzVTVXTGRwMXM4ZEdMOHN5K3dpT3JQYnFzSERvaUIxQjFFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjhZejQ5K0RxOUt3UkUvU1VzZ05mWmRZTExuSFlwTXo3Y0VnckgrTjFBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3Mjl1b3FRUFhySTFrTis0cVUwLzdEbTRoVnBJS290ZEJ6NFRsRnZpcE0rajJlcndpTy9zbzJiOUd0cWsrcGhUdFZXYUVPbmh1RTdWLy8zZnhWbmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImZwZFlOTkZ3Z0pjSUxoUlp1OE9lclkwcm13cUdXcFdJenRMMzhoWU1zUzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjE2Nzk4NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkNBQjNEQkNGRUJFRUEwNjBDMTEyQkQ4MEYwNDdFNkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTg0MjYxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjE2Nzk4NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjg5NUYzNTBFMzhCQzAxOENBNEU2N0I4NDhGQzY4NDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTg0MjYyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjE2Nzk4NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0M2MTY5MTQyQzhFNDM1NUMxMjREMTEyRUQ1ODg0OUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTg0MjYyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidEpnSHpaY25RRk9BY0w3YnI4MnNYZyIsInBob25lSWQiOiI3ODAyZTIzNS1lMWNjLTQ1ZGUtYTQyZC0zOGEyYmRiNTY4MmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXpNMEM0bXhudTFFdCtsRTZnSWlQamJzcklvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wekZrMTdleG1EZDFTTE9PY3R1eVlnYlpjbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBR0w1TkFaTiIsIm1lIjp7ImlkIjoiOTQ3NjE2Nzk4NzU6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwMjg5OTE4NzU4OTIyMjoxQGxpZCIsIm5hbWUiOiJiaWFubCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXI1Mk84RkVLeVFvTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0xWUHNVMWtHY0FpS3lWcmJKQzBJY1dVSHAwMmZydU9kaXdGbnJtUXlXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUdEU29GSXR4Q3h4M2lqOWpDTkR6Y3ZJS2t1aTZRSEpUeXRCdmdDK09QQnJzSllKUU1PTjV3WWtiOS9CNGlzbjRkTVNCcnZ6R2o2V2YyUlhIWVBOQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJJdVdjUnJZSGdUM2tiaFd4ZXNndktvK0VsMlVueUF4cnhzUndMVitoVDhvOE9pMm5nTW1DZWtVa1NQVXhYRS9hUEF4WVNQYXhLc2xuUXVpUnJ5bWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjE2Nzk4NzU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiQzFUN0ZOWkJuQUlpc2xhMnlRdENIRmxCNmRObjY3am5Zc0JaNjVrTWxyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU4NDI2MTgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1NsIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773305139",
  PASSWORD: 
    process.env.PASSWORD || "binal123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
