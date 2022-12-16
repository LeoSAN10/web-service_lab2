const passport = require('passport');
const YandexStrategy = require("passport-yandex").Strategy;

passport.use(new YandexStrategy({
    clientID: "9acfd360763b471b8b7515e554e9a28f",
    clientSecret: "dff7a2ca7d80424db0c318f6273bee1b",
    callbackURL: "http://localhost:3000/auth/yandex/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}
));