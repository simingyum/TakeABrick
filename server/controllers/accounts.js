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
    console.log("i should be here")
    console.log(req.body);
    models.accounts.postParts(req.body, (err, result)=> {
      if (err) {
        console.log('Something went wrong in the controller for account');
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
}