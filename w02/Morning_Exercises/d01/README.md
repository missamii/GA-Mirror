![](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

## JavaScript Warm Up

Let's limber up our JavaScript muscles after the weekend!

## Setup

There's a provided ` index.html ` and ` starter.js `. Open the ` index.html ` file in your browser, and open the Developer Tools -> Console (COMMAND+OPTION+J).

Work in ` starter.js ` and refresh the browser to test your work! You'll notice ` starter.js ` is empty except for a log statement to show that the file is connected - feel free to define any variables you think you'll need and to organize the code in any way (comments, any order of steps, etc).

## Completion

There are 3 questions and a bonus! Aim to complete the first 2. Feel free to work by yourselves or with a partner.

## Assignment

####1. House of Cards
- Given the two arrays below, generate a new array that contains the full deck of 52 cards in this format: "5H" for five of hearts, "QD" for Queen of Diamonds, etc. Log the full deck to the console.
- HINT: you're going to need nested loops for this. 

```javascript
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```

- After you construct your deck, write a function that randomly pulls two cards from your deck array and returns their blackjack value (J, Q, K have a value of 10, and A has a value of 11). Look up `Math.random()` and `Math.floor()` if you don't remember how they work.


####2. Race to the White House (circa February 2016)
- Given the array below, write a function that will loops through the array and returns the name of the youngest candidate.

```javascript
var candidates = [
  {
    name: "Bernie Sanders",
    age: 74
  },
  {
    name: "Hillary Clinton",
    age: 68
  },
  {
    name: "Jeb Bush",
    age: 62
  },
  {
    name: "Donald Trump",
    age: 69
  },
  {
    name: "Liza Ramo",
    age: 55
  },
  {
    name: "John Kasich",
    age: 63
  },
  {
    name: "Marco Rubio",
    age: 44
  }
]
```
- Michael Bloomberg (age 73) is considering entering the race. Write a `runForOffice` function that will take two arguments, a name and an age, and return a candidate object like the ones above. Use it to push Bloomberg to the array.  
- Following his poor performances in general, Jeb Bush decided to drop out. Write a `dropOut` function that takes in a name and an array of candidates. If it finds a candidate by that name in the array, it removes him or her from the candidate list and returns the modified array. If it doesn't find a candidate by that name, it returns `"Candidate " + "[name] + " isn't in the race!"`. Use the function to update the `candidates` array. Use `dropOut` to try to drop Liza Ramo from the race as well.

#### 3. Zoltar the Fortune Teller

If you haven't gotten your fortune told by Zoltar, you haven't lived a full NYC experience yet. Let's change that!

- Build a function that takes four inputs: name, job title, location, and question
- *Within* the function declare and assign the following array
```javascript
var fortunes = [
  "Without a doubt",
  "Yes!",
  "Probably so",
  "It isn't likely",
  "It's possible",
  "Absolutely",
  "Not a chance",
  "Ask again",
  "No",
  "I doubt it",
  "No Way"
];
```
- Return a fortune to the user using their name, job title, location, the question they ask, and a random fortune. For example: ` The IA, Ethan of Manhattan, asks "Will I win the lottery this week?" Zoltar answers ... "Without a doubt" `

#### BONUS - Let's Count Cards

- Revisit the deck of cards question. Let's build a function that takes one argument - a number of cards. This is the number of cards you'll hold in a new array called `blackjackHand`. Initialize blackjackHand as an empty array
- Push random cards into `blackjackHand` until its length matches the input
- Calculate the blackjack value of `blackjackHand` and return the value if 21 or under, and return 'Bust!' if over 21
