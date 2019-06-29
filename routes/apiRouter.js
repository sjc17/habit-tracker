const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

router.get('/currentuser', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.post('/create', ({ body: { name, description, user } }, res) => {
  Habit.create(
    {
      name,
      description,
      user
    },
    (err, habit) => {
      if (err) return res.send({ error: 'Could not create habit' });
      return res.send(habit);
    }
  );
});

module.exports = router;
