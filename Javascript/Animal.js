class Animal {
  constructor() {
    this.element = null;
    this.id = null;
  }

  setID(id) {
    this.id = id;
    this.element.setAttribute("id", id);
  }

  addToPage(parentID) {
    //Get the Parent Div
    var parent = document.getElementById(parentID);

    //Create the child div
    this.element = document.createElement("div");

    //Append the child to the parent div (add it in!)
    parent.appendChild(this.element);

    /*
    //Create an image element
    var animalImage = document.createElement("img");

    //Use the sub class (e.g. Bunny) image name to find the image
    animalImage.setAttribute("src", "Images/Animals/" + this.img + ".jpg");
    //animalImage.style.height = "50px";
    //animalImage.style.width = "50px";

    //Append the img to the newly created child div
    this.element.appendChild(animalImage);
*/
    //Position the newly created child div
    this.element.style.position = "absolute";

    var difficulty = startMechs.getDifficulty();
    switch (difficulty) {
      case "easy":
        this.element.style.left = Math.floor(Math.random() * 9) + 1 + "00px";
        this.element.style.top = Math.floor(Math.random() * 9) + 1 + "00px";
        break;
      case "medium":
        this.element.style.left = Math.floor(Math.random() * 19) + 1 + "00px";
        this.element.style.top = Math.floor(Math.random() * 19) + 1 + "00px";
        break;
      case "hard":
        this.element.style.left = Math.floor(Math.random() * 29) + 1 + "00px";
        this.element.style.top = Math.floor(Math.random() * 29) + 1 + "00px";
        break; 
    }

    //Give a class to the animal
    this.element.classList.add("animal");
  }

  destroy() {
    this.element.remove();
  }

  init(){
// first need an interval timer to time when it happens
//when it happens, they go in one direction which will be random; maybe allocate a number to it
// when they go in that direction, how many steps they take is also random between 1 and 5?
// cannot go beyond the reach of the farm though
    var difficulty = startMechs.getDifficulty();
    //based on the user difficulty,create a certainnumber of bunnies
    switch (difficulty) {
      case "easy":
        this.ms = 10000;
        break;
      case "medium":
        this.ms = 2000;
        break;
      case "hard":
        this.ms = 1000;
        break;
      };
      this.animalTimer = setInterval(() => {
      this.move();
    }, this.ms);
  }

  move(){
    var tiles = tiler.numtiles * 100;
    var animal = this.element;

      var animalTop = parseInt(animal.style.top, 10);
      var animalLeft = parseInt(animal.style.left, 10);

      // Move animal DOWN
      animalTop = animalTop + 100;
      animal.style.top = animalTop + "px";

      // Move animal RIGHT
      animalLeft = animalLeft + 100;
      animal.style.left = animalLeft + "px"; 
  }


  // clearAnimals() {
  //   var parent = document.getElementById("farms");
  //   var animals = document.querySelectorAll(".animal");

  //   // Remove Child farmplot divs from parent Farms div
  //   for (var i = 0; i < animals.length; i++) {
  //     if (animals[i].classList.contains("animal")) {
  //       parent.removeChild(animals[i]);
  //     }
  //   }
  // }
}
