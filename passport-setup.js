const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '89872944236-2bfbub37vi4gkq9q9603bv1oupse6143.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

