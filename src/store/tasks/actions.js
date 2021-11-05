export const setTasks = (tasks) => {
    return {
        type: "SET",
        payload: tasks,
    };
};
export const addTask = (task) => {
    return {
        type: "ADD",
        payload: task,
    };
};

export const deleteTask = (id) => {
    return {
        type: "DELETE",
        payload: id,
    };
};

export const editTask = (e) => {
    return {
        type: "EDIT",
        payload: e,
    };
};
