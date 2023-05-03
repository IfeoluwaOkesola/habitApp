const express = require('express');
const { registerUser } = require('../controllers/user.control');

const routeManager = express.Router();

routeManager.post('/auth/register', registerUser );


module.exports = routeManager