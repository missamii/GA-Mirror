window.onload = function() {

  console.log('everything is awesome.');


  // click fxn
  document.getElementById('submit-btn').addEventListener('click', function(ev) {
    var apiInputBox = document.getElementById('api-input');
    var userChosenMovie = apiInputBox.value;

    // prevent default of clicking the submit button (reload page)
    ev.preventDefault();

    console.log("userChosenMovie:", userChosenMovie);

    var endpoint = 'http://www.omdbapi.com/?t=';
    var query = endpoint + userChosenMovie;
    console.log("query: ", query);

    $.ajax({
      url: query
    }).done(function(response) {
      console.log(response);
      // get the properties we want:
      var title = response.Title;
      var year = response.Year;
      var posterURL = response.Poster;
      var textBox = response.Box
      var aTextBox = response.Atextbox

      // get the elements:
      var titleEl = document.getElementById('title');
      var yearEl = document.getElementById('year');
      var posterEl = document.getElementById('poster');
      var textBoxEl = document.getElementsById('textbox')
      var aTextBoxEl = document.getElementById('atextbox')

      // append the data
      titleEl.innerHTML = title;
      yearEl.innerHTML = year;
      posterEl.innerHTML = '<img class="picture" src="' + posterURL + '"/>';
    }).fail(function(response) {
      console.log('uh oh it failed.');
      console.log(response);
    }).always(function(response) {
      console.log("this code runs no matter what happens.");
    });

  }) // end click fxn

} // end window loaded






//
