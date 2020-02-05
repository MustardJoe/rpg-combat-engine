import React from 'react';
import styles from './enemystats.css';
import PropTypes from 'prop-types';

function EnemyComp({ enemy }) {
  const {
    name,
    hitPoints,
    armorClass,
    damageD,
  } = enemy;

  return (
    <section className={styles.enemyStats}>
      <p>Current Enemy:</p>
      <p className={styles.enemyName}>{name}</p>
      <ul className={styles.statsList}>
        <li>Hit Points: {hitPoints}</li>
        <li>Armor Class: {armorClass}</li>
        <li>Damage: 1d{damageD}</li>
        <li>Special - Not yet implemented</li>
      </ul>
    </section>
  );
}

EnemyComp.propTypes = {
  enemy: PropTypes.object.isRequired,
};

export default EnemyComp;
