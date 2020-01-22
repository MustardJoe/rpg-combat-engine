class Player {
  constructor({
    name,
    hitPoints, 
    maxHP, 
    armorClass, 
    hitBonus, 
    damageD, 
    agility, 
    strength, 
    healPotions, 
    status,
    alive,
  }) {
    this.stats = {
      name: name || 'Riptor the Fighty',
      hitPoints: hitPoints || 20,
      maxHP: maxHP || 20,
      armorClass: armorClass || 12,
      hitBonus: hitBonus || 1,
      damageD: damageD || 8,
      agility: agility || 15,
      strength: strength || 15,
      healPotions: healPotions || 3,
      status: status || 'Normal',
      alive: alive || true, 
    };
  }
  attack = (enemy, currentTurn) => {
    if(currentTurn != 'player') {
      return null;
    }
    const rollValue = this._getRoll(20, this.stats.hitBonus);
    if(rollValue >= enemy.armourClass) {
      this._damageEnemy(enemy);
    }
  }

  heal = () => {
    if(this.state.healPotions > 0) {
      this.state.healPotions = this.state.healPotions - 1;
      this.state.hitPoints += this._getRoll(5, 5);
    }
  }

  getStatus = (status) => this.state[status];

  _getRoll = (sides, bonus = 0) => {
    return Math.floor((Math.random()) * sides + 1) + bonus;
  }

  _damageEnemy = (enemy) => {
    let damage = this._getRoll(this.state.damageD);
    enemy.state.hitPoints = enemy.state.hitPoints - damage;
    if(enemy.state.hitPoints < 0) {
      enemy.state.hitPoints = 0;
      enemy.state.alive = false;
    }
  }
}

export default Player;


