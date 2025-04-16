import React from 'react'
import './todoItem.css'

const TodoItem = ({details,deleteTodo,toggleItem}) => {
    const {id,text,isComplete} = details
    const className= isComplete ? "line-through" : "normal"
  return (
    <div className='todo-item-container'>
        <div className='text-container' onClick={()=>toggleItem(id)}>
        <img src={isComplete ? "/fill-circle.png" :"/circle.png" } alt="image" height="30px" width="30px"/>
        <p  className={className} >{text}</p>
        </div>
        <img className='delete' onClick={()=>deleteTodo(id)} src="/delete.png" alt="delte" height="30px" width="30px"/>
    </div>
  )
}

export default TodoItem
