const mongoose = require('mongoose');
const { Schema } = mongoose;
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI;

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => console.log('connected to MongoDB'))
  .catch(error => console.log('error connecting to MongoDB', error.message))
  
// Schemas
const personSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: Number,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

personSchema.plugin(uniqueValidator);

// Model
module.exports = mongoose.model('Person', personSchema);
