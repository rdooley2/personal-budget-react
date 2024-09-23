const express = require('express');
const cors = require('cors');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.use(cors());

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

app.get('/budget', (req, res) => {
    fs.readFile('./server.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading budget data');
        } else {
            const budget = JSON.parse(data); 
            res.json(budget); 
        }
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
