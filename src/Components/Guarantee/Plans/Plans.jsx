import React from 'react';
import styles from './Plans.module.css';

const Plans = () => {
  return (
    <div className={styles.Plans}>
      <div>
        <div className={styles.ContainPlans}>
          <h1>Prata</h1>
          <ul>
            <li>Uma troca de armação por ano</li>
            <li>Assistencia técnica</li>
            <li>Suporte 08h às 18h</li>
          </ul>
          <button>Inscreva-se</button>
        </div>
      </div>
      <div>
        <div className={styles.ContainPlans}>
          <h1>Ouro</h1>
          <ul>
            <li>Uma troca de armação por ano</li>
            <li>Assistencia técnica</li>
            <li>Suporte 08h às 18h</li>
            <li>Assistencia técnica</li>
            <li>Suporte 08h às 18h</li>
          </ul>
          <button>Inscreva-se</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
