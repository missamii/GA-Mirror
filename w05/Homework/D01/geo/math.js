var mathmatics = require('./geometry.js');

console.log('im mathmatice!!!', mathmatics);

  if (process.argv[2] === 'circle') {
    console.log("Answer!!!: ", mathmatics.circle(process.argv[3]));
  }
    else(process.argv[3] === 'rectangle')
    console.log("Answer!!!: ", mathmatics.rectangle(process.argv[3]));
  }
    else if (process.argv[1] === 'square') {
      console.log("Answer!!!: ", mathmatics.square(process.argv[3]));

    }
