/**This is a class manager, which instantiates and manages all bunnies in the game */
class BunnyManager extends System {
  bunnytimer;

  constructor() {
    super();
    this.bunnies = [];
  }

  /**Create a bunny*/
  init() {
    var difficulty = startMechs.getDifficulty();
    //based on the user difficulty,create a certainnumber of bunnies
    switch (difficulty) {
      case "easy":
        this.numOfBunnies = 5;
        this.ms = 5000;
        break;
      case "medium":
        this.numOfBunnies = 10;
        this.ms = 2000;
        break;
      case "hard":
        this.numOfBunnies = 100;
        this.ms = 1000;
        break;
    }
    this.bunnytimer = setInterval(() => {
      this.add();
    }, this.ms);
  }
  /**Make the bunny appear on page*/
  add() {
    if (this.bunnies.length < this.numOfBunnies) {
      var x = new Bunny();
      x.addToPage("farms");
      this.bunnies.push(x);
      var index = this.bunnies.indexOf(x);
      x.setID("Bunny" + index);
    }
    // var animals = document.querySelectorAll(".animal");
    // for (var i = 0; i < animals.length; i++) {
    //   animals[i].id = "Bunny" + i;
    // }
  }

  onGameTick() {
    for (var i = 0; i <= this.numOfBunnies; i++) {
      this.bunnies[i].age();
      if (this.bunnies[i].lifespan === 0) {
      }
    }
  }

  destroy() {
    clearInterval(this.bunnytimer);

    for (var i = 0; i <= this.bunnies.length; i++) {
      this.bunnies[i].destroy();
    }

    this.bunnies = [];

    // var parent = document.getElementById("farms");
    // var animals = document.querySelectorAll(".animal");

    // // Remove Child farmplot divs from parent Farms div
    // for (var i = 0; i < animals.length; i++) {
    //   if (animals[i].classList.contains("animal")) {
    //     parent.removeChild(animals[i]);
    //   }
    // }
  }
}

//add timer, new bunnies added to array after x seconds or mins - DONE
// manage life of bunnies
//each bunny needs a lifespan value - once at 0 they are removed - every second or so their life value goes down
// bunnies move - maybe in animal class
//interval timer - DONE
// rethink difficulty - maybe it's to do with rate of adding bunnies to the game- DONE
