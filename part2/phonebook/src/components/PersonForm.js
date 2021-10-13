import React from 'react'

const PersonForm = (props) =>{
    return( 
        <form onSubmit={props.onSubmit}>
            <div>
                {props.text1}:<input value={props.value1} onChange={props.onChange1}/>
            </div>
            <div>
                {props.text2}:<input value={props.value2} onChange={props.onChange2}/>
            </div>
            <div>
                <button type={props.type}>
                    {props.text3}
                </button>
            </div>
        </form>
)}

export default PersonForm