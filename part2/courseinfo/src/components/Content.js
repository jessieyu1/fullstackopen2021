import React from 'react'
import Part from './Part'

const Content = (props) => (
    <div>
        {props.parts.map((value) => 
        <Part 
            key={value.id} 
            name={value.name} 
            exercises={value.exercises} 
        />
        )}
    </div>
    )

export default Content