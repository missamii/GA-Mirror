window.onload = function() {
  console.log('HULK SMASH!');

  // Get the elements:
  var searchBox = document.getElementById('search-box');
  var searchBoxDiv = document.getElementById('search-box-div');
  var searchBtn = document.getElementById('search-btn');
  var charsInfoContainer = document.getElementById('info-container-characters');
  var comicsInfoContainer = document.getElementById('info-container-comics');
  var addToFavesBtn = document.getElementById('add-to-faves-btn');
  var nameAddToFaves = '';

  // hide these upon load:
  charsInfoContainer.style.display = 'none';
  comicsInfoContainer.style.display = 'none';
  addToFavesBtn.style.display = 'none';

  // URL to our BE:
  var url = 'http://localhost:3000';

  // marvel search btn click fxn:
  searchBtn.addEventListener('click', function(ev) {
    // prevent default action of a submit button (refresh pg)
    ev.preventDefault();

    // get the chosen endpoint from the dropdown & input val:
    var chosenEndpoint = document.getElementById('search-endpoint').value;
    var charOrTitleSearch = searchBox.value;

    // get chosen endpoint & search val
    if (charOrTitleSearch == '') { // make sure input isn't empty
      alert('But what should hulk search for?');
    } else if ( chosenEndpoint == 'comics' ) {
      var queryString = '&title=' + charOrTitleSearch;
    } else if (chosenEndpoint == 'characters') {
      var queryString = '&name=' + charOrTitleSearch;
    }
    //************************
    //* Instead of making an ajax call directly to Marvel, we make it to our BE & send the data we need - the chosen endpoint & search val. The BE has the capability to retrieve our secret key, which it does before it makes the API call to Marvel with the user's endpoint & search val. *//
    //************************

    // *** send data to our BE (we can't send data via GET so we must use POST) *** //
    var data = {
      endPoint: chosenEndpoint,
      queryString: queryString
    };
    $.ajax({
      url: url + '/marvel/search',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log( "response:", response );
    }); // end ajax

    /* Note: jQ AJAX automatically parses JSON for you */

  }); // end search btn


  // The rest is the same as the original marvel lab solution //

}; // end window onload fxn
