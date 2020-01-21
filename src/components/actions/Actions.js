import React, { Component } from 'react';
import styles from './actions.css';
import PropTypes from 'prop-types';


class Actions extends Component {
  static propTypes = {
    playerTriesToHit: PropTypes.func.isRequired,
    playerTriesToHeal: PropTypes.func.isRequired,
  };

  playerClicksFight = () => {
    this.props.playerTriesToHit();
  }

  playerClicksHeal = () => {
    console.log('player clicked heal');
    this.props.playerTriesToHeal();
  }
  
  render() {
    return (
      <section className={styles.userActions}>
        Player Actions
        <ul className={styles.actionsList}>
          <li>
            <button type="Fight" onClick={this.playerClicksFight}>Fight</button>
          </li>
          <li>
            <button type="Heal" onClick={this.playerClicksHeal}>Heal</button>
          </li>
          <li>Special</li>
          <li>Run</li>
        </ul>
      </section>
    );
  }
}

export default Actions;
