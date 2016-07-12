document.addEventListener("DOMContentLoaded", function(){
  /*
  $.get('http://localhost:3000/', function(responseFromServer){
    console.log(responseFromServer);
  });
  */
  var name = prompt('enter a name');
  var contact = {};
  contact['name'] = name;
  console.log(contact);
  $.post('http://localhost:3000/', contact, function(responseFromServer){
    console.log(responseFromServer);
  });
});
