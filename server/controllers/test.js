const asyncHandler = require('express-async-handler')
const Test = require('../models/test')


const getTest = asyncHandler(async (req, res) => {
  const test = await Test.find()
  res.status(200).json(test)
})

const setTest = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }

  const test = await Test.create({
    text: req.body.text
  })
  res.status(200).json(test)
})

const updateTest = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update Test ${req.params.id}`})
})

const deleteTest = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete Test ${req.params.id}`})
})


module.exports = {
  getTest,
  setTest,
  updateTest,
  deleteTest
}
 