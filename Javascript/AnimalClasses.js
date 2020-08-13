class Animal { 
    id;
    speed;
    sound;
    img;

    constructor (id, speed, sound) {
        this.id = id;
        this.speed=speed;
        this.sound=sound;
    }

    makeSound() {
        console.log("The object with the name "+this.id+" makes the sound "+this.sound);
    }

    addToPage(parentID) {

        //Get the Parent Div
        var parent = document.getElementById(parentID);

        //Create the child div
        var childDiv = document.createElement('div')

        //Append the child to the parent div (add it in!)
        parent.appendChild(childDiv);

        //Create an image element
        var animalImage = document.createElement('img');
        
        //Use the input ID of the avatar the user selected to find the src for the img
        animalImage.setAttribute('src', this.img); 
        animalImage.style.height= "200px";
        animalImage.style.width="200px"

        //Append the img to the newly created child div
        childDiv.appendChild(animalImage);

        //Position the newly created child div
        childDiv.style.position = "absolute";
        childDiv.style.left="300px";
        childDiv.style.top="600px";
        childDiv.id = this.id;
    }
}

class Horse extends Animal {
    constructor(id, speed, sound, colour, img) {
        super(id, speed, sound, img);
        this.colour = colour;
        
        switch(colour) {
            case "brown":
                this.img = "Images/Animals/"+this.colour+"horse.png";
                break;
            case "black":
                this.img="Images/Animals/"+this.colour+"horse.png";

        }       
    }
}

class Dog extends Animal {
    constructor(id, speed, personality) {
        super(id, speed, "bark bark bark");
        this.personality = personality;

        switch(personality) {
            case "friendly":
                this.img = "Images/Animals/"+this.personality+"dog.png";
                this.img.style.height= "200px";
                this.img.style.width="200px"

                break;
            case "tired":
                this.img = "Images/Animals/"+this.personality+"dog.png";
        }
    }
}

class Pig extends Animal {
    constructor(id, speed, sound,size) {
        super(id,speed,sound, size);
        this.size = size;
    }
}

class Bunny extends Animal {
    constructor(id, speed, sound) {
        super(id, speed, sound);
    }
    
    hop() {
        console.log("This is "+this.id+" hopping.")
    }

}


var nikki = new Horse("horse1", 2, "neigh!", "black");
nikki.makeSound();

var spot = new Dog ("dog1", 6, "tired");
spot.makeSound();

var babe = new Pig("pig1", 3, "oink!", "large");
babe.makeSound()

var heff = new Bunny("bun1", 10, "ftftftft")
heff.makeSound();
heff.hop();