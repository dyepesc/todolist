
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
  { text: "usar estados derivados", completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("los usuarios buscan todos de " + searchValue);

  return (
    <React.Fragment>
      <TodoCounter 
        completed = {completedTodos} 
        total = {totalTodos}
        />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList> 
        { defaultTodos.map(todo => (
          <TodoItem 
          key = { todo.text } 
          text = {todo.text}
          completed = {todo.completed}
          />
        ))}
        {/* {[<TodoCounter />, <TodoList />]} */}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}





export default App;
