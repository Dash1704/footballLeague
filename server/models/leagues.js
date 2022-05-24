const mongoose = require('mongoose');

const leagueSchema = mongoose.Schema({
  league: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('League', leagueSchema)