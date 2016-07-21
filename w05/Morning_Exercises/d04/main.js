var primeNum = [];
var notPrime = [];

function eratosthenes(n) {
  for (var i = 2; i < n; i++) {
      primeNum.push(i);
      primeNum.push('P');
    }
  }
}
eratosthenes(20)
console.log(primeNum);
