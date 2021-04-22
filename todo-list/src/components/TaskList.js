import React from 'react'
import ListItem from './SingleTask'

const TaskList = (props) => {
    const addToFinished = (item) => {
        props.setToDo([item, ...props.ToDo])
      }
    return (
        <div className="allTask">
           <ul className="taskList">
               <li>{props.toDo}
               </li>
           </ul>
            
            
           
        </div>
    )
}

export default TaskList
