import React from 'react';
import PropTypes from 'prop-types';
import styles from './mainscreen.css';

function MainScreen({ currentCombatMsg, enemyImg }) {
  return (
    <section className={styles.mainScreen}>
      <p className={styles.screenMsg}>
        {currentCombatMsg}
      </p>
      <p>
        <img className={styles.img} src={enemyImg} alt="<image of a baddie>"></img> 
      </p>
    </section>
  );
}

MainScreen.propTypes = {
  currentCombatMsg: PropTypes.string,
  enemyImg: PropTypes.string,
};

export default MainScreen;
