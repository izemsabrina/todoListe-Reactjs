import React, { useState } from 'react'

function Form (props) {

  const[text,setText]=useState('')
  const [date, setDate]=useState('')
  const [reminder, setReminder]=useState(false)
  
  function handleSubmmit(e){
    e.preventDefault();
    // const todo={
    //   text:text,
    //   date:date,
    //   reminder:reminder,
    // }
    props.onSubmit(
      {text,date,reminder}

    )
    setText('');
    setDate('');
    setReminder(false);
  }
  
  return (
    <div>
        <form onSubmit={handleSubmmit}>
        <div className='form-controler'>
      <label>Todo</label>
      <input type='text'  value={text} onChange={(e)=>setText(e.target.value)} placeholder='Ajouter un todo'/>
        </div>
        <div className='form-controler'>
      <label>jour & heure</label>
      <input type='text' value={date} onChange={(e)=>setDate(e.target.value)} placeholder='jour & heure'/>
        </div>
        <div className='form-control-check'>
      <label>Ajouter un rappel</label>
      <input type='checkbox' checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' className='btn btn-block' value='ajouter'/>
        </form>
    </div>
  )
}

export default Form;
