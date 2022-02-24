import React from 'react';
import Todo from './Todo';

function TodoList({toDos,setToDos,filterTodos}) {
 
  return (<div className='todo-container'>
      <ul className="todo-list">
        {filterTodos.map((todo)=>(
          <Todo key={todo.id} text={todo.text} setToDos={setToDos} toDos={toDos} todo={todo}/>
        ))}
      </ul>

  </div>);
}

export default TodoList;
