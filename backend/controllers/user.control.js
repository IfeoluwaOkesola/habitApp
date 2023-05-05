const mongoose = require('mongoose');
const { user } = require('../models/user.model');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const dotenv = require('dotenv');
const {
  createUserService,
  findUserService,
} = require('../service/user.service');
const { createToken, maxAge } = require('../utils/createToken');
const { handleErrors } = require('../utils/error.handler');
dotenv.config();

const secret = process.env.SECRET;

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (fullname && email && password) {
      const emailCheck = await findUserService({ email });
      if (emailCheck) {
        throw Error('user already exists');
      } else {
        const hash = bcrypt.hashSync(password, saltRounds);
        const result = await createUserService({
          fullname,
          email,
          password: hash,
        });
        if (result) {
          res.status(200).json({ message: result });
        } else {
          //throw Error('user not created')
        }
      }
    } else {
      throw Error('enter user details');
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(error.message);
    res.status(400).json({ errors });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const result = await findUserService({ email });
      if (result) {
        const valid = await bcrypt.compare(password, result.password);
        if (valid) {
          const token = createToken({ userId: result._id });
          res.cookie('habitual', token, {
            httpOnly: false,
            sameSite: 'None',
            secure: true,
            maxAge: maxAge * 1000,
          });
          res.status(200).json({ user: result._id});
        } else {
          console.log('incorrect password');
          throw Error('incorrect password');
        }
      }else{
        throw Error('user not found')
      }
    } else {
      throw Error('enter user details');
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(error.message);
    res.status(400).json({errors})
  }
};
module.exports = { registerUser, loginUser };
