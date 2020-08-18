const TILE_SIZE = 100;

var selection=0;
var amntTiles=0;

var gameTime = new GameTime(10000);
var tiler = new Terrain();
var avatar = new Avatar();

// Functions which start the whole agme
function startGame() {

    //Get the username
    var userName = document.getElementById("inputName");
    var name = userName.value;

    //Check if user has entered a name
    if (name ===""){
        window.alert("You must enter a user name!");
        return;
    }

    //Get difficulty type
    var difficulty = document.getElementById('difficulty').value;

    //Check User has selected an avatar:
    if (selection===0) {
        window.alert("You need to select an avatar before proceeding!")
        return;
    }

    //Check if user has selected difficulty
    if (difficulty === "initial") {
        window.alert("You need to choose your difficulty.");
        return;
    }
        
        
    //Toggle Welcome Menu
    toggleMenu(); 
    addName();

    //setStats(difficulty);
    addDifficulty(difficulty);
    allocateResources(difficulty);

    //Create amount of tiles value based on difficulty level
    switch (difficulty) {
        case "easy":
            amntTiles = 10;
            break;
        case "medium":
            amntTiles = 20;
            break;
        case "hard":
            amntTiles = 30;
            break;
    }

    //Generate the number of divs based on the value above
    
    tiler.generateTiles(amntTiles);
    
    /**Starts Gametime */
    gameTime.start();

    avatar.placeAvatar();

    spot.addToPage('farms');
    
    document.onkeydown= avatar.moveAvatar;   
}


//Add Difficulty choice to page as a stamp
function addDifficulty(value) {
    var difficulty = value;
    var difficultyHolder = document.getElementById('difficultyStamp');
    difficultyHolder.textContent="";
    switch (difficulty) {
        case "easy":
            difficultyHolder.textContent = "Mode: Easy";
            break;
        case "medium":
            difficultyHolder.textContent = "Mode: Medium";
            break;
        case "hard":
            difficultyHolder.textContent = "Mode: Hard";
            break;
    }
}

// Add user typed in name to welcome message
function addName() {
    var userName = document.getElementById("inputName");
    var name = userName.value;
    
    var welcomeNote = document.getElementById("welcome");
    welcomeNote.textContent = "Welcome to Acropolis, " + name + "!"; 
}

//Clear the Gamedata 
function clearAll() {
    // Stop all time related functions 
    gameTime.stop();
    
    // Set timer divs to 00
    document.getElementById('daysnumber').textContent = "00";
    document.getElementById('hoursnumber').textContent = "00";
    
    //Clear Name
    document.getElementById("inputName").value = "";

    //Clear No of Plots entered
    document.getElementById("difficulty").value = "initial";

    //Delete the child divs
    tiler.deleteFarmsDivs();

    //Clear the avatars
    avatar.clearAvatars();

    toggleBackMenu();
}

function toggleMenu() {
    document.getElementById('menuBox').style.display = 'none';
    document.getElementById('menuToggle').style.display = 'block';
}

function toggleBackMenu() {
    document.getElementById('menuBox').style.display = 'block';
    document.getElementById('menuToggle').style.display = 'none';
}

function toggleBorders(){
    var plots = document.querySelectorAll('.farmPlot');
    for (i = 0; i < plots.length; i++) {
        plots[i].classList.toggle("farmPlotBorder");
    }
}

function reset() {
    
    clearAll();
    document.getElementById("inputName").value ="Sam Cheat Mode";
    document.getElementById('difficulty').value ="easy";
    startGame();

}

//Set Resources based on Difficulty chosen

function allocateResources(value) {
    var difficulty = value;
    var health = document.getElementById('healthStatProgress');
    var healthperc = document.getElementById('healthStatPercentage');
    
    var hunger = document.getElementById('hungerStatProgress');
    var hungerperc = document.getElementById('hungerStatPercentage')
    
    var sleep = document.getElementById('sleepStatProgress');
    var sleepperc = document.getElementById('sleepStatPercentage');

    switch (difficulty) {
        case "easy":
            healthperc.textContent = "100";
            health.style.width = "100%";
           
            hungerperc.textContent = "100";
            hunger.style.width = "100%";
           
            sleepperc.textContent = "100";
            sleep.style.width = "100%";
            break;
        case "medium":
            healthperc.textContent = "75";
            health.style.width = '75%';
        
            hungerperc.textContent = "75";
            hunger.style.width = "75%";
            
            sleepperc.textContent = "75";
            sleep.style.width = "75%";
            break;
        case "hard":
            healthperc.textContent = "50";
            health.style.width = "50%";
            
            hungerperc.textContent = "50";
            hunger.style.width = "50%";
            
            sleepperc.textContent = "50";
            sleep.style.width = "50%";
            
            break;
    }
}

//Run all the main functions
function main() {
    
    //Player selects the avatar
    avatar.avatarSelect()

    //Click New Game to initialise game
    document.getElementById('brandNewGame').addEventListener('click', startGame);
    
    //Click Back to Main Menu to clear all data and start again
    document.getElementById('backToMenuButton').addEventListener('click',clearAll);

    //Click Farm Borders to show or hide borders on tiles
    document.getElementById('farmBorders').addEventListener('click', toggleBorders);

    //Cheat Button to reset stuff without having to go back
    document.getElementById('cheatButton').addEventListener('click',reset);
}

// Run the main functions of the page
main();