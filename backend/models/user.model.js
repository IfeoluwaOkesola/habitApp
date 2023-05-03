const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'please enter a valid email address'],
  },

  password: {
    type: String,
    required: true,
  },
});

const user = model('user', userSchema);

module.exports = { user };
