import React from 'react';
import PropTypes from 'prop-types';
import styles from './playerstats.css';

function YourStats() {
  const dummyStats = {
    HP: 80,
    Armor: 12,
    Agility: 15,
    Strength: 15,
    Status: 'Normal',
  };

  return (
    <div className={styles.yourStatsWindow}>
      <ul className={styles.yourStatsList}>
        <li>HP: {dummyStats.HP}</li>
        <li>Armor: {dummyStats.Armor}</li>
        <li>Agility: {dummyStats.Agility}</li>
        <li>Strength: {dummyStats.Strength}</li>
        <li>Status: {dummyStats.Status}</li>
      </ul>
    </div>
  );
}

export default YourStats;
