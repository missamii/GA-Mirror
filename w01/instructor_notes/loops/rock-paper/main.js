var random_choice  = Math.ceil(Math.random()*4);
var user_choice = prompt("enter a r, p, or s");

if(random_choice === 1){
  random_choice = "r";
} else if(random_choice === 2){
  random_choice = "p";
} else {
  random_choice = "s";
}

if(random_choice === user_choice){
  alert("tie");
}
