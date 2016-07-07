window.onload = function() {
  console.log("loaded");

  // sentence button
  document.getElementById('sentence').addEventListener('click', function(ev) {
    ev.preventDefault();

    $.ajax({
      url: 'http://ShakeItSpeare.com/api/sentence'
    }).done(function(response){
      console.log(response.sentence);
      document.getElementById('sentence-span').innerHTML = response.sentence;
    });

  }); // end sentence btn click

  // poem button
  document.getElementById('poem').addEventListener('click', function(ev) {
    ev.preventDefault();

    var linesInputEl = document.getElementById('poem-lines');
    var howManyLines = linesInputEl.value;

    var endpoint = 'http://ShakeItSpeare.com/api/poem';
    var url = endpoint + '?lines=' + howManyLines;

    console.log(url);

    $.ajax({
      url: url
    }).done(function(response){
      console.log(response.poem);
      document.getElementById('poem-span').innerHTML = response.poem;
    });

  }); // end poem btn click

}; // end window load
