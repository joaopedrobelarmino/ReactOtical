import React from 'react';
import styles from './ReleasesGlasses.module.css';
import Fois from './Image/Fois.jpg';
import Calvin from './Image/Calvin.jpg';
import Oakley from './Image/Oakley.jpg';
import { Link } from 'react-router-dom';

const ReleasesGlasses = () => {
  return (
    <div className={styles.ReleasesGlasses}>
      <div className={styles.ReleasesContain}>
        <div>
          <img src={Fois} />
          <Link to='/Fois'>
            <button>Adquira o seu</button>
          </Link>
        </div>
        <div>
          <img src={Calvin} />
          <Link to='/Calvin'><button>Adquira o seu</button></Link>
        </div>
        <div>
          <img src={Oakley} />
          <Link to='/Oakley'><button>Adquira o seu</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ReleasesGlasses;
