import React from 'react'

const SingleTask = (props) => {
    return (
        <div className="singleTask" key={props.count}>
            {props.task}
        </div>
    )
}

export default SingleTask
