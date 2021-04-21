import { useState } from 'react';
import Form from './Form';

const FormPanel = (props) =>
{
    return (
        <div className="form-panel">
            <h1>What to do?</h1>
            <Form toDo={props.toDo} setToDo={props.setToDo}/>
        </div>
    )
}

export default FormPanel;