const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
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
        // If user already exists
        if (user) {
          return done(null, user);
        }

        // Existing user not found - create new user
        const newUser = await new User({
          googleID: profile.id,
          name: profile.displayName
        }).save();
        return done(null, newUser);
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
        // If user already exists
        if (user) {
          if (profile.displayName !== user.name) {
            user.name = profile.displayName;
            await user.save();
          }
          return done(null, user);
        }

        // Existing user not found - create new user
        const newUser = await new User({
          twitterID: profile.id,
          name: profile.displayName
        }).save();
        return done(null, newUser);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);
