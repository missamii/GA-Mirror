# Scrabble

**Note:** [Ruby array methods](http://ruby-doc.org/core-2.3.1/Array.html) and [ruby hash methods](http://ruby-doc.org/core-2.2.0/Hash.html) are your friends


### Prompt
- Run your tests, watch them fail
- Add code to `scrabble_word.rb` such that all the tests pass. **There is no need to modify any files except `scrabble_word.rb`**.
- If you're rusty about the rules of the game and how words are scored, google that first.
- Define a class named ScrabbleWord with an `initialize` method that takes one argument, `word`, and stores it in an instance variable `@word`.
- Write a "getter" for this instance variable `@word` that returns the word as a lowercase string.
- Define a method `.score` that returns the scrabble score of the word.
- **Bonus** Define a method `.multiplier_score` that takes a multiplier as an argument and returns a multiplied value of the score. (Think double or triple word score.)
- Here are the letter values. Think about how you might put this data in a usable format for your methods above.

```
a: 1, b: 3, c: 3, d: 2, e: 1,
f: 4, g: 2, h: 4, i: 1, j: 8,
k: 5, l: 1, m: 3, n: 1, o: 1,
p: 3, q: 10, r: 1, s: 1, t: 1,
u: 1, v: 4, w: 4, x: 8, y: 4,
z: 10
```



- Here is a hint when dealing with arrays & hashes. Remember there are two ways to write hashes in ruby:
```
letter_hash_1 = {
  a: 1,
  b: 3
}

letter_hash_2 = {
  'a' => 1,
  'b' => 3,
}

letter_hash_1[:b]
# => 3
letter_hash_1['b']
# => nil

my_key = 'b'
letter_hash_1[my_key]
# => nil
letter_hash_1[my_key.to_sym]
# => 3


letter_hash_2['b']
# => 3
letter_hash_2[:b]
# => nil

my_key = :b
letter_hash_2[my_key]
# => nil
letter_hash_2[my_key.to_s]
# => 3
```







#
