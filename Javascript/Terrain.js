/** Terrain is used for managing the terrain divs of the game, once the player starts the game */
class Terrain {
    
    constructor() {
        this.numtiles=0;
    }

    onFarmClick() {
        window.alert("Nothing has been planted here, yet! Better get cracking!");
    }

    getAmountOfTiles(difficulty) {
        
        //Create amount of tiles value based on difficulty level
        switch (difficulty) {
            case "easy":
                this.numtiles = 10;
                break;
            case "medium":
                this.numtiles = 20;
                break;
            case "hard":
                this.numtiles = 30;
                break;
        }
    }

    /**Generate the number of divs based on the difficulty value provided by user in input*/
    generateTiles() {
        var parent = document.getElementById('farms');
        parent.style.width = (this.numtiles * TILE_SIZE) + "px";
        parent.style.height = (this.numtiles * TILE_SIZE) + "px";
        parent.style.margin = "auto";
    
        for (var i = 0; i < this.numtiles; i++) {
            for (var j =0; j < this.numtiles; j++) {
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
                farmPlot.addEventListener('click', this.onFarmClick);
            }
        }
    }  

    deleteFarmsDivs() {
        var parent = document.getElementById('farms');
        var children = document.querySelectorAll('.farmPlot');
        
        // Remove Child farmplot divs from parent Farms div
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains("farmPlot")) {
                parent.removeChild(children[i]);
            }
        }
    }
}