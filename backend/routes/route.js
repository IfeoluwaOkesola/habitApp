const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.control');
const { requireAuth } = require('../middleware/authMiddleware');
const { createHabit } = require('../controllers/habit.control');

const routeManager = express.Router();

routeManager.post('/auth/register', registerUser );
routeManager.post('/auth/login', loginUser );
routeManager.post('/createHabit', requireAuth, createHabit) // handle the middleware issue



module.exports = routeManager