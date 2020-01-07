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
        <ul>
          <li>
            <button type="Fight" onClick={this.playerClicksFight}>Fight</button>
          </li>
          <li>
            <button type="Heal" onClick={this.playerClicksHeal}>Heal</button>
          </li>
          <li>Fight</li>
          <li>Heal</li>
          <li>Special</li>
        </ul>
      </section>
    );
  }
}

export default Actions;
