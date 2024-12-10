import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import AddPopup from '../AddTodo/AddPopup.tsx';

const TodoCard = ({ data, handleEdit, handleDelete }) => {

    const [edit, setEdit] = useState(false);
    const toggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className='todoCard'>
            <div className='descriptionContainer'>
                {data.description}
                <div className='editDelContainer'>
                    <MdEdit onClick={toggleEdit} className='editTodo pointer' />
                    <MdDeleteForever onClick={handleDelete} className='deleteTodo pointer' />
                </div>
            </div>
            <div className='timeContainer'>
                <span style={{ color: '#b9ff00' }}>
                    Complete before:
                </span>
                &nbsp;
                <span style={{ fontSize: '14px' }}>
                    {JSON.stringify(new Date(data.endsAt).toISOString().split('T')[0])}
                </span>
            </div>
            {edit && <AddPopup togglePopup={toggleEdit} handleAdd={handleEdit} editData={data} />}
        </div>
    )
}

export default TodoCard