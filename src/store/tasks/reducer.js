const initialState = [];

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET":
            return action.payload;

        case "ADD":
            state.push(action.payload);
            localStorage.setItem("tasks_to_do", JSON.stringify(state));
            return state;

        case "EDIT":
            const index = state.indexOf(
                state.find((x) => x.id === action.payload.id)
            );
            state[index] = action.payload;
            localStorage.setItem("tasks_to_do", JSON.stringify(state));
            return state;

        case "DELETE":
            const newState = state.filter((x) => x.id !== action.payload);
            localStorage.setItem("tasks_to_do", JSON.stringify(newState));
            return newState;

        default:
            return state;
    }
};
