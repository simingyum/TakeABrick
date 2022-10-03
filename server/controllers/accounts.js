const models = require('../models');

module.exports = {
  getAll: function (req, res) {
    models.accounts.getAll((err, result)=> {
      if (err) {
        console.log('Something went wrong in the controller for account');
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
  postParts: function (req, res) {
    // console.log('post parts: ', req.body);
    models.accounts.postParts(req.body, (err, result)=> {
      if (err) {
        console.log('Something went wrong in the controller for account');
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
  postSets: function (req, res) {
    // console.log('post sets: ', req.body);
    models.accounts.postSets(req.body, (err, result)=> {
      if (err) {
        console.log('Something went wrong in the controller for account');
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
}