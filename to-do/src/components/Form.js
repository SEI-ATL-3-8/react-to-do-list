import {useState} from 'react'
const Form = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setAllTodos([...props.allTodos,{
            text: input,
            done: false
        }])
        
        
    }





    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder="note" onChange={(e) => setInput(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}
export default Form