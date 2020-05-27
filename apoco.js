



document.getElementById('saveButton').addEventListener('click', function () {
    window.alert("Your game has been saved! Hooray!");
}) 


function onFarmClick() {
    window.alert("Nothing has been planted here, yet! Better get cracking!");
};

function startGame() {
    // Get the number of tiles value from the user
    var plotInputElement = document.getElementById("inputOfPlots");
    amntTiles = plotInputElement.value;    

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

    //Check if user has entered no. of plots above 0
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
    document.getElementById("inputOfPlots").value = "";
    //amntTiles = 0;

    //Clear Crop Type
    document.getElementById("fruitType").value = "initial";

    //Delete the divs
    
    var parent = document.getElementById('farms');
    //var list = document.querySelectorAll('.farmPlot');

    // Remove Child farmplot divs from parent Farm div
    //parent.querySelectorAll('*').forEach(n => n.remove());

    //This was my try: my own logic

    /*for (i = 0; i < list.length; i++) {
        if (i.class === "farmPlot") {
            parent.removeChild(list[i])
        }
    }*/

    //Try 2 // found online, makes sense
    var child = parent.lastElementChild;
    while (child){
        parent.removeChild(child);
        child = parent.lastElementChild;
    }

}

function toggleMenu() {
    document.getElementById('menuBox').style.display = 'none';
    document.getElementById('menuToggle').style.display = 'block';
}

function toggleBackMenu() {
    document.getElementById('menuBox').style.display = 'block';
    document.getElementById('menuToggle').style.display = 'none';
}


//Run all the main functions
function main() {
    
    document.getElementById('brandNewGame').addEventListener('click', startGame);
    //Click Back to Main Menu to clear all data and start again
    document.getElementById('backToMenuButton').addEventListener('click',clearAll);
    document.getElementById('backToMenuButton').addEventListener('click', toggleBackMenu); 
}

// Run the main functions of the page
main();