import Form from './Form'
const FormPanel = (props) => {
    return (
        <div className="formPanel">
            <h2>Create new note</h2>
            <Form submitHandler={props.submitHandler} />
        </div>
    )
}
export default FormPanel