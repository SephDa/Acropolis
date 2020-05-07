/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declare Variables on a single line:
var scores, roundScore, activePlayer, gameplaying, winningScore; //all of these are here to be in the Global Scope so it can be used by all

init(); //0 will be the first player, and 1 will be the second player

var prevDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1. Need random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display result
        var dice1DOM = document.getElementById('dice-1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        
        var dice2DOM = document.getElementById('dice-2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        
        // 3. Check if prev dice roll is a 6 and if this is a 6, main score = 0
        
        if (prevDice1 === 6 && dice1 === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
          
        } else if (prevDice2 === 6 && dice2 === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
                
          // Otherwise, if the player rolled anything but a 1:        
        } else if (dice1 !== 1 && dice2 !==1) {
            // Add score
            roundScore += dice1 + dice2;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            
        } else {
            //Next player
            roundScore = 0;
            document.getElementById('current-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        
        var prevDice1 = dice1;
        var prevDice2 = dice2;
    }
} );


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1. Add roundScore to global score
        scores[activePlayer] += roundScore;
    
    
        // 2. Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
    
        // 3. Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // 4. Next Player
            nextPlayer();
        }
    }
});

// Start a NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
         
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // edit Class name in HTML
         
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
         
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
         
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.getElementById('userInput').addEventListener('input', function() {
    winningScore = document.getElementById('userInput').value;
});

function init() {
    scores = [0,0];
    activePlayer = 0; 
    roundScore = 0;
    gamePlaying = true;
    winningScore = 50;
    
    
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}






