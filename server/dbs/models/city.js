const mongoose = require('mongoose')
const Schema = mongoose.Schema
const City = new Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    type: {
      type: Array,
      required: true
    }
  }
})

module.exports = mongoose.model('City', City)
