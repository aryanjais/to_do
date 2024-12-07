import React, { useState } from 'react'
import './styles.css'

const AddPopup = (props) => {
    const { togglePopup, handleAdd } = props;
    const [description, setDescription] = useState('');
    const [endsAt, setEndAt] = useState(new Date().valueOf());

    const handleDateSelect = (e) => {
        setEndAt(new Date(e.target.value).setHours(23, 59, 59, 999));
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const clickAdd = () => {
        handleAdd({ description, endsAt });
        togglePopup();
    }
    const selectedTime = new Date(endsAt).toISOString().split('T')[0];

    return (
        <div className='addPopup'>
            <textarea autoFocus className='popupInput' placeholder='Enter Description' value={description} onChange={handleDescription}></textarea>
            <div className='popupBottom'>
                <label>
                    Select date: <input type='date' onChange={handleDateSelect} value={selectedTime} />
                </label>
                <input className='closeBtn btn' onClick={togglePopup} type='button' value='Close' />
                <input className='addBtn btn' type='button' value='Add' onClick={clickAdd} />
            </div>
        </div>
    )
}

export default AddPopup