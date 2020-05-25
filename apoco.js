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

function generateTiles(amntTiles) {
    
}


function main() {
    
    document.getElementById('brandNewGame').addEventListener('click', getInput);
     
}


// Run the main functions of the page
main();