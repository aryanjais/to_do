import React, { useState } from 'react'
import './styles.css';
import AddTodo from '../AddTodo/index.tsx';
import SideNav from '../SIdeNav/index.tsx';
import TodoList from '../TodoList/index.tsx';

const Todo = () => {
    const newList = JSON.parse(localStorage.getItem('my_todo_list') ?? "[]");
    const [list, setList] = useState<any>(newList); // mapping this list
    const [filter, setFilter] = useState('');

    const generateRandomId = () => {
        return `${new Date().valueOf()}-${Math.ceil(Math.random() * 1000)}`
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
        else if (filterBy === 'completed') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            filteredList = newList.filter(({ endsAt }) => new Date(endsAt).valueOf() < today.valueOf());
        }
        setList(filteredList);
    }


    const handleAdd = (obj) => {
        const newTodo = { ...obj, id: generateRandomId(), createdAt: new Date().valueOf() }
        setList([newTodo, ...newList]);
        localStorage.setItem('my_todo_list', JSON.stringify([newTodo, ...newList]));
        filter && handleFilter(filter);
    }

    
    const handleEdit = (newData, index: number) => {
        const id = list[index].id;
        const tempList = newList.map((item) => item.id === id ? {...item, ...newData } : item);

        setList(tempList);
        localStorage.setItem('my_todo_list', JSON.stringify(tempList)); // need to work here for updating
        filter && handleFilter(filter);
    }

    const handleDelete = (ind) => {
        const id = list[ind].id;
        const tempList = newList.filter((item) => item.id !== id);

        setList(tempList);
        localStorage.setItem('my_todo_list', JSON.stringify(tempList));
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