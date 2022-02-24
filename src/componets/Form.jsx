import React from 'react';


function Form({setinputText,toDos,inputText,setToDos,setStatus}) {
  const inputTextHandler=(e)=>{
    console.log(e.target.value)
    setinputText(e.target.value)
  }
  const submitTodoHandler=(e)=>{
   e.preventDefault();
   setToDos([
     ...toDos,
     { text:inputText,completed:false,id: Math.random() * 1000}
   ]);
   setinputText("");
  }
  const statusChanger=(e)=>{
    setStatus(e.target.value)
  }
  return (
      
       <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusChanger} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
  
}

export default Form;