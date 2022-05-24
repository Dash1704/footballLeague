const asyncHandler = require('express-async-handler')

const getLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get the leagues'})
})

const postLeagues = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Post a new league'})
})

const updateLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update league ${req.params.id}`})
})

const deleteLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete league ${req.params.id}`})
})

module.exports = {
  getLeagues,
  postLeagues,
  updateLeagues,
  deleteLeagues,
}