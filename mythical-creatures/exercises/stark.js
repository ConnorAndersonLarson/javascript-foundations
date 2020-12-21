const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(obj){
    if (obj) {
      this.name = obj.name
      this.location = obj.area || 'Winterfell'
      this.safe = false;
    }
  }

  sayHouseWords(){
    if (this.safe == true) {
      return 'The North Remembers'
    } else {
    return 'Winter is Coming'
    }
  }

  callDirewolf(name, location){
    var wolf = new Direwolf(name, location)
    wolf.home = this.location
    wolf.protect(this)
    return wolf
  }

}


module.exports = Stark;
