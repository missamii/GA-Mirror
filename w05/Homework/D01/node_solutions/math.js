var geometry = require('./geometry.js');
var shape = process.argv[2];

switch (shape) {
  case "circle":
    console.log('area of circle is', geometry.circle(process.argv[3]));
    break;
  case "square":
    console.log('area of square is', geometry.square(process.argv[3]));
    break;
  case "rectangle":
    console.log('area of rectangle is', geometry.rectangle(process.argv[3], process.argv[4]));
    break;
  default:
    console.log('not a valid shape');
}
