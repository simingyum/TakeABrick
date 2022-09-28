const models = require('../models');

module.exports = {
  getAll: function (req, res) {
    models.themes.getAll((err, result)=> {
      if (err) {
        console.log('Something went wrong in the controller for themes');
        console.log(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
}