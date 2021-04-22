import { useState } from "react"

const Form = (props) =>{
    const [task, setTask] = useState("")
    return(
        <div>
            <form className="Form" onSubmit={((e) => {
                e.preventDefault()
                props.addList(task)
            })}>
                <input value={task} placeholder="Enter task here." onChange={(e) => { setTask(e.target.value)}} />
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Form