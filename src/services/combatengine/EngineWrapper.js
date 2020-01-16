import React, { Component } from 'react';
import Actions from '../../components/actions/Actions';
import MainScreen from '../../components/mainscreen/MainScreen';
import PlayerStats from '../../components/playerstats/PlayerStats';
import EnemyComp from '../../components/enemystats/EnemyStats';
import enemies from '../../services/gamedata/Enemies';
// import players from '../../services/gamedata/Players';
import styles from '../../components/layout/layoutcomp.css';
import Player from '../combatengine/PlayerClass';

class Game extends Component {
  state = {
    currentEnemy: null, 
    player: null,
    battlesFought: 0,
    gameStarted: false, 
  }

  startGame(){
    this.loadPlayer();
    this.loadEnemy();
    this.setState({ gameStarted: true });
  }

  loadPlayer = () => {
    this.setState({ player: new Player() });
  }

  loadEnemy = () => {
    if(!this.state.currentEnemy || !this.state.currentEnemy.data.alive) {
      let randomEnemy = Math.floor(Math.random() * enemies.length);
      this.setState({ currentEnemy: enemies[randomEnemy] });
      
      //currentCombatMsg: `A ${enemies[randomEnemy].name} begins to attack you!` });
    }
  }

  // enacts 1 game play that the user chooses, and enacts one game play from the enemy
  takeTurn(playerAction){
    // ensure that the game is active. this.checkGame();
    // Player takes turn (call playerAction) this.player[playerAction]()
    // ensure that enemy is not dead. (if they are, player wins) this.checkGame()
    // Enemy takes turn (random selection of choices. -- you can make a smart random.)
    // ensure that player is not dead (player looses)
    // figure out what happened and
    // update message here!
    // if game is over, setstate for endGame

  }

}

class EngineWrapper extends Component {
  state = {
    currentEnemy: { data: 'none' },
    player: {},
    battlesFought: 0,
    currentTurn: 'player',
  };

  loadPlayer = () => {
    let thisPlayer = new Player('Riptor the Butt Damager', 20, 20, 2, 1, 8, 5, 5,
      3,
      'Normal',
      true,);
    return this.setState({ player: thisPlayer });
  }

  loadEnemy = () => {
    if(this.state.currentEnemy.data === 'none') {
      let randomEnemy = Math.floor(Math.random() * 4);
      /* eslint-disable-next-line no-console */
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
