const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/currentuser', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/create', ({ body: { name, description }, user }, res) => {
  Habit.create(
    {
      name,
      description,
      userID: user.id
    },
    (err, habit) => {
      if (err) return res.send({ error: 'Could not create habit' });
      return res.send(habit);
    }
  );
});

router.get('/gethabits', ({ user }, res) => {
  Habit.find({ userID: user.id }, (err, docs) => {
    if (err) {
      console.log(err);
      return res.send({ error: 'has occurred' });
    }
    res.send(docs);
  });
});

router.post('/addtimestamp', async ({ body: { habitID, date } }, res) => {
  const doc = await Habit.findById(ObjectId(habitID));
  if (doc.timeStamps.includes(date)) {
    // found same timestamp
    res.send('done');
  } else {
    // not found, push to array
    doc.timeStamps.push(date);
    doc.save();
    res.send(doc);
  }
});

module.exports = router;
