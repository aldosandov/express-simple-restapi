const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');

router.get('/', (req, res) => {
    const data = movies;
    res.json(data)
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.json(movies);   
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

module.exports = router;