import './App.css';
import {useState} from 'react';
import {TodoInput} from './components/TodoInput';
//import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoList';

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const addTodo = (todo) => {
    const newItem = {todo: todo, completed: false};
    setTodoArr([...todoArr, newItem]);
  }

  return (
    <div className="App">
      <TodoInput addTodo = {addTodo}/>
      <TodoList todos = {todoArr}/>
    </div>
  );
}

export default App;
