const asyncHandler = require('express-async-handler')
const League = require('../models/leagues')
const test = require('../models/test')

//GET
const getLeagues = asyncHandler(async (req, res) => {
  const leagues = await League.find()
  res.status(200).json(leagues)
})

//POST
const postLeagues = asyncHandler(async (req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('Please add a name field')
  }

  const leagues = await League.create({
    name: req.body.name
  })
  res.status(200).json(leagues)
})

//UPDATE
const updateLeagues = asyncHandler(async (req, res) => {
  const leagues = await League.findById(req.params.id)

  if(!leagues){
    res.status(400)
    throw new Error("League not found")
  }
  const updatedLeague = await League.findByIdAndUpdate(req.params.id, req.body,
    {new: true,})
  res.status(200).json(updatedLeague)
})

//DELETE
const deleteLeagues = asyncHandler(async (req, res) => {
  const leagues = await League.findById(req.params.id)
  if(!leagues){
    res.status(400)
    throw new Error("League not found")
  }

  await leagues.remove()
  res.status(200).json({ id: req.params.id})
})

module.exports = {
  getLeagues,
  postLeagues,
  updateLeagues,
  deleteLeagues,
}