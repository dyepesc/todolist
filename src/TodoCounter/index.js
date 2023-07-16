import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (

    <h1 className="TodoCounter">
      <span>Bienvenido al multiverso<br/></span>
      Has estado en <span>{completedTodos}</span> Universos de <span>{totalTodos}</span>
    </h1>
  );
}

export { TodoCounter };
