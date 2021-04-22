import { useState } from 'react'
import Headers from './Headers'
import FormInput from './FormInput'

const FormArea = (props) => {
    const header = 'Create New Task'


    return (
        <div className="area">
            <Headers header={header} />
            <FormInput addToTaskArray={props.addToTaskArray}/>


        </div>
    )
}






export default FormArea