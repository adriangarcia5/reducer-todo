// Export Two Things - initialState, reducer fn

export const initialState = {
    todoData: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
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
        case 'CLEAR_ITEM':
            return {
                ...state,
                todoData: state.todoData.filter(({ completed }) => !completed)
            }
        default:
            return state;
    }
};

