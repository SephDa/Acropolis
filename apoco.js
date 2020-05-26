/*
document.getElementById("eg button").addEventListener('click', function() {
    document.getElementById("menu").style.display = 'none'
    } 
);
*/
/*
window.onload = function menu(){
    document.getElementById("menuBox").style.display = 'block';
}*/

document.getElementById('brandNewGame').addEventListener('click', function () {
    document.getElementById('menuBox').style.display = 'none';
    document.getElementById('menuToggle').style.display = 'block';
}) 

document.getElementById('backToMenuButton').addEventListener('click', function () {
    document.getElementById('menuBox').style.display = 'block';
    document.getElementById('menuToggle').style.display = 'none';
}) 

document.getElementById('saveButton').addEventListener('click', function () {
    window.alert("Your game has been saved! Hooray!");
}) 


function onFarmClick() {
    window.alert("Nothing has been planted here, yet! Better get cracking!");
};

function getInput() {
    
    // Get the number of tiles value from the user
    var inputElement = document.getElementById("inputOfPlots");
    const amntTiles = inputElement.value;
        
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

// Add user typed in name to welcome message
function addName() {
    var userName = document.getElementById("inputName");
    var name = userName.value;
    
    var welcomeNote = document.getElementById("welcome");
    welcomeNote.textContent = "Welcome to Acropolis, " + name + "!"; 
}

function main() {
    
    document.getElementById('brandNewGame').addEventListener('click', getInput);
    document.getElementById('brandNewGame').addEventListener('click', addName); 
}


// Run the main functions of the page
main();


// Change input no of plots font
/*var numeralInput = document.getElementById('inputOfPlots');

numeralInput.addEventListener('click', function() {
    if (numeralInput.textContent === "") {
        numeralInput.style.fontFamily = "MyWebFont";
        numeralInput.placeholder = "Enter no. of Plots";
    } else {
        numeralInput.classList.add('numerals');
        numeralInput.placeholder = '';
    };*/

//Click Menu to clear all data and start again

document.getElementById('backToMenuButton').addEventListener('click',clearAll);


    function clearAll() {
        document.getElementById("inputName").value = "";
        document.getElementById("inputOfPlots").value = "";
    }