import React, { Component } from 'react';
import Actions from '../actions/Actions';
import MainScreen from '../mainscreen/MainScreen';
import PlayerStats from '../playerstats/PlayerStats';
import EnemyComp from '../enemystats/EnemyStats';
import CombatEngine from '../../services/combatengine/CombatEngine';
import enemies from '../../services/gamedata/Enemies';
import players from '../../services/gamedata/Players';
import styles from './layoutcomp.css';

class GameLayout extends Component {
  state = {
    currentEnemy: { data: 'none' },
    player: players[0],
    battlesFought: 0,
    currentTurn: 'player',
  };

  loadEnemy = () => {
    if(this.state.currentEnemy.data === 'none') {
      let randomEnemy = Math.floor(Math.random() * 4);
      return this.setState({ currentEnemy: enemies[randomEnemy],
        currentCombatMsg: `A ${enemies[randomEnemy].name} begins to attack you!`,
        battlesFought: this.state.battlesFought + 1 });
    }
  }

  //PLAYER ACTIONS linked from engine here
  playerRuns = () => {
    let playerRunsObj = CombatEngine.player.run(this.state.currentEnemy);
    
    let newState = { ...this.state };
    newState.currentEnemy = playerRunsObj.currentEnemy;
    newState.currentCombatMsg = playerRunsObj.currentCombatMsg;
    newState.currentTurn = CombatEngine.turnSwap();
    return this.setState({ ...newState });
  }

  playerTriesToHit = () => {
    let playerFightReturnObj = CombatEngine.universalActions.fight(
      this.state.player,
      this.state.currentEnemy,
      this.state.currentTurn,
    );

    /* eslint-disable-next-line no-console */
    console.log('playerFightReturnObj', playerFightReturnObj);
    let newState = { ...this.state };
    newState.currentEnemy = playerFightReturnObj.beingHit;
    newState.currentCombatMsg = playerFightReturnObj.combatMsg;
    newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
    return this.setState({ ...newState });
  }

  playerTriesToHeal = () => {
    let playerHealReturnObj = CombatEngine.universalActions.heal(
      this.state.player,
      this.state.currentTurn,
    );

    let newState = { ...this.state };
    newState.player = playerHealReturnObj.healTarget;
    newState.currentCombatMsg = playerHealReturnObj.actionMsg;
    newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
    return this.setState({ ...newState });
  }

  //ENEMY ACTIONS linked from engine here
  enemyTriesToHit = () => {
    let enemyFightReturnObj = CombatEngine.universalActions.fight(
      this.state.currentEnemy,
      this.state.player,
      this.state.currentTurn,
    );
    
    /* eslint-disable-next-line no-console */
    console.log('enemyFightReturnObj', enemyFightReturnObj);
    let newState = { ...this.state };
    newState.player = enemyFightReturnObj.beingHit;
    newState.currentCombatMsg = enemyFightReturnObj.combatMsg;
    newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
    return this.setState({ ...newState });
  }

  componentDidMount() {
    this.loadEnemy();
  }

  componentDidUpdate() {
    if(this.state.currentTurn === 'enemy' && this.state.currentEnemy.hitPoints > 0) {
      console.log('enemy is trying to hit you');
      this.enemyTriesToHit();
    }
    else if(this.state.currentEnemy.hitPoints === 0) {
      let deathReturnObj = CombatEngine.enemyDeath(this.state.currentEnemy);
      console.log(deathReturnObj);
      let newState = { ...this.state };
      newState.currentEnemy = deathReturnObj.currentEnemy;
      newState.currentTurn = deathReturnObj.currentTurn;
      newState.combatMsg = deathReturnObj.msg;
      this.setState({ ...newState });
    }
    else if(this.state.currentEnemy.data === 'none') {
      this.loadEnemy();
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

export default GameLayout;
