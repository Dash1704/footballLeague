const express = require('express');
const router = express.Router();
const { getTest, setTest, updateTest, deleteTest } = require('../controllers/test')


router.get('/', getTest)

router.post('/', setTest)

router.put('/:id', updateTest)

router.delete('/:id', deleteTest)

module.exports = router;