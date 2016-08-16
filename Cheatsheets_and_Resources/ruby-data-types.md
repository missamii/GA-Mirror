# Ruby Data Types cheatsheet


### 7 common ruby data types:
- Numbers
- Strings
- True, False
- Nil
- Symbols
- Arrays
- Hashes


---


## Numbers
Basically, numbers, arithmetic & comparisons in ruby are the same as in JS.

##### Arithmetic methods:
`+, -, *, /, **, %`

##### Comparison methods:
`<, <=, >, >=, ==, !=`

##### Gotcha...
`9 / 2 => 4`

Wat? This is because if you divide an integer (whole num) by an integer in ruby, it will try to give you an integer (and round down). Make sure you use floats (decimal point numbers) instead:

`9.0 / 2.0 => 4.5`


---


### True & False

In JS, everything is truthy except:
- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `' '` (empty string)

...But in ruby, everything is truthy except:
- `false`
- `nil`

In Ruby, even `0` is truthy because it is a value, and values are truthy.


---


### Nil
- What is `nil`? Literally, nothing.
- It is like `null` in JS (not to be confused with `undefined`).
- In ruby, `nil` is the default return value of any "action", much like how `undefined` is the default return value of a function in JS.


---


### Symbols
- Like strings, but unchangeable.
- Create them like this: `:liza`
- You can store them in any kind of variable, including a constant:
  - `MY_NAME = :liza`
  - `liza_sym = :liza`
- Think of them as unique identifiers, like IDs.
- They are immutable because you cannot reach them to change them. Kind of like keys in a JS object. You can change its value but never the key itself. Think about that...
- What is the difference between strings & symbols?
  - Let's say you `puts` (remember, like `console.log` in JS) the string 'hello' 5 times. You will actually be creating 5 new strings each time. But if you print out the symbol `:hello`, you will be creating one symbol & it will be reused 5 times.
- You will be using these mostly in `hashes`. The `keys` become `symbols` upon creation.







#  
