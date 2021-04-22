
import userInput from './userInput'



const Form = (props) => {

    return(

    <div className= 'container'>

        <h1>Add New Note!!</h1>

        <userInput addItem={props.addItem}/>

    </div>

    )
}

export default Form
