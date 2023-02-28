import React from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/action';



function App() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);

  const [editVisibility , setEditVisibility] = useState(false)


 const [editTodo,setEditTodo] = useState('')


  const hanleEditClick = (todo)=>{
       setEditVisibility(true);
       setEditTodo(todo);
  }


  const cancelupdate = ()=>{
    setEditVisibility(false);
    
  
}

  return (
    <div className="App">
       <h1 className='text'> Todo App Using React Redux</h1>
       <Form  editVisibility = { editVisibility} editTodo={editTodo}  cancelupdate = { cancelupdate } />
       <Todo  hanleEditClick = {hanleEditClick }  editVisibility = {editVisibility} /><br></br>
       {todos.length > 1 && (
        <button className='Dlt-all' onClick={() => dispatch(deleteAll()) }>DeleteAll</button>
       )}
   
    </div>
  );
}

export default App;
