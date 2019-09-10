import React, {useState, useReducer } from 'react';
import './App.css';
//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

//Reducer
import { initialState, todoReducer } from './reducers/todoReducer';

// const todoData = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'Clean Room',
//     id: 1528817086458,
//     completed: false
//   },
//   {
//     task: 'Go workout!',
//     id: 1528817086439,
//     completed: false
//   },
//   {
//     task: 'Watch Netflix as reward :)',
//     id: 1528817086440,
//     completed: false
//   },
// ];

function App() {
  const [todo, setTodo] = useState();

  //reducer
  const [state, dispatch]= useReducer(todoReducer, initialState);


  return (
    <div className="App">
      <div className="header">
        <h2>Adrian's Amazing Todo App!</h2>
        <TodoForm 
            state={state.todoData}
            dispatch={dispatch}
        />
      </div>
      <TodoList
          todoItem={state.todoData}
          dispatch={dispatch}
        />
        {/* <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button> */}
    </div>
  );
}
export default App;
