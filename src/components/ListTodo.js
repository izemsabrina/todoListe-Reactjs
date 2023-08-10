import React from 'react'
import Todo from './Todo'

function ListTodo(props) {
  return (
    <div className='list'>
           {
           props.listTodos.map(
           todo => 
           <Todo key={todo.id}
          todo={todo} 
          onClick={props.handleClick}
          onDoubleClick= {props.doubleClick }/>
          )
          }
  </div>
  
)
}

export default ListTodo