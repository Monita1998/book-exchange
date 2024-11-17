// src/models/Book.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize.js');
const User = require('./User.js');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Book.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Book, { foreignKey: 'user_id' });

module.exports = Book;