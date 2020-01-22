import React, { Component } from 'react';
import Actions from '../../components/actions/Actions';
import MainScreen from '../../components/mainscreen/MainScreen';
import PlayerStats from '../../components/playerstats/CBPlayerStats';
import EnemyComp from '../../components/enemystats/EnemyStats';
import enemies from '../../services/gamedata/Enemies';
// import players from '../../services/gamedata/Players';
import styles from '../../components/layout/layoutcomp.css';
import Player from '../combatengine/PlayerClass';

// class Game extends Component {
//   state = {
//     currentEnemy: null, 
//     player: null,
//     battlesFought: 0,
//     gameStarted: false, 
//   }

//   startGame(){
//     this.loadPlayer();
//     this.loadEnemy();
//     this.setState({ gameStarted: true });
//   }

//   loadPlayer = () => {
//     this.setState({ player: new Player() });
//   }

//   loadEnemy = () => {
//     if(!this.state.currentEnemy || !this.state.currentEnemy.data.alive) {
//       let randomEnemy = Math.floor(Math.random() * enemies.length);
//       this.setState({ currentEnemy: enemies[randomEnemy] });
      
//       //currentCombatMsg: `A ${enemies[randomEnemy].name} begins to attack you!` });
//     }
//   }

//   // enacts 1 game play that the user chooses, and enacts one game play from the enemy
//   takeTurn(playerAction){
//     // ensure that the game is active. this.checkGame();
//     // Player takes turn (call playerAction) this.player[playerAction]()
//     // ensure that enemy is not dead. (if they are, player wins) this.checkGame()
//     // Enemy takes turn (random selection of choices. -- you can make a smart random.)
//     // ensure that player is not dead (player looses)
//     // figure out what happened and
//     // update message here!
//     // if game is over, setstate for endGame

//   }

// }

class EngineWrapper extends Component {
  state = {
    currentEnemy: { data: 'none' },
    player: {},
    battlesFought: 0,
    currentTurn: 'player',
  };

  loadPlayer = () => {
    let thisPlayer = new Player('Riptor the Sad', 20, 20, 2, 1, 8, 5, 5, 3, 'Normal', true,);
    console.log('this player, I have a player right here!!', thisPlayer);
    this.setState({ player: thisPlayer });
    console.log('in load player, i know i have a player, but it didnt take', this.state.player);
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
    console.log('playerTriesToHit Function');
    console.log(this.state);
    console.log(this.state.player);
    this.state.player.attack(this.state.currentEnemy, this.state.currentTurn);
  }

  playerTriesToHeal = () => {
    console.log('heal implementation');
    this.state.player.heal();
  }

  //ENEMY ACTIONS linked from engine here
  enemyTriesToHit = () => {
    console.log('trying to hit');

  }

  componentDidMount() {
    this.loadPlayer();
    this.loadEnemy();
    console.log('in compDidMount, now no player', this.state.player);
  }

  componentDidUpdate() {
    console.log(this.state.player);
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
          {this.state.player.stats ? <PlayerStats playerStatsObj={this.state.player.stats} /> : null}
          {this.state.player.stats ? <Actions playerTriesToHit={this.playerTriesToHit} 
            playerTriesToHeal={this.playerTriesToHeal} /> : null}
          <EnemyComp enemy={this.state.currentEnemy} />
        </div>
      </div>
    );
  }
}

export default EngineWrapper;
