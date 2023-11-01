import React from 'react';
import styles from './Fois.module.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Image from '../Image/Fois.jpg';
import { Link } from 'react-router-dom';

const Fois = () => {
  return (
    <div>
      <Header />
      <div className={styles.Fois}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>Oculos Fois</h1>
          <p>
            Apresentamos o nosso modelo exclusivo de óculos "Fois". Com um design moderno e elegante, esses óculos elevam
            instantaneamente o seu estilo a um novo patamar.
          </p>
          <Link to='/Buy'><button>Adquira o seu</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fois;
