# W05D04: The Sieve of Eratosthenes

You're going to write a program that finds all the prime numbers between 1 and *n* (where *n* is chosen by the user), and logs them to the console. (As a reminder: a prime number is a positive integer that has no divisors except itself and 1: so 2, 3, 5, 7, 11, etc. 1 is not a prime number by definition. 2 is the only even prime number.) So it should look something like this:
```js
function eratosthenes(n) {
  //code goes here
}

eratosthenes(20) //output is [2, 3, 5, 7, 11, 13, 17, 19]
```

[Eratosthenes](https://en.wikipedia.org/wiki/Eratosthenes) was an ancient Greek mathematician who developed an elegant algorithm for finding prime numbers that we're going to use. Here's how it works:

Let's say we want all the primes between 1 and 50. Let's write them out:

1  2  3  4  5  6  7  8  9  10

11 12 13 14 15 16 17 18 19 20

21 22 23 24 25 26 27 28 29 30

31 32 33 34 35 36 37 38 39 40

41 42 43 44 45 46 47 48 49 50

The way the Sieve works is by assuming all the numbers are prime, and successively eliminating non-primes. The first thing we can do is strike 1 off the list, since 1 is not a prime number by definition:

~~1~~  2  3  4  5  6  7  8  9  10


11 12 13 14 15 16 17 18 19 20


21 22 23 24 25 26 27 28 29 30


31 32 33 34 35 36 37 38 39 40


41 42 43 44 45 46 47 48 49 50

The next number is 2. We know that every multiple of 2 in our list (in our function, it will be an array) can't be prime. (Remember, prime numbers can't be divided by any other numbers other than 1 and themselves. Any multiple of 2 is divisible by 2 as well, so it can't be prime.) So let's strike those from the list too (but not the number 2 itself!):

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  9  ~~10~~


11 ~~12~~ 13 ~~14~~ 15 ~~16~~ 17 ~~18~~ 19 ~~20~~


21 ~~22~~ 23 ~~24~~ 25 ~~26~~ 27 ~~28~~ 29 ~~30~~


31 ~~32~~ 33 ~~34~~ 35 ~~36~~ 37 ~~38~~ 39 ~~40~~


41 ~~42~~ 43 ~~44~~ 45 ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number is 3. Again, all multiples of 3 can't be prime. Let's strike all the multiples that haven't already been eliminated (e.g., 6 is a multiple of 3 but was eliminated in the prior step).

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ 25 ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ 35 ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number in our list is 5. So again, strike out all the multiples of 5 (that haven't already been struck out):

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ ~~25~~ ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ ~~35~~ ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ 49 ~~50~~

The next non-eliminated number is 7; repeat the process.

~~1~~  2  3  ~~4~~  5  ~~6~~  7  ~~8~~  ~~9~~  ~~10~~


11 ~~12~~ 13 ~~14~~ ~~15~~ ~~16~~ 17 ~~18~~ 19 ~~20~~


~~21~~ ~~22~~ 23 ~~24~~ ~~25~~ ~~26~~ ~~27~~ ~~28~~ 29 ~~30~~


31 ~~32~~ ~~33~~ ~~34~~ ~~35~~ ~~36~~ 37 ~~38~~ ~~39~~ ~~40~~


41 ~~42~~ 43 ~~44~~ ~~45~~ ~~46~~ 47 ~~48~~ ~~49~~ ~~50~~

The next number left in our list is 11, but all multiples of 11 less than 50 have already been crossed off (check for yourself above). Same thing with the number after that, 13 and 17, 19, and 23, the numbers after that. The next non-eliminated number after 23 is 29, but we can stop here. Why? Because the first multiple of 29, 29*2, is 58, which is greater than 50. So we can stop, and see what numbers haven't been crossed off yet: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, and 47: voila! all the prime numbers less than 50!

If the above is unclear, the wikipedia page for Eratosthenes (link above), has a nice animation of how the sieve works.

Here's the general outline of how to go about it:

```js
function eratosthenes(n) {
  //you're going to start by creating two arrays, one to hold the numbers from 0 to n, and the second array to hold
  //the prime "status" of each of those numbers. So if n = 8, the first array would look like this:
  //[0,1,2,3,4,5,6,7,8] and the second one like this:
  //["P","P","P","P","P","P","P","P"] (because remember, we assume all numbers are prime, "P", until proven otherwise)
  //Create your arrays and fill them below. You'll need to iterate because you don't know what 'n' is until the user passes it into the function.




  //let's start by taking care of our special cases, 0 and 1, which aren't prime by definition. change your "status"
  //array so that the entries corresponding to 0 and 1 in the numbers array (the first two entries), now read "N" for
  //"non-prime". If you console.log them (a good idea!) after doing this, your arrays should look something like this:
  //[0,1,2,3,4,5,6,7,8]
  //["N","N","P","P","P","P","P","P"]
  //Take care of that below:


  //Now comes the HARD part. I'm going to leave this to you. You'll need to iterate over your numbers array. If the
  //number you reach is still marked as prime, you'll need to then mark all MULTIPLES of that number (but not then
  //number itself) as non-prime in your "prime status array". This is tricky! A second, different iteration perhaps?



  //If you did the last part correctly, you should now be able to iterate over your arrays; if the prime status of a
  //given number is "P", then log that number to the console; otherwise don't log it.
  console.log("The prime numbers between 0 and " + n + "are ");
  //put your final loop here
  //it should log all the primes


}
```

Run `eratosthenes()` for different values of n. Make sure the function correctly logs the primes to the console. Congratulations!

####EXTRA CREDIT
* We don't actually need two arrays; I just suggested doing it that way to make it easier to see what's going on. How would you do it with a single array?
* If you have time think about how you might optimize your function. You probably tested it using relatively small values of n, which take the computer a fraction of a second to process. But what if n were a million? a billion? 10^15? You'd want to make sure your algorithm is as efficient as possible. What could you do to improve it?
