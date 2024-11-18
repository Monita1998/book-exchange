// models/associations.js
import User from './User.js';
import Book from './Book.js';
import UserProfile from './UserProfile.js';

// User-Book association
User.hasMany(Book, { foreignKey: 'userId' });
Book.belongsTo(User, { foreignKey: 'userId' });

// User-UserProfile association
User.hasOne(UserProfile, { foreignKey: 'userId' });
UserProfile.belongsTo(User, { foreignKey: 'userId' });