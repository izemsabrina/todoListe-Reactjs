
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ListTodo from './components/ListTodo';
import Button from './components/Button';
import Text from './components/Text';
import Footer from './components/Footer';
import React , { useState, useEffect
 }from 'react'; 
// import {BrowSerRouter as Router, Routes, Route} from 'react-router-dom' 

function App() {
  const [showAddTodo,setShowAddTodo]=useState(false)
  const [todos,setTodos]=useState([])
  useEffect(()=>{
   const  fetchTodos= async()=>{
   const res = await fetch("http://localhost:8000/todos")
   const data = await res.json();
   setTodos(data)
}
fetchTodos()
},[])
const handleAdd =async (todo) => {
  const res = await fetch ("http://localhost:8000/todos", 
  {method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify(todo)

})
const data = await res.json()
     //const id =Math.floor(Math.random()* 100000)+1;
    //const newTodo={...todo,id}
    setTodos([...todos, data]) 
    }
   const handleDelete = async (id) => {
    await fetch (`http://localhost:8000/todos/${id}`,
    {method: "DELETE"});
      setTodos(
        todos.filter( 
        todo => todo.id !==id));
      
  }
  function handleReminder(id){
   setTodos(
    todos.map(
      todo => todo.id === id ? {...todo, reminder : !todo.reminder} : todo
    )
   ) 

  }
  function handleShawToggelTodo(){
   setShowAddTodo(!showAddTodo)

  }
  return (
    
   <div className='container'>
  <Header onToggelShawTodo={handleShawToggelTodo}/>
  {
    showAddTodo &&  <Form onSubmit={handleAdd}/>
  }
 
  <ListTodo  handleClick={handleDelete} listTodos={todos} doubleClick= {handleReminder} />
  <Button/>
  <Button/>
  <Text/>
  <Footer/>
  
   </div>
  
  );
}

export default App;
