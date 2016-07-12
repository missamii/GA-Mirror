# W04D04 HOMEWORK

![WTF](http://i.giphy.com/jwqHOpPqbQnaE.gif);

## FUN WITH APIs

The Colour Lovers (spelled the British way) API is a fun way to get cool and pretty color palettes to use in building websites. So let's build a webpage that hits up their API, gets some colors back, and does stuffs with them.

1. Check out the website [colourlovers.com](colourlovers.com). Neat, right?
1. Turns out they have an API that will send up color palettes to you for consumption. Oooh fun! But let's not use their boring old site. We're going to build our OWN site that hits up their API for random color suggestions, so that we can see palettes we might like to use for ourselves!
1. Build a basic webpage skeleton; call it color.html. Create an empty JavaScript file called color.js and load it in a script tag at the *bottom* of the body section of your HTML. Make a CSS file called color.css and link to it in a link tag in the head section of your HTML. (This should all feel like old hat by now!)
1. We're going to use jQuery's built-in AJAX functions for making the AJAX call to the website. Rather than download jQuery to our hard drive we'll use Google's ultra-fast hosted libraries -- we'll just grab the script from Google's API every time. Add the following script tag at the top of your web page (in the head section):

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>`

Google hosts all sorts of useful libraries: AngularJS (which we won't be covering in the course), jQuery, and so on. You can find them by Googling "Google hosted libraries" or "Google CDN" (CDN is short for Content Delivery Network), so if you forget the above link you can always grab it from there.

1. Test that your website is loading everything right. This should always be Step 1 when creating a new site!
  * Add css to your css file to make the background color of the body green.
  * In your HTML, add a `<p>` tag in the body with the text "hello world".
  * And in your JavaScript file, add `console.log('color.js is loaded');`
Try opening the page. It should be green, with "hello world" on it, and if you view the console, you should see the message. This can be a good practice to test every time you set up a new page to make sure all your files are working. Once you've confirmed they are, get rid of the background color and the "hello world stuff.
1. Add an `<h1>` with an appropriate title at the top of the page.
1. Add a `<button>` below the h1. It should say "Click me to display colors". Give it a handy class name so you can easily grab it in your JavaScript.
1. Below the button make an empty `<div>` with a class of 'container'
1. OK let's get started! In your color.js file you should grab the button from the DOM and store it in a variable (`var somethingSomething = document.querySelector( ... )`,  and add a click event listener to it
1. The event listener is going to need to make an AJAX call to the colourlovers API to get back some data from them. Then we're going to do stuff to it and append it to the DOM. So using jQuery's `$.ajax()` function which Liza showed you today, let's do that. You'll need to set several properties on your function:
  * url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback'
  * dataType: 'JSONP'
  * jsonpCallback: 'callback'
**You will have to put these properties in an object that you pass into the `$.ajax()` function.** This is to get around the single-origin policy (same thing we bumped up against in the Haunted Mansion game). So your ajax function should look something like `$.ajax({ //object properties here })`
1. Once you've done the prior step, I want you to add a `.done()` function onto the end of the `$.ajax()` function. So your code will look like this (remember all this is inside the click event listener on the button!):

```js
$.ajax({
  //set properties on the ajax call here as outlined in prior step

}).done( function(data) {
  // stuff to do on the data that's returned.

});
```

1. Start by simply adding a `console.log(data)` line into the `done` function and examining your console. If all has gone well, you should see the object the API returned to you in the console! Inspect it.
1. Now the fun stuff!
  * Make a div with a class of 'color-container' in your HTML
  * Examine the returned object from the API. If you've done it right, you should be able to locate a 'colors' array in that object. You want to grab those values. Keep console logging it until you have it right. You should get a console.log that looks something like this (with different color values of course!):
  `["620D31", "161A20", "4DB7F1", "A6466C", "B4BFD2"]`
  * Those colors are hex values. Try going into your Chrome inspector in developer tools and setting the body's background color to one of the ones that got returned. **You'll need to add a # sign before the color value: `#620D31`, or `#161A20`**
  * Now, make a `colors` variable and set it equal to that colors array in the API object. *Loop* over your colors array. For each color, you should create a new `<div>`, set its background color equal to '#' + the value of that item from the array, give it a class of 'color', and append it to your 'color-container'. Play with the styling! You might want to make 'color-container' a flexbox, for example. And give each of your color divs a border-radius of 50% so they're pretty circles.
  * play around with your colors! ooooooh pretty colors!
1. Just displaying the colors without knowing their actual hex values isn't very useful if we want to use that color later. Let's fix this:
  * In the loop when you're creating the color divs, also make a "title" div each time through the loop. Set its innerText equal to the appropriate color value. Append it to the color div. Now you should see the color's value displayed on top of each color circle. Tinker around with styling so it looks good.
  * If you're like me, it drives you crazy that the text color for the 'titles' on the dark colors is the same as for the light colors. It's very hard to read! You *could* add in styling on the title like `color: white` but then you'd have the same problem on white colors. Here's a function (full credit to user cyang on Stack Overflow for this!) to programmatically set the text color to 'black' for dark background colors and 'white' for light background colors:

  ```js
  function setTextColor(hexcolor) {
    var r = parseInt(hexcolor.substr(0,2),16); // grabs the first two characters, parses them into Base 16
    var g = parseInt(hexcolor.substr(2,2),16); // ditto for middle two
    var b = parseInt(hexcolor.substr(4,2),16); // ditto for last two
    var yiq = ((r * 299)+(g * 587)+(b * 114)) / 1000; // so, yeah. turns the above into some value for analysis
    return (yiq >= 128) ? 'black' : 'white'; // if yiq > 128 return 'black'; otherwise return 'white'
  }

  ```

  If you pass a hex color in (that's the six-letter word/number strings we got back from the API) then this will analyze them and generate a variable it's calling `yiq`. If `yiq` is greater than 128 the function returns 'black'; otherwise it returns 'white'. I leave it to you to figure how to incorporate this function into your code so that each title's color is set to either black or white depending on the color of the div it's associated with.

### **BONUSES**
1. Let's make this even nicer!
  * change your `.done()` function so that it wipes out the innerHTML of the container before creating the color divs. Now, you can get new color sets each time without your container becoming crowded with dozens of colors.
  * In your HTML file, make a new div below your color-container. Give it a class of 'saved-colors'. Make it a flexbox container with same styling as .color-container.
  * Add in a click event listener to each new color div when you create it. Clicking on the div should run a new function, `saveColor`, that you're now going to write. `saveColor` should:
    - remove the clicked element from the .color-container div (HINT: parentNode.removeChild())
    - append the clicked element to the 'saved-colors' div.
    - remove the event listener from the clicked element (so clicking it again does nothing).
  * If you've got this working you should be able to repeatedly click on the button, get new color palettes from the API, click on colors you like to 'save' them to the div below, and so build up a nice library of useful colors for later use!

1. If you add lots of colors to your saved colors div, the color circles will start to change shape. They'll no longer be perfect circles; instead, they'll be ellipses. This is ugly. We don't like ugly. Play with your code so that the size of the saved color circles changes as necessary so that the circles always stay perfect circles. You may need to change the styling on the titles too so that they stay nicely centered.

1. Add in the ability to "unsave" colors. Add a new event listener whenever you save a color; if you click on that color again, it will remove it from the DOM.

1. The returned object from the API has other properties. For example it tracks the number of view (`numViews`) for that palette as well as the number of votes (`numVotes`). What could you do with this? Maybe do something so that if a returned palette has fewer than a certain number of votes, you make a new API call to get a new, more popular palette (HINT: 'recursion').

1. The API also returns a title for each palette; display it. Display the user name of the person who made the palette, too.

1. Make it so each word in your h1 is one of the colors from the current palette.

1. Add in a 'clear all' button to your 'saved-colors' div that will wipe out all saved colors.
