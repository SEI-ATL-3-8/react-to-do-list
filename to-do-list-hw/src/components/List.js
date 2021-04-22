import { useState } from 'react'

import Button from './Button'

const List = (props) => {

const [check, setCheck] = useState('')    

    return(
        <div className="list">
            {props.contentStack.map((item, i)=>
           
                <div 
                className="note"
                key= {i}>
                    {item}
                    <Button setCheck={setCheck} />
                    {check === 'V' ?
                        <div>{check}</div>
                        :null
                    }
                </div>
            )}
        </div>
    )

}

export default List