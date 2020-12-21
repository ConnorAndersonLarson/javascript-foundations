class Direwolf{
  constructor(name, home, size) {
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true;
  }

  protect(family){
    if(this.home === family.location && this.starksToProtect.length < 2) {
    this.starksToProtect.push(family)
    family.safe = true;
    this.huntsWhiteWalkers = false;
    }
  }

  leave(family){
    family.safe = false;
    this.starksToProtect.shift(family)
  }

}

module.exports = Direwolf;
