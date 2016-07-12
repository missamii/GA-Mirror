document.addEventListener("DOMContentLoaded", function(){
  $.get('http://localhost:3000/', function(res){
    console.log("hey");
    console.log(res);
  });
});
