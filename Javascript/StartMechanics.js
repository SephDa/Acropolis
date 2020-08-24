/**StartMechanics is used for managing mechanics associated with choices at the start of the game*/
class StartMechanics {
  constructor() {}

  /**Validate checks that the user has entered all the starting information */
  validate() {
    //Check the User has entered a name, selected difficulty and selected an avatar
    //Get the username
    var userName = document.getElementById("inputName");
    var name = userName.value;

    //Check if user has entered a name
    if (name === "") {
      window.alert("You must enter a user name!");
      return false;
    }

    //Check User has selected an avatar:
    if (selection === 0) {
      window.alert("You need to select an avatar before proceeding!");
      return false;
    }

    //Check if user has selected difficulty
    if (this.getDifficulty() === "initial") {
      window.alert("You need to choose your difficulty.");
      return false;
    }

    return true;
  }

  getDifficulty() {
    var difficulty = document.getElementById("difficulty").value;
    return difficulty;
  }

  // Add user typed in name to welcome message
  addName() {
    var userName = document.getElementById("inputName");
    var name = userName.value;

    var welcomeNote = document.getElementById("welcome");
    welcomeNote.textContent = "Welcome to Acropolis, " + name + "!";
  }

  /**Add Difficulty choice to page as a stamp*/
  addDifficulty() {
    var difficulty = this.getDifficulty();
    var difficultyHolder = document.getElementById("difficultyStamp");

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
  allocateResources() {
    var difficulty = this.getDifficulty();
    var health = document.getElementById("healthStatProgress");
    var healthperc = document.getElementById("healthStatPercentage");

    var hunger = document.getElementById("hungerStatProgress");
    var hungerperc = document.getElementById("hungerStatPercentage");

    var sleep = document.getElementById("sleepStatProgress");
    var sleepperc = document.getElementById("sleepStatPercentage");

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
        health.style.width = "75%";

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

  delete() {
    //Clear Name
    document.getElementById("inputName").value = "";

    //Clear difficulty
    document.getElementById("difficulty").value = "initial";
  }
}
