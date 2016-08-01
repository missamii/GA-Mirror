# React Overview Cheatsheet - quiz from memory


### General questions:
- What is React?
- What purpose does it serve/what problem does it solve?
- What is the `view` layer of our apps?
- What is the virtual DOM
- What is unique about how React renders the DOM?
- When does React know to re-render the DOM?
- What is the difference between a front end framework and a CSS framework like Bootstrap?
- What are the three main technologies that React relies on and what purpose do they serve?
- What is the one thing that Webpack lets us do in Node that we couldn't before?
- Difference between var, let, const
- What have we been using instead of jQuery to make our AJAX calls in React?
- List the technologies in your backend and the command you use to start your server.
- List the technologies in your frontend and the command you use to start your server.
- What are two ways that we can apply styles in React?
- What are the purpose of your backend routes?


### Components
- What is a react component?
- What are the two main parts of a component?
- What are props?
- What is state?
- Describe the Single Responsibility Principle and how to apply it if your components grow.
- Where do components receieve `props` from?
- How do components pass data to parents?
- Describe a way your app uses state.
- What react method do you use to create a component?
- Describe how you pass data or a function from a parent component to a child component?
- Now describe how you pass data or a fxn from a CHILD to a PARENT.
- Give one reason why you would keep logic & data that is specific to a child component inside of the parent component instead?
- How would you write a simple component and render it to the DOM?
- Describe `this.props.children` and how a parent gives the child this data. How is it different from other props?  
- Why do you have to use the `.setState` fxn instead of setting state like this: `this.state.someState = 5`
- How do you decide what should be state and what should be a prop?
- *Remember:* props come from outside (from the parent component), whereas state is maintained from within the component.  


### Rules of components
- Each component must have a `render` function
  - Render function must return `JSX`
  - The JSX must be encapsulated in a single "html" element like a <div>
- Only a single component can be rendered to the DOM (it can have components nested inside of it)


### Stateless components
- How do you create a stateless component?
- What is different about it than a regular component?
  - It doesn't have state
  - Its sole purpose is to render UI
  - No lifecycle methods
  - Do not create by using .createClass()
  - Must pass it props explicitly as an argument
  - Do not use `this` when calling `props`, ie. `this.props.someProp`
- Write a simple stateless component


### Container component
- What is a container component & it's purpose?


### Lifecycle methods
- Lifecycle methods are simply pre-built event listeners that you can add to components.
- Go to React docs and read about these.
- Two of them below should look very familiar. Write one sentence next to each one below describing it's purpose. I put the ones below that you should focus on, you don't have to read all of them.
- You can use the code below to build a little app that will trigger some of the lifecycle methods (all it will do when triggered is log the name of the method), or you can strategically paste these into an existing app and see when they fire. You already know how to trigger `getInitialState` and `render`.
- *Hint* One will be too tricky to trigger and one needs to go into a child component to render, but you should be able to trigger at least 5.


``` javascript

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return {};
  },

  componentWillMount: function() {
    console.log('componentWillMount')
  },

  componentDidMount: function() {
    console.log('componentDidMount')
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps')
  },

  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate');
    return true;
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate')
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate')
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },

  render: function() {
    console.log('render');
    return <p>Hello</p>;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);

```
