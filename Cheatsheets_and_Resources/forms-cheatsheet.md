# HTML Forms Cheatsheet

### Form element
- All the elements for a single form are encased in `<form>` tags
- The optional `action` attribute: the URI, or file name, of a program that processes the information submitted via the form (example `sign-up-form.php`).
- The optional `method` attribute: specifies the method used for form submission (defaults to 'GET' if unspecified).

### Text input box
- `<input type='text' id='api-input'>`
- No closing tag because input tags are weird.
- How do we get what the user typed in using js?
``` js
var apiInputBox = document.getElementById('api-input');
var userChosenMovie = apiInputBox.value;
```

### Checkbox
- `<input type='checkbox'>`
- You would think there would be a `checkbox` element. But this one is an input tag too! So weird.
- How do we tell our form that these checkboxes are in a group? By giving each checkbox the same `name` attribute.
- Checkboxes allow you to select multiple answers

```html
<input type="checkbox" name='colors' value='b'>Blue
<input type="checkbox" name='colors' value='r'>Red
<input type="checkbox" name='colors' value='y'>Yellow
```

- While the above code is functional, we can make it better. Give each checkbox an id. Then enclose the text your want to appear on the screen ("Blue", "Red", or "Yellow") in a `<label>` element with a `for` attribute corresponding to the ids. Now if you click on the text, the checkbox activates! (i.e., you don't have to click on the little box to check it, clicking on the label works too)

```html
<input type="checkbox" name='colors' id="red" value='r'>
<label for="red">Red</label>
<input type="checkbox" name='colors' id="yellow" value='y'>
<label for="yellow">Yellow</label>
```

Here's what that looks like:
<input type="checkbox" name='colors' id="blue" value='b'><label for="blue">Blue</label>
<input type="checkbox" name='colors' id="red" value='r'><label for="red">Red</label>
<input type="checkbox" name='colors' id="yellow" value='y'><label for="yellow">Yellow</label>

### Radio Buttons
- `<input type="radio">`
- Very similar to `checkboxes`, but user can only choose one
- How do we tell our form that they're in a group? Also with the `name` attr.
- The name attribute *must* be present to enable only choosing one option.

```html
<input type="radio"
       name="favorite-teacher"
       value="ethan"
       id="ethan">
<label for="ethan">Ethan</label>
<input type="radio"
       name="favorite-teacher"
       value="liza"
       id="liza"
       disabled>
<label for="liza">Liza</label>
<input type="radio"
       name="favorite-teacher"
       value="syed"
       id="syed"
       disabled>
<label for="syed">Syed</label>
```

- And the rendering:

<input type="radio"
       name="favorite-teacher"
       value="ethan"
       id="ethan"><label for="ethan">Ethan</label>
<input type="radio"
       name="favorite-teacher"
       value="liza"
       id="liza"
       disabled><label for="liza">Liza</label>
<input type="radio"
       name="favorite-teacher"
       value="syed"
       id="syed"
       disabled><label for="syed">Syed</label>
- Note that giving a form element the `disabled` attribute, well, disables it.

### Dropdown (or `select`)
- `<select>`
- Behave like radio buttons - you can only choose one
- The `name` attr is on the `select` element, *not* the `option` elements
```html
<select name="wdi-topics"
        id="wdi-topics">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="ruby">Ruby</option>
  <option value="node">Node</option>
  <option value="express">Express</option>
  <option value="c++" disabled>C++</option>
</select>
```

- As rendered:

<label for='wdi-topics'>Choose the topic you'd like to review: </label><select name="wdi-topics"
        id="wdi-topics">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="ruby">Ruby</option>
  <option value="node">Node</option>
  <option value="express">Express</option>
  <option value="c++" disabled>C++</option>
</select>

The JavaScript to grab it
```js
var optionSelection = document.querySelector('#wdi-topics');
console.log(optionSelection.value);
```

<script>

var optionSelection = document.querySelector('#wdi-topics');
optionSelection.value;

</script>

### The `submit` button
- Push to send the form info.
- Two ways: `input` tag with `type="button"` or `button` element

### Resources:
- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms

(edited by Ethan, 7/18/16)
