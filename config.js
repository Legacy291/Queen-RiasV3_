const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "Toxxic-Boy",
    ownerNumber: process.env.OWNER_NUMBER || "2348024322741",
    mode: process.env.MODE || "public",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "Rias Gremory V3",
    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU8wUm5jKzNadG9acHhwWlhrWGh5VUFLNVh1Q3dPUzRyb2VMeHEyU0Fsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2RVQzZ6U0NDTW5RS09MbXNIU1NZMUQvdzJvT2lGR1NVL2MxWFFvWlVpQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UEFXbjE5RGJiNWE3S1plWFh3dEZVKzFIQ0V1UWo3UGgxUVN6Ky92dTNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHF2SXVyZHpzOHc5dTZLYUZ2dHQrUmc0MkdNUXNGZnBGL25HK3grWGtjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OakRHV1BiUkQxQmlFMG1VQk9uOUI3OU1YcXFFRW82U0VjUFFlTHdJMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJKRnU0THdiUjVZVWVWeUhnbUtnN3ljaTlBTWFZbWpaTUkzZHZ3YXZveTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEo2ZnRwVjNTeDZLQTM2MnVuYXpFbERrNFpCRUdhVTdyaXRLZXFHYVFrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnJoNnA2bGpoV2JpcjdnaTRuRi9vemhjWFEwVyszNWI0cStTME5zNEwyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGSTFoNC9iMnpNWEdRZE1FSG1QODBZM1NkdmdUNWZzQmpBb001M1hTd0lkeS9pOWphUHdrNjlJV2gwenErVEFCcTdGTEZRN2xHZVZnREZYb2VCbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IlAzVFZTelk4QkRGUUluRHJMVVVVT0QvYitUSDdwdUc0TENoMFlobGVyNEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNjcVlrRjJIVElPMGtRdEg2YWYzeXciLCJwaG9uZUlkIjoiOTA1MjViOTAtOTRlYS00MzdjLTgzZDMtMjM2NmY2ZGY4MTUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwzbHdaVCtaNUxWbXI0NXdvZnhrM1F2cGhnTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnd1RFQ2JSNElFdmgvSUlSTWp6bmNXNHIvOEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1hBNk05NFkiLCJtZSI6eyJpZCI6IjIzNDgwMjQzMjI3NDE6NDZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibGVnYWN5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZjZ5TnNCRUpuRzVMd0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEYkpUT1FVdjZkQ0dJMHRzUG1udFNsMGZpaytYSmlSd3N4dmVKK1ZTamtnPSIsImFjY291bnRTaWduYXR1cmUiOiJjbkRwd1hlcmVrbnBmOWd2K0hIVTVpdStrWC9adUQwNFJqdFRGOFNPUCtDdmxjSVRoQnJ6NWVvWmJRYWcydEVZT0hLRjFOL1Vrd05ML0x4ZVNrTDdBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXV0ckg2YkxtYnJjR1BmODQ2ZUs1aHhqNkU0Rlg3aktnOWZYZmsybkYvQzcwWm5rK2dTNU00M1E1elNOcHRVbDdoYzBMUU1YVVlzRDdNZ3RZNW45Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDI0MzIyNzQxOjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlEyeVV6a0ZMK25RaGlOTGJENXA3VXBkSDRwUGx5WWtjTE1iM2lmbFVvNUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgwODkyNTV9",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
