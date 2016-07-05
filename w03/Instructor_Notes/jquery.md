# ==== JQUERY ====
### June 29, 2016

## LESSON OBJECTIVES
1. Be able to describe what jQuery is, and what it's used for
1. Be able to list reasons why we might or might not want to use jQuery on a given application
1. Understand how to add jQuery to a webpage
1. Understand the jQuery syntax for
  * creating new elements
  * grabbing elements from the DOM
  * adding elements to the DOM
  * modifying attributes of elements

### SO WHAT *IS* JQUERY?  
1. **What is jQuery?** It's just a library that adds various functions and capabilities to JavaScript. It makes doing certain things a little easier (or at least the syntax is cleaner) than with vanilla JS.
1. **Why use it?**
  - it's got great shorthand syntax
  - simplifies certain things
1. **So why didn't we teach it to you already?**
  - vanilla JS is sometimes faster
  - it's important to know how to do everything with plain old JS before you add in jQuery
  - jQuery is a library. You import a bunch of code and only use a small portion on any given project. (There are simplified versions of jQuery that just do some of the stuff, like underscore.)
  - it can conflict with other libraries (100% guarantee: by the time you guys are working on your final projects, some of you will be getting weird bugs because you've pulled in multiple libraries, and we won't be able to help you diagnose them!)
  - Front-end frameworks such as AngularJS or React do NOT play nicely with jQuery and the use of jQuery is strongly discouraged in a React app. The whole idea of a front-end framework is that the framework is what should be manipulating the DOM, not you!
  - any time you use code someone else has written, you risk stuff breaking in hard-to-detect ways

## PART 1: HTML ELEMENT CREATION

To make an HTML element in vanilla JS we used `document.createElement`. E.g.,
```js
var navBar = document.createElement('nav');
```

**In jQuery, the same syntax is a lot shorter.**
```js
var $navBar = $('<nav>');
```
The syntax is $() and inside the parentheses you pass in the HTML tag *including the surrounding carats* as a string. Because you made it with jQuery, it's a good practice to name the variables you use starting with a $ (as above) so you know that they're jQuery objects. Some more examples:

```js
var $div = $('<div>');
var $footer = $('<footer>');
```




## PART 2: HTML ELEMENTS -- GRABBING WITH jQUERY

**What about grabbing elements from the DOM?**
Vanilla JS: `var myNav = document.querySelector('nav');`
jQuery: `var $myNav = $('nav');`
I.e., if you just pass the *name* of the tag into the same jQuery syntax $() it will return that object for you.
It can also grab multiple ones! Use the same syntax
```js
var $links = $('a');
// will grab all <a> tags from the page and store them in $links
```

**And of course you can grab elements by any CSS selector pattern you wish:**
```js
var $containerDivs = $('div.container');
//grab all div elements with a class of container
var $navLinks = $('nav a');
//grab only those link tags that are inside of a nav elements
var $comment3 = $('#comment3');
// grab the element with an ID of comment3
var $catImg = $('img[src="cutekitty.jpg"]');
//grab img tag with src='cutekitty.jpg'
```


## PART 3: MODIFYING ELEMENTS

**Once we've created an element using jQuery, or grabbed a pre-existing element from the DOM with it, we then have all sorts of convenient functions available. For example, to style the CSS for an element:**
```js
var $nav = $('nav')
$nav.css('background-color','pink');
```
We can even chain together multiple such commands (this is one of the real benefits of it in my opinion):
```js
$('div').css('margin-left','10px')
        .css('background-color', 'khaki')
        .css('display','inline-block');
```

there are shortcut functions for some properties too
```js
// with nothing in the parens this returns the width; or you can pass something in
.width()        // returns width of jQuery object it's called on
.width('500px') // sets width of element it's called on to 500px
.height()       // ditto for height
```

**Where it gets especially helpful is in things like iterating over multiple elements.** For example, let's say we want to grab all the '<a>' tags from the page, iterate over them and see if they point to 'http://www.myspace.com'; if they do, we want to change the link's `href` attribute to point to Facebook instead. Here's how we might do that with vanilla JS:
```js
var links = document.QuerySelectorAll('a[href="http://www.myspace.com"]');
for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('href',"http://www.facebook.com");
}
```

and in jQuery
```js
var $mySpaceLinks = $('a[href="http://www.myspace.com"]');
$mySpaceLinks.attr('href','http://www.facebook.com');

// or even on just one line of code:
$('a[href="http://www.myspace.com"]').attr('href','http://www.facebook.com');
```

**It also offers a shorter event listener syntax**
```js
$('.someElement').on('click', function(event) {
  //code goes here
});
```
## PART 4: GETTING EVERYTHING GOING
**To start your jQuery when the document is ready, you use**
```js
$(document).ready(function() {
  //stuff goes here

  })
```

**To add elements to the DOM with jQuery we have all sorts of useful functions:**
```js
.insertBefore() // inserts as a sibling before
.insertAfter()  // inserts as a sibling after
.append()       // same as appendChild in vanilla JS
.prepend()      // adds as a child of the specified element at the beginning
.empty()        // removes all child nodes and content
```

## PART 5: FUN STUFF!

**jQuery also adds a bunch of handy functions to do stuff that you'd have to write a few lines' worth of regular JS to accomplish.** For example, fading elements in and out:

```js
var $myDivs = $('div').fadeOut(1000)   //pass in the time the fadeOut should take in milliseconds
$('nav').slideDown('slow')             
```

Examples include:
* fadeIn
* fadeOut
* fadeTo (fades to specified opacity)
* slideDown
* slideUp
* slideToggle
* hide
* show
* animate
* toggle

E.g.,
```js
$('footer').animate({
             opacity: 0.5,
             left: "-= 100",
             height: 'toggle'
           },1000);
```

## PART 6: AJAX

**jQuery also provides a great shorthand syntax for making AJAX requests which we will use starting in Unit 2!**

```js
//make an ajax call with specified properties
$.ajax({
  //properties go here
})
.success(callback) // execute on a successful ajax request
.error(callback) // execute on a failed request

```

## PART 7: Adding jQuery to a webpage

Two ways to add jQuery to a webpage:

1. Go to [jQuery.com](http://www.jquery.com) and download it. Load up the file in your html like you would any JavaScript file.
2. (Preferred) Just include a script tag that points to a CDN (Content Delivery Network) site which serves up the jQuery file over the internet. Example:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
```
