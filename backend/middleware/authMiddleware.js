const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

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
        res.status(400).json({ errors, message: 'user not loggrd in' });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).json({ error: 'this is a protected page' });
  }
};


module.exports ={requireAuth};
