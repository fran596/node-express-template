const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  value: { type: String, required: true },
  done: { type: Boolean, required: true }
})

const Company = mongoose.model("todo", todoSchema)
module.exports = Company
