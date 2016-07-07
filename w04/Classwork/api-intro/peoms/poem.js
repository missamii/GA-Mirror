document.addEventListener("DOMContentLoaded", function(event) {
  //  console.log("Hello");

 document.getElementById("poem").addEventListener("click", newFunc);
 function newFunc() {
     document.getElementById("poem").innerHTML = "Hello";
 }

 var api = 'http://shakeitspeare.com/';
 var query = api + poem;
 console.log('api');

 $.ajax({
   url: 'http://shakeitspeare.com/api/sentence'
 }).done(function(response) {
       console.log(response);
       });
});
