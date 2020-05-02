import React, { Component } from 'react';
import styles from './actions.css';
import PropTypes from 'prop-types';


class Actions extends Component {
  static propTypes = {
    playerTriesToRun: PropTypes.func.isRequired,
    playerTriesToHit: PropTypes.func.isRequired,
    playerTriesToHeal: PropTypes.func.isRequired,
    playerTriesSpecial: PropTypes.func.isRequired,
    playerMadeChoice: PropTypes.bool.isRequired,
  };

  playerClicksFight = () => {
    this.props.playerTriesToHit();
  }

  playerClicksHeal = () => {
    this.props.playerTriesToHeal();
  }

  playerClicksRun = () => {
    this.props.playerTriesToRun();
  }

  playerClicksSpecial = () => {
    this.props.playerTriesSpecial();
  }
  
  render() {
    return (
      <section className={styles.userActions}>
        Player Actions:
        <ul className={styles.actionsList}>
          <li>
            <button type="Fight"
              className={styles.buttons}
              style={this.props.playerMadeChoice ? { backgroundColor : 'yellow' } : {}}
              id="fightButton" onClick={this.playerClicksFight}
              disabled={this.props.playerMadeChoice}>Fight</button>
          </li>
          <li>
            <button type="Heal"
              className={styles.buttons}
              style={this.props.playerMadeChoice ? { backgroundColor : 'yellow' } : {}} 
              id="healButton" onClick={this.playerClicksHeal}
              disabled={this.props.playerMadeChoice}>Heal</button>
          </li>
          <li>
            <button type="Special" 
              className={styles.buttons}
              style={this.props.playerMadeChoice ? { backgroundColor : 'yellow' } : {}} 
              id="specialButton" onClick={this.playerClicksSpecial}
              disabled={this.props.playerMadeChoice}>Special</button>
          </li>
          {/* <li>Defend</li> */}
          <li>
            <button type="Run" 
              className={styles.buttons}
              style={this.props.playerMadeChoice ? { backgroundColor : 'yellow' } : {}} 
              id="runButton" onClick={this.playerClicksRun}
              disabled={this.props.playerMadeChoice}>Run</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Actions;
