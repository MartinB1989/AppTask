import React from "react";

function CreateTodoButton() {

  const onClickButton = (msg) => {
    alert(msg)
  }
  return (
    <button 
      className="todo-button"
      onClick={() => onClickButton('Modal en construcción')}
    >+</button>
  )
}

export {CreateTodoButton}