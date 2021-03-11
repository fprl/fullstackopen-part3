require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

const app = express();

app.use(express.static('build'))
app.use(cors());
app.use(express.json());

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status - :response-time ms - :body'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `
    )
})

app.get('/api/persons', (request, response) => {
  Person.find({})
    .then(persons => response.json(persons))
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => response.json(person))
    .catch(error => response.status(404).end())
})

app.post('/api/persons', (request, response) => {
  const body = request.body;

/*   const personExist = Person.findOne({firstName: body.firstName})
    .then(person => console.log(person, 'Sorry but name must be unique!'))

  if (!body.firstName || !body.phoneNumber) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (personExist) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  } */

  const person = new Person ({
    "firstName": body.firstName,
    "phoneNumber": body.phoneNumber
  })

  person.save()
    .then(savedPerson => response.json(savedPerson))
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result);
      response.status(204).end();
    })
})

const PORT =  process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})