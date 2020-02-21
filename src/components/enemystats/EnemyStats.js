import React from 'react';
import styles from './enemystats.css';
import PropTypes from 'prop-types';
import BattlesCount from '../battlescount/BattlesCount';

function EnemyComp({ enemy, count }) {
  const {
    name,
    hitPoints,
    armorClass,
    damageD,
  } = enemy;

  return (
    <section className={styles.enemyStats}>
      <p className={styles.currentTag}>Current Enemy:</p>
      <p className={styles.enemyName}>{name}</p>
      <ul className={styles.statsList}>
        <li>Hit Points: {hitPoints}</li>
        <li>Armor Class: {armorClass}</li>
        <li>Damage: 1d{damageD}</li>
      </ul>
      <p><BattlesCount count={count} /></p>
    </section>
  );
}

EnemyComp.propTypes = {
  enemy: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default EnemyComp;
