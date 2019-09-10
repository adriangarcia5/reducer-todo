import React, {useState} from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 1528817086458,
    completed: false
  },
  {
    task: 'Go workout!',
    id: 1528817086439,
    completed: false
  },
  {
    task: 'Watch Netflix as reward :)',
    id: 1528817086440,
    completed: false
  },
];

function App() {
  const [todo, setTodo] = useState(todoData);

const addItem = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  setTodo([...todo, newTask]);
  console.log(newTask, "New Task has been added");
};

  const toggleTask = id => {
    console.log(id);
    setTodo(
      todo.map(task => {
        if (task.id === id) {
          return {...task, completed: !task.completed};
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Adrian's Amazing Todo App!</h2>
        <TodoForm 
                  todo={todo}
                  addItem={addItem}
        />
      </div>
      <TodoList
          todoItem={todo}
          toggleTask={toggleTask}
        />
        {/* <button className="clear-btn" onClick={[]}>Clear Completed</button> */}
    </div>
  );
}
export default App;
