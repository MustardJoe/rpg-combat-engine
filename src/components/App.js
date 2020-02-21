import React from 'react';
import LayoutComp from '../components/layout/LayoutComp';
/*import EngineWrapper from '../services/combatengine/EngineWrapper';*/
import grindotronlogo from '../assets/grindotronlogo.png';
import styles from './app.css';

export default function App() {
  return (
    <>
      <p className={styles.logop}>
        <a href="./">
          <img src={grindotronlogo} alt="GriNd-O-TRoN" className={styles.logo}></img>
        </a>
      </p>
      <h3 className={styles.sublogo}>A turn-based combat engine</h3>
      <LayoutComp />
    </>
  );
}
