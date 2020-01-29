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
    player: ['You were squashed by your foe...', 
      'You have no more hit points and you have died.',
      'Oh no… Sadly, you are not victorious in your battle.',
      'You hear an evil laugh: "MUAHAHAHHAHAHAHAHAA...." You are dead.',
      'Here\'s hoping the next adventurer has more luck than you...',
      'You get dysentery, your oxen have died, and your wagon broke an axel...',
      'Thanks for playing, but you died.'],
    enemy: `You have bested your foe! Your enemy falls to
            the ground and explodes in a cloud of glitter!`,
  },
  runMsg: 'Like a coward, you turn your tail and run from the beast.',

  randPlayerDieMsg: function() {
    let randNumb = Math.floor(Math.random() * (Msgs.deathMsgs.player.length));
    let Msg = Msgs.deathMsgs.player[randNumb];
    return Msg;  
  }
  

};

export default Msgs;
