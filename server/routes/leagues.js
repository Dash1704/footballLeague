const express = require('express');
const router = express.Router();
const { getLeagues, postLeagues} = require('../controllers/leagues')

router.get('/', getLeagues)

router.post('/', postLeagues)

// router.put('/:id', updateLeagues)

// router.delete('/:id', deleteLeagues)

module.exports = router