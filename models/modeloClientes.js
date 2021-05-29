const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  services: {
    type: String
  },
  Location: {
    type: String
  },
  phone: {
    type: String
  },
  date: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('clientes', clienteSchema)