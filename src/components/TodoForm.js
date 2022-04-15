import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal()
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal()
  }

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aquí tu próxima tarea"

      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }