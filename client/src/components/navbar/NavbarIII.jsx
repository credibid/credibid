import React from 'react';
import './NavbarIII.css';

const NavbarIII = () => {
  return (
    <div class='container'>
      <div class='sub-container'>
        <div class='nav-menu'>
          <ul>
            <li>
              <a href=''>INICIO</a>
            </li>
            <li>
              <a href=''>Quiene Somos</a>
            </li>
            <li>
              <a href='/signup'>Registro</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarIII;
