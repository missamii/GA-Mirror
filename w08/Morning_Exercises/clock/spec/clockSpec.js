console.log('running tests!');
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const clock = require('../clock.js');
jasmine.loadConfigFile('./spec/support/jasmine.json');

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed!');
    }
    else {
        console.log('At least one spec has failed. Back to work!');
    }
});

describe("Clock.js must", () => {
  it("successfully export a value", () => {
    expect(clock).toBeDefined();
  });

  it("successfully export a function", () => {
    expect(typeof clock).toEqual('function');
  });
});

describe("The clock function", () => {
  let randomClock;
  beforeEach(() => {
    const hr = Math.floor(Math.random() * 11) + 1;
    const min = Math.floor(Math.random() * 59);
    randomClock = clock(hr, min);
  });

  it("should return 'out of range' if hour argument is less than 1", () => { expect(clock(0,55)).toEqual('out of range'); });

  it("should return 'out of range' if hour argument is greater than 12",() => { expect(clock(13,11)).toEqual('out of range'); });

  it("should return 'out of range' if minute argument is greater than 59",() => { expect(clock(11,66)).toEqual('out of range'); });

  it("should return 'out of range' if minute argument is less than 0",() => { expect(clock(5,-5)).toEqual('out of range'); });

  it('should return an array with two items in it', () => {
    expect(typeof randomClock).toEqual('object');
    expect(Array.isArray(randomClock)).toBe(true);
    expect(randomClock.length).toEqual(2);
  });

  it('should return an array of length 2 whose items are both numbers', () => {
    expect(randomClock.filter(a => typeof a === 'number').length).toEqual(2);
  });

  it('should return two angles that add up to 360 degrees', () => {
    expect(randomClock.reduce((a,b) => a + b, 0)).toEqual(360);
  });

  it('should not return a negative angle!', () => {
    expect(clock(1,55)).toEqual([ 272.5, 87.5 ]);
  })

  it('should successfully return the correct answers for all of the following times from the markdown: 6:00, 12:00, 12:15, 9:45, and 1:59', () => {
    const times = [[6,00],[12,00],[12,15],[9,45],[1,59]];
    const answers = [[180,180],[360,0],[82.5, 277.5],[22.5, 337.5],[294.5,65.5]];

    times.forEach((t,i) => { expect(clock(t[0],t[1])).toContain(answers[i][0]);
    expect(clock(t[0],t[1])).toContain(answers[i][1]);
    });
  });
});

jasmine.execute();
