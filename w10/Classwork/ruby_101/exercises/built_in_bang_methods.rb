# Built-in ruby methods & bang! methods


# Exercise:
# ---------------------------------- #

# - Come up with examples that use at least 3 built-in string, array and hash methods (9 altogether)

# - Use at least two bang (!) methods on strings or arrays

word = ["cat", "dog", "fish"]
word.reserve!


multi_hash = {
  hair: 'brown',
  name: ['liza', 'hayes', 'ramo'],
  places_lived: {
    first: 'asheville',
    second: 'chapel hill',
    third: 'nyc'
  }
}
multi_hash.flatten
multi_hash.sort
multi_hash.to_a
