import React from 'react'
import Button from './Button'

function Header(props) {
  return (
    <div className='header'>
        <h1>Mon App</h1>
        <Button onClick={props.onToggelShawTodo}/>
    </div>
  )
}

export default Header