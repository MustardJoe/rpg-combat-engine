import Msgs from '../gamedata/Msgs';
import enemies from '../gamedata/Enemies';
import ExpTable from '../gamedata/ExpTable';

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

  //Helper funcs to use in player/enemy actions
  attackIsSuccessful: function(sides, bonus) {
    return CombatEngine.rollDie(sides) + bonus >= 0 ? true : false;
  },

  applyDamage: function(attackDieSides, hitPoints) {
    return hitPoints - CombatEngine.rollDie(attackDieSides);
  },

  healAmount: function(amount = 7) {
    return CombatEngine.rollDie(amount) + 5;
  },

  //Shared Actions available to both player and enemies
  universalActions: {

    fight: function(hitting, beingHit, currentTurn) {
      let fightActionReturnObj = { beingHit: beingHit };
      if(CombatEngine.attackIsSuccessful(20, hitting.hitBonus - beingHit.armorClass)) {
        fightActionReturnObj.combatMsg = Msgs.attackRollMsgs[`${currentTurn}`][0];
        fightActionReturnObj.beingHit.hitPoints = CombatEngine.applyDamage(hitting.damageD, beingHit.hitPoints);
        if(fightActionReturnObj.beingHit.hitPoints < 0) fightActionReturnObj.beingHit.hitPoints = 0;
      } 
      else {
        fightActionReturnObj.combatMsg = Msgs.attackRollMsgs[`${currentTurn}`][1];
      }
      return fightActionReturnObj;
    },

    heal: function(healTarget, currentTurn) {
      let healActionReturnObj = { healTarget: healTarget };
      if(healTarget.healPotions > 0) {
        healActionReturnObj.actionMsg = Msgs.healMsgs[`${currentTurn}`][0];
        healActionReturnObj.healTarget.hitPoints += CombatEngine.healAmount();
        if(healActionReturnObj.healTarget.hitPoints > healTarget.maxHP) {
          healActionReturnObj.healTarget.hitPoints = healTarget.maxHP;
        }
        healActionReturnObj.healTarget.healPotions = healTarget.healPotions - 1;
      }
      if(healTarget.healPotions <= 0) {
        healActionReturnObj.actionMsg = Msgs.healMsgs[`${currentTurn}`][1];
      }
      return healActionReturnObj;
    },

    special: function(hitting, beingHit, currentTurn) {
      let specialReturnObj = {};
      let thisRoll = CombatEngine.rollDie(20) + hitting.special.specialBonus;
      let damage = CombatEngine.rollDie(hitting.special.specialDamage) 
        + hitting.special.specialBonus;

      if(hitting.special.remaining <= 0) {
        specialReturnObj.combatMsg = Msgs.specialMsgs[`${currentTurn}`].noUse;
        specialReturnObj.beingHit = { ...beingHit };
        specialReturnObj.hitting = { ...hitting };
        return specialReturnObj;
      }
      if(thisRoll >= beingHit.armorClass && hitting.special.remaining > 0) {
        specialReturnObj.combatMsg = Msgs.specialMsgs[`${currentTurn}`].use;
        specialReturnObj.beingHit = { ...beingHit };
        specialReturnObj.beingHit.hitPoints -= damage;
        if(specialReturnObj.beingHit.hitPoints < 0) specialReturnObj.beingHit.hitPoints = 0;
        specialReturnObj.hitting = { ...hitting };
        specialReturnObj.hitting.special.remaining--;
        
        return specialReturnObj;
      }
      return null;
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
      if(player.exp >= ExpTable[player.level + 1] 
        && player.level < Object.keys(ExpTable)[player.level])
      {    
        levelupReturnObj.player.level++;
        levelupReturnObj.player.maxHP += 8;
        levelupReturnObj.player.hitPoints = levelupReturnObj.player.maxHP;
        levelupReturnObj.player.hitBonus += 2;
        return levelupReturnObj;
      }
      else return null;
    },
  },

  //BELOW ARE ENEMY ONLY ACTIONS
  enemyDeath: function(enemy, player) {
    let deathReturnObj = {};
    deathReturnObj.enemy = { ...enemy };
    deathReturnObj.player = { ...player };
    
    
    if(enemy.hitPoints <= 0) {
      deathReturnObj.enemy.alive = false;
      deathReturnObj.msg = Msgs.deathMsgs.randEnemyDieMsg();
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

  rollDie: function(sides) {
    if(sides === undefined) {
      console.error('side is undefined in CombatAction.rollDie');
      //look up throw
    }
    return Math.floor((Math.random()) * sides + 1);
  },
};

export default CombatEngine;
