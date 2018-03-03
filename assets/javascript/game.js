// Creates an array of nba players last names
players = ["james", "jordan","bryant","wade","oneal","shaq", "westbrook","curry","harden"];

// Creating variables to hold the number of wins, losses, tries left, and user guesses
var score = 0;
var target = 0;
var tries = 12; 
var guesses = [];

// Creating variables that I am using for arrays of letters, line after that splits the variable into an array of letters...
var player = players[Math.floor(Math.random() * players.length)];
  playerArray = player.split('');
var playerLength = playerArray.length
var playerEmpty = [];
console.log(player);
console.log(playerArray)
var j = 0
var win = true

// function set up to reset the game. i call this as i start and if there is a win or loss
function resetGame(){
    j = 0;
    tries = 12;
    guesses = [];

    player = players[Math.floor(Math.random() * players.length)];
    playerArray = player.split('');
    playerLength = playerArray.length
    playerEmpty = [];

    win = true;
    emptySet();
  }

// Sets up the empty array that is used as the base for hangman
function emptySet(){
  for (var cnt = 0; cnt < playerLength; cnt++) {
        playerEmpty[cnt] = "_ ";
      }
}

//testing an oject and how it functions
function curry(){
  var curry = {
    "player": "curry",
    "team": "Golden State Warriors",
    "position": "PG",
    "facts": [
      "shoots 3s",
      "chews his mouthguard",
      "turns the ball over",
      "best shooter of all time"
    ]
  }
  alert(curry.facts[1])
}

// can call this to check if user wins
function winCondition(){
  for (var i = 0; i < playerLength; i++){
    if (playerEmpty[i] === playerArray[i]) {
        j++;
        // console.log('at least one letter matches') 
        if (j===playerLength){
          if (player === "curry"){
            curry();
          }
          wins++;
          // console.log('victory, they all match')
          resetGame();
            
        }
    } else {
        j = 0;
        // console.log('no luck')
        win = false;
      }
    }   
  }

// can call this to see if user loses
  function lossCondition(){
    if ((tries <= 0) && (win == false)) {
      losses++;
      resetGame();
    }
  }

emptySet();

// This function is run whenever the user presses a key. it stores their guess and starts the game
document.onkeyup = function(event) {
  var userGuess = event.key;
  if ((tries >= 0) && (playerEmpty != playerArray)) {

    // loop through the empty array and if the guess matches add them to the same pos of empty array
      for (var cnt2 = 0; cnt2 < playerLength; cnt2++) {
        if ((tries >= 0) && (userGuess === playerArray[cnt2])) {
          playerEmpty[cnt2] = userGuess;
          // console.log("you found a letter!")
          winCondition();
          lossCondition();
        }
      } 
    // check if the letter has already been guessed, if it has exit, if it hasn't then add the guess to the guess array and reduce the number of available tries
      for (cnt3 = 0; cnt3 < playerLength; cnt3++) {
        if (userGuess === guesses[cnt3]){
          // console.log("you already guessed that letter")
          return
        } else {
          // console.log("that letter isn't there")
          lossCondition();
        }
      }
      guesses.push(userGuess);
      tries--;
      lossCondition();
  } 

    
    // HTML for the user who can't use console.log
    var html =
               
      "<p>You chose: " + userGuess + "</p>" +
      "<p>Guesses left: " + tries + "</p>";
      
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
    
    var hintH =
    "<p>Hint: " + playerEmpty + "</p>" + 
    "<p>Your guesses so far: " + guesses + "</p>";

    document.querySelector("#hint").innerHTML = hintH;


    var winsH =
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>";

      document.querySelector("#winsHT").innerHTML = winsH;
  }