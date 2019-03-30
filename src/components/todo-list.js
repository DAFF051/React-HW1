// Create a todo list called Static List with three list items:
import React from 'react';


//  function Todo(props){
//    console.log(props)
//      return(
        
//       <div >
           
//         <h1> {props.todoItem}</h1>
  

//        </div>


//      )
//  }

// export default Todo
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create a second todo list underneath the first (reuse the same components) 
// called Dynamic List, 
// but this time pass the props dynamically using the following array of objects:


function TodoMaping(props){
    return(
        <dev>
            <h1>{props.description}</h1>
            <p>{props.deadline}</p>
            
        </dev>
    )
}
export default TodoMaping