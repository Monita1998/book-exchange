// src/controllers/authController.js
const authService = require('../services/authService.js');
const emailService = require('../services/emailService.js');

class AuthController {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await authService.register(username, email, password);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      return res.status(201).json({ message: 'User login successfully', token , redirectUrl: '/profile' });
    } catch (error) {
      return res.status(400).json({ message:'User not login', error });
    }
  }

  async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      const token = await authService.forgotPassword(email);
      await emailService.sendPasswordResetEmail(email, token);
      res.json({ message: 'Password reset email sent' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body;
      const user = await authService.resetPassword(token, newPassword);
      res.json({ message: 'Password reset successfully', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();