import React from 'react';
import PropTypes from 'prop-types';
import styles from './battlescount.css';

function BattlesCount({ count }) {
  return (
    <div className={styles.count}>
      <span className={styles.text}>Battles: {count}</span>
    </div>
  );
}

BattlesCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default BattlesCount;
