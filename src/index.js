const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send({"Title": "Hello World"});
})

// Starting the server. 
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
})