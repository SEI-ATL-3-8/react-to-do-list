import { useState } from 'react'

import Button from './Button'

const List = (props) => {

    

    return(
        <div className="list">
            {props.contentStack.map((item, i)=>
           
                <div 
                className="note"
                key= {i}>
                    {item}
                    {'    '}
                    <Button />
                </div>
            )}
        </div>
    )

}

export default List