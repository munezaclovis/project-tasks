import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../store/tasks/actions";
import Form from "./form";

const Index = () => {
    const state = useSelector((state) => state);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const dispatch = useDispatch();
    const editTaskForm = (id) => {
        setSelectedTask(id);
        setShowModal(true);
    };
    return (
        <>
            <div className='flex justify-center items-center w-full px-3'>
                <div className='py-2 px-6 text-xl'>My tasks</div>
                <button
                    className='ml-auto border border-blue-500 hover:bg-blue-500 hover:text-gray-800 text-sm rounded px-3 py-1'
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Add
                </button>
            </div>
            <div className='border-b-2 border-gray-400'></div>
            <div className='flex flex-col space-y-4 py-4'>
                {state?.length > 0 ? (
                    state?.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className='flex items-center justify-center bg-gray-300 rounded pl-3 py-2'
                            >
                                <p className='text-black truncate w-4/6'>
                                    {item.task}
                                </p>
                                <div className='ml-auto space-x-4 w-2/6'>
                                    <button
                                        className='border border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 text-sm rounded px-2 py-1'
                                        onClick={() => {
                                            editTaskForm(item.id);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='border border-red-600 hover:bg-red-600 hover:text-gray-800 text-sm rounded px-2 py-1'
                                        onClick={() => {
                                            dispatch(deleteTask(item.id));
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className='flex items-center justify-center bg-gray-300 rounded pl-3 py-2'>
                        <p className='text-black truncate w-4/6'>No task!</p>
                    </div>
                )}
            </div>
            <Form
                showModal={showModal}
                setShowModal={setShowModal}
                selectedTask={selectedTask}
            />
        </>
    );
};

export default Index;
