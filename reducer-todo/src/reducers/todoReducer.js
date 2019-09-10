// Export Two Things - initialState, reducer fn

export const initialState = {
    todoData: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_ITEM':
            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoData: [...state.todoData, newTask]
            }
        case 'TOGGLE_ITEM':
            return {
                ...state,
                todoData: state.todoData.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, completed: !item.completed };
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state;
    }
};

