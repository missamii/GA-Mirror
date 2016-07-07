# W04 D01 Morning Exercises!

I know some of you have been stressed by morning exercises -- it's hard to come up with, say, "write a function to do X" right on the spot.

But it doesn't have to be scary! Let's work through how we might solve one such problem.

### Assignment:
Write a function that takes one parameter, a string, and returns `true` if that string is a palindrome (like "aya") or `false` if it's not ("ethan"). *While it is possible to do so by converting the string to an array (and this might be the quickest method), at least one solution must answer the question without converting it into an array*.

OK, so start off by making sure you get what a palindrome is: a string that reads the same forwards and backwards.
"Able was I ere I saw elba"
"A man, a plan, a canal: Panama"
"aaabbbaaa"

My first step would then be to think in my head "how might I solve this problem if I just had pen and paper to do so, no computer". I can think of two ways:

1. METHOD 1: compare the first and last letters. If they're the same cross them off. If they're not the same: stop, it's not a palindrome.
So if I were analyzing the string "abcba" I would compare the first and last letters: they're both *a*. I'd then cross them off:
  ~~a~~bcb~~a~~

  I would then repeat with the 2nd letter and the 2nd-to-last letter:

  ~~ab~~c~~ba~~

  and so on. If I get to where there's either 1 letter left in the center or no letters left uncrossed, then my string is a palindrome!

2. METHOD 2: I would write out my string and then underneath it I would start copying the letters in reverse order. When I'm done if the two strings are the same, it's a palindrome. Example with the string "ethan" I would write it out:

  "ethan" and then write it out in reverse underneath:

  "nahte"

  Since they're not the same, "ethan" is clearly not a palindrome!

By thinking through what you would do yourself, without a computer, to solve a problem, you've done 90% of the work. The rest is then just translating the hard work of thinking into code.

Let's do that now! Try to implement your own implementation of Method 1 above:

```js
function isThisAPalindrome(str) {
  // your code goes here

}
```

My next step would be to test it out and see if it works. If it does, I would start thinking about how I could break it (make it fail). I can already see some problems:
  * what if the string has upper- and lower-case letters?
  * what if the string has spaces?

So I'd then rework my solution to make it more robust.

```js
function isThisAPalindrome(str) {
  // code here -- this function should ignore
  // capitalization and spaces.
}
```

If you got the above, try to implement Method 2

```js
function palindromeTwo(str) {
  //make a variable to hold our reversed version of str
  var revStr = "";
  //now loop over str in REVERSE order
  for (var i = str.length - 1; i >= 0; i--) {
    //add each character to revStr;
    revStr += str[i];
  }
  // return the result of comparing the two strings.
  return str === revStr;
}
```

I would now test it out. If it works, I would make it more robust just like I did to our method 1 solution, controlling for capitalization and spacing, by adding in the same second line of code:
```js
str = str.toLowerCase().replace(' ','');
```

Finally, I would try implementing the array method the assignment mentioned would be the quickest. This is the most abstract method, so I'd tackle it last. It takes advantage of the fact that arrays (but not strings) have a 'reverse' method in JavaScript.
```js
function palindromeThree(str) {
  //same line of code to deal with capital letters & spaces
  str = str.toLowerCase().replace(' ','');

  // you could do this in multiple steps. I'm going to do it in one line
  // (a) split into array of individual characters; (b) reverse the array; (c) join back into a string
  var revStr = str.split('').reverse().join('');

  // same line of code as in method 2
  return str === revStr;
}
```

#### Crazy example of why shorter code isn't always better code.
You could implement the above method in a single-line of code. But yuck!

```js
function shorterPalindromeMethod(str) {
  return str.toLowerCase().replace(' ','') === str.toLowerCase().replace(' ','').split('').reverse().join('');
}
```

#### BONUS
How would you deal with punctuation?
E.g., "A man, a plan, a canal: Panama." should return `true` when passed into any of your palindrome functions.
