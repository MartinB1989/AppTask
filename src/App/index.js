import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton'
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";
import { Loading } from "../components/Loading";
import { Spinner } from "../components/Spinner";
import '../css/global.css'


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Ha ocurrido un error</p>}
        {loading && <p>Estamos cargando</p>}
        {(!loading && !searchedTodos.length) && <p className="first-tarea-text">¡Crea tu primer tarea!</p>}

        {searchedTodos.map( (todo,index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          ></TodoForm>
        </Modal>
      )}
      {loading && (
        <Loading>
          <Spinner/>
        </Loading>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export default App;
