class Animal {
  constructor() {}

  addToPage(parentID) {
    //Get the Parent Div
    var parent = document.getElementById(parentID);

    //Create the child div
    var childDiv = document.createElement("div");

    //Append the child to the parent div (add it in!)
    parent.appendChild(childDiv);

    //Create an image element
    var animalImage = document.createElement("img");

    //Use the input ID of the avatar the user selected to find the src for the img
    animalImage.setAttribute("src", "Images/Animals/" + this.img + ".png");
    animalImage.style.height = "50px";
    animalImage.style.width = "50px";

    //Append the img to the newly created child div
    childDiv.appendChild(animalImage);

    //Position the newly created child div
    childDiv.style.position = "absolute";

    var difficulty = startMechs.getDifficulty();
    switch (difficulty) {
      case "easy":
        childDiv.style.left = Math.floor(Math.random() * 9) + 1 + "00px";
        childDiv.style.top = Math.floor(Math.random() * 9) + 1 + "00px";
        break;
      case "medium":
        childDiv.style.left = Math.floor(Math.random() * 19) + 1 + "00px";
        childDiv.style.top = Math.floor(Math.random() * 19) + 1 + "00px";
        break;
      case "hard":
        childDiv.style.left = Math.floor(Math.random() * 29) + 1 + "00px";
        childDiv.style.top = Math.floor(Math.random() * 29) + 1 + "00px";
        break;
    }

    //Give a class to the animal
    childDiv.classList.add("animal");
  }

  clearAnimals() {
    var parent = document.getElementById("farms");
    var animals = document.querySelectorAll(".animal");

    // Remove Child farmplot divs from parent Farms div
    for (var i = 0; i < animals.length; i++) {
      if (animals[i].classList.contains("animal")) {
        parent.removeChild(animals[i]);
      }
    }
  }
}
