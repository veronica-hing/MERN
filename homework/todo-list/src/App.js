import './App.css';
import React, {useState} from 'react';
import {TodoInput} from './components/TodoInput';
import {TodoList} from './components/TodoList';

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const addTodo = (todo) => {
    const newItem = {todo: todo, completed: false};
    setTodoArr([...todoArr, newItem]);
  }
  const handleDelete = (delIdx) =>{
    //underscore on todo to tell filter that you're not using but you want it
    const filteredTodos = todoArr.filter((_todo,i)=>{
      return i !== delIdx;
    })
    setTodoArr(filteredTodos);
  }

  const handleChecked = (checkIdx) => {
    const updatedTodos = [...todoArr];
    updatedTodos[checkIdx].completed = !todoArr[checkIdx].completed;
    setTodoArr(updatedTodos);
  }

  return (
    <div className="App">
      <TodoInput addTodo = {addTodo}/>
      <TodoList todos = {todoArr} handleDelete = {handleDelete} handleChecked = {handleChecked}/>
    </div>
  );
}

export default App;
