import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/action';



const Form = ({ editVisibility, editTodo ,cancelupdate }) => {

  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(editTodo.todo)
  }, [editTodo])

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();

    let todoObj = {

      id: time,
      todo: todoValue,
      completed: false
    }
    setTodoValue('');
    dispatch(addTodo(todoObj))
  }



  const editSubmit = (e) => {
    e.preventDefault();
    let editObj = {

      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editObj))
  }
  return (

    <>
      {editVisibility === false ? (
        <form onSubmit={handleSubmit}>
          <label>Add Todo items</label>
          <div className='input-btn'>
            <input type="text" className='form-input' value={todoValue} onChange={(e) => setTodoValue(e.target.value)}></input>
            <button type='submit' className='btn-submit'>Add</button>
          </div>
        </form>
      ) :

        (

          <form onSubmit={editSubmit} >
            <label>Update Todo items</label>
            <div className='input-btn'>
              <input type="text" className='form-input' value={editValue || ''} onChange={(e) => setEditValue(e.target.value)}></input>
              <button type='submit' className='btn-submit' >Update</button>
            </div>
            <button className='btn-back' type='button' onClick={cancelupdate}>Back</button>

          </form>

        )}


     
    </>

  );
}

export default Form;