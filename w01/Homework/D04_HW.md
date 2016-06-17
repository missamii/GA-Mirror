;# W01D04 Homework

![](http://i.giphy.com/4mYEvZksvTrKU.gif)

**For homework submission guidelines, see the appropriate file in the Cheatsheets_and_Resources folder of our repo.**

### Part 1: JavaScript basics

If you find yourself struggling with this part, go to the playlist [here](https://www.youtube.com/playlist?list=PLw1xVKFbouelUj3g_56CRAUjGGEU13bPF). The relevant videos on datatypes, conditionals, loops, etc. are numbers 77 - 84. Each video is only about 4-7 minutes long!

#### Datatypes, Conditionals, and Loops
1. What are the different datatypes in JavaScript?

*Primitive*
    - String
    - Number
    - Boolean
    - Undefined
    - Null
    
*Non- Primitive*
    - Array
    - Object
    - RegExp


1. What's the keyword for creating a new variable in Javascript?
1. What do `if`, `else if`, and `else` do?
1. Give an example of an `array`, and why you might choose to use one to store data (i.e., what characteristics of the data make it suitable for using this datatype?)?
1. Give an example of an `object` (what your fundamentals prework may have called 'associative arrays'). Under what circumstances would you choose to use one to store data instead of an array (what about the *nature* of the data makes an object a better choice)?
1. Why would you choose to use a `while` loop instead of a `for` loop, or vice versa? (Think about what characteristics of the nature of your iteration make one more suitable than the other.) Read [I Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md), Chapter 1 if you want a loop-y refresher.
1. What's wrong with the `for` loop in the code below? Fix it so the code runs properly:

  ```js
  var awesomePeople = ["Ethan", "Liza", "Emma", "Syed"]

  for (var i = 0, i < awesomePeople.length, i++) {
    console.log(awesomePeople[i] + " is AWEEEEESOME");
  }
  ```

#### Manipulating data
  ```JavaScript
  var candidates = ["Hillary Clinton", "Donald Trump", "Ted Cruz"];
  ```
1. What's the value of `candidates[1]`?
1. Ethan Friedman has decided to throw his hat in the ring and run for president. How would you add him to the beginning of the array? To the end?
(If you forget, you can find the Javascript documentation on arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).)
1. Ted Cruz has dropped out of the race. How would you remove him from the `candidates` array?
1. Write a `for` loop that iterates over the array and logs each candidate's name to the console.
1. Modify your loop from the previous question so if each candidates's name is 13 characters or fewer, "[name] is a short name!" gets logged to the console; if it's 11 characters or more, log "[name] is a long name!"
1. Check out the documentation for the built-in [JavaScript Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). What is the difference between `Math.round`, `Math.floor`, `Math.trunc`,and `Math.ceil`?
1. Pick a `Math` method that we haven't covered yet in class, and in your own words briefly describe what it does.
1. Fun with nested arrays:    
```javascript
var nestedArray =
  [
      [ "JavaScript", "Python",   "Ruby", "C++" ],
      [ "raindrops on roses ",  "whiskers on kittens", "bright   copper kettles", "warm woolen   mittens" ],
      [
         [  "bacon","lettuce","tomato"],
         ["rye","wheat","bagel" ]
      ]
  ];
```

  * What is the value of `nestedArray[0][3]`?
  * Write a `for` loop that iterates over Julie Andrews' "favorite things" from the song and logs them to the console.
  * I would like a bacon sandwich (none of that veggie nonsense!) on wheat. How do I obtain those from `nestedArray`?
  * I want to loop over every single **individual** item (string) in the nested array. Do that with `for`.
1. Star Wars redux:

```js
var movies = [
  {
    title: "A New Hope",
    year: 1977,
    protagonist: "Luke Skywalker",
    inTheaters: false
  },
  {
    title: "The Force Awakens",
    year: 2015    
  }
];
```

  * For the first movie, what is the *value* corresponding to the "title" *key*? What is the *key* that corresponds to the "Luke Skywalker" *value*?
  * How would you add a `protagonist: "Rey"` key:value pair to the second movie in the array? Since the movie is still playing in theaters (maybe?), also add an `inTheaters: true` property for that movie.
  * Let's assume there's a special limited release of "A New Hope" in theaters; change it so its `inTheaters` property is `true`.

Imagine we have some variable `episodeNum` that corresponds to the episode numbers of the Star Wars films (Episodes 1 - 3 were the prequels, the ones with young Anakin and (boo) Jar-Jar Binks; Episodes 4 - 6 were the "original" trilogy; Episode 7 is the one that just came out; and Episodes 8 - 9 are still to be released). Write a `switch` statement that returns "ugh" if `episodeNum` is 1, 2, or 3; returns "classic!" if `episodeNum` is equal to 4, 5, or 6; returns "fun!" if `episodeNum` equals 7; returns "I can't wait!" if `episodeNum` equals 8 or 9; and returns "huh? WTF" if `episodeNum` is equal to anything else.

#### BONUS
* The next movie in the series is tentatively entitled just "Star Wars Episode VIII". It's slated for a 2017 release. Create a new object for the movie that incorporates that info.
* Add your new object to the end of the `movies` array.

### VIDEOS FOR TOMORROW

From Shorty's playlist [here](https://www.youtube.com/watch?v=Ov-TgRp2bgc&list=PLw1xVKFbouelUj3g_56CRAUjGGEU13bPF&index=90), watch:
FOO
85. JavaScript - Function syntax
86. JavaScript - Function parameters
87. JavaScript - Function scope
88. JavaScript - Objects containing functions
89. JavaScript - The keyword this
