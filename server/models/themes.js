const Theme = require('../db/mongodb.js').Theme

module.exports = {
  getAll: function (callback) {
    Theme.find({}).sort('name').exec(function (err, result) {
      if (err) {
        console.log('something went wrong in module for themes');
        console.log(err);
      } else {
        callback(null, result);
      }
    })
  }
}