const express = require('express');
const si  = require('systeminformation');

const app = express();
const port = 3000;

app.get('/server-info', async(req, res) => {
    try {
        const osInfo = await si.osInfo();
        res.send(`Hello world! (OS info: ${osInfo}`);
    } catch (e) {
        console.log(e);
    };
});

app.get('/', (req, res) => res.send('Hello world (expressjs)!'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
