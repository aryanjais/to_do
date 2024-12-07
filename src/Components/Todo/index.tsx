import React, { useState } from 'react'
import './styles.css';
import AddTodo from '../AddTodo/index.tsx';
import SideNav from '../SIdeNav/index.tsx';
import TodoList from '../TodoList/index.tsx';

const Todo = () => {
    const [list, setList] = useState<any>([]);

    const handleAdd = (newTodo) => {
        setList((prev) => ([newTodo, ...prev]))
    }
    return (
        <div className='mainContainer'>
            <SideNav />
            <TodoList list={list} />
            <AddTodo handleAdd={handleAdd} />
        </div>
    )
}

export default Todo