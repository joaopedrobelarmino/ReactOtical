import React from 'react';
import styles from './Andress.module.css';
import Image from './Image/Image.png';
import Footer from '../Footer/Footer';

const Adress = () => {
  return (
    <div>
      <div className={styles.Andress}>
        <div>
          <h1>
            Rua dos <br /> oculos
          </h1>
          <p>Numero 200</p>
        </div>
        <div>
          <img src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Adress;
