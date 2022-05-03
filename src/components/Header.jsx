import React from 'react'
import logo from'../components/img/logo.jpg'

const Header = () => {
  return (
    <div className='contenedor'>
        <header>
          <div className='logo'>
           <img src={logo}/>
          </div>
          <nav>
            <a href="#">Enlace1</a>
            <a href="#">Enlace2</a>
            <a href="#">Enlace3</a>
          </nav>
        </header>
    </div>
  )
}

export default Header