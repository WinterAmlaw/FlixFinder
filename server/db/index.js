require("dotenv").config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: process.env.MYSQL_PASSWORD,  
  database: 'flixfinder'  
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

// // server/index.js (after establishing the database connection)
// db.query(`
//   CREATE TABLE IF NOT EXISTS movies (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     release_year INT,
//     director VARCHAR(255)
//   )
// `, (err, results) => {
//   if (err) {
//     console.error('Error creating movies table:', err);
//   } else {
//     console.log('Movies table created successfully');
//   }
// });

// const movie = {
//   title: 'Movie 1',
//   release_year: 2022,
//   director: 'Director 1',
// };

// db.query('INSERT INTO movies SET ?', movie, (err, results) => {
//   if (err) {
//     console.error('Error inserting movie:', err);
//     return;
//   }
//   console.log('Movie inserted successfully:', results);
// });

module.exports = db;
