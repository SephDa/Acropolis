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
        //setStats(difficulty);
        addDifficulty(difficulty);
        allocateResources(difficulty);

        //Create amount of tiles value based on difficulty level
        switch (difficulty) {
            case "easy":
                var amntTiles = 10;
                break;
            case "medium":
                var amntTiles = 20;
                break;
            case "hard":
                var amntTiles = 30;
                break;
        }

        //Generate the number of divs based on the value above
        generateTiles(amntTiles);
        setInterval(depleteHunger, 1000);
        setInterval(hourTime, 10000);
        setInterval(dayTime, 240000);
    }   
}

//Add Difficulty choice to page
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

//Generate the number of divs based on the difficulty value

function generateTiles(value) {
    var parent = document.getElementById('farms');
    parent.style.width = (value * TILE_SIZE) + "px";
    parent.style.height = (value * TILE_SIZE) + "px";
    parent.style.margin = "auto";

    for (var i = 0; i < value; i++) {
        for (var j =0; j < value; j++) {
            var farmPlot = document.createElement('div');

            //Set width and height of farm plots
            farmPlot.style.width = TILE_SIZE + "px";
            farmPlot.style.height = TILE_SIZE + "px";

            // Add Child div to parent Farm div
            parent.appendChild(farmPlot);

            // Add class to newly created divs
            farmPlot.classList.add('farmPlot');

            //Randomly assign background image to each 
            var dirt = Math.floor(Math.random() * 3) + 1;
            farmPlot.style.backgroundImage = ("url('dirt" + dirt + ".jpg')");
            farmPlot.style.backgroundSize = "100%";
            
            // Run OnClick farmplot function
            farmPlot.addEventListener('click', onFarmClick);
        }
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

    //Delete the divs
    var parent = document.getElementById('farms');
    var children = document.querySelectorAll('.farmPlot');

    // Remove Child farmplot divs from parent Farm div
    for (i = 0; i < children.length; i++) {
        if (children[i].classList.contains("farmPlot")) {
            parent.removeChild(children[i]);
        }
    }

    toggleBackMenu();

    // Set timers to zero
    document.getElementById('daysnumber').textContent = "00"
    document.getElementById('hoursnumber').textContent = "00"
    document.getElementById

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


function depleteHunger() {
    var hungerText = document.getElementById('hungerStatPercentage');
    var hunger = parseInt((hungerText.textContent),10);

    var hungerBar = document.getElementById('hungerStatProgress');

    var damage = 5;

    //var hunger = hunger - damage;
    //var hunger = hunger.toString()

    //hungerText.textContent = hunger;

    switch (hunger) {
        case (hunger > 0):
            var hunger = hunger - damage;
            var hunger = hunger.toString()

            hungerText.textContent = hunger;
            hungerBar.style.width = hunger+"%";
            break;

        case (hunger <= 0):
            alert("You have starved to death!")
            clearAll();
            break;
    }
}

function hourTime() {
    
    var hoursText = document.getElementById('hoursnumber');
    var hours = parseInt((hoursText.textContent),10);

    if (hours >= 24) {
        hoursText.textContent = "1";
    } else {
        var hours = (hours + 1).toString();
        hoursText.textContent = hours;
    }
}

function dayTime() {
    var daysText = document.getElementById('daysnumber');
    var days = parseInt((daysText.textContent),10);

    var days = (days + 1).toString();
    daysText.textContent = days;

}


//Run all the main functions
function main() {
    
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