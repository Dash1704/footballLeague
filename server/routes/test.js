const { application } = require('express');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({message: 'This is a get test'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'This is a create test'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update test ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete test ${req.params.id}`})
})


module.exports = router;