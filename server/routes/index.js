const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.getAllMovies);

router.get('/movies/:id', moviesController.getMovieById);

router.post('/movies', moviesController.postNewMovie);

router.delete('/movies/:id', moviesController.deleteMovieById);

router.put('/movies/:id', moviesController.updateMovieById);

module.exports = router;