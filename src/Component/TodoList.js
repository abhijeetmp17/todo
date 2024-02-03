import React from 'react'

const TodoList = (handleDelete , handleSubmit , todos) => {
  return (
    <ul className='allTodos'>
          {
            todos.map(
              (t) => (
                <li className='singleTodo'>
                <span className='todoText' key={t.id} >{t.todo} </span>
                <button className='button' onClick={()=>handleEdit(t.id)}>Edit</button>
                <button className='button' onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
              )
            )
          }

        </ul>
  )
}

export default TodoList
