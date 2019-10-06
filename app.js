const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');
require('./models/index');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(port, err => {
  if (err) console.log(`SERVER SETUP FAILED || ${err}`);
  console.log(`SERVER LISTENING ON PORT ${port}`);
});
