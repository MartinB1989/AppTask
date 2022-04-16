import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [isEmpty, setIsEmpty] = React.useState(false)
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
    if(newTodoValue != "") {
      addTodo(newTodoValue)
      setOpenModal()
    } else {
      setIsEmpty(true)
      setTimeout(() => { setIsEmpty(false)}, 4000)
    }

  }

  return (
    <form onSubmit={onSubmit} className="todo-form--main">
      <label>Agrega una nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aquí tu próxima tarea"

      />
      { isEmpty && (
        <p className="is-empty-error">No puedes guardar valores vacios</p>
      )}
      <div className="todo-form--buttons">
        <button
          type="button"
          onClick={onCancel}
          className="cancel-btn"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="add-btn"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }