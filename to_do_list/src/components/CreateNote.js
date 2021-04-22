import React from 'react'
import { useRef } from 'react'

export default function CreateNote(props) {

    const todoNameRef = useRef();


    function throwNote(e){
        e.preventDefault();
        let newToDo = {name: todoNameRef.current.value, completed: false}
        props.setToDos([...props.ToDos, newToDo])
    }


    return (
        <div>
            <div id="new_note_box">
                <input  ref={todoNameRef} type="text" placeholder="Create Note"></input>
                <button id="done" class="buttons" onClick={(e)=>{throwNote(e)}} >SUBMIT</button>
            </div>
        </div>
    )
}
