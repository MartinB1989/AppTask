import React from "react";

function TodoSearch ({searchValue, setSearchValue}) {
  
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  
  return (
    <div className="todo-search-container">
      <input 
        value={searchValue}
        placeholder="Cebolla" 
        className="todo-search"
        onChange={onSearchValueChange}
      />
    </div>
  )
}

export { TodoSearch }