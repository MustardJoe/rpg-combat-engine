import React, { Component } from 'react';
import styles from './actions.css';
import PropTypes from 'prop-types';


class Actions extends Component {
  static propTypes = {
    playerTriesToRun: PropTypes.func.isRequired,
    playerTriesToHit: PropTypes.func.isRequired,
    playerTriesToHeal: PropTypes.func.isRequired,
    playerTriesSpecial: PropTypes.func.isRequired,
    actionButtons: PropTypes.string.isRequired,
  };

  disableAllButtons = () => {
    document.getElementById('fightButton').disabled = true;
    document.getElementById('healButton').disabled = true;
    document.getElementById('runButton').disabled = true;
    document.getElementById('specialButton').disabled = true;
  }

  enableAllButtons = () => {
    document.getElementById('fightButton').disabled = false;
    document.getElementById('healButton').disabled = false;
    document.getElementById('runButton').disabled = false;
    document.getElementById('specialButton').disabled = false;
  }

  playerClicksFight = () => {
    this.props.playerTriesToHit();
    this.disableAllButtons();
  }

  playerClicksHeal = () => {
    this.props.playerTriesToHeal();
    this.disableAllButtons();
  }

  playerClicksRun = () => {
    this.props.playerTriesToRun();
  }

  playerClicksSpecial = () => {
    this.props.playerTriesSpecial();
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
          <li>
            <button type="Special" id="specialButton" onClick={this.playerClicksSpecial}>Special</button>
          </li>
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
