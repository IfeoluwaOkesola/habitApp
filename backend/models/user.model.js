const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'Please enter your fullname'],
  },
  email: {
    type: String,
    required: [true, 'Please enter email address'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },

  password: {
    type: String,
    required: [true, "Password is a required field"]
  }

  
});

const user = model('user', userSchema);

module.exports = { user };
