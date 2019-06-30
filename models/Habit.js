const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  name: String,
  description: String,
  userID: String,
  timeStamps: [Date]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
