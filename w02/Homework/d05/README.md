# THE HAUNTED MANSION: A Spoken-Word Adventure!!

==================

We're going to create an old-style text adventure game, but we're going to do it with SPEECH RECOGNITION. 'Cuz that's how we roll. We're just that awesome.

If you look at index.html, you'll see this is a very simple web page: a header, and a `\<main\>` tag with a start button, a "display" div, and a "game-options" div.

The display div is where the narrative text for each stage of our game will appear. Below that, in the options div, will appear the various choose-your-own-adventure style options you can say to advance the narrative. To keep the speech recognition package from working too hard, we're going to limit our actual commands to just the first word of each option.   

We've coded in the initial display text and options, and what happens if you choose either of the first two options. After that IT'S UP TO YOU! Will you safely spend the night in the haunted mansion and emerge with your life and sanity intact, and a fortune at the ready? Or is there something more eldritch that awaits us within the creaky, old house where your mysterious great-aunt (said to be descended from a voodoo priestess!) lived her solitary life?

We're going to keep all the JavaScript we use in app.js, and styling in style.css. If you open up the file in your browser and click "Start game" the initial text should appear, but then you'll notice nothing happens after that when you speak. In order to actually get started, you'll need to begin by installing the required packages.

========================

In order to get the speech recognition to work, you'll have to start up a mini-web server. We can't just open the files up in our browser and have them to work because of various security controls. You can look up [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) if you're curious; we'll discuss this in more detail later in the course.

Here's what to do: Head over [here](https://nodejs.org/en/) and install Node.js. We'll start playing around with Node for real in Unit 3; for now just get it installed. **UPDATE: YOU SHOULD HAVE IT INSTALLED AS PART OF YOUR INSTALLFEST!**

Node comes with a package manager called 'npm' (Node Package Manager). Once you've got Node installed, let's make sure you have the latest version of npm.

`sudo npm install npm -g`

You may have to enter your password. Once you've got npm installed, we need to install an npm package called `http-server` that allows us to serve up web pages. Type in:

`npm install -g http-server`

Now we're ready to go. In your terminal navigate to the directory with the haunted mansion files (where this README is located) and type `http-server`. You should see something like this:
![if you're seeing this the screenshot isn't displaying](https://www.dropbox.com/s/l6bpby0oxap0ic4/Screenshot%202016-02-12%2017.36.13.png?dl=0)

See that first line after "Available on:"? It will probably say `http:127.0.0.1:8080` like in the screenshot. Copy that to your clipboard, go to your web browser, and enter that in the address bar. Voila! You should see a spooky haunted mansion looming up at you.

As you are developing the game, if you are finding your changes aren't being reflected when you refresh the page, you may need to restart your server. Just go to the terminal window where you have `http-server` running and hit CTRL-C to terminate it and type `http-server` again to restart it.

If you're *still* having issues, try either clearing your browser's cache or closing the tab and restarting Chrome entirely. You can only have one page at a time using the microphone, so if you inadvertently open the app in two pages, it won't work in one of them.

=======================

# Coding the game

We've already done one game, with Hangman. This is going to be similar in that I've tried to scaffold out the game logic for you into a series of functions. You then need to figure out how to code each function in order to make the game work as intended.

What's different from Hangman though, is the structure of the game. With Hangman, we were focusing on the basic logic and understanding the value of `this` in the context of JavaScript. Here there are different challenges:
  * Working with complex objects, namely the `story` object in story.js.
  * A preview of working with an API, here the SpeechRecognition API. I've provided some key parts of the code to interact with the API, since we haven't really worked with them in detail in class.
  * A little preview of working with a backend. In this case, to get around the same-origin policy.
  * And of course, exposure to a different type of game, as you think about what you might like to build for your first project.

The first thing that's important to understand when working on this game is using the server. As mentioned above, for security reasons, your browser is prevented from allowing scripts on a web page (e.g., our app.js file) from accessing data elsewhere (using the Speech Recognition API) unless both pages have the same origin. So if you go 'Open File' in Chrome and directly open the index.html file, it will load -- but the speech recognition code won't work.

Consequently, we have to start up an HTTP server and serve the web page up (to ourselves) to get it to run right. In order to do that you should navigate to the directory with the app files in your Terminal, and then just type `http-server`. Copy and paste the first line of output shown after "Available on:" (it should be `http:127.0.0.1:8080`) into your browser and now the game will load properly. HOWEVER, this means you can't just make a change to app.js, click reload, and have your changes reflected in the page. You actually have to restart the server each time. So when you've made a change that you want to check out, hit `Ctrl-C` in the Terminal window to terminate the server, and then just run `http-server` again. Now you can refresh the page, and the changes you've made to the script will be reflected.

### Game structure
  - Before looking at app.js, you should familiarize yourself with story.js and the structure of the `story` object that contains all the game text. It's organized like this:
  ```js
  var story = {
    [scene name]: {
      narrative: "a big long string with the narrative for that scene (to be shown in the #display div in the DOM)",
      fullChoices: []//an array of strings, where each string is one of the options the reader can choose from to advance the story,
      results:[] //an array of strings, where each string is the name of the scene that choosing the corresponding option in
      //full choices takes you to

    },
    [scene name]: {
      narrative: " ... ",
      fullChoices ["...","..."],
      results: ["...","..."]
    },
    ...
  }
  ```
  We're also going to modify this object a bit in app.js: to make the speech recognizer's task a little simpler, the player only needs to speak the first word of any option in order to choose it, rather than the full text of the option. So we're going to write a function in app.js that iterates over the story object, and for each scene in it, creates another property called `shortChoices`. shortChoices will be an array of strings, where each string is just the first word (in lowercase, because the speech recognition is case sensitive) of the corresponding option from that scene's `fullChoices`. For example, the opening scene that we start with has the following fullChoices array: `fullChoices: ["OPEN the front door","WALK around to the back"],`. The corresponding `shortChoices` array that you will write code to create will look like this: `shortChoices: ["open", "walk"]`.
  - Now let's look at app.js. Start with the variable declarations at the top: You shouldn't need to declare any additional variables to get the code to work -- but feel free to do so if you feel the need! Note that all the variable declarations are actually a single line of code to the computer; they're separated by commas, with the semicolon only at the very end. This is just a stylistic habit; some people write their code this way, so it's good to be familiar with it. JavaScript interprets all stuff between each comma as also applying to the `var` keyword at the beginning so that writing

  ```js
  var foo = "bar",
      baz = "biz";
  ```

  is the same as writing

  ```js
  var foo = "bar";
  var baz = "biz";
  ```

  Six of one, half-dozen of the other.
  Once and only once you have all your code working right, change  'development' to `false`. While it's set to development mode two things happen:
    - interim results for the speech recognition are logged to the console so you can inspect them if curious
    - the final results, parsed for the key word, are printed on the page itself for viewing. We obviously don't want that in the final version.
  Syed only just covered the keyword 'new' so the first variables declared: `SpeechRecognition` and `recognition`, won't make a ton of sense yet. (All of those `||` operators you see in the first variable declaration are to ensure that the code will work in any browser.) The important thing is to understand that `recognition` is an object with all sorts of properties and methods attached to it (***try console logging `recognition` and inspecting it***). The ones we're going to use primarily are:
    - recognition.continuous: whether the speech recognition is continuous (it keeps listening until you turn it off or there's an error) or has to be re-started after each result event.
    - recognition.interimResults: logs interim speech recognition results (when it's not quite sure what you said) to the console for inspection
    - recognition.start and recognition.stop: start and stop the listening
    - recognition.onresult: this is the core event listener. A result *event* occurs when it realizes that you've said something
    - We also use recognition.onend: If enough time goes by without a result, the recognition will automatically throw an error and end. We will set up an event listener here to restart the speech recognition as long as the game is still ongoing (as long as `inProgress` is set to `true`).
  - Beginning the game: Grab the start button from the DOM (document.querySelector ... ) and add an event listener to it that calls start() when the button is clicked.
  - `start()`: The start function needs to do several things:
    - it should set `inProgress` to true to indicate the game has begun
    - it should hide the start button
    - and it should call four functions: makeShortChoices, renderStory(passing in some arguments), initializeRecognition, and playGame
  - `makeShortChoices()`: this function needs to generate the `shortChoices` arrays for each scene in the story object. (See above.) It also needs to set the `commands` variable (which we declared at the top of the program and assigned as an empty array) to the shortChoices for the opening scene of the story. You will need to use a `for ... in` loop to iterate over an object. Read the documention on for in loops! You'll want to check out `Object.hasOwnProperty` too -- we only want to iterate over the properties of the object that we created, not the built-in ones courtesy of JavaScript. This might be a little tricky!
  - `renderStory()`: This will rewrite the contents of the display and options divs in the DOM with the new text of the next scene of the story. You will need to modify it to take two arguments.
    - The #display div is where the narrative text (located in the `narrative` property of each "scene" in the `story` object) will be displayed
    - The #choices div is where the "choose-your-own-adventure" part comes in: this will display the options for the reader to choose from at each stage of the story.
    - This function needs to erase the current content in those divs. The narrative that you're going to pass into the function as an argument needs to become the new contents of the display div. And you'll need to pass in all the game options (the `fullChoices`) corresponding to that narrative and iterate over them to display them; each should appear in its own \<p\> tag in the #choices div.
  - `initializeRecognition`: this function sets various parameters on the `recognition` object and starts it listening. Specifically it needs to:
    - set recognition.continuous to true
    - if we're in development mode, set recognition.interimResults to true (the default is false, so you don't need to specify what it will be if we're not in development mode).
    - we need to call recognition.start() to start listening
    - it needs to set recognition.onend (this is an event listener that fires on a recognition `end` event) to a function that checks to see if the game is `inProgress`. If it is in progress, it should call `recognition.start()` to restart the recognition process. We need to do this because otherwise, if you go a long enough period without speaking, the recognition will throw an error and stop.
  - `playGame()` this is a simple function. If the game is inProgress it should call `speechResult()` otherwise it should call `endGame()`;
  - `speechResult():` this is the heart of the gameplay. The object returned when a speech recognition "result" event occurs is quite complex (try inspecting it in the console!) so I've given you part of the code here to extract the transcript from that object. You will need to
    - obtain the *final word* from that transcript. (The transcript will be a string that will have all the words spoken to date in order starting with the first, so the final word is the one we want. E.g. it might look like `"open run hide"` and we want to extract "hide" from that.)
    - if we are in development mode, it should grab the #speech div from the DOM, clear its contents, and fill it with word you just obtained (so you can see it in the page as you work on the code).
    - whether or not we're in development mode: it should call `checkForMatch`, passing in the word you obtained. If checkForMatch returns 'gameover' it should call `recognition.stop()` to stop listening and then call `endGame`. If checkForMatch returns the name of a scene in the story object, it should call `moveStory`, passing in that scene. If checkForMatch returns false, then the speech detected didn't match any of the available options for the player to choose, and you don't have to do anything.
  - `checkForMatch()`: this is where we link up the two parts of our game: the speech recognition we employed in `speechResult` and the story object that holds the story. You'll need to check to see if the word passed into this function matches any of the current commands in the `commands` variable. If it does: you'll need to return the corresponding item from the current scene's `results` array. (Look at the first scene in the story object: if the user said "open", this function should return 'frontDoor'; if the user said "walk", it will return 'backDoor'.) If no match is found, it should return `false`.
  - `moveStory()`: this function will need to take an argument: the name of a scene in the story object. It needs to set the `scene` and `commands` variables to their new values (scene is the entire new scene from the story, commands is the new scene's `shortChoices` array) and call `renderStory()`, passing in the new scene's narrative and fullChoices for display on the page.
  - `endGame()`: this function should set `inProgress` to false to stop listening. It should also reveal the start button again and change its text to "Play another game" (instead of "Start game").

  Whew! That's it! Have fun!
