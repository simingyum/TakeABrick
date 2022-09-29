const controller = require('./controllers');
const axios = require('axios');
let router = require('express').Router();

let url = 'https://rebrickable.com/api/v3/lego/';
let authorization = { headers: { 'Authorization': process.env.API_TOKEN }};

router.get('/sets/', (req, res) => {
  console.log("what was received in axios: ", req.originalUrl);
  axios.get(`${url}${req.originalUrl}`, authorization)
    .then((result) => {
      res.status(200).send(result.data);
    });
});

router.get('/:endpoint/:num', (req, res) => {
  axios.get(`${url}${req.originalUrl}`, authorization)
    .then((result) => {
      res.status(200).send(result.data);
    });
});

router.get('/sets/:set_num/:endpoint', (req, res) => {
  axios.get(`${url}${req.originalUrl}`, authorization)
    .then((result) => {
      res.status(200).send(result.data);
    });
});


// routes to get from database
router.get('/themes', controller.themes.getAll);

// router.get('/sets/')


module.exports = router;