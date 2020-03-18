import React, { Component } from 'react';
import styles from './layoutcomp.css';

import players from '../../services/gamedata/Players';
import enemies from '../../services/gamedata/Enemies';
import Msgs from '../../services/gamedata/Msgs';
import Actions from '../actions/Actions';
import MainScreen from '../mainscreen/MainScreen';
import PlayerStats from '../playerstats/PlayerStats';
import EnemyComp from '../enemystats/EnemyStats';
import GameOver from '../gameover/GameOver';
import CombatEngine from '../../services/combatengine/CombatEngine';

class GameLayout extends Component {
  state = {
    currentEnemy: { data: 'none' },
    player: players[0],
    battlesFought: 0,
    currentTurn: 'player',
    playerMadeChoice: false
  };


  // Helper Functions
  loadEnemy = () => {
    if(this.state.currentEnemy.data === 'none' && this.state.player.hitPoints > 0) {
      let randomEnemy = enemies.randomEnemy();
      return this.setState({ 
        currentEnemy: randomEnemy,
        currentCombatMsg: `A ${randomEnemy.name} begins to attack you!`,
        battlesFought: this.state.battlesFought + 1 
      });
    }
  }
  
  buttonsEnabled = () => {
    this.setState({ playerMadeChoice: false });
  }

  asyncStateReturn = (newState) => {
    this.setState({ ...newState }, () => {
      setTimeout(() => {
        newState = { ...this.state };
        newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
        this.setState({ ...newState }, this.buttonsEnabled);
      }, 1200);
    });
  }

  // //flesh out this func - currently just copy of load enemy - need to merge w/async functionality
  // asyncLoadEnemy = () => {
  //   if(this.state.currentEnemy.data === 'none' && this.state.player.hitPoints > 0) {
  //     let randomEnemy = enemies.randomEnemy();
  //     return this.setState({ 
  //       currentEnemy: randomEnemy,
  //       currentCombatMsg: `A ${randomEnemy.name} begins to attack you!`,
  //       battlesFought: this.state.battlesFought + 1 
  //     });
  //   }
  // }
  
  
  //PLAYER ACTIONS linked from engine here
  playerDies = () => {
    let playerDeathObj = CombatEngine.player.death(this.state.player, this.state.currentEnemy);
    let newState = { ...this.state };
    newState.currentTurn = playerDeathObj.currentTurn;
    this.setState({ ...newState });
  }

  playerRuns = () => {
    let playerRunsObj = CombatEngine.player.run(this.state.currentEnemy); 

    let newState = { ...this.state };
    newState.playerMadeChoice = true;
    newState.currentEnemy = playerRunsObj.currentEnemy;
    newState.currentCombatMsg = playerRunsObj.currentCombatMsg;
    this.asyncStateReturn(newState);
  }

  playerTriesSpecial = () => {
    let specialReturnObj = CombatEngine.universalActions.special(
      this.state.player,
      this.state.currentEnemy,
      this.state.currentTurn
    );

    let newState = { ...this.state };
    newState.playerMadeChoice = true;
    newState.currentEnemy = specialReturnObj.beingHit;
    newState.player = specialReturnObj.hitting;
    newState.currentCombatMsg = specialReturnObj.combatMsg;
    this.asyncStateReturn(newState);
  }

  playerTriesToHeal = () => {
    let playerHealReturnObj = CombatEngine.universalActions.heal(
      this.state.player,
      this.state.currentTurn,
    );

    let newState = { ...this.state };
    newState.playerMadeChoice = true;
    newState.player = playerHealReturnObj.healTarget;
    newState.currentCombatMsg = playerHealReturnObj.actionMsg;
    this.asyncStateReturn(newState);
  }

  playerTriesToHit = () => {
    let playerFightReturnObj = CombatEngine.universalActions.fight(
      this.state.player,
      this.state.currentEnemy,
      this.state.currentTurn,
    );

    let newState = { ...this.state };
    newState.playerMadeChoice = true;
    newState.currentEnemy = playerFightReturnObj.beingHit;
    newState.currentCombatMsg = playerFightReturnObj.combatMsg;
    this.asyncStateReturn(newState);
  }

  playerTriesToRun = () => {
    this.setState({ currentCombatMsg: Msgs.runMsg,
      playerMadeChoice: true }, () => {
      setTimeout(() => {
        let newState = { ...this.state };
        newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
        this.setState({ ...newState }, this.playerRuns);
      }, 1200);
    });
  }
  

  //ENEMY ACTIONS linked from engine here
  enemyDies = () => {
    let deathReturnObj = CombatEngine.enemyDeath(this.state.currentEnemy, this.state.player);
    let newState = { ...this.state };
    newState.currentEnemy = deathReturnObj.currentEnemy;
    newState.player = deathReturnObj.player;
    newState.currentTurn = deathReturnObj.currentTurn;
    newState.currentCombatMsg = deathReturnObj.msg;
    /* eslint-disable-next-line no-console */
    console.log(
      'enemy:', this.state.currentEnemy.name,
      'enemy exp:', this.state.currentEnemy.exp,
      'player exp:', newState.player.exp,);
    this.setState({ ...newState });
    // this.asyncStateReturn(newState);
  }

  enemyTriesToHit = () => {
    let enemyFightReturnObj = CombatEngine.universalActions.fight(
      this.state.currentEnemy,
      this.state.player,
      this.state.currentTurn,
    );
    
    let newState = { ...this.state };
    newState.player = enemyFightReturnObj.beingHit;
    newState.currentCombatMsg = enemyFightReturnObj.combatMsg;
    newState.currentTurn = CombatEngine.turnSwap(this.state.currentTurn);
    return this.setState({ ...newState });
  }

  //Component Lifecycle Methods
  componentDidMount() {
    this.loadEnemy();
  }

  componentDidUpdate() {
    if(this.state.player.hitPoints === 0 && this.state.currentTurn === 'player') {
      this.playerDies();
    }
    if(this.state.currentTurn === 'enemy' && this.state.currentEnemy.hitPoints > 0) {
      this.enemyTriesToHit();
    }
    else if(this.state.currentEnemy.hitPoints === 0) {
      this.enemyDies();
    }
    else if(this.state.currentEnemy.data === 'none') {
      this.loadEnemy();
    }
  }

  render() {
    let { currentTurn } = this.state;
    if(currentTurn === 'Game Over' || currentTurn === undefined) {
      return <GameOver />;
    }
    else {
      return (
        <div className={styles.containerStyle}>
          <MainScreen 
            currentCombatMsg={this.state.currentCombatMsg}
            enemyImg={this.state.currentEnemy.img} />
          <div className={styles.dashboard}>
            <PlayerStats playerStatsObj={this.state.player} />
            <Actions playerTriesToHit={this.playerTriesToHit} 
              playerTriesToHeal={this.playerTriesToHeal}
              playerTriesSpecial={this.playerTriesSpecial}
              playerTriesToRun={this.playerTriesToRun} 
              playerMadeChoice={this.state.playerMadeChoice} />
            <EnemyComp enemy={this.state.currentEnemy}
              count={this.state.battlesFought} />
          </div>
        </div>
      );
    }
  }
}

export default GameLayout;
