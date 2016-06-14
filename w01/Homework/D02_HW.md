## W01D02 Homework: Git and Javascript!

## Introduction

We've covered a few topics you'll need to know as a programmer - using Git and Github as a version control system to save and track files, and using JavaScript to dynamically define and assign variables. This homework will help you get more comfortable with these topics before we start to build on them and will get you thinking like a developer!

## Setup

* There are two parts to the homework - Git and JavaScript - each with several steps.

* Part 1 - Git revolves around a gamified version of Git to review commands you'll need to know. You can access the platform at ` https://try.github.io `.

* For Part 2 - JavaScript, you'll write code for the first four steps in the included ` d02_starter.js `. The fifth step involves you using the proper homework submission process to push code to YOUR origin repository and opening a pull request. You can review the guidelines in the Cheatsheets_and_Resourcesdirectory.

* To test your code for Part 2 - Javascript, we're going to use Node.js, which we've installed during the InstallFest. **Anytime you want to test your code (early and often!), just type ` node d02_starter.js ` in the terminal when you're in the homework folder**. This will run the code and show you syntax errors or the output of ` console.log ` statements. The ` node ` command will run a file you specify, in this case ` d02_starter.js `, so if you're not in the same folder as ` d02_starter.js `, you should switch to that right folder!

* If you prefer, instead of using node you can cut and paste the sections of code from `d02_starter.js` into your browser's JavaScript console (in Chrome, hit command-option-J to open it or go to View > Developer > Javascript Console).

## Completion

* For Part 1 - Git, we will not be tracking your progress, but aim to complete the first 12 challenges.

* For Part 2 - JavaScript, **all five steps need to be completed**. Code for the first four steps will go in their respective places in the `starter.js` file. For example:

* 
```js
// EXAMPLE A
var givenVariable = 20;
var doubledVariable = givenVariable * 2;
var tripledVariable = givenVariable * 3;
console.log("EXAMPLE A","doubledVariable",doubledVariable);
console.log("EXAMPLE A","tripledVariable",tripledVariable);
```

* After you finish each part, it's a good habit to save your work. Do this by committing your changes to `git`:

  ```
  git add -A
  git commit -m "finished part deuce"
  ```

* When you're done, after pushing all code to YOUR origin repo (`git push origin master`), submit your homework using the standard process (see Cheatsheets_and_Resources if you forget).

## Part 1 - Git

Let's get more comfortable with Git! Take around 10 minutes to play around https://try.github.io. This will review some of the great features of version control.

## Part 2 - JavaScript Drills!

Open the `starter.js` file.

#### A. Pythagorean Theorem

Write a JavaScript statement that can solve the Pythagorean theorem.
Don't know it? Google might! :smile:

#### B. Basic Conversion - Pounds to kg

How would you convert weights in pounds to kilograms?

#### C. Old Modems

How long would it take to download a 25GB ripped copy of Blade Runner over a $200 56k/s modem from 1995? That's kbps, **kilobit**, not kilobyte. You're going to have to dig for conversion here. Save the calculated answer to a variable and then log the answer.

##### BONUS
- Make sure your answer is converted in the form of hours:minutes:seconds. This can be done with the modulus operator (%)

#### D. Killer Caffeine

It's estimated that 6 grams per hundred pounds of body weight can cause death! Given an 8oz cup of coffee has 95mg of caffeine, calculate how many cups it takes to kill YOU (or the you that you want to be!).

##### BONUS
- Let's assume you chug each cup (no fractional cups). Display the correct number of cups (i.e., round up to the next highest integer).

#### E. ZOOOMBIE ARRAAAAAAAAAYYYS

Here's a deeply nested JavaScript construction:

```js
var syed = {
  name: "Syed Salahuddin",
  job: "instructor, WDI-NYC-Robots"
};

var zombies = [
    "undead shopkeeper",
    "snarling schoolgirl",
    "dude stuck in a pit howling inarticulately",
    "WDI-NYC-Robots",
    syed,
    {
      scientistsResearchingCure: [ "Liza", "Andrew" ],
      humansFightingBack: ["Ethan", "Bobby", "Jason"],
      apocalypseHasHappened: true,
      zombieVirusCure: null,
    }
]
```

Note that this array, `zombies` has six items: the first four are strings,  the fifth is another variable, `syed` (whose value is an object that has two properties), and the sizth is an object that has four properties, two of which (`scientistsResearchingCure` and `humansFightingBack`, are themselves arrays)!

crazy, right? You're going to deal with objects in this class that make this look simple!

Let's practice accessing this zombiefied object.
For example,
```js
zombies[4];
=> { name: "Syed Salahuddin", job: "instructor, WDI-NYC-Robots"}
```

Accessing the item at index 4 gave us the entire object stored at that index. If we want to know the job of the person at that index, we would type
```js
zombies[4].job;
=> "instructor, WDI-NYC-Robots"
// OR WE COULD type
zombies[4]["job"]
=> "instructor, WDI-NYC-Robots"
```

We're nesting two levels deep here! we are accessing our `zombies` array, grabbing the item at index 4, and then accessing its `job` property.

whoa.

Now try to answer the questions below WITHOUT pasting into the repl!

1. What's the value of `zombies[0]`?
1. What's the value of `zombies[5]`?
1. How do I access the array stored in `scientistsResearchingCure`?
1. How would I grab that array, and add 'Ali' to the end of the array?
1. Oh no! Bobby has been caught by the zombies! Remove him from `humansFightingBack`.
1. Add "Bobby" to the beginning of our `zombies` array.

##### SUPER BONUS can you do the last two in one command?!? (THIS IS HARD!)

#### F. Push homework to github and use the submission process

Follow the instructions in the homework submission how-to.

#### G. (OPTIONAL -- IF YOU HAVE TIME)
Watch Shorty's videos #80, 81, 82 and 84 from the playlist [here](https://www.youtube.com/playlist?list=PLw1xVKFbouelUj3g_56CRAUjGGEU13bPF) -- on conditionals (two videos), `while` loops, and `for` loops. Bookmark this playlist if you haven't already

#### H. Don't forget to sleep!!!!
**Instructions:**
1. Brush teeth.
1. Put on PJs (or get naked, according to personal preference).
1. Climb into bed.
1. Count sheep.
  * *ALTERNATIVE:* Count JavaScript variables.
1. Fall asleep.
1. Hope you don't dream in code (this will probably happen by the end of the course).
