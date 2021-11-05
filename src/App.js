import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TasksIndex from "./components/tasks";
import { setTasks } from "./store/tasks/actions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            setTasks(JSON.parse(localStorage.getItem("tasks_to_do")) ?? [])
        );
    }, []);

    return (
        <div className='w-full h-screen bg-gray-800'>
            <div className='flex flex-col space-y-8 items-center justify-center h-full text-center'>
                <div className='max-w-screen-sm w-full rounded-lg bg-white text-gray-900 px-6 py-2 mx-auto'>
                    <TasksIndex />
                </div>
            </div>
        </div>
    );
};

export default App;
