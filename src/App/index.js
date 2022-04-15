import React from 'react';
import { AppUI } from './AppUI';
import {useLocalStorage} from '../TodoContext'
import {TodoProvider} from '../TodoContext'
/* const defaultTodos = [
  {text:'Estudiar React en Platzi', completed: true},
  {text:'Desayunar', completed: false},
  {text:'Crear Registro en Truco Stars', completed: false},
  {text:'Seguir esforzandome, trabajar y así conseguir mejores oportunidades laborales', completed: true},
] */


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;
