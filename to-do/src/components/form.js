import FormPanel from "./formpanel"
import {useState} from 'react'
const Form =(props)=>{
const [input,, setInput] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    props.setAllTodo ([...props.alltodos,{text:{input},
        done:false}])}


return(
        <div className="form">


        <form onsubmit={handleSubmit}>
        <input type="text" name="todo" value={input} onChange={(e) =>setInput(e.target.value)}/>
        <input type='submit' value="Submit"/>


        </form>

<FormPanel />

</div>

    )


}




export default Form

