const express = require('express')
const app = express()

app.use(express.json())

let persons =  [
    {
      name: "Eren Jaeger",
      number: "30291031",
      "id": 1
    },
    {
      name: "Mikasa Ackermann",
      number: "39-44-5323523",
      "id": 2
    },
    {
      name: "Levi Ackermann",
      number: "12-43-234345",
      "id": 3
    },
    {
      name: "Probably Embed",
      number: "2310932103120",
      "id": 4
    },
    {
      name: "Izzy",
      number: "2103910930",
      "id": 5
    }
  ]

app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
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

    if (!body.name || !body.number) {
        return response.status(400).json({
            error:  'field missing'
        })
    }

    if (persons.some(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name exists on db'
        })
    }

    const person = {
        name : body.name,
        number : body.number,
        id : generateId()
    }

    persons = persons.concat(person)

    response.json(person)
})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})