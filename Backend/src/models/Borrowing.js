// src/models/Borrowing.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const User = require('./User');
const Book = require('./Book');

const Borrowing = sequelize.define('Borrowing', {
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Borrowing.belongsTo(Book, { foreignKey: 'book_id' });
Borrowing.belongsTo(User, { as: 'lender', foreignKey: 'lender_id' });
Borrowing.belongsTo(User, { as: 'borrower', foreignKey: 'borrower_id' });

module.exports = Borrowing;