const TILE_SIZE = 100;
var selection = 0;

var gameTime = new GameTime(10000);
var tiler = new Terrain();
var avatar = new Avatar();
var startMechs = new StartMechanics();
var toggle = new Display();

// Functions which start the whole agme
function startGame() {
  var wasSuccessful = startMechs.validate();
  if (!wasSuccessful) {
    return;
  }

  //Toggle Welcome Menu
  toggle.toggleMenu();

  //Add User entered name to the welcome note
  startMechs.addName();

  //Add Difficulty stamp to page
  startMechs.addDifficulty();

  //Allocate Stats based on difficulty
  startMechs.allocateResources();

  //Create amount of tiles value based on difficulty level
  var difficulty = startMechs.getDifficulty();
  tiler.getAmountOfTiles(difficulty);

  //Generate the number of divs based on the value above
  tiler.generateTiles();

  //Starts Gametime
  gameTime.start();

  //Places the selected Avatar onto the page
  avatar.placeAvatar();

  //Enables key movement of avatar on page
  document.onkeydown = avatar.moveAvatar;
}

//Clear the Gamedata
function clearAll() {
  // Stop all time related functions
  gameTime.stop();

  // Set timer divs to 00
  document.getElementById("daysnumber").textContent = "00";
  document.getElementById("hoursnumber").textContent = "00";

  //Clear Name
  document.getElementById("inputName").value = "";

  //Clear difficulty
  document.getElementById("difficulty").value = "initial";

  //Delete the child divs
  tiler.deleteFarmsDivs();

  //Clear the avatars
  avatar.clearAvatars();

  //Delete the Avatar Div on top of the farmplots
  avatar.deleteAvatarDiv();

  //Reutrn to the start menu
  toggle.toggleBackMenu();

  //Turn off onkeydown functionality
  document.onkeydown = null;
}

//Run all the main functions
function main() {
  //Player selects the avatar
  avatar.avatarSelect();

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
