import React from 'react';
import LayoutComp from '../components/layout/LayoutComp';
import EngineWrapper from '../services/combatengine/EngineWrapper';
import grindotronlogo from '../assets/grindotronlogo.png';
import styles from './app.css';

export default function App() {
  return (
    <>
      <p className={styles.logop}><img src={grindotronlogo} alt="GriNd-O-TRoN" className={styles.logo}></img></p>
      <h3 className={styles.sublogo}>A turn-based combat engine</h3>
      <LayoutComp />
    </>
  );
}

// player chooses an action
// action is done and results are tallied
// message is displayed for 2 seconds
// player turn is over
// is game over?
// if not enemy turn begins
// enemy chooses an action
// action is done and results are tallied
// message is displayed for 2 seconds
// is game over?
// user is given another opportunity to take next move.