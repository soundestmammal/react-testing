const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
        if(err) { return next(err); }

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            
            user.password = hash;
            next();
        })
    })
})

// Create model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;


/*
How to enforce this uniqueness

ROB@gmail
rob@gmail

The uniqueness check in mongodb would find these to be two unique emails because it is sensitive to case.
*/