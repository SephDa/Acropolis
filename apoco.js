//OLD CODE

// Get the number of tiles value from the user
//var plotInputElement = document.getElementById("inputOfPlots");
//amntTiles = plotInputElement.value;

/*Check if user has entered no. of plots above 0
if (amntTiles === "") {
    window.alert("You need to enter a plot value!");
    return;
} else if (amntTiles <= 0) {
    window.alert("You must enter a plot value more than 0!");
    return;
} else {
    //Toggle Welcome Menu
    toggleMenu(); 
    addName();

    //Generate the number of divs based on the value above
    for (var i = 0; i < amntTiles; i++) {
        var farmPlot = document.createElement('div');
        var parent = document.getElementById('farms');

        // Add Child div to parent Farm div
        parent.appendChild(farmPlot);

        // Add class to newly created divs
        farmPlot.classList.add('farmPlot');

        // Run OnClick farmplot function
        farmPlot.addEventListener('click', onFarmClick);
    }*/

/*document.getElementById('saveButton').addEventListener('click', function () {
    window.alert("Your game has been saved! Hooray!");
}) */

const TILE_SIZE = 100;


function onFarmClick() {
    window.alert("Nothing has been planted here, yet! Better get cracking!");
};

function startGame() {

    //Get the username
    var userName = document.getElementById("inputName");
    var name = userName.value;

    //Check if user has entered a name
    if (name ===""){
        window.alert("You must enter a user name!");
        return;
    }

    // Get crop type
    var cropType = document.getElementById('fruitType').value;
    
    // Check if user has selected crop type
    if (cropType === "initial") {
        window.alert("You need to select a crop type");
        return;
    }

    //Get difficulty type
    var difficulty = document.getElementById('difficulty').value;

    //Check if user has selected difficulty
    if (difficulty === "initial") {
        window.alert("You need to choose your difficulty.");
        return;
    } else {
        
        
        //Toggle Welcome Menu
        toggleMenu(); 
        addName();

        //Create amount value based on difficulty level
        switch (difficulty) {
            case "easy":
                var amntTiles = 100;
                
                break;
            case "medium":
                var amntTiles = 200;
                
                break;
            case "hard":
                var amntTiles = 300;
                
                break;
        }

        //Generate the number of divs based on the value above
        generateTiles(amntTiles);
    }   
}

//Generate the number of divs based on the difficulty value

function generateTiles(value) {
    var parent = document.getElementById('farms');
    parent.style.width = (value * TILE_SIZE) + "px";
    parent.style.height = (value * TILE_SIZE) + "px";

    for (var i = 0; i < value; i++) {
        var farmPlot = document.createElement('div');

        //Set width and height of farm plots
        farmPlot.style.width = TILE_SIZE + "px";
        farmPlot.style.height = TILE_SIZE + "px";

        // Add Child div to parent Farm div
        parent.appendChild(farmPlot);

        // Add class to newly created divs
        farmPlot.classList.add('farmPlot');

        // Run OnClick farmplot function
        farmPlot.addEventListener('click', onFarmClick);
        
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
    //Clear Name
    document.getElementById("inputName").value = "";

    //Clear No of Plots entered
    document.getElementById("difficulty").value = "initial";

    //Clear Crop Type
    document.getElementById("fruitType").value = "initial";

    //Delete the divs
    var parent = document.getElementById('farms');
    var children = document.querySelectorAll('.farmPlot');

    // Remove Child farmplot divs from parent Farm div
    for (i = 0; i < children.length; i++) {
        if (children[i].className === "farmPlot") {
            parent.removeChild(children[i]);
        }
    }

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


//Run all the main functions
function main() {
    
    //Click New Game to initialise game
    document.getElementById('brandNewGame').addEventListener('click', startGame);
    
    //Click Back to Main Menu to clear all data and start again
    document.getElementById('backToMenuButton').addEventListener('click',clearAll);

    //Click Farm Borders to show or hide borders on tiles
    document.getElementById('farmBorders').addEventListener('click', toggleBorders);
}

// Run the main functions of the page
main();

/*
function generateTiles(value) {
    for (var i = 0; i < value; i++) {
        var farmPlot = document.createElement('div');
        var parent = document.getElementById('farms');

        // Add Child div to parent Farm div
        parent.appendChild(farmPlot);

        // Add class to newly created divs
        farmPlot.classList.add('farmPlot');

        // Run OnClick farmplot function
        farmPlot.addEventListener('click', onFarmClick);
    }
} */