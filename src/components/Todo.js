
import React from 'react';
import './Componentcss.css';
import { useSelector , useDispatch } from 'react-redux';
import { removeTodo } from '../redux/action';
import {  handleCheckBox} from '../redux/action';

const Todo = ({hanleEditClick, editVisibility}) => {

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationReducer);
  console.log(todos);

  return  todos.map((todo) => (
    
    <div key={todo.id} className = 'todo-box'>
      <div className='content'>
        {editVisibility === false && (
        <input type='checkbox' checked= {todo.completed} onChange= {()=>dispatch(handleCheckBox(todo.id))}></input>)}
        <p style={todo.completed === true ? {textDecoration: "line-through" }: {textDecoration: "none"}}>{todo.todo}</p>
        
        {editVisibility === false && (
        <>
        <button onClick={() => hanleEditClick(todo)} className= "update-btn">Update</button>
        <button onClick={() => dispatch(removeTodo(todo.id))} className= "delete-btn">Delete</button>
        </>
        )}
      
      </div>

</div>
  ))
}

export default Todo;