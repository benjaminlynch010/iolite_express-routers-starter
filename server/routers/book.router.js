// any code that relates to /book

const express = require('express')

// create express router
const router = express.Router()

const bookList = []

// GET all books from server state
router.get('/', (req, res) => {
  res.send(bookList)
})

router.post('/', (req, res) => {
  bookList.push(req.body)
  res.sendStatus(200)
})

module.exports = router