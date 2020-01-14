import React from 'react';
import styles from './enemystats.css';
import PropTypes from 'prop-types';

// shape of enemy obj below:
// name: 'Goomba',
// damage: 1,
// strengthBonus: 0,
// armorClass: 1,
// armor: 0,
// dexterity: 5,
// hitPoints: 2,
// healPotions: 3,
// status: 'Normal',
// alive: true,


function EnemyComp({ enemy }) {
  const {
    name,
    hitPoints,
    armorClass,
  } = enemy;

  return (
    <section className={styles.enemyStats}>
      Current Enemy: {name}
      <ul>
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
