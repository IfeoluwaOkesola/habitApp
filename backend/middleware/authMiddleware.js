const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { handleErrors } = require('../utils/error.handler');



dotenv.config();

const secret = process.env.SECRET;

const requireAuth = (req, res, next) => {
  const token = req.cookies.habitual; 

  // check json web token exists & is verified

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        const errors = handleErrors(err);
        res.status(400).json({ errors, message: 'user not logged in' });
      } else {
        req.user = decodedToken.id.userId
        next();
      }
    });
  } else {
    res.status(400).json({ error: 'this is a protected page' });
  }
};


module.exports ={requireAuth};
