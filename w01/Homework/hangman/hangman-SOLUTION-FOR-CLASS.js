//ETHAN NOTES:
console.log('hangman.js loaded');

var Game = {
  guesses: 10,
  guessedLetters: [],
  currentWord: "",
  hangmanWord: [],
  wordsArray: ["javascript", "python", "developer", "programmer", "general", "assembly"],

  startGame: function(wordsArray) {
    this.guesses = 10;
    this.guessedLetters = [];
    var index = Math.floor(Math.random() * this.wordsArray.length);
    this.currentWord = wordsArray[index];

    //BONUS SOLUTION:
    // this is what mapping currentWord => hangmanWord might look like:
    // this.hangmanWord = this.currentWord.split('').map(function(l) => {return "_"});

    for (var i = 0; i < currentWord.length; i++) {
      this.hangmanWord.push('_');
    }
    this.render(this.hangmanWord, this.guesses, this.guessedLetters);

    // this.guess(this.promptUser()); THIS IS THE ONE LINE VERSION
    var userGuess = this.promptUser();
    this.guess(userGuess);
  },
  render: function(word, guesses, letters) {
    console.log("Word so far:");
    console.log(word.join(' '));
    console.log("--------------------");
    console.log("Guesses remaining:", guesses, "Letters guessed so far: ", letters);
  },
  promptUser: function() {
    var letter = prompt('Please select an (unused) letter to guess.');
    for (var i = 0; i < this.guessedLetters.length; i++) {
      if (this.guessedLetters[i] == letter) {
        return this.promptUser();
      }
    }
    return letter;

    // BONUS: what if the user entered a capital letter? i.e., first I guess "a" then the next time I type "A" -- we don't want the computer thinking the user's guessed a different letter! (remember, to the computer, "a" and "A" ARE different letters!) JavaScript provides built-in functions for changing the case of a string. Go here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String, find the appropriate methods, and use it to make sure all our letters are the same case (uppercase or lowercase, your choice).
    // BONUS SOLUTION change line 36 above to add in .toLowerCase() at the end

    //BONUS ONLY IF YOU'VE COMPLETED THE GAME! Writing a loop to go through every letter one-by-one in our guessedLetters Array is a pain. Fortunately, JavaScript provides a nice array method called indexOf that returns the index number in an array of a given value, **or -1 if the item isn't in the array**. Look up Array.indexOf in the Mozilla documentation, and re-write your code above to make use of it instead of looping!
    //BONUS SOLUTION CODE:
    // if (this.guessedLetters.indexOf(letter) >= 0) {
    //   return this.promptUser();
    // }
    // return letter;
  },
  guess: function(ltr) {
    this.guessedLetters.push(ltr);
    this.guesses--;
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i].toLowerCase() === ltr) {
        this.hangmanWord[i] = ltr;
      }
    }

    /*
    SUPER DUPER BONUS ONLY IF YOU COMPLETE THE GAME: read about Array.map and use it instead of looping over this.currentWord. THIS IS HARD! But very like what you might see in more advanced code ...
    */
    //BONUS CODE (w/ using the ternary operator too--Google it!):
    // this.hangmanWord = this.currentWord.split('').map(function (l) {
    //   return l == ltr ? ltr : "_";
    // });

    var result = this.isOver(this.hangmanWord);

    if (result) {
      this.overMessage(result);
    } else {
      this.render(this.hangmanWord, this.guesses, this.guessedLetters);
      var userGuess = this.promptUser();
      this.guess(userGuess);
    }
  },
  isOver: function(word) {
    word = word.join('');
    if (word == this.currentWord) {
      return "victory"
    } else if (!this.guesses) {
      return "defeat"
    }
    return false;
  },
  overMessage: function(result) {
  //would not expect students to use the "ternary operator" (google it!)
  var msg = result == "victory" ? "Congratulations you win! Play again?" : "You lose boo. Try again."

  console.log('-----------------------------------------');
  console.log(msg);
  console.log('-----------------------------------------');
  }
};

// here we call startGame and pass in the wordsArray to begin playing ...
console.log("type Game.startGame(Game.wordsArray); to begin playing");
