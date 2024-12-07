import React from 'react'
import './styles.css';
import TodoCard from './TodoCard.tsx';

const TodoList = (props) => {
  const { list } = props;

  return (
    <div className='listContainer'>
      {list.map((item, ind) =>
        <TodoCard key={ind} data={item} />
      )}
    </div>
  )
}

export default TodoList