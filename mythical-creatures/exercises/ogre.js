class Ogre {
  constructor(newOgre) {
    this.name = newOgre.name;
    this.home = newOgre.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(person) {
    person.encounterCounter += 1;
    if (person.encounterCounter === 3 || person.encounterCounter === 6) {
      this.swings+=1;
      if(this.swings === 2) {
        person.knockedOut = true;
      }
    }
  }

  swingAt(target) {
      this.swings += 1;
  }

 apologize(person) {
   person.knockedOut = false;
 }

}

module.exports = Ogre;
