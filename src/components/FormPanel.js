const FormPanel = (props) => {
  return (
    <div className="container">
    <div className="panel">
      <form>
        <h2>Stuff To Do</h2>
        <input type= 'text' name = 'tasks' plaeholder='Chores' value={props.tasks.value}
        onChange = {(e) => props.setTasks([e.target.value])} />

        <input />
      </form>
    </div>
    </div>
  )
  
}

export default FormPanel;