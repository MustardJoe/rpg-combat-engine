const Msgs = {
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
  deathMsgs: {
    player: [],
    enemy: `You have bested your foe! Your enemy falls to
            the ground and explodes in a cloud of glitter!`,
  },

};

export default Msgs;
