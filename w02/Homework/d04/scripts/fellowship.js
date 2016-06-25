
// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];
function makeMiddleEarth() {
    var middleEarth = document.getElement("section");
    section.setAttribute('id','middle-earth'); // create a section tag with an id of middle-earth
    for (var i = 0; i < lands.length; i++); {
      var article = document.createElement('article');
      var h1 = document.createElement('h1');
      var name = document.createTextNode(lands[i]);
      console.log(lands[i]);
      h1.appendChild(name);
      article.setAttribute('class,'lands[i].toLowerCase().replace(' ','-'));
      console.log(article);
      article.appendChild(h1);
      middleEarth.appendChild(article);
    }
    body.appendChild(middleEarth);
    // add each land as an article tag (add them one by one in a loop)
    // inside each article tag include an h1 with the name of the land
    // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
    // append middle-earth to your document body
}
// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
function makeHobbits() {
  var ul = document.createElement('ul');
  var shire = document.querySelector('article.the-shire');
  shire.appendChild(ul)
  for (var i = 0; i < hobbits.length; i++) {
    var li = document.createElement('li');
    li.innerText = hobbits[i];
    var hobbit = document.createTextNode(hobbit[i]);
    li.appendChild.(hobbit);
    ul.appendChild(li);
  }
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // each hobbit should be a list item, with text showing their name
  // give each hobbit a class of hobbit
}
}
// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
}

// An example of using query selector
var body = document.querySelector('body');
