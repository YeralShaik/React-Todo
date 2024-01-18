import { TodoContext } from '../TodoContext';
import React from 'react';
import '../TodoCounter/TodoCounter.css';

function TodoCounter() {
  const { 
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
    <h2 className='TodoCounter'>
      Has completado <span>{completedTodos} </span>  de <span>{totalTodos} Todos </span>
       </h2> 
    );
  } 

export { TodoCounter };

