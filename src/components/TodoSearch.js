import React from "react";

function TodoSearch ({searchValue, setSearchValue}) {

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