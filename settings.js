require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAt9RVvcWQVHUwQAAHEHAAAKAAAAY3JlZHMuanNvbpVUXbOiOBD9L3nVGgERP6pu1SIgoKgoegW39iFCgCAGTIKKU*73LXTu3HnYnb3LU+h0dZ*uc06+A1JghmaoBqPvoKT4AjlqjrwuERiBcRXHiII2iCCHYAQq68B9V1LIoGrFNk2naWcg7Hx7Z2Oy64luzaabQHEMLNpv4NEGZXXIcfibgpk*rVeVeiqcKuusal8Owo1*0cfyYT57N5V5cV*e7rP1bCgEb+DRVISYYpIYZYpOiMJ8hmoXYvo1+DN7vlsIJ8OEdjj2Jn7LuyG6ObLrgmT2*HideRIhITEDcfs1+Lt3a8Dp*mQTdrH8tVBiuncdYfg+pIap3LZLO90Lw8vNm7AXfIYTgiI7QoRjXn957yd7vbjNNvNcWHsr474YLn1HvU2vteWOEzOadPSNw4mgT63ga8DNhe*km3uhlMImWsVGlrjnLOFOddEUa70Px4e+KpndkytefwXu0g+tHP*P3m3NCOyNmnrr84Xdt3Zh0P6aCVaVLd4Xt0kdjftkuPH13vGLsqGHnbHTdb3eO*JiqZ8T1zIXljNh1dghROHVNLThrcrSOvmED3lFf4dSW16VmO6CvsvgYSdd1yw3pqorLDNXXR53iyKGEtVleKu7Rmd*KLf6QZPO0Xxyz29dUUiPxVE+SVPjwlr2ZJ4s9qt9N7u+PSc6otqOwEh8tAFFCWacQo4L8owJYhvA6OKhkCL+XC*A64rE523qdoJWZzC5DhOieq54rfbSJO+4TtfLe9n9GMOGnjYoaREixlBkYcYLWs8RYzBBDIz+*KsNCLrxF3FNu67YBjGmjG9JVeYFjD5Y*biEYVhUhHs1CbXmgCgYCZ9hxDkmCWv2WBFIwxRfkJZCzsAohjlDPydEFEVgxGmFfrpWK6Jm8Wsv0IyeJ4I2OD0JwREYAakn94eyIg8UpTsSpT*Yt2tTFpblN4I4aIP8mSYPuqLQHSqiIkmi2CQ28cdPgE29CHGIc9Zw6lZLEdmasZxhzELTVO1E1RIVfA70oYzX5qsiqCj0d2Y1R2NpNw4YKum+GOj2zLCNDjksdC88UeemHd*+oQgYgVgWbpIbWOEpr4qOMLSFi9zRczgjylA2VH94sZRLeewMzHp9G77jyz5cryxvfjiHojsJDpkf4+vwPdSzrXPQDbieZVxfvTXdInTBIfq1WSAczfFBNURDSX0ihSk6y9NgmhznuzmDhg+vpNy06AmvBq1Ma63lJdb6A0vRLQ1X6GqutGyft3pOi1suPXconookUV+afXom**FW4aeaGqqa3xijp*UJbAj8b+pewBuFCY*2LzV+PCb*Ysjx4Ww6ZykXU5pZSZQnO8c6Qwm6aq2l2tjtSfeVQKbnerAqwePxVxuUOeRxQU9gBCCJaIEj0Aa0qBrJ2iQufud+VbDHq9fkOWRc*bTBBp8Q4*BUgpHY7w2V*mAgia8slxalBVkKRkCcyaklN5qu1bL0OOQfrgJq81l0Cx5*A1BLAQIUAxQAAAgIAAt9RVvcWQVHUwQAAHEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
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
