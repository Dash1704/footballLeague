
const getTest = (req, res) => {
  res.status(200).json({message: 'Get Test'})
}

const setTest = (req, res) => {
  console.log(req.body)
  res.status(200).json({message: 'Create Test'})
}

const updateTest = (req, res) => {
  res.status(200).json({message: `Update Test ${req.params.id}`})
}

const deleteTest = (req, res) => {
  res.status(200).json({message: `Delete Test ${req.params.id}`})
}


module.exports = {
  getTest,
  setTest,
  updateTest,
  deleteTest
}
