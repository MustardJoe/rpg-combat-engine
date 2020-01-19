import { func } from "prop-types";

const CombatEngine = {

  enemyActions: {
    actionsList: ['fight'],
  },

  attackRollMsgs: {
    player: ['You hit the enemy', 'You missed the enemy'],
    enemy: ['You are hit by the enemy', 'The enemy misses you'],
  },
  healMsgs: {
    player: ['You guzzle a healing potion',
      'You try to drink a potion of healing, but none remain'],
    enemy: ['the enemy drinks a healing potion',
      'The enemy fails to drink a healing potion'],
  },

  turnSwap: function(currentTurn) {
    if(currentTurn === 'player') {
      return 'enemy';
    }
    else if(currentTurn === 'enemy') {
      return 'player';
    }
  },

  universalActions: {
    fight: function(hitting, beingHit, currentTurn) {
      let fightActionReturnObj = {};
      let thisRoll = CombatEngine.dieRolls.d20() + hitting.hitBonus;

      if(thisRoll >= beingHit.armorClass) {
        fightActionReturnObj.combatMsg = CombatEngine.attackRollMsgs[`${currentTurn}`][0];
        fightActionReturnObj.damage = CombatEngine.dieRolls.universal(hitting.damageD);
        fightActionReturnObj.beingHit = { ...beingHit };
        fightActionReturnObj.beingHit.hitPoints = beingHit.hitPoints - fightActionReturnObj.damage;
        if(fightActionReturnObj.beingHit.hitPoints < 0) fightActionReturnObj.beingHit.hitPoints = 0;
      } 
      else {
        fightActionReturnObj.combatMsg = CombatEngine.attackRollMsgs[`${currentTurn}`][1];
        fightActionReturnObj.beingHit = { ...beingHit };
        fightActionReturnObj.damage = 0; 
        fightActionReturnObj.beingHit.hitPoints = beingHit.hitPoints;
      }
      return fightActionReturnObj;
    },

    heal: function(healTarget, currentTurn) {
      let healActionReturnObj = {};
      healActionReturnObj.healTarget = { ...healTarget };
      let healAmount = CombatEngine.dieRolls.universal(5) + 5;
      if(healTarget.healPotions > 0) {
        healActionReturnObj.actionMsg = CombatEngine.healMsgs[`${currentTurn}`][0];
        healActionReturnObj.healTarget.hitPoints = healTarget.hitPoints + healAmount;
        if(healActionReturnObj.healTarget.hitPoints > healTarget.maxHP) {
          healActionReturnObj.healTarget.hitPoints = healTarget.maxHP;
        }
        healActionReturnObj.healTarget.healPotions = healTarget.healPotions - 1;
      }
      if(healTarget.healPotions <= 0) {
        healActionReturnObj.actionMsg = CombatEngine.healMsgs[`${currentTurn}`][1];
        healActionReturnObj.healTarget.hitPoints = healTarget.hitPoints;
        healActionReturnObj.healTarget.healPotions = 0;
      }
      console.log('heal amount', healAmount);
      console.log('returnObj', healActionReturnObj);
      return healActionReturnObj;

    }
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
