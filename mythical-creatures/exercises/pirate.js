class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job === undefined) {
      this.job = 'scallywag'
    } else {
      this.job = job
    };
    this.cursed = false;
    this.booty = 0;
    this.shipCount = 0;

  }

  robShip() {
    this.shipCount += 1;
    if (this.shipCount > 5) {
      this.cursed = true;
      return `ARG! I've been cursed!`
    } else {
      this.booty += 100
      return `YAARRR!`
    }
  }

  liftCurse() {
    if (this.cursed === true) {
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`
    } else {
      return `You don't need to lift a curse!`
    }
  }

}

module.exports = Pirate;
