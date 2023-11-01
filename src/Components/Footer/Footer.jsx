import React from 'react';
import styles from './Footer.module.css';
import Image from './Image/Icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <footer>
        <div>
          <Link to="/">
            <img src={Image} width={100} />
          </Link>
        </div>
        <nav>
          <ul>
            <Link to="/Glasses">
              <li>Oculos</li>
            </Link>
            <Link to="/Stores">
              <li>Lojas</li>
            </Link>
            <Link to="/Contact">
              <li>Contato</li>
            </Link>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
