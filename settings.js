require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADQ8S1uj0WJSUgQAAHEHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGCwBRSM6YgFpQMS7omzsQwnFRblWFSA94b9vYE9Pz8PubC9PRZJx8uTJk8V3kOUxxRZuwfQ7KEhcI4a7I2sLDKZAqYIAE9AHPmIITAFW860gV*QuG3h4Kdlx7vBvKDUIZEV1VOsZdhOjEJe5nr+ARx8U1SWJvd8AwqrRPNFpapXanLtnVrMZ0vzEhNZO6+C6TfXtULQTa6dKL+DRIaKYxFmoFRFOMUGJhds1isnX6IeKOlsmcNSgE1QhVdm2miyVhKnayr7Nz8XdHWjCkZeTw+2L9IM1NGpZ5k+tZ7+tUk2rk5Q*NsfM2HAz57VSaLQYy7Yky+*0aRxm2Dd9nLGYtV*Wfad76WJJPbJnbeoc06VwPef1Utmue6+9O8kDn0AoldnwGH6NeHKYTSLGpThlEVfwK31VlGEle02ecdUkFV*HO54*7bCR3X4lviYfXrn9H90Htg0nV+dYWuPZCTaojAxu7Yx6wXhh7Mva1M615l7X9d44fI2+PF*m*Ba7O72KIjE+8ec3ervt2Q6eI9NaiTjZmrSKrpvY*KSPWEV+x3I20GCq09Vib7mLsnfVvNuRkjg9HHc0pxctdA*ivlc5fFDD4DIcNEq03KaBo2xMbjgRZdjk93t2lY5xwr0aPc4yxYkqvzw7uuHW9MEUPvqA4DCmjCAW59kzNhD6APn1DnsEs6e8YG2VghAtavVULo57oZg58+05FAjjL2+L3Si4cvbmasjVdda8gD4oSO5hSrFvxJTlpLUxpSjEFEz**KsPMnxn74PryvGwD4KYUHbIqiLJkf8x1Y+PyPPyKmO7NvPU7oAJmA4+w5ixOAtpp2OVIeJFcY3VCDEKpgFKKP7ZISbYB1NGKvxza9Xc74S3XE0S3bkA+iB9DiT2wRQMRWE8EUaCNBrxU8j*Qb81HSwqim8ZZqAPkmeaIPFwwE9GcDQcQtgldvHHT4Idno8ZihMKpkBdVyuITVWze5vS9nRdtkNZDWXw2dCHM96Vr*JzRdDJ0SsbK0NHOVNcEDeXZqalmRqXXZaznZeSxV29vfwDCJgC98Avl8OA8+h2e7q318u4LvyLge2ZyvTR5PX01q7ssSRM9htzxbgwgemYug2czO3yeksLSRvtIusSOrHMlb2eyNb+SN28dNV8XMce*rXYVp83VikZS0eMNASD9YGms3PR3rxwf66Z*QZd6rvtYHOIVyK*Ma2sCER6er25IVb20RjKjabX9z3NlYu60GtXlxpl8+7Z584kP+6q+OmmblTdaxDj5+pnqBvgf4*unXjnsMGj*wvGj8vkXxZSuZT6ohwmMCJXI*ST0FkYJRqitdyqkaqsxeHbZpDNy1baFODx+KsPigSxICcpmAKU+SSPfdAHJK86y5pZkP+mmCoPzI*OE0SZ*LkG+zjFlKG0AFM4Hg3gSBrAyXvWmuSFgWjU*QssITKenm7lotgxxD62CsjdY5ADePwNUEsBAhQDFAAACAgANDxLW6PRYlJSBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254794648663',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'jethro-tech-dot',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
