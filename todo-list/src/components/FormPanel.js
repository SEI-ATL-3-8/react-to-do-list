import React from 'react'
import Form from './Form'

const FormPanel = (props) => {
    return (
        <div className="formContainer">
            <h1>Hello World</h1>
            <Form toDo={props.toDo} setToDo={props.setToDo} />
        </div>
    )
}

export default FormPanel
