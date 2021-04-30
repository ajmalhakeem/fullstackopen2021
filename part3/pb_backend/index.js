require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')
const Person = require('./models/person')
const PORT = process.env.PORT

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body' , (req) =>
  JSON.stringify(req.body)
)

app.use(morgan(':method :url :status :response-time ms - :body'))

app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if(person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
    .catch(error =>
      next(error)
    )
})

// app.get('/info', (request, response) => {
//   const numPersons = persons.length
//   const date = new Date()
//   response.send(
//     `<p>Phonebook has info for ${numPersons} people</p>
//     <p>${date}</p>
//       `
//   )
// })

const generateId = () => {
  return Math.floor(Math.random() * 5000)
}

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name === undefined) {
    return response.status(400).json({
      error:  'field missing'
    })
  }

  const person = new Person({
    name : body.name,
    number : body.number,
    id : generateId()
  })

  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new:true }, next)
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

// order matters here
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})