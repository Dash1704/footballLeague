const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
     text:{
       type: String,
       required: true
     },

}, 
{
  timestamps: true,
})

module.exports = mongoose.model('Test', testSchema)