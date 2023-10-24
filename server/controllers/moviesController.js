const db = require('../db');

async function getAllMovies(req, res) {
  try {
    db.query('SELECT * FROM movies', (err, results) => {
      if (err) {
        console.error('Error querying movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });
    
  } catch (error) {
    console.log(error.message);
  }
}

async function getMovieById(req, res) {
  try {
    const { id } = req.params;
    db.query('SELECT * FROM movies WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error querying movie by id:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });    
  } catch (error) {
    error.message;
  }
}

async function postNewMovie(req, res) {
  const { title, release_year, director } = req.body;

  db.query('INSERT INTO movies (title, release_year, director) VALUES (?, ?, ?)', [title, release_year, director], (err, results) => {
    if (err) {
      console.error('Error inserting movie:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Movie inserted successfully');
      res.status(201).json({
        message: 'success',
        data: {
          id: results.insertId,
          title,
          release_year,
          director,
        }
      }

      );
    }
  });
}

async function deleteMovieById(req, res) {
  try {
    const { id } = req.params;
    db.query('DELETE FROM movies WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error deleting movie by id:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });    
  } catch (error) {
    error.message;
  }
}

async function updateMovieById(req, res) {
  try {
    const { id } = req.params;
    const { title, release_year, director } = req.body;
    db.query('UPDATE movies SET title = ?, release_year = ?, director = ? WHERE id = ?', [title, release_year, director, id], (err, results) => {
      if (err) {
        console.error('Error updating movie by id:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });    
  } catch (error) {
    error.message;
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  postNewMovie,
  deleteMovieById,
  updateMovieById,
};
