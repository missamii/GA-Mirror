#CSS - Responsive Design: Grids, Flexbox & Media Queries
*Wednesday, June 22, 2016*

---

### Lesson Objectives:
- Overall:
  - Explain the concept of **responsive design**
- Grids:
  - Explain the **box-sizing** css property
  - Explain how **grids** are helpful when designing layout
  - Explain what a **flexible grid** is // responsive grid built with percentages
  - Identify basic components of a grid // rows & cols
  - Use **nested columns** in a grid
- Flexbox:
  - Explain **flexbox**
  - Name the two main components of a flexbox // parent & child elements
  - Use a few basic flexbox properties

### Context:  Why do I need this?
You know those websites that look terrible when you resize your screen? It's because they're not responsive. Today we'll be talking about three ways to make your site responsive using **grids**, **flexboxes** and **media queries**.

### Agenda:
- Discuss grids
- We'll look at an example site & draw a wireframe
- You guys will watch me code it & then guys will do a similar exercise
- Then we'll move on to flexbox & media queries

---

# Grids
### Intro Talk --- Grids
- Every website has a layout
- **Grid layouts** allow you to use rows & cols to organize sections
- Draw wireframe of Mashable on the board

### I do: Mashable
- box-sizing
  - what is the box-sizing property?
  - content-box
  - border-box
- Cols
  - float
  - cols must have float & box-sizing, but why?
- What is a *flexible grid*:
  - A grid-based layout that adjusts with screen size
  - Because we used percentages, this grid is flexible

### You do (15 mins)
- Draw wireframe of 1 of these sites:
  - NYTimes, CSS Tricks, General Assembly
- Draw wireframe
- Then code using grids

---
#Flexbox
- What is a flexbox
- Use cases:
  - Need elements evenly spaced in a container, but don't know how big container or elements will be
  - What if we need to center an element horizontally & vertically
  - Really hard to do with plain CSS
- Let's take a look at how we'd code this

### I do - code up a couple quick flexboxes
- 2 main components of flexbox:
  - parent element
  - child elements
- Level I - center one box
- Level II - 2 .flex-item;
  - position them bottom left, then top right
- Level III - 3 .flex-item; flex-direction
  - position them column centered
  - row centered
  - row reversed centered

### Other advanced:
  - parent (.flex-container)
    - flex wrap
    - flex flow (direction + wrap)
    - align content
  - children (.flex-item)
    - order
    - flex-grow
    - flex-shrink
    - flex-basis
    - flex (grow, shrink, basis)
    - align-self



### You do (20 mins)
- Redo above to get the basics
- Will do Flexbox Froggy for hw to see all options

---

# Media Queries
### What are they & why do we use them
- Big idea: How do we build websites for optimal experience on a multitude of devices?
- MQs allow you to build different views for different screen sizes

### Diff. between responsive website, mobile site, mobile app
- Responsive will change as your viewport size changes
- Mobile sites are entirely separate sites (usually m.)
- Example: m.ups.com

###  Absolute vs. relative units:
- Absolute units:
  - `px`
  - `pt`
  - `mm`
- Relative units:
  - em: relative to the size of its direct parent
  - rem: relative to the html (root)
  - vh: viewport width
  - vw: viewport height

### Mobile-first vs. desktop-first responsive design
- Mobile first: Designing for smallest screen size, then subsequently overriding only designs that will change on larger screens (use `min-width`)
  - Your small-screen styles are in your regular CSS
  - Then code the exceptions in the MQs as the screen gets larger
- Desktop: opposite (use `max-width`)

### Why is mobile-first industry standard now?
- Larger screens harder to code. On mobile everything is 100% width
- Mobile is your baseline: build simplest first, then expand
  - Mobile is for consumption | Desktop is for creation
  - Example: Keep certain elements hidden until the screen gets big enough


### Anatomy of a media query
```
body{
  background: blue;
  color: pink;
}

@media (max-width: 400px){
  body{
    background: red;
    color: white;
  }
}
```

### What is `@media`?
> The CSS at-rule `@media` associates a set of statements (in a CSS block that is delimited by curly braces) with a condition defined by a media query.
> - from [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)


Other types:
- Most common: max-width, min-width
- Others:
  - min-height, max-height
  - device-ratio
  - device-pixel-ratio
  - orientation
  - etc.



---

### Closing Chat
- What problem is this solving?
- Challenges of coding a fully responsive site

---

### Grids
- https://css-tricks.com/dont-overthink-it-grids/
- http://www.sitepoint.com/understanding-css-grid-systems/
- http://www.w3schools.com/css/css_rwd_grid.asp
- http://gridbyexample.com/

### Flexbox
- http://flexboxfroggy.com/
- http://flexboxgrid.com/
- https://premium.wpmudev.org/blog/css-flexbox/

### Media Queries
- http://getskeleton.com/#queries
