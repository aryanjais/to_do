import React, { useState } from 'react'
import './styles.css'

const AddPopup = (props) => {
    const { togglePopup, handleAdd, editData } = props;
    const [description, setDescription] = useState(editData?.description ?? '');
    const [endsAt, setEndAt] = useState(editData?.endsAt || new Date().setHours(23, 59, 59, 999));

    const clickAdd = () => {
        handleAdd({ description, endsAt });
        togglePopup();
    }
    const handleDateSelect = (e) => {
        setEndAt(new Date(e.target.value).setHours(23, 59, 59, 999));
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleShortcut = (e) => {
        console.log(e.keyCode);
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && description) clickAdd();
        else if (e.keyCode === 27) togglePopup();
    }
    const selectedTime = new Date(endsAt).toISOString().split('T')[0];

    return (
        <div className='addPopup'>
            <textarea
                autoFocus
                className='popupInput'
                placeholder='Enter Description'
                value={description}
                onChange={handleDescription}
                onKeyDown={handleShortcut}></textarea>
            <div className='popupBottom'>
                <label>
                    Select date: <input type='date' onChange={handleDateSelect} value={selectedTime} />
                </label>
                <input className='closeBtn btn' onClick={togglePopup} type='button' value='Close' />
                <input className='addBtn btn' type='button' value={editData ? 'Update' : 'Add'} onClick={clickAdd} />
            </div>
        </div>
    )
}

export default AddPopup