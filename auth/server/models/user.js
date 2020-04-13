const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    first: String,
    last: String
});

// On Save Hook, encrypt password
// Before saving the model, run this function
userSchema.pre('save', function(next) {
    // Establish reference to the user model
    const user = this;

    // Generate a salt, then run call 
    bcrypt.genSalt(10, function(err, salt) {
        if(err) { return next(err); }

        // hash the users pw, (encrypt) using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            
            // overwrite the plain text password with the encrypted password
            user.password = hash;
            next();
        })
    })
})


userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}
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