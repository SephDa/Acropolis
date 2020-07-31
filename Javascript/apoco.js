const TILE_SIZE = 100;

var hungtimer;
var hrtimer;
var daytimer;

var selection=0;

//Time related Functions
// Function that depletes hunger over set period of time

function depleteHunger() {
    var hungerText = document.getElementById('hungerStatPercentage');
    var hunger = parseInt((hungerText.textContent),10);

    var hungerBar = document.getElementById('hungerStatProgress');

    var damage = 5;

    if (hunger > 0) {
        hunger = hunger - damage;
        hunger = hunger.toString()

        hungerText.textContent = hunger;
        hungerBar.style.width = hunger+"%";
    } else {
        alert("You have starved to death!")
        clearAll();
    }
}

// Function that makes hour go up

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

//Function that makes days go up

function dayTime() {
    var daysText = document.getElementById('daysnumber');
    var days = parseInt((daysText.textContent),10);

    var days = (days + 1).toString();
    daysText.textContent = days;
}

//Function which captures all time related functions and allocates their milliseconds

function timers() {
    hungtimer = setInterval(depleteHunger,60000);
    hrtimer = setInterval(hourTime,10000);
    daytimer = setInterval(dayTime,240000)
}

function stopTime() {
    clearInterval(hungtimer);
    clearInterval(hrtimer);
    clearInterval(daytimer);
}

function onFarmClick() {
    window.alert("Nothing has been planted here, yet! Better get cracking!");
};

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
        timers();
        placeAvatar();
        document.onkeydown= moveAvatar;
    }   
}

//Place the avatar
function placeAvatar() {

    //Get the Parent Div
    var parent = document.getElementById('farms');

    //Create the child div
    var newAvatar = document.createElement('div')

    //Append the child to the parent div (add it in!)
    parent.appendChild(newAvatar);

    //Create an image element
    var avatarImage = document.createElement('img');
    
    //Use the input ID of the avatar the user selected to find the src for the img
    avatarImage.setAttribute('src', "Images/Avatars/"+selection+".png"); 
    avatarImage.style.height= "160px";
    avatarImage.style.width="100px"

    //Append the img to the newly created child div
    newAvatar.appendChild(avatarImage);

    //Position the newly created child div
    newAvatar.style.position = "absolute";
    newAvatar.style.left="400px";
    newAvatar.style.top="500px";
    newAvatar.id = "avatar"+selection;
}

function moveAvatar(event) {
    var avatar = document.getElementById("avatar"+selection);
    var avTop = parseInt(avatar.style.top,10);
    var avLeft = parseInt(avatar.style.left,10);
    
    var difficulty = document.getElementById('difficulty').value
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
        
    var tiles = amntTiles*100;

    var key = event.keyCode;

    if (key == 87) {
        avTop = (avTop - 100);
        if (avTop < 0) {
            window.alert("You cannot leave the farm, it's dangerous outside.")
        } else {
        avatar.style.top = avTop+"px";
        }
    } 
    else if (key == 83) {
        avTop = (avTop + 100);
        if (avTop > (tiles-100)) {
            window.alert("You cannot leave the farm, it's dangerous outside.")
        } else {
        avatar.style.top = avTop+"px";
        }
    } 
    else if (key == 68) {
        avLeft = (avLeft + 100);
        if (avLeft > (tiles-100)) {
            window.alert("You cannot leave the farm to the right, it's dangerous outside.")
        } else {
            avatar.style.left = avLeft+"px";
        }
    } 
    else if (key == 65) {
        avLeft = (avLeft - 100);
        if (avLeft < 0) {
            window.alert("You cannot leave the farm to the left, it's dangerous outside.")
        } else {
        avatar.style.left = avLeft+"px";
        }
    }
    
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
            farmPlot.style.top = (i * 100) + "px";
            farmPlot.style.left = (j * 100) + "px";

            // Add Child div to parent Farm div
            parent.appendChild(farmPlot);

            // Add class to newly created divs
            farmPlot.classList.add('farmPlot');

            //Randomly assign background image to each 
            var dirt = Math.floor(Math.random() * 4) + 1;
            farmPlot.style.backgroundImage = ("url('Images/Dirt/dirt" + dirt + ".jpg')");
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
    // Stop all time related functions 
    stopTime()
    
    // Set timer divs to 00
    document.getElementById('daysnumber').textContent = "00";
    document.getElementById('hoursnumber').textContent = "00";
    
    //Clear Name
    document.getElementById("inputName").value = "";

    //Clear No of Plots entered
    document.getElementById("difficulty").value = "initial";

    //Delete the divs
    deleteFarmsDivs();

    //Clear the avatars
    clearAvatars();

    toggleBackMenu();
}

function deleteFarmsDivs() {
    
    var parent = document.getElementById('farms');
    var children = document.querySelectorAll('.farmPlot');
    
    // Remove Child farmplot divs from parent Farms div
    for (i = 0; i < children.length; i++) {
        if (children[i].classList.contains("farmPlot")) {
            parent.removeChild(children[i]);
        }
    }

    //Remove Avatar child div from parent Farms div
    var avatarChild = document.getElementById("avatar"+selection);
    parent.removeChild(avatarChild);
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

function clearAvatars() {
    var avatars = document.querySelectorAll('.avatar');
    for (var i = 0; i < avatars.length; i++) {
        avatars[i].classList.remove('chosen');
    }
    selection="";
}

function avatarSelect() {
    var avatars = document.querySelectorAll('.avatar');
    for (var i = 0; i < avatars.length; i++) {
        avatars[i].addEventListener('click', function () {
            for (var j = 0; j < avatars.length; j++) {
                avatars[j].classList.remove('chosen');
            }
            this.classList.toggle('chosen')
            selection = this.id;
        })
    }
}

//Run all the main functions
function main() {
    
    //Player selects the avatar
    avatarSelect()

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