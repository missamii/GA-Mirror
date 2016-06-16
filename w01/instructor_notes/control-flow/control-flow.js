secret = 7;
// fixed ( ͡° ͜ʖ ͡°)
guess = parseInt(prompt('guess a number between 1 and 10')); //convert string to number

if(secret === guess){ // is secretNum equal to guess
  alert('you won! nice work!');
} else if( secret != guess ) { // same as above but
  alert('try harder next time!');
} else {
  alert('whooops');
}
