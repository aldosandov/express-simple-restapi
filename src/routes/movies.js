const { Router } = require('express');
const _ = require('underscore');
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


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, idx) => {
        if (movie.id == id) {
            movies.splice(idx, 1)
            res.send('deleted')            
        } else if (id > movies.length)
            res.status(500).json({error: 'ID not found'})
    });
})


module.exports = router;