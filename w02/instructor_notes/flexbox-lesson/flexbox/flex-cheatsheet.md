#Flexbox cheetsheet

### Parent container: .flex-container
- display: flex
  - Most important. Indicates that the parent container is a flexbox
- flex-direction
  - Establishes the main axis
  - Flexbox is a single-direction layout concept. Either columns or rows.
- flex-wrap
  - How flex items should behave when they don't all fit on one line
  - How they wrap depends on `flex-direction`
- x flex-flow
  - (shorthand for direction + wrap)
- justify-content
  - How to align content along the main axis (defined by flex direction)
  - space-between: space between each element
  - space-around: space between each element *and* at the end of the last elements
- align-items
  - Aligns items along the *cross* axis (opposite of the justify-content axis)
- x align-content
  - Only takes effect when there is more than one line in a flex item (wrap)


### Children: .flex-items
- order
  - All items have order of 0 by default
  - Use negatives to move an item to the front
- flex-grow
  - Specifies a proportionate value
- x flex-shrink
- x flex-basis
- x flex (grow, shrink, basis)
- align-self
  - Overrides `align-items` for individual items
