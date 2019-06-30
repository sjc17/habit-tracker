const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

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

module.exports = router;
