class Player {
  constructor({
    name,
    hitPoints, 
    maxHP, 
    armorClass, 
    hitBonus, 
    damage, 
    agility, 
    strength, 
    healPotions, 
    status,
    alive,
  }) {
    this.state = {
      name: name || 'Riptor the Butt Damager',
      hitPoints: hitPoints || 20,
      maxHP: maxHP || 20,
      armorClass: armorClass || 12,
      hitBonus: hitBonus || 1,
      damage: damage || 8,
      agility: agility || 15,
      strength: strength || 15,
      healPotions: healPotions || 3,
      status: status || 'Normal',
      alive: alive || true, 
    };
  }
  attack = (enemy, currentTurn) => {
    if(!currentTurn) {
      return null;
    }
    const rollValue = this._getRoll(20, this.state.hitBonus);
    if(rollValue >= enemy.armourClass) {
      this._damageEnemy(enemy);
    }
  }

  heal = () => {}

  getStatus = (status) => this.state[status]

  _getRoll = (sides, bonus = 0) => {
    return Math.floor((Math.random()) * sides + 1) + bonus;
  }

  _damageEnemy = (enemy) => {
    let damage = this._getRoll(this.state.damage);
    enemy.state.hitPoints = enemy.state.hitPoints - damage;
    if(enemy.state.hitPoints < 0) {
      enemy.state.hitPoints = 0;
      enemy.state.alive = false;
    }
  }
}

export default Player;

// const grubbyGrub = new Enemy()
// // grubbyGrub.state.hitPoints = 20



// class FileCollector {
//   constructor(root){
//     this.data = {
//       path: path.join(root, './data/'),
//       files : []
//     },
//     this.schema = {
//       path: path.join(root, './schemas/'),
//       files: []
//     },
//     this.output = [];
//   }

//   _getFiles = (dir, ending) => {
//     return new Promise(resolve => {
//       fs.readdir(dir.path, (err, results) => {
//         dir.files = results.reduce((accum, result) => {
//           const textArr = result.split('.');
//           const end = textArr.pop();
//           if(ending === end) {
//             accum.push(textArr.join(''));
//           }
//           return accum;
//         }, []);
//         resolve();
//       });
//     });
//   }

//   _createFileObjects = arr => {
//     return arr.map(item => {
//       return {
//         textPath: path.join(this.data.path, `${item}.txt`),
//         schemaPath: path.join(this.schema.path, `${item}.csv`)
//       };
//     });
//   }

//   /* this function returns a list of data/schema path objects */
//   mergeDataAndSchemas = async() => {
//     await this._getFiles(this.data, 'txt');
//     await this._getFiles(this.schema, 'csv');
//     this.output = this._createFileObjects(
//       intersection(this.data.files, this.schema.files)
//     );
//     return this.output;
//   }

// }
