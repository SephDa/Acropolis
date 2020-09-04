const TILE_SIZE = 100;
var selection = 0;
var gameTime = new GameTime(1000);
var tiler = new Terrain();
var avatar = new Avatar();
var startMechs = new StartMechanics();
var toggle = new Display();
var statsManager = new StatsManager();
var bunnyMngr = new BunnyManager();
var gameSystems = [gameTime, tiler, statsManager, bunnyMngr];

// Functions which start the whole agme
function startGame() {
  //Check if user has chosen and submitted start up required fields
  var wasSuccessful = startMechs.validate();
  if (!wasSuccessful) {
    return;
  }

  //Toggle Welcome Menu
  toggle.gameAppear();

  //Add User entered name to the welcome note
  startMechs.addName();

  //Add Difficulty stamp to page
  startMechs.addDifficulty();

  //Allocate Stats based on difficulty
  startMechs.allocateResources();

  //Get amount of tiles value based on difficulty level
  tiler.getAmountOfTiles();

  for (var i = 0; i < gameSystems.length; i++) {
    gameSystems[i].init();
  }
  //Places the selected Avatar onto the page
  avatar.place();

  //Enables key movement of avatar on page
  document.onkeydown = avatar.move;
}

//Clear the Gamedata
function clearAll() {
  for (var i = 0; i < gameSystems.length; i++) {
    gameSystems[i].destroy();
  }

  startMechs.delete();

  //Clear Player Avatar
  avatar.destroy();

  //Reutrn to the start menu
  toggle.gameDisappear();

  //Turn off onkeydown functionality
  document.onkeydown = null;
}

//Run all the main functions
function main() {
  //Player selects the avatar
  avatar.select();

  //Click New Game to initialise game
  document.getElementById("brandNewGame").addEventListener("click", startGame);

  //Click Back to Main Menu to clear all data and start again
  document
    .getElementById("backToMenuButton")
    .addEventListener("click", clearAll);

  //Click Farm Borders to show or hide borders on tiles
  toggle.addBorders();
}

// Run the main functions of the page
main();
