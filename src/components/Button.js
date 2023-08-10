import React from 'react'

function Button(props) {
  return (
    <div>
        <button  onClick={props.onClick } className='btn'>Fermer</button>
    </div>
  )
}

export default Button