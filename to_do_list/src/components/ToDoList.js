import React from 'react'
import ToDo from '../components/ToDo'

export default function ToDoList(props) {

    return (
        <div className = "todo-area">
            {props.ToDos.map((item, i) => {
               return <div key={i}>
                        <ToDo index={i} item={item} ToDos={props.ToDos} setToDos={props.setToDos}/>
                    </div>
            })}
            
        </div>
    )
}
