import grindogoomba from '../../assets/grindogoomba.png';
import grindoninja2 from '../../assets/grindoninja2.png';
import grindoblueslime from '../../assets/grindoblueslime.png';
import grindogoblin from '../../assets/grindogoblin.png';
import grindogiantant from '../../assets/grindogiantant.png';
import grindoevilmachine from '../../assets/grindoevilmachine.png';
import grindoskullhead from '../../assets/grindoskullhead.png';
import grindofloatrobo from '../../assets/grindofloatrobo.png';
import grindobadevilknight from '../../assets/grindobadevilknight.png';
import grindogoodevilknight from '../../assets/grindogoodevilknight.png';

const enemies = {
  
  enemyList: [
    {
      name: 'Bad Evil Knight',
      hitPoints: 12,
      armorClass: 6,
      hitBonus: 0,
      damageD: 5,
      dexterity: 5,
      img: grindobadevilknight,
      healPotions: 0,
      status: 'Normal',
      exp: 200,
      alive: true,
    },
    {
      name: 'Blue Slime',
      hitPoints: 50,
      armorClass: 8,
      hitBonus: 0,
      damageD: 4,
      dexterity: 5,
      img: grindoblueslime,
      healPotions: 0,
      exp: 500,
      status: 'Normal',
      alive: true,
    },
    {
      name: 'Evil Machine',
      hitPoints: 16,
      armorClass: 5,
      hitBonus: 0,
      damageD: 4,
      dexterity: 5,
      img: grindoevilmachine,
      healPotions: 0,
      status: 'Normal',
      exp: 350,
      alive: true,
    },

    {
      name: 'Floating Robo',
      hitPoints: 22,
      armorClass: 10,
      hitBonus: 0,
      damageD: 6,
      dexterity: 5,
      img: grindofloatrobo,
      healPotions: 0,
      status: 'Normal',
      exp: 600,
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
      exp: 200,
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
      exp: 100,
      alive: true,
    },
    {
      name: 'Good Evil Knight',
      hitPoints: 12,
      armorClass: 6,
      hitBonus: 0,
      damageD: -5,
      dexterity: 5,
      img: grindobadevilknight,
      healPotions: 0,
      status: 'Normal',
      exp: 200,
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
      exp: 50,
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
      exp: 2000,
      alive: true,
    },
    {
      name: 'Skull Head',
      hitPoints: 18,
      armorClass: 5,
      hitBonus: 0,
      damageD: 5,
      dexterity: 5,
      img: grindoskullhead,
      healPotions: 0,
      status: 'Normal',
      exp: 175,
      alive: true,
    },
  ],

  randomEnemy: function() {
    return this.enemyList[Math.floor(Math.random() * this.enemyList.length)];
  },
};

export default enemies;
