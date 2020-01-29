import React from 'react';
import Msgs from '../../services/gamedata/Msgs';
import grindogameover from '../../assets/grindogameover.png';
import styles from './gameover.css';

let gameOverText = Msgs.randPlayerDieMsg();

function GameOver() {
  return (
    <div className={styles.gameOver}>
      <img src={grindogameover} alt='Game Over'></img>
      <p>{gameOverText}</p>
    </div>
  );

}

export default GameOver;
