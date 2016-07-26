window.onload = function() {

//get all the elements
var div = document.querySelector('#box');
var searchButton = document.querySelector('#searchbutton');
var search = document.querySelector('#searchbox');
var newdiv = document.querySelector('#newdiv');

// hide upon load:
  // newdiv.style.display = 'none';

  /* Submit button */
  searchButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log(search.value);

    var drop = document.querySelector('#dropbox');
    console.log(drop);
    var searchValue = search.value;
    var chosenEndPoint = drop.value;
    console.log(chosenEndPoint);
    var queryStr = '';
    if (chosenEndPoint === 'characters') {
      queryStr = '?name=';
    } else if (chosenEndPoint === 'comics') {
      queryStr = '?title=';
    }
    queryStr += searchValue;
    console.log(queryStr);
    var endPoint = 'http://gateway.marvel.com:80/v1/public/' + chosenEndPoint;
    var marvelApiKey = '&apikey=' + MARVEL_PUBLIC_API_KEY;
    var url = endPoint + queryStr + marvelApiKey;
    console.log(url);

      //ajax stuff
        $.ajax({
          url: url,
          dataType: 'json'
        }).done(function(response){
          console.log("response: ", response);
          // appending API info to the DOM
          var html = '';
          if (chosenEndPoint === 'characters') {
            for (var c = 0; c < response.data.results.length; c++) {
              var character = response.data.results[c];
              html += '<h3>' + character.name + '</h3>';
              html += '<p>id: ' + character.id + '</p>';
              html += '<img src="'+character.thumbnail.path + '.' + character.thumbnail.extension + '">';
              html += '<p>' + character.description + '</p>';
            }
            html += response.attributionHTML;
          } else if (chosenEndPoint === 'comics') {
            for (var i = 0; i < response.data.results.length; i++) {
              var comic = response.data.results[i];
              html += '<h3>' + comic.title + '</h3>';
              html += '<p>id: ' + comic.id + '</p>';
              html += '<p>page count: ' + comic.pageCount + '</p>';
              html += '<p>price: $' + comic.prices[0].price + '</p>';
              html += '<img src="'+comic.thumbnail.path + '.' + comic.thumbnail.extension + '">';
              html += '<p>' + comic.description + '</p>';
            }
            html += response.attributionHTML;
          }
          document.querySelector('#newdiv').innerHTML = html;
        });
      });
};
