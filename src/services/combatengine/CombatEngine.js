import Msgs from '../gamedata/Msgs';
import enemies from '../gamedata/Enemies';

const CombatEngine = {

  enemyActions: {
    actionsList: ['fight'],
  },

  turnSwap: function(currentTurn) {
    if(currentTurn === 'player') {
      return 'enemy';
    }
    else if(currentTurn === 'enemy') {
      return 'player';
    }
  },

  //Shared Actions
  universalActions: {
    fight: function(hitting, beingHit, currentTurn) {
      let fightActionReturnObj = {};
      let thisRoll = CombatEngine.dieRolls.d20() + hitting.hitBonus;

      if(thisRoll >= beingHit.armorClass) {
        fightActionReturnObj.combatMsg = Msgs.attackRollMsgs[`${currentTurn}`][0];
        fightActionReturnObj.damage = CombatEngine.dieRolls.universal(hitting.damageD);
        fightActionReturnObj.beingHit = { ...beingHit };
        fightActionReturnObj.beingHit.hitPoints = beingHit.hitPoints - fightActionReturnObj.damage;
        if(fightActionReturnObj.beingHit.hitPoints < 0) fightActionReturnObj.beingHit.hitPoints = 0;
      } 
      else {
        fightActionReturnObj.combatMsg = Msgs.attackRollMsgs[`${currentTurn}`][1];
        fightActionReturnObj.beingHit = { ...beingHit };
        fightActionReturnObj.damage = 0; 
        fightActionReturnObj.beingHit.hitPoints = beingHit.hitPoints;
      }
      return fightActionReturnObj;
    },

    heal: function(healTarget, currentTurn) {
      let healActionReturnObj = {};
      healActionReturnObj.healTarget = { ...healTarget };
      let healAmount = CombatEngine.dieRolls.universal(7) + 5;

      if(healTarget.healPotions > 0) {
        healActionReturnObj.actionMsg = Msgs.healMsgs[`${currentTurn}`][0];
        healActionReturnObj.healTarget.hitPoints = healTarget.hitPoints + healAmount;
        if(healActionReturnObj.healTarget.hitPoints > healTarget.maxHP) {
          healActionReturnObj.healTarget.hitPoints = healTarget.maxHP;
        }
        healActionReturnObj.healTarget.healPotions = healTarget.healPotions - 1;
      }
      if(healTarget.healPotions <= 0) {
        healActionReturnObj.actionMsg = Msgs.healMsgs[`${currentTurn}`][1];
        healActionReturnObj.healTarget.hitPoints = healTarget.hitPoints;
        healActionReturnObj.healTarget.healPotions = 0;
      }
      return healActionReturnObj;
    }
  },

  //THESE ARE PLAYER ONLY ACTIONS BELOW
  player: {
    run: function(currentEnemy) {
      if(currentEnemy.data != 'none') {
        let runReturnObj = {};
        runReturnObj.currentEnemy = enemies.randomEnemy();
        runReturnObj.currentCombatMsg = `A ${runReturnObj.currentEnemy.name} begins to attack you!`;
        return runReturnObj;
      }
      return null;
    },
    death: function(player, currentEnemy) {
      if(player.hitPoints <= 0) {
        let playerDeathObj = {
          currentTurn: 'Game Over',
          currentEnemy: { ...currentEnemy, img: 'Game Over Img' },
        };

        return playerDeathObj;
      }
      return null;
    }, 
    levelUp: function(player) {
      let levelupReturnObj = { };
      levelupReturnObj.player = { ...player };
      if(player.exp >= 1000 && player.level < 3) {
        levelupReturnObj.player.level = 3;
        levelupReturnObj.player.maxHP += 8;
        levelupReturnObj.player.hitPoints = levelupReturnObj.player.maxHP;
        levelupReturnObj.player.hitBonus += 2;
        return levelupReturnObj;
      }
      if(player.exp >= 500 && player.level < 2) {
        levelupReturnObj.player.level = 2;
        levelupReturnObj.player.maxHP += 8;
        levelupReturnObj.player.hitPoints = levelupReturnObj.player.maxHP;
        levelupReturnObj.player.hitBonus += 2;
        return levelupReturnObj;
      }
      else return null;
    }
  },

  //BELOW ARE ENEMY ONLY ACTIONS
  enemyDeath: function(enemy, player) {
    let deathReturnObj = {};
    deathReturnObj.enemy = { ...enemy };
    deathReturnObj.player = { ...player };
    
    
    if(enemy.hitPoints <= 0) {
      deathReturnObj.enemy.alive = false;
      deathReturnObj.msg = Msgs.deathMsgs.enemy;
      console.log('enemy exp', enemy.exp);
      deathReturnObj.player.exp += enemy.exp;
      console.log(deathReturnObj.player.exp);
      let levelUp = CombatEngine.player.levelUp(deathReturnObj.player);
      if(levelUp) {
        deathReturnObj.player = { ...levelUp.player };
      }
      console.log('level up', levelUp);
      deathReturnObj.currentEnemy = { data: 'none' };
      deathReturnObj.currentTurn = 'player';
      return deathReturnObj;
    }
    return null;
  },

  dieRolls: {
    d25: function() {
      return Math.floor((Math.random()) * 25 + 1);
    },
    d20: function() {
      return Math.floor((Math.random()) * 20 + 1);
    },
    d8: function() {
      return Math.floor((Math.random()) * 8 + 1);
    },

    d2: function() {
      return Math.floor((Math.random()) * 2 + 1);
    },
    d1: function() {
      return 1;
    },
    universal: function(sides) {
      return Math.floor((Math.random()) * sides + 1);
    }
  }
};

export default CombatEngine;
