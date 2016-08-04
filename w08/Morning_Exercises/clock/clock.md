## CLOCK HAND ANGLE CALCULATOR
## With BONUS: JASMINE Testing suite!

![clock](https://media.giphy.com/media/26B5FNH5CTL36a5ZS/giphy.gif)

Write a function `clock` that takes two integers, `hour` and `minute`. The function should calculate the two angles in degrees between the **hour hand** and **minute hand** on a twelve-hour analog clock face.

Note that the hour hand has 'drift'. If the time is **6:30**, the hour hand will be halfway through its travel between **6** and **7**. If the time is **9:45**, the hour hand will be three quarters of the way between **9** and **10**.

Return an "out of range" message if an input is greater than the clock's range.


Expected output:

```
clock(6, 00)

=> [180, 180]
```

```
clock(12, 00)

=> [360, 0]
```

```
clock(12, 15)

=> [82.5, 277.5]
```

```
clock(9, 45)

=> [22.5, 337.5]
```

```
clock(1, 59)

=> [294.5, 65.5]
```

```
clock(500, 34)

=> "out of range"

clock(11, 61)

=> "out of range"
```

### BUT DON'T START WRITING YOUR FUNCTION YET!

Let's talk briefly about test-driven development (TDD). Testing is a huge topic in software development. Briefly, TDD is:

1. First, think in depth about what your code needs to do

2. Then, write tests to see if that expected output is generated.

3. ONLY THEN do you write the actual code to pass your tests.

Let's pretend we're writing a program that accesses a high-school student database. It takes in a student's social security number, and returns an array of that student's grades from the last semester: something like `['A', 'B+', 'C', A, 'A-']`.

What would be some tests we might write? Here's one:
* The program should take in a student's SSN. If an invalid SSN is entered (`"000-00-0000"`) the program should return 'invalid social security number'.

What are some others?

### I've used a testing suite called Jasmine to write some tests for our clock problem.

* First, after pulling from our repo, run `npm install` in this directory.
* Also run `npm install -g jasmine` so that you have jasmine globally and can use it from the command line.
* Open up 'clock.js' in your text editor; this is where you'll write your code. Also open up specs/clockSpec.js.
* Before you write anything, try running `jasmine specs/clockSpec.js` from this directory in the command line and viewing the output.
* We'll go over briefly how the Jasmine code works, then you're going to write code in `clock.js` to pass all the tests!
