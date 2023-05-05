const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.control');

const routeManager = express.Router();

routeManager.post('/auth/register', registerUser );
routeManager.post('/auth/login', loginUser );



module.exports = routeManager