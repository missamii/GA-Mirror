# Intro to the DOM

### Learning Objectives
- Explain what the 'DOM tree' is
- Explain why the DOM tree is useful when writing JavaScript
- Distinguish between ELEMENT and TEXT NODES
- Create, append & remove elements
- Get, traverse & manipulate elements
- Select elements by id and class
- Get a set of elements by class name
- Change a NODES's properties
- Getter vs. setter methods


---


**Exercise:** dom-intro.html



---


### Intro
*Review the HTML & CSS*

HTML & CSS alone make for pretty boring web pages. How do we get HTML elements on the page to *do* anything? What if we want to change them? *Javascript!*

When the browser finishes loading, it maps out all of the HTML elements on the page in a tree view. This tree view is called the **Document Object Model** (DOM), also known as the DOM tree. It enables JavaScript to dynamically manipulate HTML elements on the page. Some examples of this type of manipulation include:
- Adding/removing HTML elements from the page   
- Changing elements' attributes (ie class, id, href, etc.)
- Changing the CSS styles of elements

*Draw the tree from our example HTML*

- Brief mention of hierarchical relationships - siblings, parents, children, first child, last child, next sibling, previous sibling
- Mostly common sense here
- Mention ELEMENT and TEXT NODES


---


**Exercise:** Draw the DOM tree of your HTML page


---


### `document.querySelector()`
The method [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) takes one or more strings, which can be any number of CSS query strings separated by commas. It will return the first element on the page which matches any of the selectors, or null if there is no match.

- `var headline = document.querySelector('h1');` // string is an html el
- `var theUL = document.querySelector('#lesson-list');` // string is an id


---


**Exercise:** Get every top-level element on the page using `document.querySelector()`. This includes the `h1`, the `p`, the `ul`, and the `div`.


---


### `document.querySelectorAll()`
This [method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) returns a list of the elements that match a group of selectors.

- `var allTheLis = document.querySelectorAll('li')` // get all the li tags on the page
- `var allTheLisPs = document.querySelectorAll('li, p')` // get all the li & p tags


### `.innerText` and `.innerHTML`

Getters:
- `document.querySelector('#lesson-list').innerText;`
- `document.querySelector('#lesson-list').innerHTML;`

Setters:
- `document.querySelector('#lesson-list').innerText = 'hello';`
- `document.querySelector('#lesson-list').innerHTML = '<h1>THIS IS AN H1</h1>';`


### `someNode.classList`
Once you have a node, you can access information about the classes the node has.  You can also add, remove, or toggle classes.
- `element.classList`
- `element.classList.add()`
- `element.classList.remove()`

### `someNode.style`
If you've grabbed a node, it has a property called `style`, which is *itself* a collection of properties.  You can change these properties, and the styling of your page will reflect it.

- `element.style;`
- `element.style.color = "blue";`
- `element.style.float = "right";`
- `element.style.border = "3px dotted green";`
- `element.style.boxShadow = "3px 2px 5px orange";`


---


### Manipulating DOM elements: getting, creating & deleting
Let's 'get' some elements a few different ways:
- `var ulLessonList = document.getElementById('lesson-list');` // get the UL by ID
- `var allLis = document.getElementsByClassName('list-item');` // get all the lis by class name
- `var allLiTags = document.getElementsByTagName('li');` // get all lis by HTML tag
- `var firstListItemByID = document.getElementById('accessing');` // get the 1st li
- `var firstLiChild = document.getElementById('lesson-list').childNodes[1];` // returns first child of given ID
- `var firstLiByQuery = document.querySelector('#accessing');` // returns the first matching element

Now let's play with this `<li>`
- `firstListItemByID.innerHTML = "Hello, I'm new text."` // change inner html
- `firstListItemByID.style.background = '#ff00aa';` // change bg color

Let's add some elements
- `var newLi = document.createElement("li");` // create element
- `document.body.appendChild(newLi);` // append new el
- `newLi.innerHTML = "Hello, I'm new here."` // add some text
- `newLi.classList.add('new-li');` // add class
- `var newNewLi = document.createElement("li");` // create element 2
- `var ulEl = document.getElementById('lesson-list');` // get the parent node
- `ulEl.insertBefore(newNewLi, firstListItemByID);` // insert the new LI before the 1st LI
- `newNewLi.innerHTML = "Hello, I'm first here."` // add some text

Now let's remove them
- `newLi.classList.remove('new-li');` // remove the class
- `document.body.removeChild(newLi);` // remove the el
- `document.body.removeChild(newNewLi);` // remove the el ==> xxxx!
- `ulEl.removeChild(newNewLi);` // remove the el!

Hierarchical relationships
- `.children`
- `.childNodes` // text nodes too
- `.nextSibling`
- `.parentElement`
- `.parentNode`

- `var pChildren = document.querySelector('#paragraphs-div').children;` // returns array
- `var firstP = document.querySelector('#paragraphs-div').children[0];`


---


**Exercise:** DOM intro cheatsheet


---


### Conclusion
- Explain what the 'DOM tree' is | *A tree structure that represents our HTML*
- Explain how the DOM tree is useful in JavaScript | *It allows us to access elements on a page*
- Distinguish between ELEMENT and TEXT NODES | *Remember that the following element node `<p>Intro to the DOM</p>` does not contain text. It contains a TEXT NODE with the value 'Intro to the DOM'*
- Describe getter vs. setter methods | *Return the value vs. set the value*

---


**Lab:** dom-quotes-lab


---
