const CombatEngine = {

  enemyActions: {
    actionsList: ['fight'],
  },

  combatMsgs: {
    player: ['You hit the enemy', 'You missed the enemy'],
    enemy: ['You are hit by the enemy', 'The enemy misses you'],
  },

  universalActions: {
    fight: function(armorClass, hitBonus, hitPoints, damageD, currentTurn) {
      let fightActionReturnObject = {};
      /* eslint-disable-next-line no-console */
      console.log('in CombatEngine.js - AC', armorClass);
      /* eslint-disable-next-line no-console */
      console.log('hit bonus', hitBonus);
      let thisRoll = CombatEngine.dieRolls.d20() + hitBonus;
      /* eslint-disable-next-line no-console */
      console.log('you rolled a ' + thisRoll);
      if(thisRoll >= armorClass) {
        fightActionReturnObject.combatMsg = CombatEngine.combatMsgs[`${currentTurn}`][0];
        fightActionReturnObject.damage = CombatEngine.dieRolls[`d${damageD}`]();
        fightActionReturnObject.newHP = hitPoints - fightActionReturnObject.damage;
        if(fightActionReturnObject.newHP < 0) fightActionReturnObject.newHP = 0;
      } 
      else {
        fightActionReturnObject.combatMsg = CombatEngine.combatMsgs[`${currentTurn}`][1];
        fightActionReturnObject.damage = 0; 
        fightActionReturnObject.newHP = hitPoints;
      }
      return fightActionReturnObject;
    },
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
  }
};

export default CombatEngine;
