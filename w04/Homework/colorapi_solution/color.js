console.log('color.js has loaded');
// except for the AJAX call this uses vanilla JS for all DOM manipulation, not jQuery

// grab elements I'm going to use multiple times and store them
var container = document.querySelector('.container'),
    button    = document.querySelector('#color-button'),
    eraseAll  = document.querySelector('#erase-button'),
    saved     = document.querySelector('.saved-colors');

// empties out the "saved colors" container
eraseAll.addEventListener('click', function() {
  saved.innerHTML="";
});

button.addEventListener('click', function() {

  /*
  saveColor removes a clicked color div from the color container and appends it to the
  saved-colors container. It should also call resizeDivs if enough colors have been saved and
  remove itself from the event listener (you can't save a color twice) AND add an unSaveColor
  click handler to the item (unSaveColor deletes a saved color).
  */
  function saveColor() {
    this.parentNode.removeChild(this);
    saved.appendChild(this);
    var savedColors = document.querySelectorAll('.saved-colors .color');
    if (savedColors.length > 5) {
      resizeDivs(savedColors);
    }
    this.removeEventListener('click',saveColor);
    this.addEventListener('click', unSaveColor);
  }

  /* removes the clicked element from the DOM entirely */
  function unSaveColor() {
    this.parentNode.removeChild(this);
  }

  /* resizes the saved colors based on how many there are; also changes the line height as needed */
  function resizeDivs(arr) {
    var width = (90 / arr.length) + "vw";
    var lh = 12 - (arr.length - 7);
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.width = width;
      arr[i].style.height = width;
      arr[i].style.lineHeight = lh;
    }
  }

  /* colors the words in the h1 with the colors in the current palette */
  function colorTheH1(arr) {
    var words = document.querySelectorAll('.title-span');
    var len = arr.length;
    for (var i = 0; i < words.length; i++) {
        var mod = i % len;
        words[i].style.color = "#" + arr[mod];
    }
  }

  /* sets the text color programmatically based on background color */
  // from Stack Overflow, user cyang
  function setTextColor(hexcolor) {
    var r = parseInt(hexcolor.substr(0,2),16); // grabs first two chars of hex and parses them in Base 16
    var g = parseInt(hexcolor.substr(2,2),16); // ditto for middle two chars
    var b = parseInt(hexcolor.substr(4,2),16); // ditto for final two chars
    var col = ((r*299)+(g*587)+(b*114))/1000;  // stuff?!: makes new col var with some maths based on above values
    return (col >= 128) ? 'black' : 'white';   // returns 'black' or 'white' based on val of col
  }

  /* puts the palette's name and creator in the h2 in the DOM */
  function makePaletteHeader(title, creator) {
    var paletteSpan = document.querySelector('h2 #palette-name');
    paletteSpan.innerText = title;
    var paletteMakerEl = document.querySelector('h2 #palette-creator');
    paletteMakerEl.innerText = creator;
  }

  /* creates the color div */
  function makeColorEl(color) {
    var el = document.createElement('div');
    el.classList.add('color');
    el.style.backgroundColor = "#" + color;
    el.addEventListener('click', saveColor);
    var title = makeColorTitle(color);
    el.appendChild(title);
    container.appendChild(el);
  }

  /* makes the color title */
  function makeColorTitle(color) {
    var el = document.createElement('div');
    el.classList.add('title');
    el.innerText = color;
    el.style.color = setTextColor(color);
    return el;
  }

/* the actual AJAX call to get the data */
  $.ajax({
        url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback',
        dataType: "jsonp",
        jsonpCallback: 'callback'
  }).done(function(d) {
    container.innerHTML = "";
    var by = document.querySelector('#by');
    by.innerText = " by ";
    var colors = d[0].colors;
    var paletteName = d[0].title;
    var paletteMaker = d[0].userName;
    makePaletteHeader(paletteName, paletteMaker)
    colorTheH1(colors);
    for (var i = 0; i < colors.length; i++) {
      makeColorEl(colors[i]);
    }
  });
});
