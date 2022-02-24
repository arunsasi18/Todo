import React from 'react';
import Form from './componets/Form';
import './App.css';
import TodoList from './componets/TodoList';
import { useState ,useEffect} from 'react';
function App() {
  
  const[inputText,setinputText]= useState('')
  const [toDos, setToDos] = useState([])
  const [status,setStatus]= useState("all")
  const[filterTodos,setFilterTodos]= useState([])
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilterTodos(toDos.filter(todo=> todo.completed=== true))
        break;
        case 'uncompleted':
          setFilterTodos(toDos.filter(todo=>todo.completed=== false))
        break;
        default :
        setFilterTodos(toDos)
        break;
    }
  }
  useEffect(()=>{
    getLocalTodo()
  },[])
  useEffect(()=>{
    filterHandler();
    saveLocalTodo();
  },[toDos,status])
//Save localStorage
  const saveLocalTodo=()=>{
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }
  const getLocalTodo=()=>{
    if(localStorage.getItem("toDos")===null){
      localStorage.setItem("toDos",JSON.stringify([]));
    }
    else{
     let todoLocal= JSON.parse(localStorage.getItem('toDos'));
     setToDos(todoLocal)
    }
    
  }

 
  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      toDos={toDos} 
      setToDos={setToDos} 
      inputText={inputText} 
      setinputText={setinputText}
      setFilterTodos={setFilterTodos}
     
      setStatus={setStatus}/>
      <TodoList toDos={toDos} 
       filterTodos={filterTodos} 
       setToDos={setToDos} />
    </div>
    // <div className="app">
    //   <div className="mainHeading">
    //     <h1>ToDo List</h1>
    //   </div>
      
    //   <div className="input">
    //     <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text " on placeholder="🖊️ Add item..." />
    //     <i onClick={() => setToDos([...toDos, toDo])} className="fas fa-plus"></i>
    //   </div>
    //   <div className="todos">
    //     {
    //       toDos.map((value)=>{
    //         return ( < div className="todo">
    //     <div className="left">
    //       <input type="checkbox" name="" id="" />
    //       <p>{value}</p>
    //     </div>
    //     <div className="right">
    //       <i className="fas fa-times"></i>
    //     </div>
    //   </div>)
    //       })
    //   }

    // </div>
    // <div className="select">
    //   <select>
    //     <option value="all">All</option>
    //     <option value="completed">Completed</option>
    //     <option value="uncompleted">Uncompleted</option>
    //   </select>
    // </div>
   
    // </div >
  );
}

export default App;
