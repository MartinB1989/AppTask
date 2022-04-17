import React from "react";

function TodoCounter({totalTodos, completedTodos}) {

  return (
    <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} tareas</h2>
  )
}

export { TodoCounter }