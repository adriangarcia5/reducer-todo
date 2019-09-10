import React, {useState} from 'react';

export default function TodoForm (props) {
    const {addItem} = props;
    const [newTodo, setNewTodo] = useState('')

    function handleChange(e) {
        setNewTodo(e.target.value);
    }

    function submitTodo (e)  {
        e.preventDefault();
        addItem(newTodo)
    }

    return (
        <form onSubmit={submitTodo}>
            <input
                type="text"
                value={newTodo.name}
                name="name"
                onChange={handleChange}
            />
            <button>Add</button>

        </form>
    );
} 