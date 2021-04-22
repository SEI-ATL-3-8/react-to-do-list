import { useState } from 'react'

const DoneItem = (props) => {
    return (
        <div className="task-container-done">
            <span className="task-entry">{props.entry}</span>
        </div>
    )
}






export default DoneItem