import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
      <>
  <nav id="navbar" class="">
    <div class="nav-wrapper">
      <div class="logo">
        <ul id="menu">
          <li><a href="#registro">Inicio</a></li>
          <li><a href="#login">Quienes Somos</a></li>
       </ul>
      </div>
       <ul id="menu">
          <li><a href="#registro">Registro</a></li>
          <li><a href="#login">Login</a></li>
       </ul>
    </div>
  </nav>
  
  
      {/* <!-- Menu Icon --> */}
      <div class="menuIcon">
      <span class="icon icon-bars"></span>
      <span class="icon icon-bars overlay"></span>
      </div>
  
      <div class="overlay-menu">
      <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Live Dashboard</a></li>
          </ul>
      </div>
      </>
    )
  }

export default Navbar