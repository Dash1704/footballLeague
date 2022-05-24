const asyncHandler = require('express-async-handler')


const getTest = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Test'})
})

const setTest = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Create Test'})
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
 