require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Define your API routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express.js backend!' });
});

app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      console.error('Error querying movies:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/api/movies', (req, res) => {
  const { title, release_year, director } = req.body;

  // Insert the movie into the database
  db.query('INSERT INTO movies (title, release_year, director) VALUES (?, ?, ?)', [title, release_year, director], (err, results) => {
    if (err) {
      console.error('Error inserting movie:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Movie inserted successfully');
      res.status(201).json({ message: 'Movie inserted successfully' });
    }
  });
});

// Serve Stencil.js static files (update the path accordingly)
app.use(express.static('../FlixFinder/www'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
