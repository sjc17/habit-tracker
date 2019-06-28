const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const authRouter = require('./routes/authRouter');
const apiRouter = require('./routes/apiRouter');
const keys = require('./config/keys');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  console.log(req.user);
  res.send();
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
