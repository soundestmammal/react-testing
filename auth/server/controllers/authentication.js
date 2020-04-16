const JWT = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// Returns a JWT, provided the user
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return JWT.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
    // user has already had their email and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({error: "You must provide email and password"});
    }

    // See if a user with the given email exists
    User.findOne({email: email}, function(err, existingUser) {
        if (err) { return next(err); }
    // If a user with email does exist, return an error

        if (existingUser) {
            return res.status(422).send({error: "Email is in use"});
        }

    // If a user with email does NOT exist, create and save user record 
    const user = new User({
        email: email,
        password: password
    });

    user.save(function(err) {
        res.json({ token: tokenForUser(user) });
    });

    // Respond to request
    });

}

exports.updateprofile = async function(req, res, next) {
    const first = req.body.first;
    const last = req.body.last;
    const uid = req.body.uid;

    if(!first || !last) {
        return res.status(422).send({ error: "You must provide a first and last name"});
    }

    User.findByIdAndUpdate(uid, {first: first, last: last}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}