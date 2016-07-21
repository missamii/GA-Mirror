document.addEventListener("DOMContentLoaded", function(){
  console.log('Dom Loaded');
  /*
  $.get('http://localhost:3000/', function(responseFromServer){
    console.log(responseFromServer);
  });
  */
  var list = document.getElementById('list');
  var name = document.getElementById('textbox').value;
  var contact = {};
  var button = document.getElementById('button').addEventListener('click', function() {
    console.log('button press');
    contact['name'] = name;
    console.log(contact);
    $.post('http://localhost:3000/', contact, function(responseFromServer){
      console.log(responseFromServer);
      for (var i = 0; i < responseFromServer.contacts.length; i++) {
        list.innerText = responseFromServer.contacts[i].names
      }
    }); // empty fucntion tag
  }); // responseFromServer function tag
}); // ends DOM
