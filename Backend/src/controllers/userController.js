// controllers/userController.js
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret'; // Replace with a secure secret

class UserController {
  static async registerUser(req, res) {
    const { username, email, password } = req.body;
    try {
      const user = await User.create({ username, email, password });
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token, user });
    } catch (error) {
      console.error('Error registering user:', error); // Add logging here
      res.status(500).json({ error: 'Error registering user' });
    }
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, user });
    } catch (error) {
      console.error('Error logging in:', error); // Add logging here
      res.status(500).json({ error: 'Error logging in' });
    }
  }

  static async getProfile(req, res) {
    try {
      const user = await User.findByPk(req.user.id, { include: UserProfile });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user.UserProfile);
    } catch (error) {
      console.error('Error fetching profile:', error); // Add logging here
      res.status(500).json({ error: 'Error fetching profile' });
    }
  }

  static async createProfile(req, res) {
    const { favorite_genres, reading_preferences, books_owned, books_wanted } = req.body;
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if the user already has a profile
      let profile = await UserProfile.findOne({ where: { userId: req.user.id } });

      if (profile) {
        // Update the existing profile
        profile.favorite_genres = favorite_genres;
        profile.reading_preferences = reading_preferences;
        profile.books_owned = books_owned;
        profile.books_wanted = books_wanted;
        await profile.save();
      } else {
        // Create a new profile
        profile = await UserProfile.create({
          favorite_genres,
          reading_preferences,
          books_owned,
          books_wanted,
          userId: req.user.id,
        });
      }

      console.log('Profile updated:', profile); // Add logging here
      res.status(200).json(profile);
    } catch (err) {
      console.error('Error updating profile:', err); // Add logging here
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;