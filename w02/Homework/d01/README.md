# W02D01 HOMEWORK

===================

### Part 1: Calculator

Let's try building the start of a basic JavaScript calculator.
1. The skeleton of four functions are given below. Complete them so they each do the appropriate arithmetical operation on the arguments that are passed into them.

```javascript
function add(a,b) {

}

function subtract(a,b) {

}

function multiply(a,b) {

}

function divide(a,b) {

}
```


NOTE: subtract is not a commutative operation; write your subtract() function so that the second argument passed in is subtracted from the first; similarly divide() should be written so that the first argument is divided by the second.

1. Try running your functions. Pass in different numbers into each. Do they all work?
1. What's the result of `add(multiply(subtract(8,3),4),15);`? **Don't** just paste it into the console! See if you can figure out what's going on first.
1. What happens if you pass three numbers into your arithmetic functions? What about if you only pass in one number? Why?

====================

### Part 2: Can you handle the `Truth`?

Using the variables below, determine if each code snippet will evaluate to ```true``` or ```false```. Answer without pasting the expressions into the console! (Feel free to check and see if you're right after you've answered them all.)

```js
var a = 1
var b = 2
var c = 3
var d = 5
var e = 8
var f = false
var g = "false"
var h = '2'
var i = '0'
var j = 0
```

1. ```a === c - b```
- ```c === d % e```
- ```b === e / 4```
- ```"Hello world" && true```
- ```a === e % d - b * c - b + d + 1```
- ```f === false```
- ```f != "Hello world" && false```
- ```f === g```
- ```f == g```
- ```h !== b```
- ```h != b```
- ```!a```
- ```!f```
- ```i == j```
- ```i && false```
- ```j || false```

================

### PART 3: HTML/CSS

 1. Research HTML tags (there's this website called Google.com....). Make a list of tags, along with each tag's intended use in the HTML. Start with these common tags:
  * div
  * p
  * a
  * span
  * ul
  * li
  * nav
  * head
  * body
  * html
  * button
  * script
1. List at least 5 others we haven't covered in class yet, along with their use.
1. Go to the class repo (*not* to your fork, go to the main repo [here](https://github.com/ga-students/wdi-nyc-robots)). Click on the 'wiki' tab. you'll see a wiki page for HTML tags. Add any tags you researched to the wiki page, along with a one-sentence description of what they're for. Everyone needs to add at least one tag to the wiki page (ideally all 5 you found that we haven't reviewed yet, but we do recognize that the last students to do this may have found some of the tags they researched have already been added by others.)
1. CSS!
  * [Some reading on CSS layout](http://learnlayout.com/)  -- we will cover this in class tomorrow so consider this a preview. You can stop once you hit the section on 'media queries.'
  * In this folder you'll see an index.html file with a very basic personal webpage outline. Also, there's a styles.css file that is completely empty.
    * First, replace the text IN CAPS in index.html with stuff about you.
    * Now, using both files (index.html and styles.css), style your page. You must apply at least one style to each element in the body of the HTML. You must make use of classes and ids. For example (don't do this) you might have the following
    ```CSS
    li {
      list-style-type: georgian;
      background-color: yellow;
      border-style: ridge;
      border-width: 10px;
    }
    ```
    * Remember that CSS syntax is to list the the thing you're styling (e.g., `p` or `h3`) followed by curly braces. Inside the curly braces each individual style is listed in the form `style-name: style` with a semicolon after EVERY one. (The semicolons are not optional). Another example:
    ```CSS
    #ethans-bio {
      font-weight: bold;
    }
    ```
