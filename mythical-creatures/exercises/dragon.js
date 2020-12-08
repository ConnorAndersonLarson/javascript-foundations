class Dragon {
  constructor(name, rider) {
    this.name = name,
    this.rider = rider,
    this.hungry = true
    this.hunger = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.hunger += 1
    if (this.hunger >= 3) {
      this.hungry = false
    }
  }

}


module.exports = Dragon;
