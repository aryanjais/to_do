import React, { useState } from 'react'
import './styles.css';
import AddTodo from '../AddTodo/index.tsx';
import SideNav from '../SIdeNav/index.tsx';
import TodoList from '../TodoList/index.tsx';

const Todo = () => {
    const newList = JSON.parse(localStorage.getItem('my_todo_list') ?? "[]");
    const [list, setList] = useState<any>(newList);
    const [filter, setFilter] = useState('');

    const handleEdit = (newData, index: number) => {
        const tempList = [...list]; // changing in the displayed list only
        tempList[index] = newData;

        setList(tempList);
        localStorage.setItem('my_todo_list', JSON.stringify(tempList)); // need to work here for updating
    }

    const handleDelete = (ind) => {
        const tempList = [...list];
        tempList.splice(ind, 1);
        setList(tempList);
        localStorage.setItem('my_todo_list', JSON.stringify(tempList));
    }

    const handleFilter = (filterBy: string) => {
        setFilter(filterBy);
        const getDateString = (date: Date = new Date()) => {
            return new Date(date).toISOString().split('T')[0];
        }
        const newList = JSON.parse(localStorage.getItem('my_todo_list') ?? "[]");

        let filteredList = newList;
        if (filterBy === 'today') {
            filteredList = newList.filter(({ endsAt }) => getDateString(endsAt) === getDateString())
        }
        else if (filterBy === 'tomorrow') {
            const tommorowsDate = new Date();
            tommorowsDate.setDate(new Date().getDate() + 1);
            filteredList = newList.filter(({ endsAt }) => getDateString(endsAt) === getDateString(tommorowsDate))
        }
        else if (filterBy === 'later') {
            const tommorowsDate = new Date();
            tommorowsDate.setDate(new Date().getDate() + 1);
            tommorowsDate.setHours(23, 59, 59, 999);
            filteredList = newList.filter(({ endsAt }) => new Date(endsAt).valueOf() > tommorowsDate.valueOf());
        }
        setList(filteredList);
    }


    const handleAdd = (newTodo) => {
        setList([newTodo, ...newList]);
        localStorage.setItem('my_todo_list', JSON.stringify([newTodo, ...newList]));
        console.log('checking update**8', localStorage.getItem('my_todo_list'));
        filter && handleFilter(filter);
    }

    return (
        <div className='mainContainer'>
            <SideNav handleFilter={handleFilter} filter={filter} />
            <TodoList list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
            <AddTodo handleAdd={handleAdd} />
        </div>
    )
}

export default Todo