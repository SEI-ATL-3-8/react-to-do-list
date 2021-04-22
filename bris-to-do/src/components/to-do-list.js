import {React, useState} from 'react'


const List = (props) => {

    return (
        <div className = 'list container'>
            {props.toDoList.map((item, index) => (
            <div key={index} className = 'list-block'>

                <div className = 'item'>
                    <h5> {item} </h5>
                </div>

                <div>
                <input type = 'button' value = 'Done' name = {item} onClick ={(e)=> props.addToDone(e.target.name)} />
                </div>

            </div>
          ))}     
        </div>

    )

}

export default List