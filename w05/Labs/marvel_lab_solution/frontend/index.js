window.onload = function() {
  console.log('HULK SMASH!');

  // ***************** part 1: Marvel API ***************** //

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

  // search btn click fxn:
  searchBtn.addEventListener('click', function(ev) {
    // prevent default action of a submit button (refresh pg)
    ev.preventDefault();

    // get the chosen endpoint from the dropdown & input val:
    var chosenEndpoint = document.getElementById('search-endpoint').value;
    var charOrTitleSearch = searchBox.value;

    console.log('chosenEndpoint: ', chosenEndpoint);
    console.log('charOrTitleSearch: ', charOrTitleSearch);

    // make sure input isn't empty
    if (charOrTitleSearch == '') {
      alert('But what should hulk search for?');
    } else if ( chosenEndpoint == 'comics' ) {
      var queryString = '&title=' + charOrTitleSearch;
    } else if (chosenEndpoint == 'characters') {
      var queryString = '&name=' + charOrTitleSearch;
    }

    // Construct the query:
    var endPointUrl = "http://gateway.marvel.com:80/v1/public/" + chosenEndpoint;
    var apiPublicKeyQuery = "?apikey=" + MARVEL_PUBLIC_API_KEY;
    var fullQuery = endPointUrl + apiPublicKeyQuery + queryString;

    console.log("fullQuery: ",  fullQuery);

    // build the AJAX request:
    $.ajax({
      url: fullQuery
    }).done(function(response){
      console.log("Success response: ", response);

      var resultsArr = response.data.results[0];

      // if characters:
      if (chosenEndpoint == 'characters') {
        // show the container:
        charsInfoContainer.style.display = 'block';

        // get the elements:
        var nameEl = document.getElementById('char-name');
        var charIdEl = document.getElementById('char-id');
        var descriptionEl = document.getElementById('char-description');
        var thumbEl = document.getElementById('char-thumb');

        // append the info:
        nameEl.innerHTML = resultsArr.name;
        charIdEl.innerHTML = resultsArr.id;
        descriptionEl.innerHTML = resultsArr.description;
        thumbEl.innerHTML = '<img class="picture" src="' + resultsArr.thumbnail.path + '.' + resultsArr.thumbnail.extension + '"/>';

        // in case they want to add to faves:
        nameAddToFaves = resultsArr.name.toLowerCase();
        console.log("nameAddToFaves:", nameAddToFaves);
      }

      // if comics:
      if (chosenEndpoint == 'comics') {
        // show the container:
        comicsInfoContainer.style.display = 'block';

        // get the elements:
        var count = document.getElementById('comic-count');
        var title = document.getElementById('comic-title');
        var id = document.getElementById('comic-id');
        var description = document.getElementById('comic-description');
        var pageCount = document.getElementById('comic-page-count');
        var price = document.getElementById('comic-price');
        var thumb = document.getElementById('comic-thumb');

        // append info:
        count.innerHTML = response.data.count;
        title.innerHTML = resultsArr.title;
        id.innerHTML = resultsArr.id;
        description.innerHTML = resultsArr.description;
        pageCount.innerHTML = resultsArr.pageCount;
        price.innerHTML = resultsArr.prices[0].price;
        thumb.innerHTML = '<img class="picture" src="' + resultsArr.thumbnail.path + '.' + resultsArr.thumbnail.extension + '"/>';

        // in case they want to add to faves:
        nameAddToFaves = resultsArr.title.toLowerCase();
        console.log("nameAddToFaves:", nameAddToFaves);
      }
      addToFavesBtn.style.display = 'initial';
    }).fail(function(response){
      console.log("Fail response: ", response);
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    }) // end AJAX fxn

  }); // end search btn click fxn

  document.getElementById('add-to-faves-btn').addEventListener('click', function() {
    console.log('faves btn clicked');

    var data = {
      name: nameAddToFaves
    };
    // post:
    $.ajax({
      url: url + '/favorites/new',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log( "response: ", response );
    }); // end post
  }); // end add to faves btn


  // ***************** part 2: query our BE/DB ***************** //


  // get the elements:
  var allDiv = document.getElementById('all-div');
  var addDiv = document.getElementById('add-div');
  var findDiv = document.getElementById('find-div');
  var deleteDiv = document.getElementById('delete-div');
  var updateDiv = document.getElementById('update-div');

  // hide upon load:
  allDiv.style.display = 'none';
  addDiv.style.display = 'none';
  findDiv.style.display = 'none';
  deleteDiv.style.display = 'none';
  updateDiv.style.display = 'none';

  // the URL of our backend to use in our AJAX calls:
  var url = 'http://localhost:3000';

  /* Go! button */
  document.getElementById('go-button').addEventListener('click', function(){
    // get val of radios:
    var chosenRadio = document.querySelector('.faves-radios:checked');
    if (chosenRadio.value == 'see-all') { // see all
      // show the el
      allDiv.style.display = 'block';
      // get all
      $.ajax({
        url: url + '/favorites',
        dataType: 'json'
      }).done(function(response){
        console.log("response: ", response);

        /* Loop & append to DOM: */
        var favesList = document.getElementById('faves-list');
        // remove existing li's first
        favesList.innerHTML = '';
        for (var i = 0; i < response.length; i++) {
          var liText = response[i].name;
          var theLi = document.createElement('li');
          theLi.appendChild(document.createTextNode(liText));
          favesList.appendChild(theLi);
        }
      });
    } else if (chosenRadio.value == 'add-new') { // add new
      // show add new inputs
      addDiv.style.display = 'block';

      // hide the rest
      findDiv.style.display = 'none';
      deleteDiv.style.display = 'none';
      updateDiv.style.display = 'none';
      allDiv.style.display = 'none';

    } else if (chosenRadio.value == 'find-by-name') { // find
      // show find name input
      findDiv.style.display = 'block';

      // hide the rest
      addDiv.style.display = 'none';
      deleteDiv.style.display = 'none';
      updateDiv.style.display = 'none';
      allDiv.style.display = 'none';

    } else if(chosenRadio.value == 'delete-by-name') { // delete
      // show delete name input
      deleteDiv.style.display = 'block';

      // hide the rest
      addDiv.style.display = 'none';
      findDiv.style.display = 'none';
      updateDiv.style.display = 'none';
      allDiv.style.display = 'none';

    } else if(chosenRadio.value == 'update-by-name') { // update
      // show update name input
      updateDiv.style.display = 'block';

      // hide the rest
      addDiv.style.display = 'none';
      findDiv.style.display = 'none';
      deleteDiv.style.display = 'none';
      allDiv.style.display = 'none';
    }
  }); // end submit btn fxn

  /* 'add new' button */
  document.getElementById('add-button').addEventListener('click', function() {
    var newName = document.getElementById('add-new-name').value.toLowerCase();

    var data = {
      name: newName
    };
    // post:
    $.ajax({
      url: url + '/favorites/new',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log( "response: ", response );
    }); // end AJAX
  }); // end Add Button listener

  /* 'find' button */
  document.getElementById('find-button').addEventListener('click', function() {
    var searchName = document.getElementById('find-name').value.toLowerCase();
    console.log("finding: ", searchName);
    var data = {
      name: searchName
    };
    $.ajax({
      url: url + '/favorites/' + searchName,
      method: 'get',
      data: data,
      dataType: 'json'
    }).done(function(response){
      if (response.length){
        console.log(response);
      } else {
        console.log("none found");
      }
    }); // end ajax
  }); // end search name button listener

  /* 'delete' button */
  document.getElementById('delete-button').addEventListener('click', function() {
    var deleteName = document.getElementById('delete-name').value.toLowerCase();
    console.log("deleting: ", deleteName);
    var data = {
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
    }
    $.ajax({
      url: url + '/favorites/' + nameToUpdate,
      dataType: 'json',
      method: 'put',
      data: data
    }).done(function(response){
      console.log(response);
    }); // end ajax

  }); // end update button


}; // end window onload fxn
















//
