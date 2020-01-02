const CombatEngine = {
  player: {
    fight: function(enemyAC, playerHitBonus) {
      let fightActionReturnObject = {};
      console.log('enemy AC', enemyAC);
      console.log('player hit bonus', playerHitBonus);
      let thisRoll = CombatEngine.dieRolls.d20() + playerHitBonus;
      console.log('you rolled a ' + thisRoll);
      if(thisRoll >= enemyAC) {
        fightActionReturnObject.combatMsg = 'you hit the enemy';
        let damageRoll = CombatEngine.dieRolls.d8();
        fightActionReturnObject.damage = damageRoll;
      } 
      else {
        fightActionReturnObject.combatMsg = 'you missed the enemy';
        fightActionReturnObject.damage = 0; 
      }
      return fightActionReturnObject;
    },

  },
  dieRolls: {
    d20: function() {
      return Math.floor((Math.random()) * 20 + 1);
    },
    d8: function() {
      return Math.floor((Math.random()) * 8 + 1);
    } 
  }
};

export default CombatEngine;
