document.addEventListener("DOMContentLoaded", function(){
  console.log("here");
  var contact = { name: "syed" };
  $.post('http://localhost:3000/', contact ,function(res){
    console.log(res);
  });
});
