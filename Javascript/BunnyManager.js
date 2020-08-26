/**This is a class manager, which instantiates and manages all bunnies in the game */
class BunnyManager extends System {
  constructor() {
    super();
    //this is where the array is kept
    this.numberOfBunnies = 0;
    this.bunnies = [];
  }

  /**Create a bunny*/
  init() {
    var difficulty = startMechs.getDifficulty();
    //based on the user difficulty,create a certainnumber of bunnies
    switch (difficulty) {
      case "easy":
        this.numberOfBunnies = 5;
        break;
      case "medium":
        this.numberOfBunnies = 10;
        break;
      case "hard":
        this.numberOfBunnies = 15;
        break;
    }
    for (var i = 0; i < this.numberOfBunnies; i++) {
      var x = new Bunny();
      x.addToPage("farms");
      this.bunnies.push(x);
    }

    console.log(this.bunnies);
  }

  /**Make the bunny appear on page, in a random location*/
  insertBunny() {
    //already a method from super class
  }

  /**Set an interval timer for bunny appearing on page */
  bunniesAppearEvery(secs) {}

  giveID() {}

  destroy() {}
}

//add timer, new bunnies added to array after x seconds or mins
// manage life of bunnies
//each bunny needs a lifespan value - once at 0 they are removed - every second or so their life value goes down
// bunnies move - maybe in animal class
//interval timer
// rethink difficulty - maybe it's to do with rate of adding bunnies to the game
