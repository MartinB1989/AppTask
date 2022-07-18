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
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoError } from '../components/TodoError';
import { Loader } from "../components/Loader";
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


      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError/>}
        onLoading={() => <Loader/>}
        onEmptyTodos={() => <EmptyTodos/>}
        noFound={
          (searchText) => <p className="first-tarea-text">No hay resultados para {searchText}</p>
        }
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {
          todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        } */}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          ></TodoForm>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export default App;
