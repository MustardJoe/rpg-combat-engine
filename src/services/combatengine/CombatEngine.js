const CombatEngine = {

  enemyActions: {
    actionsList: ['fight'],
  },

  combatMsgs: {
    player: ['You hit the enemy', 'You missed the enemy'],
    enemy: ['You are hit by the enemy', 'The enemy misses you'],
  },
  healMsgs: {
    player: ['You guzzle a healing potion',
      'You try to drink a potion of healing, but none remain'],
    enemy: ['the enemy drinks a healing potion',
      'The enemy fails to drink a healing potion'],
  },

  universalActions: {
    fight: function(armorClass, hitBonus, hitPoints, damageD, currentTurn) {
      let fightActionReturnObj = {};
      let thisRoll = CombatEngine.dieRolls.d20() + hitBonus;

      if(thisRoll >= armorClass) {
        fightActionReturnObj.combatMsg = CombatEngine.combatMsgs[`${currentTurn}`][0];
        fightActionReturnObj.damage = CombatEngine.dieRolls[`d${damageD}`]();
        fightActionReturnObj.newHP = hitPoints - fightActionReturnObj.damage;
        if(fightActionReturnObj.newHP < 0) fightActionReturnObj.newHP = 0;
      } 
      else {
        fightActionReturnObj.combatMsg = CombatEngine.combatMsgs[`${currentTurn}`][1];
        fightActionReturnObj.damage = 0; 
        fightActionReturnObj.newHP = hitPoints;
      }
      return fightActionReturnObj;
    },

    heal: function(hitPoints, healPotions, maxHP, currentTurn) {
      let healActionReturnObj = {};
      let healAmount = CombatEngine.dieRolls.universal(5) + 5;
      if(healPotions > 0) {
        healActionReturnObj.actionMsg = CombatEngine.healMsgs[`${currentTurn}`][0];
        healActionReturnObj.newHP = hitPoints + healAmount;
        if(healActionReturnObj.newHP > maxHP) healActionReturnObj.newHP = maxHP;
        healActionReturnObj.remainingHealPotions = healPotions - 1;
      }
      if(healPotions <= 0) {
        healActionReturnObj.actionMsg = CombatEngine.healMsgs[`${currentTurn}`][1];
        healActionReturnObj.newHP = hitPoints;
        healActionReturnObj.remainingHealPotions = 0;
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
