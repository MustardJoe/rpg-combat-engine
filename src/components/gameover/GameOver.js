import React from 'react';
import grindogameover from '../../assets/grindogameover.png';
import styles from './gameover.css';

function GameOver() {
  return (
    <div className={styles.gameOver}>
      <img src={grindogameover} alt='Game Over'></img>
    </div>
  );

}

export default GameOver;
