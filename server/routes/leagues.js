const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get the leagues'})
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post a new League'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Update a league'})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete a league'})
})

module.exports = router