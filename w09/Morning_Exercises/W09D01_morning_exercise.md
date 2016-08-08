# IGPAY ATLINAY!

Hope everyone had a fun weekend!

Let's do a relatively light-hearted morning exercise today.

Does everyone remember Pig Latin? It's a children's mock language: you convert an English sentence to Pig Latin using the following rules:

1. If the word starts with a consonant, move the consonant to the end. ('liza' => 'izal', 'syed' => 'yeds'). Leave the first letter alone if the word starts with a vowel.

2. Add 'ay' to the end of the word (regardless of whether or not it starts with a vowel). So your instructors' names in Pig Latin are
  * izalay
  * yedsay
  * ethanay

It's tedious to do all that by ourselves! Let's let JavaScript do the hard work. Write a function that takes in a sentence (no punctuation) and returns the pig Latin "translation". So,

```js
pigLatin("we are so excited today");
=> "eway areay osay exciteday odaytay"

pigLatin("I love programming");
=> "Iay ovelay rogrammingpay"
```

```js
const pigLatin = str => {
  // stuffs goes here
};
```
