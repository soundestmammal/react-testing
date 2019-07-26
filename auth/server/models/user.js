const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

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