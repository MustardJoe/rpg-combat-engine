import grindogoomba from '../../assets/grindogoomba.png';
import grindoninja from '../../assets/grindoninja.png';

const enemies = {
  
  enemyList: [
    {
      name: 'Blue Slime',
      hitPoints: 50,
      armorClass: 8,
      hitBonus: 0,
      damageD: 4,
      dexterity: 5,
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fec%2F8d%2F07%2Fec8d0767185697a5321b54e32d088299.jpg&f=1&nofb=1',
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
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffantasy-faction.com%2Fwp-content%2Fuploads%2F2014%2F10%2FGoblin.jpg&f=1&nofb=1',
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
      img: grindoninja,
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
