const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(bodyParser.json())


// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Starting the server. 
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});