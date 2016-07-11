window.onload = function () {
    // console.log('Pikachu!');

    var button = document.querySelector('.button');
    var input = document.querySelector('input');
    // var info = document.querySelector('.info');
    var attack = document.querySelector('.attack');
    var abilities = document.querySelector('.abilities');
    var pokeName = document.querySelector('.pokename');
    var pokeType = document.querySelector('.poketype');
    var image = document.querySelector('.image');
    var pokeform = document.querySelector('.pokeform');

    button.addEventListener('click', function(event) {
      // console.log(e);
      event.preventDefault();

    var Pokemon = pokeform.value.toLowerCase();
    var endpoint = "http://pokeapi.co/api/v2/pokemon/";
    var url = endpoint + Pokemon;

   //ajax here

     $.ajax( {
       }).done(function(res) {
        console.log(res);
        }
    }
}
 // end DOM tag
