const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleID: String,
  twitterID: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
