# W02D01 HOMEWORK

===================

### Part 1: Can you handle the `Truth`?

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
                                ###### My Guess       ###### The Correct Answer
1. ```a === c - b```                      false               true
- ```c === d % e```                       false               false
- ```b === e / 4```                       true                true
- ```"Hello world" && true```             true                true
- ```a === e % d - b * c - b + d + 1```   true                true
- ```f === false```                       false               true
- ```f != "Hello world" && false```       false               false
- ```f === g```                           true                false
- ```f == g```                            true                false
- ```h !== b```                           false               true
- ```h != b```                            false               false
- ```!a```                                false               false
- ```!f```                                false               true
- ```i == j```                            true                true
- ```i && false```                        false               false
- ```j || false```                        false               false

================

### PART 2: HTML/CSS

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
1. Go to the class repo (*not* to your fork, go to the main repo [here](https://github.com/ga-students/wdi-nyc-robots)). Click on the 'wiki' tab. You'll see a wiki page for HTML tags. Add any tags you researched to the wiki page, along with a one-sentence description of what they're for. Everyone needs to add at least one tag to the wiki page (ideally all 5 you found that we haven't reviewed yet, but we do recognize that the last students to do this may have found some of the tags they researched have already been added by others.)
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

=======================

### Part 3: Videos!

GA Instructor Matt Huntington has done a terrific series of videos on HTML and CSS. The first few should be review for you, but try to at least watch 6, 7, and 8 tonight if you can.

Video playlist here: https://www.youtube.com/playlist?list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J

Relevant videos:
1. HMTL
1. HTML 2
1. Introduction to CSS
1. CSS - Colors, Backgrounds, and Font basics
1. CSS Selectors
1. CSS Box Model
1. CSS Display
1. CSS Position
