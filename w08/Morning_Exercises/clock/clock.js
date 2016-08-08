/*
Your code goes here.

Your 'clock' function must return 'out of range' if a an invalid hour or minute value is entered.

Otherwise it must return an array with two angles in it, representing the two angles formed on the clock face by the hour and minute hands.

TO TEST:
1. first run 'npm install' and also 'npm install -g jasmine' to install jasmine globally (and locally)
2. from the root of this project, run `jasmine spec/clockSpec.js` to run the tests. Look at the results! Fix failing tests and keep going....

*/
const clock = (hr, min) => {
  if (hr < 1 || hr > 12 || min < 0 || min > 59) {
    return 'out of range';
  }

  const minPos = (min / 5) * 30;
  const hrPos = ((min / 60) + hr) * 30;

  const angleOne = Math.abs(hrPos - minPos);
  const angleTwo = 360 - angleOne;
  return [angleOne, angleTwo];
};

module.exports = clock;
