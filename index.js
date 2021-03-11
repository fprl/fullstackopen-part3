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

/* function getRandomId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
} */

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
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
})

app.post('/api/persons', (request, response) => {
  const body = request.body;
  const personExist = persons.find(p => p.name === body.name)


  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (personExist) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    "id": getRandomId(1, 100000000),
    "name": body.name,
    "number": body.number
  }

  persons = persons.concat(person);

  response.json(person);
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(p => p.id !== id);

  console.log(persons);

  response.status(204).end();
})

const PORT =  process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})