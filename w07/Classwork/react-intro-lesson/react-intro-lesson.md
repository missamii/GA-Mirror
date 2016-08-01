
# Intro to React

### Lesson Objectives
- What is React?
- What is the `view` layer?
- Get comfy with React [official docs](https://facebook.github.io/react/)
- What are 3 technologies we use for `React` & their purposes?
- What is a `React component`
- What are the two main parts of a `React component`
- What is the `virtual DOM`?


---


# Part I • What is React?

### How do we typically build the `view` layer of our apps?
- First, what is the `view` layer and what is the `logic` layer in our apps?
- How have we been building the `view` layer of our app? Client side with vanilla JS or jQuery.
- Both technologies allow us to build the view dynamically based on the data you're trying to display (If you didn't use them, you'd have to hard code everything in HTML).


### Context - Frontend Frameworks
- So far we've talked about **web** frameworks like `node` with `express` and `ruby on rails`, but what is a **frontend** framework?
- **Problem:** You know when you write a bunch of JS to manipulate the DOM & it quickly becomes spaghetti code? You accidentally show elements that should be hidden, then you accidentally delete some elements from the DOM, then you need to show some elements you created, but not until a thing happens that triggers another thing that hides it first. Spaghetti.  
- **Solution:** Frontend frameworks handle that issue. Imagine if you had an enormous, enterprise-level, single-page app (SPA). It'd be impossible to keep everything accurate using only vanilla JS.
- You can think of **React** as a way to organize our logic (JS) and views (HTML) on the FE using small **templates** (components). React will allow us to eliminate a lot of repeated code.
- *Note:* Don't confuse this with a **CSS framework** like Bootstrap or Materialize. These frameworks solve a different problem - organizing **design**, not **data**.


### So what is React?
- A JS library written by Facebook for handling frontend logic. That's it.
- You can use it in any web framework. We're going to use it in Node & Rails over the next few weeks.


---


# Part II • React Components

### Components overview:
- React is comprised of `components`.
- What is a `component`? Think of a component like a JS object that has properties & methods. Each component is like a tiny template.
- Single Responsibility Principle
  - Component should only do one thing
  - If the component grows, it should be broken down into smaller subcomponents that only have one responsibility
- How do you know when to make something a component? The same process you use to decide what should be in its own function or object.
- At the very end, only one parent component that encompasses every other component is inserted into the DOM using the `render` fxn.
- Components have `unidirectional data flow`
- Components have two main parts:
  - Props
  - State  
- Capitalize the name of Components


### Repeat these to yourself - rules of components:
- Every component must have a **render** function
- Every render function must **return JSX**
- Everything rendered must be encapsulated in a **single html element** (like a `div`)
- At the very end, only **one component** can be rendered to the DOM. It can contain other components.  


### UI of a product table • parent & child components
- Draw out hierarchy & identify child & parent components
- This example comes straight from the React docs - `Thinking in React`


### Virtual DOM & `state`
- In P1 & P2, you wrote 100+ lines of vanilla JS to manipulate the DOM
- In your head, you had to keep track of what the DOM looked like each time an event occurred. There could be a million different scenarios - you had to code what would happen if a user chose one path, or an entirely different one - which easily creates 100 permutations. Each of these permutations needed to render something different to the DOM.
- Each of these possible DOM renderings are called `states`; the `state` of the DOM.
- As you coded your vanilla JS, you had to keep track of what elements were doing what and when so that you could create the appropriate UI for the user at that time. This DOM that you're keeping track of in your head is the **virtual DOM**  
- *Note:* You will also see it called the *shadow DOM*, but in React, it is called the **virtual DOM**.
- *Also note:* When I talk about `state` here, I mean the state of the DOM in the broader web development scope. Read on to find out about `state` in React components, which refers to particular pieces of datum that represent the current `state` of the component.

### How does React use the virtual DOM?
- Remember how I said React `components` are like tiny templates? Keep that in mind.
- Before React renders the DOM, it looks at the current virtual DOM, then looks at what parts of the DOM are **going to change**, and then only re-renders the components that contain elements that **will be changed.**
- Why does it only change the parts of the DOM that need updating instead of the entire thing?


### How does it do this? And what do I mean by tiny templates?

Let's talk about string interpolation first:

```js
var name = 'Liza';
console.log(`Oh hai, my name is ${name}.`);


=> Oh hai, my name is Liza.
```


What if instead of logging it, we dynamically inserted values into a div? What if we had a ton of names in an array, looped over that array, and displayed each name? We could think of this div as a tiny template:

```
<div>Oh hai, my name is ${name}</div>
```


When **rendered**, it looks like this:

``` html
<div>Oh hai, my name is Liza</div>
<div>Oh hai, my name is Syed</div>
<div>Oh hai, my name is Ethan</div>
<div>Oh hai, my name is Madden</div>
```


### Now let's talk about React rendering
- Let's say later in your JS you dynamically add the class `contact-name` to each div.
- Vanilla JS and jQuery would re-render the DOM of the entire HTML page just for that one tiny change.
- React would look at what is going to change **and only update the elements that are about to change.**


---


### Recap:
- When do I re-render? Answer: When I observe that the data is dirty.
- We aim to re-render the virtual DOM only when the state changes.
- How do I re-render efficiently? Answer: Using a virtual DOM to generate a real DOM patch.
- In React, each of your components have a state. Essentially, React knows when to re-render the scene because it is able to observe when this data changes.


---


### React components - `props` and `state`
- Child components keep track of their own `state`. What do I mean by state? Pieces of data that represent the current state of the component.
- In React, **properties flow down** and **states are maintained internally**
- This means that
  - `props` are given to children by their parents.
  - But parents are blind to their children
  - `state` is maintained internally by each child; a child re-renders itself when state changes.


### Imagining React components as simple JS objects
- If we imagine `components` as JS objects, we can think of `props` and `state as two properties on those objects.
- They automatically exist on components, and they start off as empty objects.
- Also remember that every component must have a render fxn, which must return JSX.
- Here is a visualization of a React component as a simple JS object:


```js
var AppComponent = {
  props: {},
  state: {},
  render: function(){
    return()
  }
}
```


---


### What is `this.props.children`?
- When parents give children `props`, it usually looks like HTML attributes and are like properties on an object.
- `this.props.children` is special; it refers to anything passed into the component as child elements


```js
var Container = React.createClass({
  render: function() {
    return (
      <div className="list-div">
        <ul>
        	<li>This</li>
        	<li>is</li>
        	<li>a</li>
        	<li>list</li>
        </ul>
      </div>
    );
  }
});
```

- The UL is `this.props.children` to the div
- The LIs are the `this.props.children` to the UL
- React dev tools inspector is your friend


---


# Part III • React is written in JSX
### JSX
- JSX is a custom JavaScript syntax used by React. JSX maps to real HTML elements when rendered.
- Don't be scared. It looks similar to HTML and JS string interpolation.


---


# Part IV • Set up a new React app & some basic React examples


---


# Part V • More context & some history

### Similar frameworks
- Backbone
- Angular
- Ember

### What's React Native? Are they the same?
- Nope, don't confuse the two.
- React Native brings the React methodology to native apps. Same idea, slightly different syntax.
- React for mobile apps (iOS, Android, and now desktop Mac apps!)
- In iOS apps, React replaces writing Swift; in Android, Java.
- Can share some React code between iOS, Android & your web app.
- The goal is to one day write code once and use it on web, iOS and Android.

### Some React History
- First released by a Facebook engineer, Jordan Walke, in 2013
- He rewrote the `liking` and `commenting` functionality of Facebook in React, then a different FB developer went to Instagram and rewrote Instagram's feed on web in React.

### Who uses React?
- Facebook
- Instagram
- Air BNB
- React
- Delivery.com
- Code Academy
- etc.


---


# Part VI • What's under the hood? React relies on Webpack, JSX & Babel

### Webpack
- Module loader, bundler, task runner. It is independent of React; you can use it other places without React.
- Webpack takes modules with dependencies and generates static assets (files) representing those modules
- Essentially, it takes what we've written in React and translates it into javascript that's readable by browsers.
- Browsers can't read `JSX` and some can't read ES6, so we need to translate it before giving it to them.
- Coolest thing about Webpack is you can load modules on the frontend. We've never done that before! We have only loaded modules in our BE node apps.

##### Webpack Features: Code Splitting
- For large web apps (SPAs) it’s not optimal to have all code in a single file.
- Webpack allows you to define split points so segments of code are included only on demand. This improves performance because you are only loading the necessary code onto a page.

##### Webpack Features: Loaders
- The crux of Webpack, similar to `tasks` in other build tools like grunt
- A function that processes a static asset (html, css, images, etc) and returns Javascript
- Primarily defined and configured in the webpack.config file (also can be required in a file)
- Examples: http://webpack.github.io/docs/list-of-loaders.html
- Or you can write your own!

##### Webpack Features: Large Plugin Ecosystem
- Lots of community support
- Plugins can inject custom build steps
- Examples: https://github.com/webpack/docs/wiki/list-of-plugins

##### Why Webpack?
- Current build tools cannot check all of these boxes:
- Split the dependency tree into chunks loaded on demand
- Keep initial loading time low
- Every static asset should be able to be a module

### **JSX** behind the scenes
- JSX is a custom JavaScript syntax used by React. JSX maps to real HTML elements when rendered.
- JSX must be transformed from JSX to real JavaScript in order to be parsed by JavaScript engines.
- The official tool used to transform JSX to actual JavaScript is **Babel**.

### Babel
- Babel is a transpiler (if you've ever written SASS, it's kind of like a preprocessor that lets you write in SASS syntax, then translates that into CSS, which the browser can read.)
- Babel allows us to write in JSX and ES6, then it converts the code into earlier versions of javascript that most browsers support.
- What's the point of this?
- It allows us to write code using a more efficient syntax. Then, it does the hard work for us by translating our code into something usable by lots of browsers.
- This is kind of like how we write in javascript or ruby, instead of machine code.


----
### Resources
- [ES6 guide](https://css-tricks.com/lets-learn-es2015/)
- [React videos](https://egghead.io/series/react-fundamentals)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [The Elevator Pitch for React](http://developer.telerik.com/featured/elevator-pitch-react/)
