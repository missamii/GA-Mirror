window.onload = function() {
  console.log('color.js is loaded');
var colorButton = document.getElementById('colorbutton').addEventListener('click', function(event) {
  event.preventDefault();
    $.ajax({
      url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback',
      dataType: 'JSONP',
      jsonpCallback: 'callback'
    }).done( function(data) {
      var colorsArr = data[0].colors;
      var colorContainer = document.querySelector('#colorbutton');
      colorContainer.innerHTML = "";
      for (var i = 0; i < colorsArr.length; i++) {
        //add classname to div
        var div = document.createElement("div");
        // create another element, create a text node to the element it will have the hex of decimal color
      var hexColor = document.createElement("div");
        div.appendChild(hexColor);
      var createTextNode = colorsArr[i];
        div.appendChild(hexColor);
        div.classList.add('colors');
      var palette = document.createTextNode(colorsArr[i]);
        hexColor.appendChild(palette);
        div.style.backgroundColor = '#' + colorsArr[i];
        colorContainer.appendChild(div);
        div.style.width = '60px';
        div.style.height = '60px';
      // var div = document.createElement("div");
        div.style.width = '60px';
        div.style.height = '60px';
        div.classList.add('colors');
        colorContainer.appendChild(div);
        div.style.backgroundColor = '#' + colorsArr[i];
          }
    });

    // I'm stuck on this part.
    // here i tried to change the function to be in association with whats going on in the rest of the code. I partially feel this might not be correct, but I wanted to at least make an attempt to complete my hw even if it's incorrect.
    function setTextColor(hexcolor) {
      var r = parseInt(hexcolor.substr(0,2),16); // grabs the first two characters, parses them into Base 16
      var g = parseInt(hexcolor.substr(2,2),16); // ditto for middle two
      var b = parseInt(hexcolor.substr(4,2),16); // ditto for last two
      var yiq = ((r * 299)+(g * 587)+(b * 114)) / 1000; // so, yeah. turns the above into some value for analysis
        return (yiq >= 128) ? 'black' : 'white'; // if yiq > 128 return 'black'; otherwise return 'white'
}
  });
};
