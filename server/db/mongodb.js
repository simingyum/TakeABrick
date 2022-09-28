const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1/products');
mongoose.connect('mongodb://localhost/legos');

const themeSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  parent_id: Number,
  name: String,
  popular: Boolean,
  image_url: String
});

let Theme = mongoose.model('Theme', themeSchema);

// Theme.insertMany(legoThemes, function (err, docs) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successful!')
//   }
// });

module.exports = Theme;