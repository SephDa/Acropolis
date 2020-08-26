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
    animalImage.style.height = "200px";
    animalImage.style.width = "200px";

    //Append the img to the newly created child div
    childDiv.appendChild(animalImage);

    //Position the newly created child div
    childDiv.style.position = "absolute";
    childDiv.style.left = "300px";
    childDiv.style.top = "600px";

    //Give an ID and class to the animal
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
