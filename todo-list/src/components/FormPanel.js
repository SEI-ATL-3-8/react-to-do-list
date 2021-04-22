import React from 'react'
import Form from './Form'

const FormPanel = (props) => {
    return (
        <div className="formContainer">
            <h1 className="leftHeader">Write Task Here</h1>
            <Form toDo={props.toDo} setToDo={props.setToDo} />
        </div>
    )
}

export default FormPanel
