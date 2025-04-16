import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import './app.css'

const App = () => {
  const [inputVlaue,setInputValue] = useState("")
  const [todoList,setTodoList] = useState(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo'))  :[])


  const add = (e)=>{
    e.preventDefault()
    const todoItem ={
      id:Date.now(),
      text:inputVlaue,
      isComplete:false
    }
    setTodoList(prev =>
    [...prev,todoItem]
    )
    setInputValue("")
  }

  const deleteTodo = (id) =>{
    setTodoList((prevtodo)=>{
      return prevtodo.filter(eachItem =>eachItem.id !== id)
    })
  }

  const toggleItem = (id)=>{
    setTodoList((prevTodoItem)=>{
      return prevTodoItem.map(eachTodo =>{
        if (eachTodo.id ===id){
          return {...eachTodo,isComplete:!eachTodo.isComplete}
        }
        return eachTodo;
      })   
    } 
    )
  }

  useEffect ( ()=>{
    localStorage.setItem("todo",JSON.stringify(todoList))
  },[todoList])


  return (
    <div className='main-container'> 
      <div className='input-field'>
        <h1>Todo App</h1>
        <form onSubmit={add} >
          <input onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='Enter Your Todo Task' value={inputVlaue} required />
          <button type="submit"> ADD </button>
        </form>
        <hr/>
        <p>Todo Items List</p>
        <div className='todo-items-list'>
          {
            todoList.map(item => <TodoItem key={item.id} details={item} deleteTodo={deleteTodo} toggleItem={toggleItem}/>)
          }

        </div>


      </div> 
      
    </div>
  )
}

export default App
