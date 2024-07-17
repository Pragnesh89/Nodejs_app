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

const express =  require('express');
const app =  express();
const port =  3000

app.get('/', (req, res) => {
    return res.status(200).json({ 
      nome:  'Learn SonarQube code coverage',
      status: true 
    });
});

let server = app.listen(port, () => {
    console.log(`Application server running on ${port}`);
});

module.exports  = server;
