import React from 'react'
import './Main.modules.css'

export default function Main() {
  return (
    <div className='principal'>
        <div className='main-left'>
            <span>Desenvolvimento de aplicativos</span>
            <h1>meuApp</h1>
            <p>Há 5 anos desenvolvendo soluções para seus problemas</p>
        </div>
        <div className='main-right objeto-a-flutuar'>
            <img src="./imgs/meuapp.svg" alt="" />
        </div>
    </div>
  )
}
