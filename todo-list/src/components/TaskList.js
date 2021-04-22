import React from 'react'
import ListItem from './SingleTask'

const TaskList = (props) => {
    const addToFinished = (item) => {
        props.setToDo([item, ...props.ToDo])
      }
    return (
        <div className="allTask">
           
            {props.toDo}
            
           
        </div>
    )
}

export default TaskList
