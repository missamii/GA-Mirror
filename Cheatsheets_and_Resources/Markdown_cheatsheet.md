Markdown cheatsheet!
Headers:

Preface the words you want to be made into headers by 1 - 6 # symbols. The fewer the #, the bigger the font.

e.g:
Typing \# Biggest possible header yields
# Biggest possible header
## Smaller header
###### Smallest header

Lists:

To make an unordered list, preface words with an -. e.g.:

Shopping list:
- eggs
- milk
- booze
Shopping list:

eggs
milk
booze
To make an ordered list, preface words with a tab (2 spaces), and 1. Markdown will fill in the right number for you!

What to do in the morning:
  1. Get out of bed
  1. Take a shower
  1. Go to GA
What to do in the morning:

Get out of bed
Take a shower
Go to GA
Block Quotes:

To make block quotes, preface words with >.

e.g.:

As my great great great grandmother used to say:
> This is where an awesome old-timey quote goes
As my great great great grandmother used to say:

This is where an awesome old-timey quote goes
Code:

To include a code snippet inline with the other text, surround the characters with `.

e.g.:

In order to print code snippets `inline with other text`, surround it with a backtick on each side
In order to print code snippets inline with other text, surround the code snippet with a backtick on each side

To include a block of code separate from other text, surround the code with ```. If you want the code to be syntax highlighted, write the language name after the first ```

e.g.:

```javascript
console.log("This is code.");
var code = function () {
  return "This is even more code!";
}
```
console.log("This is code.");
var code = function () {
  return "This is even more code!";
}
Links:

To include a link that displays your chosen text instead of the link itself, surround the text you want displayed with [], followed immediately by the link in ().

e.g.:

Someone go to this link about [how to make burrata](http://www.foodrepublic.com/2014/04/29/you-can-totally-do-how-make-burrata).
Someone go to this link about how to make burrata and make us all burrata!

Images:

To include images, preface the image link with ![alt text] and immediately follow it by the link in ()

e.g.:

![dog developer](http://i1.kym-cdn.com/photos/images/original/000/234/765/b7e.jpg)

Escape:
The backslash character (\\) is the 'escape' character. If you want to the markdown to show any of the special symbols referenced above (e.g., \#), just preface it with a backslash to display it.

Resources

Read the [original markdown docs](http://daringfireball.net/projects/markdown/syntax), and then take a look at the [github flavored markdown docs](https://help.github.com/articles/working-with-advanced-formatting/).
