import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import './styles.css'
import AddPopup from './AddPopup.tsx';

const AddTodo = ({ handleAdd }) => {
    const [open, setOpen] = useState(false);

    const togglePopup = () => setOpen(!open);

    return (
        <>
            <IoMdAddCircleOutline onClick={togglePopup} className='addIcon' />
            {open && <AddPopup togglePopup={togglePopup} handleAdd={handleAdd}/>}
        </>
    )
}

export default AddTodo