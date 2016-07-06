document.addEventListener('DOMContentLoaded', function functionName() {
  console.log("hello");
});

function Animal(breed) {
this.breed = breed;
}

var doggo = new Animal("german shepard");
console.log(doggo.bread);
console.log(doggo.constructor);
doggo.bark = function() {
  console.log("bark!");
}

console.log(doggo.bark());
