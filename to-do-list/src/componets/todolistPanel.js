import { useState } from "react"

const TodoList = (props) =>{
    

    return (
        <div className = "todo">

            <h1>To do's</h1>
            
            <div className = "item-container">{props.items.map((layer,i) =>(
               
              <h3 className = "item">{layer}<button className= "button" onClick = {(e)=>{
                  {props.setText("!!!")}
                alert('you are done with the clicked item') 
               
            }}>{props.text}</button></h3> 

            
        ))}</div>

        </div>
    
        
    )}
    
    export default TodoList;