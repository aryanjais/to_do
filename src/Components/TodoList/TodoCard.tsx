import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import AddPopup from '../AddTodo/AddPopup.tsx';

const TodoCard = ({ data, handleEdit, handleDelete }) => {

    const [edit, setEdit] = useState(false);
    const MAX_CHARS = 300;
    const isCharacterLengthReached = data?.description.length > MAX_CHARS;
    const [readMore, setReadMore] = useState(!isCharacterLengthReached);
    const toggleEdit = () => {
        setEdit(!edit);
    }
    const toggleReadMore = () => {
        setReadMore(!readMore);
    }

    const isCompleted = data.endsAt < new Date().valueOf();
    return (
        <div className='todoCard'>
            <div className='descriptionContainer'>
                {readMore ?
                    data.description
                    : data.description.slice(0, MAX_CHARS).concat('...')}
                {isCharacterLengthReached &&
                    <span className='pointer' style={{ color: 'mediumslateblue' }} onClick={toggleReadMore}>
                        &nbsp;{(readMore ? 'Read less' : 'Read more')}
                    </span>}
                <div className='editDelContainer'>
                    {!isCompleted && <MdEdit onClick={toggleEdit} className='editTodo pointer' />}
                    <MdDeleteForever onClick={handleDelete} className='deleteTodo pointer' />
                </div>
            </div>
            <div className='timeContainer'>
                <span style={{ color: '#b9ff00' }}>
                    {isCompleted
                        ? 'Completed on'
                        : 'Complete before'}:
                </span>
                &nbsp;
                <span style={{ fontSize: '14px' }}>
                    {new Date(data.endsAt).toLocaleDateString('en-In', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
            </div>
            {edit && <AddPopup togglePopup={toggleEdit} handleAdd={handleEdit} editData={data} />}
        </div>
    )
}

export default TodoCard