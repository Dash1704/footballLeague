const express = require('express');
const router = express.Router();
const { 
  getLeagues, 
  getLeaguesByID,
  postLeagues, 
  updateLeagues, 
  deleteLeagues} = require('../controllers/leagues')

router.get('/', getLeagues)

router.get('/:id', getLeaguesByID)

router.post('/', postLeagues)

router.put('/:id', updateLeagues)

router.delete('/:id', deleteLeagues)

module.exports = router