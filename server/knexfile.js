require("dotenv").config();

module.exports = {
  development: {
    client: 'mysql2',   // The database driver
    connection: {
      host: 'localhost', // Replace with your MySQL server host
      user: 'root',      // Replace with your MySQL username
      password: process.env.MYSQL_PASSWORD,  // Replace with your MySQL password
      database: 'flixfinder'  // Replace with your MySQL database name
    },
    migrations: {
      directory: './db/migrations' // Directory containing your migration files
    }
  }
};
