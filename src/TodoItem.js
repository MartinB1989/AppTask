import React from "react";

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste el todo' + props.text)
  }
  const onDelete = () => {
    alert('Has borrado el todo' + props.text)
  }
  return (
    <li>
      <span 
        className={`${props.completed && 'todo-item--checked'} todo-item--check`}
        onClick={onComplete}
      >&#10004;</span>
      
      <p className={`${props.completed && 'todo-item--completed'} todo-item--text`}>{props.text}</p>
      <span 
        className="todo-item--delete"
        onClick={onDelete}  
      >X</span>
    </li>
  )
}

export { TodoItem }