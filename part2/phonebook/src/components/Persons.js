import React from 'react'


const Persons = ({persons, handleRemoveName}) => {

    return (
        <div>
        {persons.map(person =>
            <p key={person.id}>{person.name} {person.number}
                <button onClick={() => handleRemoveName(person)}>delete</button></p> 
        )}
        </div>
        )
}  


export default Persons