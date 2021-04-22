import {useState } from 'react'

const List = (props) => {

    return(
        <div className="doit">
            {props.contentList.map((list, i) => 
             {
              return <div
              key={i}
              className="list"
                 >
            </div>
             }     
            )}
        </div>

    )
    
}
export default List