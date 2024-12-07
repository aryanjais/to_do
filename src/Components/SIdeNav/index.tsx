import React from 'react'
import './styles.css';
const SideNav = () => {
  return (
    <div className='navContainer'>
        <ul className='optionContainer'>
            <li className='options'>Today</li>
            <li className='options'>Tommorow</li>
            <li className='options'>Later</li>
        </ul>
    </div>
  )
}

export default SideNav