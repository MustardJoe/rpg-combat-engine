import React, { Component } from 'react';
import styles from './actions.css';
import PropTypes from 'prop-types';


class Actions extends Component {
  static propTypes = {
    playerTriesToRun: PropTypes.func.isRequired,
    playerTriesToHit: PropTypes.func.isRequired,
    playerTriesToHeal: PropTypes.func.isRequired,
    actionButtons: PropTypes.string.isRequired,
  };

  disableAllButtons = () => {
    document.getElementById('fightButton').disabled = true;
    document.getElementById('healButton').disabled = true;
    document.getElementById('runButton').disabled = true;
  }

  enableAllButtons = () => {
    document.getElementById('fightButton').disabled = false;
    document.getElementById('healButton').disabled = false;
    document.getElementById('runButton').disabled = false;
  }

  playerClicksFight = () => {
    this.props.playerTriesToHit();
    this.disableAllButtons();
  }

  playerClicksHeal = () => {
    this.props.playerTriesToHeal();
  }

  playerClicksRun = () => {
    this.props.playerTriesToRun();
  }

  componentDidUpdate() {
    if(this.props.actionButtons === 'enable') {
      this.enableAllButtons();
    }
    if(this.props.actionButtons === 'disable') {
      this.disableAllButtons();
    }
  }
  
  render() {
    return (
      <section className={styles.userActions}>
        Player Actions
        <ul className={styles.actionsList}>
          <li>
            <button type="Fight" id="fightButton" onClick={this.playerClicksFight}>Fight</button>
          </li>
          <li>
            <button type="Heal" id="healButton" onClick={this.playerClicksHeal}>Heal</button>
          </li>
          <li>Special</li>
          <li>Defend</li>
          <li>
            <button type="Run" id="runButton" onClick={this.playerClicksRun}>Run</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Actions;
