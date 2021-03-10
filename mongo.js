const mongoose = require('mongoose');

const password = process.argv[2];
const dbName = 'phonebook-app';
const firstName = process.argv[3];
const phoneNumber = Number(process.argv[4]);

const url = `mongodb+srv://fullstack:${password}@cluster0.cd0q0.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Schemas
const personSchema = new mongoose.Schema({
  firstName: String,
  phoneNumber: Number,
})

// Model
const Person = mongoose.model('Person', personSchema);


// Functions
const getPersons = () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

}

const createPerson = () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  
  const person = new Person({
    firstName: firstName,
    phoneNumber: phoneNumber
  })
  console.log(person);
  
  person
    .save().then(result => {
      console.log(result);
      console.log(`added ${firstName} number ${phoneNumber} to phonebook`)
      mongoose.connection.close()
    })
    .catch(error => console.log(error));
}

if (process.argv.length === 3) {
  getPersons();
}

if (process.argv.length === 5) {
  createPerson();
}
