var Person = require('./person');
var Statue = require('./statue');

class Medusa{
  constructor(name) {
    this.name = name
    this.statues = []
  }

  gazeAtVictim(person) {
    if (this.statues.length < 3) {
      this.statues.push(new Statue(person.name))
    } else {
      this.statues.push(new Statue(person.name))
      var person = new Person(this.statues[0].name)
      person.mood = 'relieved'
      this.statues.splice(0,1)
      return person
    }
  }

}

module.exports = Medusa;
