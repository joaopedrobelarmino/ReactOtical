import React from 'react';
import styles from './Calvin.module.css';
import Image from '../Image/Calvin.jpg';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Calvin = () => {
  return (
    <div>
      <Header />
      <div className={styles.Calvin}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>Oculos Calvin</h1>
          <p> Apresentamos o nosso modelo exclusivo de óculos "Calvin". Com um design moderno e elegante, esses óculos elevam
          instantaneamente o seu estilo a um novo patamar.</p>
          <Link><button>Adquira o seu</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calvin;
