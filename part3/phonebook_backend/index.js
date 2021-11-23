//3.14
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const Person = require("./models/person");
const { response } = require("express");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
//3.8
morgan.token("body", (req) => JSON.stringify(req.body));
//3.7
app.use(morgan("tiny"));
app.use(morgan(":body"));


//3.1
app.get("/", (req, res) => {
  res.send("Phonebook backend");
});


app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

//3.18
app.get("/api/persons/info", (req,res) => {
  Person.count({}).then((count) => {
    console.log(count)
    res.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
  })
})


app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});
//3.15
app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;
  const person = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (body.name === undefined) {
    return res.status(400).json({
      error: "name missing",
    });
  }
  if (body.number === undefined) {
    return res.status(400).json({
      error: "number missing",
    });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}


app.use(errorHandler);

// 3.10
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
