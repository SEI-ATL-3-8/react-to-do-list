import React from 'react'

const SingleTask = (props) => {
    return (
        <div className={SingleTask.complete ? "strike" : ""} key={props.count}>
            {props.task}
        </div>
    )
}

export default SingleTask
