/*
    This is where the passport code will go

    What will passport do for me in this application?
*/

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create the local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    // Verify email and password, call done with the user
    User.findOne( {email: email }, function(err, user) {
        if(err) { return done(err); }

        if (!user) { return done(null, false);}

        // I need to compare passwords, the encrypted to the plain text password
        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false); }

            return done(null, user);
        })
    });
    // if it is the correct email and password
    // otherwise, call done with false
})

// Setup options for JWT Strategy, look at the header, specifically the authorization
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create a JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

    // See if the user ID in the payload exists in our database
    User.findById(payload.sub, function(err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });

    // If it does call 'done' with that other

    // otherwise, call done without a user object
});

// Tell passport to use this strategy

passport.use(jwtLogin);
passport.use(localLogin);