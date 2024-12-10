import React from 'react'
import './styles.css';
import TodoCard from './TodoCard.tsx';

const TodoList = (props) => {
  const { list, handleEdit, handleDelete } = props;

  return (
    <div className='listContainer'>
      {list.map((item, ind: number) =>
        <TodoCard key={ind} data={item} handleEdit={(data) => handleEdit(data, ind)} handleDelete={() => handleDelete(ind)} />
      )}
    </div>
  )
}

export default TodoList