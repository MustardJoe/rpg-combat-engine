import React from 'react';
import PropTypes from 'prop-types';
import styles from './playerstats.css';

function PlayerStats({ playerStatsObj }) {
  const {
    name,
    hitPoints,
    armorClass,
    hitBonus,
    agility,
    strength,
    healPotions,
    status,
  } = playerStatsObj;

  return (
    <div className={styles.yourStatsWindow}>
      <span className={styles.name}>{name}</span>
      <ul className={styles.yourStatsList}>
        <li>Hit Points: {hitPoints}</li>
        <li>Armor Class: {armorClass}</li>
        <li>Hit Bonus: {hitBonus}</li>
        <li>Agility: {agility}</li>
        <li>Strength: {strength}</li>
        <li>Status: {status}</li>
        <li>Potions of Healing: {healPotions}</li>
      </ul>
    </div>
  );
}

PlayerStats.propTypes = {
  playerStatsObj: PropTypes.shape({
    name: PropTypes.string,
    hitPoints: PropTypes.number,
    hitBonus: PropTypes.number,
    armorClass: PropTypes.number,
    agility: PropTypes.number,
    strength: PropTypes.number,
    healPotions: PropTypes.number,
    status: PropTypes.string,
  })
};

export default PlayerStats;
