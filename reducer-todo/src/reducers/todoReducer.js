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
            // console.log('reducer',newTask)
            return {
                ...state, todoData: [...state.todoData, newTask]
            }
        case 'TOGGLE_ITEM':
            
        default:
            return state;
    }
};
