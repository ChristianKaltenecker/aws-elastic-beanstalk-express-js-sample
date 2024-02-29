const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to my hello world script!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
