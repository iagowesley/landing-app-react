import React from 'react'
import './Menu.modules.css'
import Modal from './Modal'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Menu() {
  return (
    <div className='header'>
         <nav class="navbar">
            <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          <h1 class="logo">MeuApp</h1>
          </div>
         </nav>
        
    </div>

  )
}
