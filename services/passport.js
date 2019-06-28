const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleID: profile.id });
        if (user === null) {
          User.create({
            googleID: profile.id,
            name: `${profile.name.givenName} ${profile.name.familyName}`
          });
          return done(null, user);
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: '/auth/twitter/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ twitterID: profile.id });
        if (user === null) {
          User.create({
            twitterID: profile.id,
            name: profile.displayName
          });
          return done(null, user);
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);
