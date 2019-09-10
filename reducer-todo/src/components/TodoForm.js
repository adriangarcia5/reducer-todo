import React, {useState, useReducer} from 'react';

export default function TodoForm ({state, dispatch}) {
    const [newTodo, setNewTodo] = useState('');
    
    function handleChange(e) {
        setNewTodo(e.target.value);
    }

    function submitTodo (e)  {
        e.preventDefault();
        setNewTodo('');
        dispatch({type: 'ADD_ITEM', payload: newTodo})
    }

    return (
            <form onSubmit={submitTodo}>
            <input
                type="text"
                value={state.name}
                name="name"
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
        
    );
}