window.onload = function() {
  console.log('marvel CRUD');

//get all the elements
var div = document.querySelector('#box');
var searchButton = document.querySelector('#searchbutton');
var search = document.querySelector('#searchbox');
var newdiv = document.querySelector('#newdiv');
var addFavesBtn = document.getElementById('add-faves-btn');


// hide upon load:
  // newdiv.style.display = 'none';

  /* Submit 'find marvel character' button */
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

      // Save data to the backend
        // var result = ''; reading not define in console, created an empty var (spaghetti code much)
        var saveData = {
          name: result.name.toUpperCase(),
          id: result.id,
          description: result.description,
          thumbnail: {path: result.thumbnail.path, extension: result.thumbnail.extension }
        };

          // appending API info to the DOM
          var html = '';
          if (chosenEndPoint === 'characters') {
            for (var i = 0; i < response.data.results.length; i++) {
              var character = response.data.results[i];
              html += '<h3>' + character.name + '</h3>';
              html += '<p>id: ' + character.id + '</p>';
              html += '<img src="'+character.thumbnail.path + '.' + character.thumbnail.extension + '">';
              html += '<p>' + character.description + '</p>';
              html += "<button id='" + id +"'  type='button' name='button'>Add to Favorites</button>"  + '<br>';
              html += "<button id='" + id +"'  type='button' name='button'>Delete</button>"  + '<br>';
            }
            html += response.attributionHTML;
          } else if (chosenEndPoint === 'comics') {
            for (var y = 0; y < response.data.results.length; y++) {
              var comic = response.data.results[y];
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

    /* 'delete' button */
    document.getElementById('delete-button').addEventListener('click', function() {
      var deleteName = document.getElementById('delete-name').value.toLowerCase();
      console.log("deleting: ", deleteName);
      var deleteData = {
        name: deleteName
      };
      $.ajax({
        url: url + '/favorites/' + deleteName,
        dataType: 'json',
        data: data,
        method: 'delete'
      }).done(function(response){
        console.log(deleteName + " has been deleted.");
        console.log(response);
      }); // end ajax
    }); // end delete button

    /* 'update' button */
     document.getElementById('update-button').addEventListener('click', function() {
       var nameToUpdate = document.getElementById('update-name').value.toLowerCase();
       var newName = document.getElementById('new-update-name').value.toLowerCase();
       var data = {
         name: nameToUpdate,
         newName: newName
       };
       $.ajax({
         url: url + '/favorites/' + nameToUpdate,
         dataType: 'json',
         method: 'put',
         data: data
       }).done(function(response){
         console.log(response);
       }); // end ajax

     }); // end update button


}; //end window onload
