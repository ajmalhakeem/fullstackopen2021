const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

personRouter.get('/:id', (request, response, next) => {
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

const generateId = () => {
  return Math.floor(Math.random() * 5000)
}

personRouter.post('/', (request, response, next) => {
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


personRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end()
    })
    .catch(error => next(error))
})

personRouter.put('/:id', (request, response, next) => {
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

module.exports = personRouter