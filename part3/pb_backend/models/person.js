const mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 4, 
      required: true
    },
    number:{
      type: Number,
      minlength: 8,
      required: true
    }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)