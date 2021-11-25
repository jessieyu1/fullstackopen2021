import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import Error from "./components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newMessage, setNewMesssage] = useState(null);
  const [errorMessage, setErrorMesssage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPerosns) => {
      setPersons(initialPerosns);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addName = (event) => {
    event.preventDefault();
    if (persons.every((person) => person.name !== newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personService
      .create(newPerson)
      .then((createdPerson) => {
        setPersons(persons.concat(createdPerson));
        setNewName("");
        setNewNumber("");
        setNewMesssage(`Added ${newName}`);
        setTimeout(() => {
          setNewMesssage(null);
        }, 3000);
      })
      .catch((error) => {
        setErrorMesssage(`${error.response.data.error}`);
        setTimeout(() => {
          setErrorMesssage(null);
        }, 3000);
      })
    } else {
      if (persons.every((person) => person.number !== newNumber)) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const newPerson = persons.find((person) => person.name === newName);
          const changedNumber = { ...newPerson, number: newNumber };

          personService
            .update(newPerson.id, changedNumber)
            .then((returnedPerson) => {
              setPersons(
                persons.map((p) => (p.id !== newPerson.id ? p : returnedPerson))
              );
              setTimeout(() => {
                setNewMesssage(`Changed ${newName}'s number`);
              }, 3000);
            })
            .catch((error) => {
              setErrorMesssage(
                `Error!`
              );
              setTimeout(() => {
                setErrorMesssage(null);
              }, 5000);
              setPersons(persons.filter((p) => p.id !== newPerson.id));
            });
        }
      } else {
        window.alert(`${newName} is already added to phonebook`);
      }
    }
  };

  const handleRemoveName = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(setPersons(persons.filter((p) => p.id !== person.id)));
        setTimeout(() => {
          setNewMesssage(`Information of ${newName} has been removed from server`);
        }, 3000);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };
  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} />
      <Error message={errorMessage} />
      <div>
        <Filter
          value={newFilter}
          onChange={handleFilterChange}
          text="Filter shown with"
        />
      </div>
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addName}
        text1="name"
        value1={newName}
        onChange1={handleNameChange}
        text2="number"
        value2={newNumber}
        onChange2={handleNumberChange}
        text3="add"
        type="submit"
      />
      <h3>Numbers</h3>
      <Persons persons={personToShow} handleRemoveName={handleRemoveName} />
    </div>
  );
};

export default App;
