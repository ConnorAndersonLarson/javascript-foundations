//completed
//talked through
//erased + completed again, 12.8

class Vampire {
  constructor(name, pet){
    this.name = name
    if (pet === undefined) {
      this.pet = 'bat'
    } else {
      this.pet = pet;
    }
    this.thirsty = true,
    this.ouncesDrank = 0
  }

  drink() {
    if (this.ouncesDrank >= 50) {
      return `I'm too full to drink anymore!`
    } else {
    this.ouncesDrank += 10;
    this.thirsty = false;
    }
  }

}

module.exports = Vampire;
