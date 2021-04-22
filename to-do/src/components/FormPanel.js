import Form from './form'

const FormPanel = (props) => {
    return(
    <div className= 'form-container'>
        <h1>Create New Note</h1>
        <Form addToNotes={props.addToNotes}/>
    </div>
    )
}
export default FormPanel