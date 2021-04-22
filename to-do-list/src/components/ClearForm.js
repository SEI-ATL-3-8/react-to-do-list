import Buttons from './Buttons'

const ClearForm = (props) => {

    const clearCurrentTasks = () => {
        props.setTaskArray([])
    }

    const clearCompletedTasks = () => {
        props.setDoneArray([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( props.button === 'ClearCurrent' ) {
            clearCurrentTasks()
        } else if ( props.button === 'ClearComplete' ) {
            clearCompletedTasks()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Buttons button={props.button} />
        </form>
    )
}

export default ClearForm