const passport = require('passport');
const VKontakteStrategy = require("passport-vkontakte").Strategy;

passport.use(
    new VKontakteStrategy(
        {
            clientID: "51505432",
            clientSecret: "L1tNPPByOlOjAOfAaohx",
            callbackURL: "http://localhost:3000/auth/vkontakte/callback",
        },
        function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then(function (user) {
            done(null, user);
        })
        .catch(done);
});
