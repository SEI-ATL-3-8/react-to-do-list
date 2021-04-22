import { useState } from 'react'
import Buttons from './Buttons'

const FormInput = (props) => {
    
    const [task, setTask] = useState('')

    const button = 'Submit'

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addToTaskArray(task)
    }


    return (
        <form className="form-new" onSubmit={handleSubmit}>
            <input className="input-text" type="text" value={task} placeholder="New task..." onChange={(e) => setTask(e.target.value)} />
            <Buttons button={button} />
        </form>
            
        

    )
}






export default FormInput