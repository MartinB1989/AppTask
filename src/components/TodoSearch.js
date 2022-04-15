import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch () {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className="todo-search-container">
      <input
        value={searchValue}
        placeholder="Buscar"
        className="todo-search"
        onChange={onSearchValueChange}
      />
    </div>
  )
}

export { TodoSearch }