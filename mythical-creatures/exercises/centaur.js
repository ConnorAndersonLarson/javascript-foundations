class Centaur{
  constructor({name, type}){
    this.name = name
    this.breed = type
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activities = 0;
  }

  shootBow(){
    if (this.cranky === false && this.layingDown === false){
      this.activities += 1;
      if (this.activities >= 3) {
        this.cranky = true;
      }
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }


  run(){
    if (this.cranky === false && this.layingDown === false) {
      this.activities += 1
      if (this.activities >= 3) {
        this.cranky = true;
      }
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  sleep() {
    if (this.layingDown === true && this.standing === false ) {
      this.cranky = false;
      return 'ZZZZ'
    } else {
      return 'NO!'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if(this.standing === true && this.layingDown === false) {
      this.cranky = false;
      this.activities = 0;
    } else {
      return "Not while I'm laying down!"
    }
  }


}

module.exports = Centaur;
