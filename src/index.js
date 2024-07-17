// index.js

//const express = require('express');
//const app = express();
//const port = 3000;

//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

//app.listen(port, () => {
//  console.log(`App listening at http://localhost:${port}`);
//});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { user } = require('./mongo');

dotenv.config();
const port = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This app is running properly');
});
