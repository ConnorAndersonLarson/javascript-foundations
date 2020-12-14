class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name,
    this.age = 0
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }



  celebrateBirthday(){
    this.age += 1
    if (this.age <= 32) {
      return this.adult = false;
    } else if (this.age >= 101){
      return this.old = true;
    } else {
      return this.adult = true;
    }
  }

  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return `Here is the ring!`
    } else {
      return `You can't have it!`
    }
  }



}

module.exports = Hobbit;
