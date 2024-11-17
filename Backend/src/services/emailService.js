const nodemailer = require('nodemailer');
const config = require('../config/config');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport(config.mailtrap);
  }

  async sendPasswordResetEmail(email, token) {
    const mailOptions = {
      from: 'your_email@example.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: http://localhost:5000/reset-password?token=${token}`
    };

    await this.transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();