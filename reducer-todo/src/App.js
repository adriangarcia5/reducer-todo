import React, {useState, useReducer } from 'react';
import './App.css';
//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

//Reducer
import { initialState, todoReducer } from './reducers/todoReducer';

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
        <button className="clear-btn" onClick={() => dispatch({type: 'CLEAR_ITEM'})}>Clear Completed</button>
    </div>
  );
}
export default App;
