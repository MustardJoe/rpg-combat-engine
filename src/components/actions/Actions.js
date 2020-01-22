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
    this.props.playerTriesToHeal();
  }

  playerClicksRun = () => {
    console.log('you try to run, but this feature is still in development');
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
          <li>
            <button type="Run" onClick={this.playerClicksRun}>Run</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Actions;
