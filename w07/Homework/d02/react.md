##XKCD React breakdown

Main (or app)
 + Holds everything

1. Header - two components
+ contains links
+ contains title and heading


2. Content (body) - one component
+ has link to comics
+ has two navigations
+ hold image of comics

3. Info (footer) - three componets
+ static footer
+ link secton
+ dynamic images

##React Questions
1. What is a component?
A component is a a JS object. It's like a small template.

What is JSX?
The JavaScript syntax use by React

What function do I use to create a component?
React.createClass

What does Webpack do?
Not all browsers can read JSX. So Webpack is so that browsers will be able to translate it to JavaScript. Then the browser can read it.

What are props?
Props are the properties of a JavaScript object.

What is state?
A second component and with the each child maintaining it's own state.

What's the one method every React component must have (hint: it rhymes with "bender") and what does it do? RENDER: to render the component
