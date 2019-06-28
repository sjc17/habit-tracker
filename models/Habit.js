const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  name: String,
  description: String,
  user: String,
  timeStamps: [Date]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
