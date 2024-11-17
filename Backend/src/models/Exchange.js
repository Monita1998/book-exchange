// src/models/Exchange.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const User = require('./User');
const Book = require('./Book');

const Exchange = sequelize.define('Exchange', {
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Exchange.belongsTo(Book, { foreignKey: 'book_id' });
Exchange.belongsTo(User, { as: 'lender', foreignKey: 'lender_id' });
Exchange.belongsTo(User, { as: 'borrower', foreignKey: 'borrower_id' });

module.exports = Exchange;