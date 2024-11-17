const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const User = require('./User');

const UserProfile = sequelize.define('UserProfile', {
  favorite_genres: {
    type: DataTypes.TEXT,
  },
  reading_preferences: {
    type: DataTypes.TEXT,
  },
  books_owned: {
    type: DataTypes.TEXT,
  },
  books_wanted: {
    type: DataTypes.TEXT,
  },
});

User.hasOne(UserProfile);
UserProfile.belongsTo(User);

module.exports = UserProfile;