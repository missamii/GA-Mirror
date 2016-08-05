// Tiffany's clock testing
//
//
// expect(myclock)toBeDefined();
//
const clock = (hr, min) => {
  let clockHandles = [];

  if (hr > 12 || hr < 1 || min > 59 || min < 0) {
  return "out of range";
  }
let handOne = Math.abs(30 * ((hr) - (min/5)) + (min/2));
clockHandles.push(handOne);
let handTwo = 360 - handOne;
clockHandles.push(handTwo);

return clockHandles;
};

module.exports = clock;
