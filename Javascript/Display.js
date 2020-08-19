/**Display controls the display toggles when a user starts or completes a game, as well as certain other display features */
class Display {
    constructor() {

    }

    toggleMenu() {
        document.getElementById('menuBox').style.display = 'none';
        document.getElementById('menuToggle').style.display = 'block';
    }
    
    toggleBackMenu() {
        document.getElementById('menuBox').style.display = 'block';
        document.getElementById('menuToggle').style.display = 'none';
    }
    
    toggleBorders(){
        var plots = document.querySelectorAll('.farmPlot');
        for (var i = 0; i < plots.length; i++) {
            plots[i].classList.toggle("farmPlotBorder");
        }      
    }

    addBorders() {
        document.getElementById('farmBorders').addEventListener('click', toggle.toggleBorders);
    }
}