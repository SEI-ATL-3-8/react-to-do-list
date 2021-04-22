import { useState } from 'react'
import Headers from './Headers'
import DoneItem from './DoneItem'

const DoneArea = (props) => {
    const header = 'Completed Tasks'

    return (
        <div className="area">
            <Headers header={header} />
            <DoneItem doneArray={props.doneArray} />


        </div>
    )

}






export default DoneArea