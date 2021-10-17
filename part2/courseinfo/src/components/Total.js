import React from 'react'


const Total = (props) => (
    <div>
        <b>
        Total of {props.parts.reduce((total, part) => total + part.exercises, 0)} exercieses
        </b>
    </div>
    )

export default Total