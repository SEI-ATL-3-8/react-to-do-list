import Form from './Form'

const FormSection = (props) => {
    return (
        <div className="formContent">
            <h1>Create new to do</h1>
            <Form
                allTodos = {props.allTodos}
                setAllTodos = {props.setAllTodos}
            />
        </div>

    )
}

export default FormSection