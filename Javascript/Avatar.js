/** Avatar is used for managing the avatar divs of the game, once the player starts the game */
class Avatar {

    constructor() {

    }

    avatarSelect() {
        var avatars = document.querySelectorAll('.avatar');
        for (var i = 0; i < avatars.length; i++) {
            avatars[i].addEventListener('click', function () {
                for (var j = 0; j < avatars.length; j++) {
                    avatars[j].classList.remove('chosen');
                }
                this.classList.toggle('chosen')
                selection = this.id;
            })
        }
    }

    /**Place chosen avatar; which is chosen from the start menu*/
    placeAvatar() {

        //Get the Parent Div
        var parent = document.getElementById('farms');

        //Create the child div
        var newAvatar = document.createElement('div')

        //Append the child to the parent div (add it in!)
        parent.appendChild(newAvatar);

        //Create an image element
        var avatarImage = document.createElement('img');
        
        //Use the input ID of the avatar the user selected to find the src for the img
        avatarImage.setAttribute('src', "Images/Avatars/"+selection+".png"); 
        avatarImage.style.height= "160px";
        avatarImage.style.width="100px"

        //Append the img to the newly created child div
        newAvatar.appendChild(avatarImage);

        //Position the newly created child div
        newAvatar.style.position = "absolute";
        newAvatar.style.left="400px";
        newAvatar.style.top="500px";
        newAvatar.id = "avatar"+selection;
    }

    /** Move the Avatar*/
    moveAvatar(event) {
        var avatar = document.getElementById("avatar"+selection);
        var avTop = parseInt(avatar.style.top,10);
        var avLeft = parseInt(avatar.style.left,10);
        
        var key = event.keyCode;

        var tiles = amntTiles*100;


        if (key == 87) {
            avTop = (avTop - 100);
            if (avTop < 0) {
                window.alert("You cannot leave the farm, it's dangerous outside.")
            } else {
            avatar.style.top = avTop+"px";
                }
            } 
        else if (key == 83) {
            avTop = (avTop + 100);
            if (avTop > (tiles-100)) {
                window.alert("You cannot leave the farm, it's dangerous outside.")
            } else {
            avatar.style.top = avTop+"px";
                }
            } 
        else if (key == 68) {
            avLeft = (avLeft + 100);
            if (avLeft > (tiles-100)) {
                window.alert("You cannot leave the farm to the right, it's dangerous outside.")
            } else {
                avatar.style.left = avLeft+"px";
                }
            } 
        else if (key == 65) {
            avLeft = (avLeft - 100);
            if (avLeft < 0) {
                window.alert("You cannot leave the farm to the left, it's dangerous outside.")
            } else {
            avatar.style.left = avLeft+"px";
                }
            }   
        }

    clearAvatars() {
        var avatars = document.querySelectorAll('.avatar');
        for (var i = 0; i < avatars.length; i++) {
            avatars[i].classList.remove('chosen');
        }
        selection="";
    }
}
