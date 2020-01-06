import React from 'react';
import PropTypes from 'prop-types';
import styles from './mainscreen.css';

function MainScreen({ currentCombatMsg, enemyImg }) {
  return (
    <section className={styles.mainScreen}>
      <p>{currentCombatMsg}</p>
      <p><img className={styles.img} src={enemyImg} alt="image of a badie"></img></p>
    </section>
  );
}

MainScreen.propTypes = {
  currentCombatMsg: PropTypes.string,
  enemyImg: PropTypes.string,
};

export default MainScreen;
