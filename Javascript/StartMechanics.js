/**StartMechanics is used for managing mechanics associated with choices at the start of the game*/ 
class StartMechanics {
    constructor() {

    }
    
    // Add user typed in name to welcome message
    addName() {
        var userName = document.getElementById("inputName");
        var name = userName.value;
        
        var welcomeNote = document.getElementById("welcome");
        welcomeNote.textContent = "Welcome to Acropolis, " + name + "!"; 
    }

    /**Add Difficulty choice to page as a stamp*/
    addDifficulty(value) {
        var difficulty = value;
        var difficultyHolder = document.getElementById('difficultyStamp');

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

    /**Allocate Stats based on difficulty */
    allocateResources(value) {
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



}