import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addTask, editTask } from "../../store/tasks/actions";

const Form = ({ showModal, setShowModal, selectedTask }) => {
    const [data, setData] = useState({ id: v4(), task: "" });
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTask === null) {
            dispatch(addTask(data));
        } else {
            dispatch(editTask(data));
        }
        setData({ id: v4(), task: "" });
        setShowModal(false);
    };

    useEffect(() => {
        if (selectedTask !== null) {
            setData(state.find((x) => x.id === selectedTask));
        }
    }, [selectedTask]);

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header
                closeButton={true}
                closeLabel='Close'
                closeVariant='white'
            >
                <Modal.Title>Task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='form-group w-full'>
                        <small>Name:</small>
                        <input
                            type='text'
                            name='name'
                            value={data.task ?? ""}
                            className={`form-control`}
                            placeholder='name'
                            required={true}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    task: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className='btn btn-outline-primary'
                    onClick={handleSubmit}
                >
                    Save
                </button>
                <button
                    className='btn btn-outline-danger'
                    onClick={() => setShowModal(false)}
                >
                    Cancel
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default Form;
