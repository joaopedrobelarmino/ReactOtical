import React from 'react';
import styles from './Intro.module.css';
import Image from '../Header/Image/Icon.png';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div>
        <h1>
          Bem vindo a <span>React</span>Otical<font color="#FFBC1A">.</font>
        </h1>
        <p>
          Bem-vindo à nossa loja de óculos, onde qualidade e estilo se
          encontram.
        </p>
        <Link to='/Glasses'>
          <button>Escolha o seu</button>
        </Link>
      </div>
      <div>
        <img src={Image} />
      </div>
    </div>
  );
};

export default Intro;
