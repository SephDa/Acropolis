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

/*
var farmPlot = document.querySelectorAll('.farmPlot');

function farmClick() {
    for (var i = 0; i < farmPlot.length; i++){
        window.alert("Nothing has been planted here, yet! Better get cracking!");}
}

farmPlot.addEventListener('click',farmClick());
*/