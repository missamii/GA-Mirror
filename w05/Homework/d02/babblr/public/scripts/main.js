window.onload = function() {
  console.log("js is loaded");

var babbls = {};
var showBabbl = document.querySelector('showAll');
showBabbl.addEventListener('click', function(ev){
  console.log('babbls babbls here');
  $.getJSON('http://localhost:3000/', function(res){
    console.log(res);
    res = JSON.parse(res);
    var babbls = res;
    console.log(babbls[0]);


var submitBabbl = document.querySelector('submitBabbl');

submitBabbl.addEventListener('click', function(ev){
  ev.preventDefault();
  console.log('new babbl');



});
