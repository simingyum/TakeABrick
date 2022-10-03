const Account = require('../db/mongodb.js').Account;

module.exports = {
  getAll: function (callback) {
    Account.find({}).exec(function (err, result) {
      if (err) {
        console.log('something went wrong in module for account');
        console.log(err);
      } else {
        callback(null, result);
      }
    })
  },
  postParts: function (value, callback) {
    Account.findOneAndUpdate(
      { id: value.id },
      { $push: {favParts: value.favParts }},
      { upsert: true },
      function (err, result) {
        if (err) {
          console.log('something went wrong in module for themes');
          console.log(err);
        } else {
          callback(null, result);
        }
      }
    )
  },
  postSets: function (value, callback) {
    Account.findOneAndUpdate(
      { id: value.id },
      { $push: {favSets: value.favSets }},
      { upsert: true },
      function (err, result) {
        if (err) {
          console.log('something went wrong in module for themes');
          console.log(err);
        } else {
          callback(null, result);
        }
      }
    )
  },
}