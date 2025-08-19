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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVAxdkhVcmdCWkxxMjl6Y1prYjFtSmtjYm9mZlBMa0Y2WUFDKzV0bWxrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHV1THBpTEw5elVxNk5xRHJzbW14cW1jTEphMjJRZUtzMnJ3YUpWaUZUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR0FUR0E1SEw2SUV4djU2VDJlTnQ3VlhFRzg2Y1h5K0lnVGhuQnVuMEVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TVJQK0d2T3hqS21zZ0pQSytqeHVXTU01YUJJU0xMSTkxUmR2aEswKzFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPRmtXaW1iN3NiazBIWXQvT3V0R1RzOVRua1FLQUVlSm5kSnd1MVhLVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wUkxvb1JhREE2NWlZaVVBTzJ6d1IxdCs5U2QraVlib2wvOSs3akZKaGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME91aEVJVDVyOHAzdlNoYlZ5dk5UN000M3IxYWlnQU4zWng0Wm9aNnVXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVI5TnpjMWVOTHdLN2x6bFVNMmVUOEovZ05mancranc2K2YvL0VIcUNFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVVTEszUzVOQnUrY3VZY3ROK2ZyMDRLbDZGQ0JwUEwrd2ZiLzFxVUtjRTkrLzhoUHNQUEpZZ1VYR1Z1dTBOWUdDeStqaE9GemMyc2RHUUk1bVlaWWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJrQ3VIZHYyTDBNQy9PaDc2YkFGSFZmYzNUdzNBcklYZ3JCM2xpeU52Z1Z3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnaFd0MFNOdVRfZXUwUE4wNUxMeWNRIiwicGhvbmVJZCI6IjkyZjljNjRjLWFhY2EtNDQyYy1hNTk1LTA3NDczN2MxMWFmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUDJCcEtWbVlUUGtHcnI3L3J1R1pyVjNEbDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVJCV0pDVVNRWjhCdlp4NlpZd1ZJbDJoOGtvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZLQVNNN0xHIiwibWUiOnsiaWQiOiI5NDc3MzMwNTEzOTo3N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJiaW5hbCIsImxpZCI6IjE3MjkyMDc1MjM3NTA0Ojc3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGFUNFlnQkVNU0FsTVVHR0JRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR05xRUFUcGRockpUU05SbmpXei95RDhKZ2ZCSFFhVzJtNHFYR3UzVjh3WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSVhQM01PYjVZeitOZjhZL25CTlRkUjZXYnEycnhIMDRlMzljT3IrZTlsOVY0T3BIVXoxN21JOUIrUFBLcW5BdGhXaEVpRm8yTUR0M2NlYmRPc3FtQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IklZbytDOG9uN1E4V0VzL1NhNFp3YVN1SFhqMVdHaFRCTzZVemFPTjIwTWduZ3RHMHB2WUZtTmVEN3Q1c1YzbU1JaVpwb3UrVVhxU3gwREJUODByN2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzMzMDUxMzk6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmphaEFFNlhZYXlVMGpVWjQxcy84Zy9DWUh3UjBHbHRwdUtseHJ0MWZNRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NjQzOTg1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhYTiJ9",
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
