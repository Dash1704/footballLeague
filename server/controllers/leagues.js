const asyncHandler = require('express-async-handler')

const getLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get the leagues'})
})

const postLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Post a new league'})
})

const updateLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update a league'})
})

const deleteLeagues = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete a league'})
})

module.exports = {
  getLeagues,
  postLeagues,
  updateLeagues,
  deleteLeagues,
}