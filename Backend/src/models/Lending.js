// src/models/Lending.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const User = require('./User');
const Book = require('./Book');

const Lending = sequelize.define('Lending', {
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Lending.belongsTo(Book, { foreignKey: 'book_id' });
Lending.belongsTo(User, { as: 'lender', foreignKey: 'lender_id' });
Lending.belongsTo(User, { as: 'borrower', foreignKey: 'borrower_id' });

module.exports = Lending;