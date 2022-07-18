import React from "react";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="todo-list">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.noFound(props.searchText)}
      <ul>
      {
      /* Las siguientes declaraciones son identicas pero la segunda es mas corta.
      {props.searchedTodos.map( todo => props.render(todo))} */
      props.searchedTodos.map(renderFunc)
      }
        {/* {props.children} */}
      </ul>
    </section>
  )
}

export { TodoList };