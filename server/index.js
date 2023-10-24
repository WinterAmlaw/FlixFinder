require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express.js backend!' });
});

// app.get('/api/movies', (req, res) => {
//   db.query('SELECT * FROM movies', (err, results) => {
//     if (err) {
//       console.error('Error querying movies:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

app.use('/api', routes);


// app.post('/api/movies', (req, res) => {
//   const { title, release_year, director } = req.body;

//   db.query('INSERT INTO movies (title, release_year, director) VALUES (?, ?, ?)', [title, release_year, director], (err, results) => {
//     if (err) {
//       console.error('Error inserting movie:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       console.log('Movie inserted successfully');
//       res.status(201).json({
//         message: 'success',
//         data: {
//           id: results.insertId,
//           title,
//           release_year,
//           director,
//         }
//       }

//       );
//     }
//   });
// });

app.use(express.static('../FlixFinder/www'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
