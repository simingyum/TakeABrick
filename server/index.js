require('dotenv').config();
const express = require('express');
const db = require('./db/index.js');
const cors = require('cors');

let router = require('./routes.js');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

// app.get('/get', (req, res) => {
//   res.status(200).send('got it');
// })

app.listen(process.env.PORT, (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});