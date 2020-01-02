import React from 'react';
import styles from './enemycomp.css';
import PropTypes from 'prop-types';

// name: 'Goomba',
// damage: 1,
// strengthBonus: 0,
// armorClass: 1,
// armor: 0,
// dexterity: 5,
// hitPoints: 2,


function EnemyComp({ enemy }) {
  const {
    name,
    hitPoints,
    armorClass,
  } = enemy;

  return (
    <section className={styles.enemyStats}>
      Temporary or maybe secret comp will change over time
      <ul>
        <li>Name: {name}</li>
        <li>HP: {hitPoints}</li>
        <li>AC: {armorClass}</li>
        <li>Special - Not yet implemented</li>
      </ul>
    </section>
  );
}

EnemyComp.propTypes = {
  enemy: PropTypes.object.isRequired,
};

export default EnemyComp;
