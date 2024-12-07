import React from 'react'

const TodoCard = ({ data }) => {
    return (
        <div className='todoCard'>
            <div className='descriptionContainer'>
               {data.description}
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
        </div>
    )
}

export default TodoCard