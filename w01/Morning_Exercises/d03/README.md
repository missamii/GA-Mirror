![HACKING THE SYSTEM](https://media.giphy.com/media/eCqFYAVjjDksg/giphy.gif)

# Javascript Basics Check In

We covered some very introductory Javascript yesterday, but let's take a swing and try some fundamental things you might have seen in the pre-work!

Often in programming, you will come across a situation where you're looking at someone else's code and you need to make heads or tails of it (like when we're instructing!). This exercise will gauge your ability to understand code you haven't written!

## Setup

For each question, take a moment to answer without using any code - you can jot down the answer in your notes or in the ANSWER HERE blocks in this markdown file.

Afterwards, feel free to run ` node starter.js ` to see if your answer is correct - you'll need to un-comment each part of ` starter.js ` first.

If you get stuck on something, just move onto the next problem.

## Completion

There are 7 questions - complete each one without using any coding! Feel free to work by yourselves or with a partner.

## Question 1

```javascript
var a = 5;
var b = 4;
a = b;
console.log('Question 1: a = ',a);
console.log('Question 1: b = ',b);
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

```
ANSWER HERE
```

## Question 2

```javascript
var e = 3;
var f = 9;
var g = e + f;
f = g;
e = 5;
console.log('Question 2: e = ',e);
console.log('Question 2: f = ',f);
console.log('Question 2: g = ',g);
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.

```
ANSWER HERE
```

## Question 3

```javascript
var weather = "cloudy"
weather === "cloudy"
console.log('Question 3: weather = ',weather);
console.log('Question 3: weather === "cloudy" returns ',weather==="cloudy");
```

What is the difference between the first two statements? Explain your answer.

```
ANSWER HERE
```

## Question 4

**NOTE:** we haven't done conditionals yet in class, but they were covered in prework. So this should be somewhat familiar.

```javascript
var x = 2;

if(x === 3) {
  console.log("In Question 4, the sushi is tasty!");
} else if (x > 0) {
  console.log("In Question 4, the sushi is cheap and good for the value");
} else {
  console.log("In Question 4, we couldn't find any sushi!")
}
```

Imagine that you run this code. What sushi-based statement would be the output? Explain your answer.

```
ANSWER HERE
```

## Question 5

```javascript
  var q = "4" + 10;
  console.log("Question 5: q = ",q);
```

What are the two datatypes being added in the definition of ` q `? What would happen here and why?

```
ANSWER HERE
```

## Question 6

```javascript
 var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
 console.log('Question 6: turtles[0] = ',turtles[0]);
 console.log('Question 6: turtles[1] = ',turtles[1]);
 console.log('Question 6: turtles[2] = ',turtles[2]);
 console.log('Question 6: turtles[3] = ',turtles[3]);
 console.log('Question 6: turtles[4] = ',turtles[4]);
```

What is the index value of "Michelangelo"?

```
ANSWER HERE
```

## Question 7

**NOTE:** we haven't done `for` loops yet in class, but they were covered in prework. So this should be somewhat familiar.

```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

for(i = 0; i < 2; i++){
  console.log('Question 7: turtles[i] = ',turtles[i]);
}
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.
* Would you make any changes to this code?

```
ANSWER HERE
```

## Question 8

Below is an object we might obtain from hitting up an API, in this case an imaginary API that returns information on cheese (hey, we have a cheese expert in class!). Plus I like cheese.  mmmm cheese.

```js
var apiData = {
  success: true,
  status: 200,
  errorMessage: null,
  data: {
    type: "searchResults",
    queryString: "all",
    numberOfResults: 3,
    results: [
      {
        name: "Brie",
        source: "cow",
        isPasteurized: false,
        country: "France",
        flavors: ["fruity", "mild", "nutty", "tangy"],
        aroma: "moderate"
      },
      {
        name: "Cheddar",
        source: "cow",
        isPasteurized: true,
        country: "United Kingdom",
        flavors: ["creamy", "sharp"],
        aroma: "mild"
      },
      {
        name: "American",
        source: "cow",
        isPasteurized: true,
        country: "USA",
        flavors: ["mild","nasty-ass"],
        aroma: null
      }
    ]
  }
}
```

* What will `apiData["errorMessage"]` return? What about `apiData.errorMessage`? What about `apiData[errorMessage]`?
* How would you grab the `queryString` property you can see above from inside `apiData`?
* Which of the following would successfully return the second flavor listed for American cheese?
  - `apiData["data"]["results"].American.flavors[1]`
  - `apiData.data[results][2]["flavors"][1]`
  - `apiData.data["results"][2].flavors[1]`
  - `apiData.data.results[2].flavors["nasty-ass"]`
