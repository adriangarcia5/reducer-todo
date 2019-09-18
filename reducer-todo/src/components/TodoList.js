import React from 'react';

import Todo from './Todo';

 const TodoList = props => {
     
console.log('TodoList',props)
    return(
        <div className="todo-list">
            {props.todoItem.map(item => (
                <Todo key={item.id} item={item}

                toggleTask={props.dispatch}
                />
            ))}
            {/* <button class="clear-btn" onClick={props.clearCompleted}>Clear Completed</button> */}
        </div>
    )
}

export default TodoList;