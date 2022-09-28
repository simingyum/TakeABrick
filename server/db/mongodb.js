const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1/products');
mongoose.connect('mongodb://localhost/legos');

const themeSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  parent_id: Number,
  name: String,
});

let Theme = mongoose.model('Theme', themeSchema);

// Theme.create(legoThemes);

module.exports = Theme;