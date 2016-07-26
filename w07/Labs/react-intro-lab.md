### Lab exercises

##### Remember:
Today is about learning **concepts**. Make sure you understand on a high level and don't get hung up on small details.

### One
- After you write your Hello World examples & feel comfortable, write your very first React app:
- Use the `.createClass()` function to create a react component called `App`.
- In the `render` function, return a div with a class of `my-div` with two `p` tags.
- In the `render` function, create two variables, one for the string "hello", another for the string "world". Insert these two strings into the `p` tags dynamically.


### Two
- In your next example, you will create 2 react components, include both of them in a 3rd component, and render that component to the DOM.
- The first component, `Header`, should contain an `h1` that says `Hello world`.
- The second component, `Container`, should contain a paragraph tag with `lorem ipsum` from your favorite generator.
- Your third component, `App`, should contain both of the previous two components. Render `App` to the DOM.


### Three
- In your next example, create two components `Header` and `Container` like the two above.
- In your third component, `App`, render `Header` once and `Container` twice.
- In `App`, create two arrays - `nameArr` and `colorArr` - and give them each three elements.
- Give the first `Container` the `nameArr` as props and the second `colorArr`.
- In the `Container` component, create a function `renderTheList`, that will loop over the array given to it by `App` and display them in <li> elements.
- Look at the mini examples for help.

### If you get done early:
- Read THINKING IN REACT! Google it.
- Go back and read the lesson. 
- Read the resources at the bottom of the lesson markdown file or some that Syed gave you. There are great articles & videos there that will increase your understanding.
