// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController.js');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', authenticateToken, userController.getProfile);
router.post('/profile', authenticateToken, userController.createProfile);

module.exports = router;