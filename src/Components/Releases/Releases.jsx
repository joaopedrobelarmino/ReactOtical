import React from 'react';
import styles from './Releases.module.css';
import ReleasesGlasses from './ReleasesGlasses/ReleasesGlasses';

const Releases = () => {
  return (
    <div className={styles.Releases}>
      <div>
        <h1>
          Lançamentos<font color="#FFBC1A">.</font>
        </h1>
      </div>
      <div>
        <ReleasesGlasses />
      </div>
    </div>
  );
};

export default Releases;
