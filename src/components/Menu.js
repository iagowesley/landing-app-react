import React from 'react'
import './Menu.modules.css'
import Modal from './Modal'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Menu() {
  return (
    <div className='header'>
        <nav className='navbar'>
            <ul className='lista'>
                <li className='item'>MEUAPP</li>
                <Dropdown className='no-focus-dropdown-button'>
                <Dropdown.Toggle className='btn-sobre no-focus-dropdown-button fw-bold'>
                  Sobre
                </Dropdown.Toggle>
                <Dropdown.Menu className='sub-menu no-focus-dropdown-button'>
                  <Dropdown.Item href="#/action-1" className='item-um'>A empresa</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className='item-dois'>Localização</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>            
              </ul>
        </nav>
        <Modal/>
        
    </div>

  )
}
