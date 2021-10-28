
const express = require('express');
const morgan = require('morgan')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

//3.8 
morgan.token('body',(req)=> JSON.stringify(req.body))
//3.7
app.use(morgan('tiny'))
app.use(morgan(':body'))


//3.1 step 1
let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]


//3.1
app.get('/', (req, res) => {
    res.send('Phonebook backend')
})
app.get('/api/persons', (req, res) => {
    res.json(persons)
})
//3.2 
app.get('/info', (req,res) => {
    const Maxid = Math.max(...persons.map(p => p.id))
    const date = new Date()
    res.send(`<p>phonebook has info for ${Maxid} people </p><p>${date}</p>`)

})
//3.3
app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id ===id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})
//3.4 
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})
//3.5 & 3.6  
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1 
}

app.post('/api/persons',(req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    } else if (body.name === persons.map(p => p.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    } else if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)
    res.json(person)


})

    
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

app.use(unknownEndpoint)


// 3.10
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>
    {console.log(`Server running on port ${PORT}`)
})
