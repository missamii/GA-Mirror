# Assignment

## Part 1 - Node

```js
var badJokes = [
  "A man walks into a bar. Ouch",
  "Your momma's so fat that when she sits around the house, \
  she REALLY sits around the house.",
  "What's that on your shoe? (slaps you upside the face)"
];
```

* Write a node file called *jokeTeller.js* that picks a bad joke at random from the above array and logs it to the console. You can copy and paste the badJokes array into this file.

* Let's practice compartmentalizing your code: move your badJokes array (from the problem above) to a NEW file *badJokes.js*. Rework *jokeTeller.js* such that it is able to access the badJokes array from *badJokes.js* and log a random joke to the console.

## Part 2 - Arguments

Make a file called *geometry.js*. Inside it, write three functions:
1- one for calculating the area of a circle (taking in a radius as an argument)
2- one for calculating the area of a rectangle (height and width as arguments)
3- one for calculating the area of a square (side length as an argument)

Put all your functions as methods inside an object called geometry. Make another file called *math.js*, and make the geometry object accessible in *math.js*.

Write JavaScript logic such that on running *math.js* with node, while giving it arguments, the following would happen:

```js
node math.js square 6  
// logs 36 to the console
node math.js rectangle 2 4  
// logs 8 to the console.
node math.js circle 5  
// logs whatever 25 * pi is to the console.
```

REMINDER: node automatically creates the `process.argv` array for you when you run a command from the console.

So if you ran the following command:
```js
node math.js circle 6
// process.argv[0] => "path/to/node"
// process.argv[1] => "path/to/math.js"
// process.argv[2] => "circle"
// process.argv[3] => 6
```

## PART 3 - HTML/CSS Practice

I notice many of you have been saying you're struggling with styling. Well, fear no more! Let's put in some styling time.

Head over to the `supply` directory. Your assignment is to recreate the mockup store website shown. All assets needed are in the `supply/img` directory.

#### BONUS
Make your design responsive! Use media queries (look them up!) to change the design. This is a lot of homework for one night, so I don't expect you to get to the bonus -- but if you do, try it!
