function eratosthenes(n) {
  var primes = [];  // initialize blank array

  for (var i = 0; i < n; i ++) {
    primes.push("P"); //fill the array
  }

  primes[0] = "N"; // 0 and 1 are not prime numbers
  primes[1] = "N";

  //here's the heart of the algorithm
  //loop over all the numbers in the nums array. Can start at 2 since we know 0 and 1 aren't prime
  //can stop at square root of n (why?)
  for (var i = 2; i <= Math.sqrt(n); i++) {

  // if current iterator is a prime number THEN
  // loop over all the multiples of that number (by setting the iterator increment to j += i)
  // and if they're marked as "P" change them to N
  // can start the looping at the first multiple of i, which is i * 2
    if (primes[i] === "P") {
      for (var j = i * 2; j < n; j += i) {
        if (primes[j] === "P") {
          primes[j] = "N";
        }
      }
    }
  }

// display the results
  console.log("The prime numbers between 1 and " + n + " are: (drumroll please) ...");
  for (var i = 0; i < n; i++) {
    if (primes[i] === "P") {
      console.log(i);
    }
  }
}

eratosthenes(1000);
