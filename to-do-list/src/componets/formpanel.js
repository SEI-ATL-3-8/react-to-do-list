import {useState} from 'react';
const FormPanel = (props) =>{

    const handleSubmit = (e) =>{
        e.preventDefault()
        let arr = [props.form,...props.items]
        console.log(arr)
        props.setItems(arr)
        props.setText("Done")
        console.log(props.items)
    }

return (
        <div className = "formP">

            <h1> Create New Note</h1>      
            <div>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" name = "todoform" value = {props.form}
                    placeholder = "enter to do list" onChange = {(e) => {props.setform(e.target.value)}}/>
                    <input type = "submit" value = "Add ToDo"/>
                </form>

            </div>
        
        </div>

)

}

export default FormPanel;