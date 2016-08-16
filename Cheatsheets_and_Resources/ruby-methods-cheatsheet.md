
# Ruby methods


### The Basics
- Begins with the keyword `def`; ends with `end`
- Parens not necessary for params, but it's more semantic.

```rb
# define it:
def hello_world(name)
  puts "Oh hai", name
end

# call it:
hello_world('liza')
```


---


### String interpolation
- String interpolation: in Ruby, you can evaluate an argument right in a string, like JS string interpolation.

```ruby
def hello_world(name)
  puts "Oh hai", name
end

# with string interpolation:
def hello_world(name)
  puts "Oh hai, #{name}"
end
```


---


### The `return` keyword
- Everything returns something.
- In JS, if you do not specify the return value, the default return value of a fxn is `undefined`.
- In Ruby, it's `nil`.
- Remember the purpose of `return`?
  - To specify a value that should be *returned* (or passed) to wherever the function call was made.
- Remember, `return` immediately exits the method.
- There is only a single `return` value.
- The `return` keyword is not required. In Ruby, the last line is considered the `return` value automatically. It's always better to use the `return` keyword for semantics.
- Officially, the default return value is "the evaluated result of the last line that is executed."


```rb
# puts
def oh_hai()
  puts 'hello there'
end

=> "hello there"  # what you told the method to do
=> nil            # the actual return of the method

# return
def oh_hai()
  return 'hello there'
end

=> "hello there" # the actual return of the method
```


---


### A note about storing methods in variables
In JS, we could do something like this:

```js
var sayHello = function() {
  console.log('oh hai.');
}

// call it later:
sayHello();
```


We don't do this *that* often in JS because we could just do this:


```js
function sayHello() {
  console.log('oh hai.');
}

sayHello();
```


The only difference between the two is:
- 1- the first one is an anonymous function, and
- 2- hoisting. The first one's *existence* would be hoisted, but not it's value (the function itself). The second one would be hoisted in its entirety.


In Ruby, we can't store functions in variables.


---















#
