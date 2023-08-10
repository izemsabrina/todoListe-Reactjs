import React from 'react'
import {FaTimes} from 'react-icons/fa'
function Todo(props) {
  function handleClick(id){props.onClick(id)}
  return (
    <div className={`todo  ${props.todo.reminder ? "reminder" : " "}`} 
     onDoubleClick={()=> props.onDoubleClick(props.todo.id)}>
      <h3>{props.todo.text} 
      <FaTimes style={{color:"red" }} 
      onClick={()=> handleClick(props.todo.id)}/> </h3>
      <p>{props.todo.date}</p>

    </div>
  )
}

export default Todo