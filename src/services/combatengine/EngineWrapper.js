import React, { Component } from 'react';
import Actions from '../../components/actions/Actions';
import MainScreen from '../../components/mainscreen/MainScreen';
import PlayerStats from '../../components/playerstats/PlayerStats';
import EnemyComp from '../../components/enemystats/EnemyStats';
import enemies from '../../services/gamedata/Enemies';
// import players from '../../services/gamedata/Players';
import styles from '../../components/layout/layoutcomp.css';
import Player from '../combatengine/PlayerClass';

class EngineWrapper extends Component {
  state = {
    currentEnemy: { data: 'none' },
    player: {},
    battlesFought: 0,
    currentTurn: 'player',
  };

  loadPlayer = () => {
    let thisPlayer = new Player();
    console.log(thisPlayer);
    return this.state.player({ ...thisPlayer });
  }

  loadEnemy = () => {
    if(this.state.currentEnemy.data === 'none') {
      let randomEnemy = Math.floor(Math.random() * 4);
      /* eslint-disable-next-line no-console */
      console.log(randomEnemy);
      return this.setState({ currentEnemy: enemies[randomEnemy],
        currentCombatMsg: `A ${enemies[randomEnemy].name} begins to attack you!` });
    }
  }

  //PLAYER ACTIONS linked from engine here
  playerTriesToHit = () => {
    this.state.player.attack(this.state.currentEnemy, this.state.currentTurn);
  }

  playerTriesToHeal = () => {
    this.state.player.heal();
  }

  //ENEMY ACTIONS linked from engine here
  enemyTriesToHit = () => {

  }

  componentDidMount() {
    this.loadPlayer();
    this.loadEnemy();
  }

  componentDidUpdate() {
    if(this.state.currentTurn === 'enemy' && this.state.currentEnemy.hitPoints > 0) {
      console.log('enemy is trying to hit you');
      this.enemyTriesToHit();
    }
  }


  render() {
    return (
      <div className={styles.containerStyle}>
        <MainScreen 
          currentCombatMsg={this.state.currentCombatMsg}
          enemyImg={this.state.currentEnemy.img} />
        <div className={styles.dashboard}>
          <PlayerStats playerStatsObj={this.state.player} />
          <Actions playerTriesToHit={this.playerTriesToHit} 
            playerTriesToHeal={this.playerTriesToHeal} />
          <EnemyComp enemy={this.state.currentEnemy} />
        </div>
      </div>
    );
  }
}

export default EngineWrapper;
