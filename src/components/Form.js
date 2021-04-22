const Form = (props) => {
    return (
        <form className="form" onSubmit={(e) => props.submitHandler(e)}>
            <input type="text" name="item" />
            <input type="submit" />
        </form>
    )
}

export default Form