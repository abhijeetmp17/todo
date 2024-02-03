import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const ediTodo = todos.find((i)=> i.id === editId);
      const updatedTodos = todos.map((t)=> t.id === ediTodo.id ? (t={id:t.id, todo}) : {id: t.id, todo: t.todo});
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo !== ''){
      setTodos([{id:`${Date.now()}`, todo}, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
      const delTodo = todos.filter((to)=> to.id !== id);
      console.log("id", id);
      console.log(delTodo);
      setTodos([...delTodo]);
  };
  
  const handleEdit = (id) => {
    const editTodo = todos.find((i)=> i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }
  return (

    <div className="App">
      <div className='container'>
        <h1>TO Do App</h1>

        <form className='todoForm'  onSubmit={handleSubmit}>
        <input type='text' className='input' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit'>{editId ? "Edit" : "Go"}</button>
        </form>

        <ul className='allTodos'>
          {
            todos.map(
              (t) => (
                <li className='singleTodo' key={t.id} >
                <span className='todoText' key={t.id} >{t.todo} </span>
                <button className='button' onClick={()=>handleEdit(t.id)}>Edit</button>
                <button className='button' onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
              )
            )
          }

        </ul>
      </div>
    </div>
  )
}

export default App
