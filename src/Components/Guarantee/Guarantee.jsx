import React from 'react';
import styles from './Guarantee.module.css';
import Image from './Image/Image.png';
import Plans from './Plans/Plans';

const Guarantee = () => {
  return (
    <div>
      <div className={styles.Guarantee}>
        <div>
          <h1>
            Planos <span>de</span> <br /> Garantia<font color="#FEC63E">.</font>
          </h1>
        </div>
        <div>
          <img src={Image} />
        </div>
      </div>
      <div className={styles.ContainPlans}>
        <Plans/>
      </div>  
    </div>
  );
};

export default Guarantee;
