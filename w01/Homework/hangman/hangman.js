console.log('hangman.js loaded');

//alerting player to Hangman Game
alert("Hello, and welcome to beer related Hangman.");
var command = prompt("Want to play?");
  if (command == "yes") {
  alert("Awesome, let's play!");
  } else if (command !== "yes") {
    alert("You could have won beer :0");
  }

//game starts below
  var Game = {
    guesses: 10,
    guessedLetters: [],
    currentWord: "",
    hangmanWord: [],
    wordsArray: ["kirin", "sapporo", "heineken", "hitachino", "asahi"],

  startGame: function (wordsArray) {
    console.log(this);
    this.guesses = 10; //reset the guesses to 10
    this.guessedLetters = []; //reset the guessed letters
    this.hangmanWord = []; //starting the game over
    var index = Math.floor(Math.random() * wordsArray.length);
    this.currentWord = this.wordsArray[index]; // picks a random number
      for (var i = 0; i < this.currentWord.length; i++) {
        this.hangmanWord.push('_');
    }
    this.render(this.hangmanWord, this.guesses, this.guessedLetters);
    var userGuess = this.promptUser();
    this.guess(userGuess);
  },
  render: function (word, guesses, letters) {
    console.log("Current word: " + word);
    console.log("You have " + guesses + "left");
    console.log("You've already used these: " + letters);
  },
  promptUser: function() {
    var letter = prompt("Pick a letter or take a shot!");
  for (var i = 0; i < this.guessedLetters.length; i++) {
    if (letter.toLowerCase() == this.guessedLetters[i]) {
      console.log(promptUser);
      return this.promptUser();
    }
  }
  return letter;
},
  guess: function(ltr) {
    this.guessedLetters.push (ltr);
    this.guesses -= 1;
    for (var i = 0; i < this.currentWord.length; i++) {
      if (ltr == this.currentWord[i]) {
          this.hangmanWord[i] = ltr;
        }
    }
    var result = this.isOver(this.hangmanWord);
      if (result === false) {
        this.render(this.hangmanWord, this.guesses, this.guessedLetters);
        this.guess(userGuess = this.promptUser());
      } else {
        this.overMessage(result, this.currentWord);
      }
    },
  isOver: function(word) {
     word = word.join('');
    if (word === this.currentWord) {
      return "Cheers!";
    } else if (this.guesses <= 0) {
      return "Defeat";
    } else {
      return false;
    }
  },
  overMessage: function(result) {
    switch (result) {
      case "Victory":
      console.log("Congrats you won.");
        break;
        case "Defeat":
        console.log("You lost.");
          break;
          default:
          break;
    }
  }
};


// here we call startGame and pass in the wordsArray to begin playing ...
console.log("type Game.startGame(Game.wordsArray); to begin playing");

/*
SUPER BONUSES: if you've finished the game and want to play around more, think
how you might handle some of the following:
1. keep track of games won/lost
2. Get the user's name so you can address them by name "Ethan, you dumbo, you lost!"
3. Draw a little stick figure hangman that grows with incorrect guesses. Here's my terrible
example:
  ______
  |    |
  |    |
  O    |
\---/  |
  |    |
 /\    |
       |
  ----------
  |        |
  |        |
*/
