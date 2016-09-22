///////////////////////////////////////////////////////
//THE HAUNTED MANSION: A SPEECH RECOGNITION ADVENTURE//
///////////////////////////////////////////////////////
///////////////// Ethan Friedman 2016 /////////////////
///////////////////////////////////////////////////////

console.log ('JavaScript is loaded ...');

/***********************************************/
/***********************************************/
/*********** CREATING GAME VARIABLES ***********/
/***********************************************/
/***********************************************/
// initializing game variables
// feel free to add others if you think necessary to get your code to work
var SpeechRecognition = window.webkitSpeechRecognition ||   //prefixes for cross-browser compatability
                        window.mozSpeechRecognition    ||
                        window.msSpeechRecognition     ||
                        window.oSpeechRecognition      ||
                        window.SpeechRecognition,
    recognition       = new SpeechRecognition(),           // create a new SpeechRecognition() object
    storyDisplay      = document.getElementById('display'), // the display element for the narrative from the DOM
    gameOptions       = document.getElementById('choices'), // element to display the narrative choices in the DOM
    scene             = story.opening,                      // opening scene of the story
    commands          = [],                                 // commands for the speech recognition to process
    development       = true,                               // 'development' mode prints speech recognition to the page; set to false for production
    inProgress        = false;                              // Boolean to start/end the game

/***********************************************/
/***********************************************/
/** FUNCTIONS RELATED TO GAME SETUP AND START **/
/***********************************************/
/***********************************************/
// grab the 'Start Game' button and add a click handler to call the start() function
var button = document.querySelector('button');
button.addEventListener('click', function() {
  start();
});

// HERE YOU NEED TO GRAB THE 'start game' button from the web page
// ADD A CLICK HANDLER TO IT TO CALL START() when it's clicked

/*
The start function gets the game started (you'd never guess that from the name of the function, right?)
It should do a bunch of things:
  (1) it should add the 'hidden' class to the start button;
  (2) it should call renderStory,
passing in the initial scene and choices (which were initially set up above for you);
  (3) it should call makeShortChoices,
  (4) it should call initializeRecognition, to start the speech listener,
  (5) it should set inProgress to true;
  and finally (6) it should call playGame to begin the game */
  function start() {
    console.log('starting game');
    inProgress = true;
    button.classList.add("hidden");
    makeShortChoices();
    renderStory(scene.narrative, scene.fullChoices);
    initializeRecognition();
    playGame();
  }
  function speechResult() {
    recognition.onresult = function(event) {
     console.log("recognition result event!");
     var transcript = event.results[event.resultIndex][0].transcript;
     var words = transcript.split(" ");
     var result = words[words.length - 1];
     if (development) {
       var dev = document.querySelector('#speech');
       dev.innerHTML = "";
       dev.innerHTML = "Last speech recognition result: <span class='italics'>" + result + "</span>";
     }
     console.log("Result: ", result);
     var match = checkForMatch(result);
     if (match == "gameover") {
       recognition.stop();
       inProgress = false;
     } else if (match) {
       console.log("I've found a match to a command in the commands array!");
       moveStory(match);
     }
    };
  }
  //your code here



// the renderStory function will display the story in the view
// it needs to (1) empty out the .display and .choices divs in the DOM
// (2) fill the .display div with what's passed in as 'text', and
// (3) iterate over the storyChoices that were passed in and for each one
// create a new <p> with class "game-options" and add them all to the .choices div
function renderStory(text, storyChoices) {
console.log("rendering the next scene in the story");
  //your code here
  var display = document.querySelector('#display');
  var choices = document.querySelector('#choices');
  display.innerHTML = '';
  choices.innerHTML = '';
  display.innerHTML = text;
  for (var i = 0; i < storyChoices.length; i++) {
    var p = document.createElement('p');
    p.classList.add("game-options");
    choices.appendChild(p);
    var newText = document.createTextNode(storyChoices[i]);
    p.appendChild(newText);
  }
}

// this function should iterate over the story object (HINT: check out 'for ... in' loops!) and for each
//property in 'story' it should make a new 'shortChoices' property: an array that contains the FIRST word
//of each item in that property's fullChoices array. i.e., story.opening.shortChoices should be equal
// to ["open", "walk"] after this function has run.
// !!! finally this function should set 'commands' equal to story.opening.shortChoices !!!!
// A second HINT: make sure you use `hasOwnProperty` when you use a for ... in loop on an object
function makeShortChoices() {
  console.log("generating the one-word short choices arrays in the story object");
  //your code here
  for (var scene in story) {
    if (story.hasOwnProperty(scene)) {
      story[scene].shortChoices = [];
      for(var i = 0; i < story[scene].fullChoices.length; i++) {
        var firstWord = story[scene].fullChoices[i].split(" ")[0].toLowerCase();
        story[scene].shortChoices.push(firstWord);
    }
  }
}
  commands = story.opening.shortChoices;
}

// sets up parameters for the speech recognition and starts it listening
// leave this alone unless you want to experiment with the SpeechRecognition API
function initializeRecognition() {
  recognition.continuous = true;                          // it's always listening
  if (development) {recognition.interimResults = true;}   // logs interim results to the console in dev mode
  recognition.onend = function() {                        // restarts the recognition engine if there's a pause in speech
    if (inProgress) {
      console.log("restarting recognition");
      recognition.start();                                // re-start listening
    }
  };
  recognition.start();                                    // start listening
  console.log("Every breath you take ... Every word you make ... I'm listening to you"); //creepy ....
}

/***********************************************/
/***********************************************/
/****** FUNCTIONS RELATED TO THE GAMEPLAY ******/
/***********************************************/
/***********************************************/

// the playGame function starts the game loop
// if inProgress === true needs to call speechResult
// else it should call endGame
function playGame() {
  console.log("let's play now!");
  //your code here
  if(inProgress) {
    speechResult();
  } else {
    endGame();
  }

}


// This function will listen for speech from the user.
// we will create an onresult function that the speech listener will run when it detects a speech 'result'
// inside this listener we'll need to do several things. I've done the first couple for you:
// I've grabbed the transcript of the speech so far from the event object that the listener returns
// (Note that I added in a console log of the event object -- try inspecting it in the console!)
// The rest is up to you:
// you'll need to split that transcript up into words and grab the FINAL one (the most recent word spoken)
// Next you'll need to call checkForMatch() *passing in the word spoken*. If checkForMatch() returns "gameover"
// this should call recognition.stop(), set inProgress to false and call endGame();
// if checkForMatch() returns false it should do nothing; if checkForMatch returns anything else, you should
// then call moveStory, passing in what checkForMatch returned.
// IF we are in development mode (`development = true` up on line 26 or thereabouts) it should
// grab the #speech div from the DOM, empty it out and display the final word spoken in it, along with any
// text you want to add in (e.g.,: "Last speech result was:")
function speechResult() {
  console.log('running speechResult()');
  recognition.onresult = function(event) {
   console.log("recognition result event!");
     var transcript = event.results[event.resultIndex][0].transcript;
     //your code here
     var transcriptSplit = transcript.split(" ");
     var lastWord = transcriptSplit[transcriptSplit.length - 1];
     var match = checkForMatch(lastWord);

       if(development) {
         var speech = document.querySelector('#speech');
         speech.innerHTML = "";
         speech.innerHTML = "Last speech result was: " + lastWord;
        }
       if(match === "gameover") {
         recognition.stop();
         inProgress = false;
         endGame();
       } else if (match) {
         moveStory(match);
       }
     };
}

// checkForMatch should take in a parameter and compare it with the one-word commands listed in the
// commands array (line 25 or thereabouts). If it finds a match, it should return the CORRESPONDING
// item from the current scene's results array. Othersise it should return `false`.
// Let's use an example and assume the current value of `scene` is story.opening (the first scene in the
// story). the value of the commands variable was set when we ran the makeShortChoices function to be
// equal to story.opening.shortChoices, or ["open","walk"]. So checkForMatch will listen to the speech
// detected. If it detects anything other than "open" or "walk" it will return false. If it detects
// "open" it will return story.opening.results[0] (because "open" is the first item in the commands array)
// if it detects "walk" it will return "story.opening.results[1]" because "walk" is the second item in the
// commands array and so on.
function checkForMatch(text) {
  console.log("checking for match");
  //your code here
  var result = false;
  for(var i = 0; i < commands.length; i++) {
    if(text == commands[i].toLowerCase()) {
      result = scene.results[i];
    }
  }
  return result;
}




// needs to set the narrative and choices and commands objects appropriately
// pass in the choice the user made and update the various narrative variables accordingly.
// finally, needs to call renderStory with the new scene and choices
// you're going to pass in the choice the user made to this function inside of the speechResult FUNCTION
// this function "moves" the story along. It should set our scene variable equal to story[choice],
// and our commands variable to story.shortChoices
// finally it should run renderStory, passing in the new scene's narrative and fullChoices to be
// displayed on the webpage
function moveStory(userChoice) {
  scene = story[choice];
  commands = scene.shortChoices;
  renderStory(scene.narrative, scene.fullChoices);
  //your code here
var narrative = story[userChoice].narrative;
var fullChoices = story[userChoice].fullChoices;
 renderStory(narrative, fullChoices);
}

//set inProgress to false
//display an end game message on the page
function endGame() {
  inProgress = false;

  console.log('ending game');
  //  your code here
  button.classList.remove("hidden");
  button.innerText = "Play again";
  scene = story.opening;
}
