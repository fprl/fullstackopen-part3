require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;

const url = process.env.MONGODB_URI;
const firstName = process.argv[2];
const phoneNumber = Number(process.argv[3]);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => console.log('connected to MongoDB'))
  .catch(error => console.log('error connecting to MongoDB', error.message))

  
// Schemas
const personSchema = new Schema({
  firstName: String,
  phoneNumber: Number,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

// Model
module.exports = mongoose.model('Person', personSchema);
