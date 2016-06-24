console.log("W01D04 -- fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');

  function makeMiddleEarth() {
      // create a section tag with an id of middle-earth
      var middleEarth = document.createElement('section');
      middleEarth.setAttribute('id','middle-earth');
      // middleEarth.id = "middle-earth"
      for (var i = 0; i < lands.length; i++) {
        var article = document.createElement('article');
        var h1 = document.createElement('h1');
        var name = document.createTextNode(lands[i]);
        // console.log(lands[i]);
        h1.appendChild(name);
        article.setAttribute('class',lands[i].toLowerCase().replace(' ','-'));
        // console.log(article);
        // debugger;
        article.appendChild(h1);
        middleEarth.appendChild(article);
      }
      body.appendChild(middleEarth);

      // add each land as an article tag (add them one by one in a loop)
      // inside each article tag include an h1 with the name of the land
      // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
      // append middle-earth to your document body
  }
  makeMiddleEarth();

  function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    var ul = document.createElement('ul');
    // var shire = document.querySelector('article.the-shire');
    var shire = document.querySelector('.the-shire');
    // var shire = document.getElementsByClassName('the-shire')[0]
    // var shire = document.querySelectorAll('.the-shire')[0];
    // var shire = document.querySelector('#middle-earth').children[0]
    // each hobbit should be a list item, with text showing their name
    // give each hobbit a class of hobbit
    shire.appendChild(ul);
    for (var i = 0; i < hobbits.length; i++) {
      var li = document.createElement('li');
      // li.innerText = hobbits[i];
      var hobbit = document.createTextNode(hobbits[i]);
      li.appendChild(hobbit);
      li.classList.add('hobbit');
      ul.appendChild(li);
    }
  }
  makeHobbits();
});
