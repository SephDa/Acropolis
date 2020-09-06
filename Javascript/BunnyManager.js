/**This is a class manager, which instantiates and manages all bunnies in the game */
class BunnyManager extends System {
  constructor() {
    super();
    this.bunnies = [];
    this.add = this.add.bind(this);
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
    this.bunnytimer = setInterval(this.add, this.ms);
  }
  /**Make the bunny appear on page*/
  add() {
    if (this.bunnies.length < this.numOfBunnies) {
      var x = new Bunny();
      x.addToPage("farms");
      this.bunnies.push(x);
    }
    //this.bunnies[i].id = "Bunny" + (i + 1);
    //break;

  }
  
  giveID() {}

  destroy() {}
}

//add timer, new bunnies added to array after x seconds or mins
// manage life of bunnies
//each bunny needs a lifespan value - once at 0 they are removed - every second or so their life value goes down
// bunnies move - maybe in animal class
//interval timer
// rethink difficulty - maybe it's to do with rate of adding bunnies to the game
