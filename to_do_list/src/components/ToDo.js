import React from 'react'

export default function ToDo(props) {

    function markDone(e){

        e.preventDefault();
        let newList = [...props.ToDos]
        
        newList[props.index] = {name: props.item.name, completed: true};

        props.setToDos(newList)

        console.log(props.ToDos)

    }

    return (
        <div key={props.key}>
                <div className="item">
                    {props.item.name}
                </div>
                
                <button onClick={(e) => {markDone(e)}}
                >Done</button>
        </div>
    )
}
