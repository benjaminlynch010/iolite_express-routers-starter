// any code that relates to /movie

const express = require('express')

// create express router
const router = express.Router()

const movieList = []

// GET all movies from server state
router.get('/', (req, res) => {
  res.send(movieList)
})

router.post('/', (req, res) => {
  movieList.push(req.body)
  res.sendStatus(200)
})

module.exports = router