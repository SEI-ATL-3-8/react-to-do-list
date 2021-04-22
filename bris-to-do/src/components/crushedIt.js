import {React, useState} from 'react'

const CrushedIt = (props) => {
    return(
        <div className = 'crushed container'>
            {props.doneItems.map((item,index) => (
                <div key={index} className = 'list-block'>

                <div className = 'item'>
                    <h5> {item} </h5>
                </div>

            </div>

            ))}

        </div>
    )

}

export default CrushedIt