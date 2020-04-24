const express = require('express');
const si  = require('systeminformation');

const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    try {
        const osInfo = await si.osInfo();
        res.send(`Hello world! (OS info: ${osInfo}`);
    } catch (e) {
        console.log(e)
    };
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
