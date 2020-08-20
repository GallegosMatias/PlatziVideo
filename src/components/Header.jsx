import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import icon from '../assets/static/icon.png';

const Header = () => (
  <header className="header">

    <Link to="/">
      <img className="header__img" src={logo} alt="" />
    </Link>


    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={icon} alt="" />
        Perfil
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li>
          <Link to="/login">
            Iniciar Sesión
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
