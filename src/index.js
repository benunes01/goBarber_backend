const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('server is start');
});

app.listen(3333, () => {
    console.log('server started')
});