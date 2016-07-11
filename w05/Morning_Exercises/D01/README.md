# Strings Strings Strings

The goal is to take a complex problem, think through how we'd solve it in the real world, and then duplicate that solution in code.

## Set Up

You've been provided linked `index.html` and `starter.js` files. Open the HTML page in browser, and use the developer tools to test functions you build in JavaScript.

## Completion

Aim to complete the first function! There are plenty of bonuses if you get to it though.

## Assignment

#### AreAnagrams

Checks to see if the two words are anagrams.

```javascript
var areAnagrams = function(wordOne, wordTwo) {

};
```

Example:
```javascript
areAnagrams('team', 'meat'); // true
areAnagrams('mare', 'rare'); // false
areAnagrams('reserve', 'reverse') // true
areAnagrams('ripples', 'slipper') // true
```

## Bonuses

#### Squeeze

Returns a new string where runs of the same character that occur in this set are replaced by a single character.

```javascript
var squeeze = function(string) {

};
```

```javascript
squeeze('yellow moon') // 'yelow mon'
squeeze('   now    is the') // ' now is the'
squeeze('bennett') // 'benet'
```

#### ReplaceChar

Returns a copy of string with `char` replaced by `replacementChar`.

```javascript
var replaceChar(string, char, replacementChar) {

};
```

```javascript
replaceChar('mom', 'm', 'b') // 'bob'
replaceChar('gobble gobble', 'g', 'w') // 'wobble wobble'
replaceChar('bull', 'l', 't') // 'butt'
```
#### StripRight

Returns a copy of string with trailing whitespace removed.

```
var stripRight(string) {

};
```

```javascript
stripRight('    hello    ')   // '    hello'
stripRight('  oh    hello   ')   // '  oh    hello'
```

#### Strip

Returns a copy of string with leading and trailing whitespace removed.

```
var strip(string) {

};
```

```javascript
strip('    hello    ')   // 'hello'
strip('  oh    hello   ')   // 'oh    hello'
```
