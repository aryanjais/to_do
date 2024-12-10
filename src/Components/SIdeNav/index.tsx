import React from 'react'
import './styles.css';
const SideNav = (props) => {
  const { handleFilter, filter } = props;

  const applyFilter = (e) => {
    handleFilter(e.target.dataset.filter === filter ? '' : e.target.dataset.filter);
  }

  return (
    <div className='navContainer'>
      <ul className='optionContainer'>
        <li onClick={applyFilter} className={`options ${filter === 'today' ? 'selectedFilter' : ''}`} data-filter='today'>Today</li>
        <li onClick={applyFilter} className={`options ${filter === 'tomorrow' ? 'selectedFilter' : ''}`} data-filter='tomorrow'>Tommorow</li>
        <li onClick={applyFilter} className={`options ${filter === 'later' ? 'selectedFilter' : ''}`} data-filter='later'>Later</li>
        <li onClick={applyFilter} className={`options ${filter === 'completed' ? 'selectedFilter' : ''}`} data-filter='completed'>Completed</li>
      </ul>
    </div>
  )
}

export default SideNav