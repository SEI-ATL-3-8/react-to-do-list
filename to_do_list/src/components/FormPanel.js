import Form from './Form'
const FormPanel = (props) =>{
    return(
        <div>
            <h1>Create new Note</h1>
            <Form addList={props.addList}/>
        </div>

    )
}
export default FormPanel