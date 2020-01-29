import grindogoomba from '../../assets/grindogoomba.png';
import grindoninja2 from '../../assets/grindoninja2.png';
import grindoblueslime from '../../assets/grindoblueslime.png';
import grindogoblin from '../../assets/grindogoblin.png';
import grindogiantant from '../../assets/grindogiantant.png';

const enemies = {
  
  enemyList: [
    {
      name: 'Blue Slime',
      hitPoints: 50,
      armorClass: 8,
      hitBonus: 0,
      damageD: 4,
      dexterity: 5,
      img: grindoblueslime,
      healPotions: 0,
      status: 'Normal',
      alive: true,
    },
    {
      name: 'Giant Ant',
      hitPoints: 12,
      armorClass: 5,
      hitBonus: 0,
      damageD: 4,
      dexterity: 5,
      img: grindogiantant,
      healPotions: 0,
      status: 'Normal',
      alive: true,
    },
    {
      name: 'Goblin',
      hitPoints: 6,
      armorClass: 5,
      hitBonus: 0,
      damageD: 2,
      dexterity: 5,
      img: grindogoblin,
      healPotions: 0,
      status: 'Normal',
      alive: true,
    },
    {
      name: 'Goomba',
      hitPoints: 2,
      armorClass: 1,
      hitBonus: 0,
      damageD: 1,
      dexterity: 5,
      img: grindogoomba,
      healPotions: 0,
      status: 'Normal',
      alive: true,
    },
    {
      name: 'Ninja Master',
      hitPoints: 50,
      armorClass: 18,
      hitBonus: 5,
      damageD: 25,
      dexterity: 20,
      img: grindoninja2,
      healPotions: 0,
      status: 'Normal',
      alive: true,
    }
  ],

  randomEnemy: function() {
    return this.enemyList[Math.floor(Math.random() * this.enemyList.length)];
  },
};

export default enemies;
