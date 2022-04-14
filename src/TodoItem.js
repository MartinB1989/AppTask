import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span 
        className={`${props.completed && 'todo-item--checked'} todo-item--check`}
        onClick={props.onComplete}
      >&#10004;</span>
      
      <p className={`${props.completed && 'todo-item--completed'} todo-item--text`}>{props.text}</p>
      <span 
        className="todo-item--delete"
        onClick={props.onDelete}  
      >X</span>
    </li>
  )
}

export { TodoItem }