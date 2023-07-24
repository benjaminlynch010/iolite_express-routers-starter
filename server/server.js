const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const bookList = [];
const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`🙉 Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
const bookRouter = require('./routers/book.router.js')

app.use('/book', bookRouter)

const movieRouter = require('./routers/movie.router.js')
app.use('/movie', movieRouter)
