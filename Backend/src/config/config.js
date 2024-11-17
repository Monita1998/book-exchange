//SMTP config 
module.exports = {
    jwtSecret: 'your_jwt_secret',
    mailtrap: {
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'd8d9353f4a5a12',
        pass: 'ada684d6ab826e'
      }
    },
    database: {
      development: {
        username: 'monita1',
        password: 'Monita@132',
        database: 'book_exchange_db',
        host: '127.0.0.1',
        dialect: 'postgres'
      },
      test: {
        username: 'monita1',
        password: 'Monita@132',
        database: 'book_exchange_db_test',
        host: '127.0.0.1',
        dialect: 'postgres'
      },
      production: {
        username: 'monita1',
        password: 'Monita@132',
        database: 'book_exchange_db_production',
        host: '127.0.0.1',
        dialect: 'postgres'
      }
    }
  };