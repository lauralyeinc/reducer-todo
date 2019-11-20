import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
// import { reducer, todo } from "./reducers/reducer";
// import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <h1> To Do List </h1>
    <TodoList />
    </div>
  );
}

export default App;
