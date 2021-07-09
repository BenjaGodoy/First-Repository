const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan'); 
const http    = require('http');

const chalk   = require('chalk');
const childProcess = require('child_process');

const app     = express();
const httpServer = http.createServer(app);

app.use(morgan("dev"));

app.use(cors());

const APP_PORT = 51030; //El que tú quieras, menos el 443 ni 22
const APP_HOST = 'localhost';

app.get('/', (req, res) => {
     res.send("Hello!! This is my first server on Express!!")
});  

httpServer.listen(APP_PORT, APP_HOST, () => {
     console.clear();
     console.log(
          chalk.hex('#FFCA76').inverse(`MILL3NIUM-API-WEB`),
          `was developed and it is maintained by`,
          chalk.hex('#6969ff').inverse(`MILL3NIUM's`),
          chalk.hex('#4040B3').inverse(`Devs Team`),
          `👨 💻 👩`
     );
     console.log(
          `Copyright ©️`,
          String(new Date().getUTCFullYear()),
          chalk.hex('#6969ff').inverse(`MILL3NIUM`),
          `, All rights reserved`
     );
     console.log(
          chalk.inverse.white(`MILL3NIUM-API-WEB:`),
          `I'm started running 🚀 on port`,
          chalk.hex('#82FFF8').inverse(APP_PORT)
     );
});