import React from 'react';
import PropTypes from 'prop-types';
import styles from './playerstats.css';

function PlayerStats({ playerStatsObj }) {
  const {
    name,
    hitPoints,
    armorClass,
    hitBonus,
    healPotions,
    status,
    level,
    exp,
  } = playerStatsObj;

  return (
    <div className={styles.yourStatsWindow}>
      <p className={styles.youAre}>You are:</p>
      <span className={styles.name}>{name}</span>
      <ul className={styles.yourStatsList}>
        <li>Hit Points: {hitPoints}</li>
        <li>Armor Class: {armorClass}</li>
        <li>Hit Bonus: {hitBonus}</li>
        <li>Status: {status}</li>
        <li>Potions of Healing: {healPotions}</li>
        <li>Level: {level} | Exp: {exp}</li>
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
    healPotions: PropTypes.number,
    status: PropTypes.string,
    level: PropTypes.number,
    exp: PropTypes.number,
  })
};

export default PlayerStats;
