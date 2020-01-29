import React from 'react';
import PropTypes from 'prop-types';
import styles from './mainscreen.css';
import BattlesCount from '../battlescount/BattlesCount';

function MainScreen({ currentCombatMsg, enemyImg, count }) {
  return (
    <section className={styles.mainScreen}>
      <p>{currentCombatMsg}</p>
      <p><img className={styles.img} src={enemyImg} alt="<image of a baddie>"></img></p>
      <BattlesCount count={count} />
    </section>
  );
}

MainScreen.propTypes = {
  currentCombatMsg: PropTypes.string,
  enemyImg: PropTypes.string,
  count: PropTypes.number.isRequired,

};

export default MainScreen;
