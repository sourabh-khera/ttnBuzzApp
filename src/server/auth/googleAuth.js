/**
 * Created by sourabh on 4/5/17.
 */
const googleAuthConstants = require("../constants/constant");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userSchema = require("../api/users/users.model");
exports.useGoogle = () => {
    passport.use(new GoogleStrategy({

            clientID: googleAuthConstants.CLIENT_ID,
            clientSecret: googleAuthConstants.CLIENT_SECRET,
            callbackURL: googleAuthConstants.CALLBACK_URL
        },
        (accessToken, refreshToken, profile, done) => {

            if (profile._json.domain === "tothenew.com") {

                userSchema.findOne({
                    email: profile.emails[0].value
                }, (err, user) => {

                    if (user) {
                        return done(null, user)
                    } else {

                        userSchema.create({
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            image: profile._json.image.url,

                        }, (err, user) => {
                            return done(null, user);
                        })
                    }
                })
            } else {
                return done(null);
            }
        }));
    passport.serializeUser((userdata, done)=> {
        done(null, userdata._id);
    });
};