import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: "cortar cebolla", completed: true},
  { text: "tomar el curso de intro a react", completed: false},
  { text: "llorar con la llorona", completed: false},
  { text: "lalalala", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed = {16} total = {25}/>
      <TodoSearch />

      <TodoList> 
        { defaultTodos.map(todo => (
          <TodoItem 
          key = { todo.text } 
          text = {todo.text}
          completed = {todo.completed}
          />
        ))}
        {[<TodoCounter />, <TodoList />]}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}





export default App;
