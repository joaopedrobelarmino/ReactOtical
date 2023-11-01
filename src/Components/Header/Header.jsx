import React from 'react';
import styles from './Header.module.css';
import Image from './Image/Icon.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to='/'>
            <img src={Image} width={100} />
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to='/Glasses'><li>Oculos</li></NavLink>
            <NavLink to='/Stores'><li>Lojas</li></NavLink>
            <NavLink to='/Contact'><li>Contato</li></NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
