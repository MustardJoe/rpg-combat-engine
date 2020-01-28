import React from 'react';
import PropTypes from 'prop-types';
import styles from './battlescount.css';

function BattlesCount({ count }) {
  return (
    <div className={styles.count}>
      Battles: {count}
    </div>
  );
}

BattlesCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default BattlesCount;
