require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')
const Person = require('./models/person')
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

morgan.token('body' , (req,res) => 
    JSON.stringify(req.body)
);

app.use(morgan(':method :url :status :response-time ms - :body'))

app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.get('/info', (request, response) => {
    const numPersons = persons.length
    const date = new Date()
    response.send(
        `<p>Phonebook has info for ${numPersons} people</p>
        <p>${date}</p>
        `
    )
})

const generateId = () => {
    return Math.floor(Math.random() * 5000)
}

app.post('/api/persons', (request, response) => {
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

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})