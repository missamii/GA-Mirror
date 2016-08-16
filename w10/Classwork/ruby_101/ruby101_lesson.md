# Ruby 101


### Objectives:
- Learn the history of ruby
- Ruby data types
- Explore ruby documentation
- Explore built-in methods


Resources:
- [Intro ruby stuffs.](http://ruby-for-beginners.rubymonstas.org/built_in_classes.html)


---


### "Matz is Nice And So We Are Nice"
The primary purpose of ruby is happiness. No really.

> "Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run fast. By doing this, the machine will run more effectively. By doing this, the machine will something something something." They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines." - Creator: Yukihiro Matsumoto (“Matz”)

- Released in 1993/1995 in Japan
- Wanted a language that was syntactically simple & truly object oriented
- Most of all, Matz wanted to create a language that was fun for developers to write
- Ruby emphasizes the necessity for developers to write code for humans first, computers second.
- Ruby has an enthusiastic community that is especially welcoming of beginners
- Do not confuse ruby with Ruby on Rails. The former is the programming language, the latter is the web framework. Like javascript in Node.


---


## THIS & THAT


### Naming convention for methods & variables in ruby:
  - JS: `camelCase`
  - ruby: `snake_case`


### Quotes in ruby   
- JS prefers single `''` quotes
- Ruby prefers **double** `""` quotes.


### String interpolation in ruby
- In JS: (using backticks)
```js
var name = 'liza';
console.log(`Your name is ${name}`);
```

- In Ruby
```rb
name = "liza"
puts "Your name is #{name}"
```


### PRY
- Remember how we can type `node` in our terminal and we get a JS REPL (repeat evaluate print loop)?
- The Ruby version of that is `pry`
  - Install it first: `gem install pry`
  - Type `pry` in your terminal; type `exit` to get out.
- To load a ruby `.rb` file that you're written, drop into pry, then type `load '/pathtofile/myrubyfile.rb'`
- To see all methods that you can call on a specific data type:
  - `'liza'.methods` -> string methods
  - `3.methods` -> number methods
- Find out the data type of something:
  - `'liza'.class` => string
  - `10.class` => integer
- *Note:* A similar tool is `irb`, which stands for Interactive Ruby


### Gems
- Plugins in JS are called `packages` (technically in node/npm they're called packages & in JS they're just called JS plugins)
- Plugins in ruby are called `gems`
- Install with the command `gem install <package-name>`
- Uninstall: `gem uninstall <package-name>`
- The `gem` command ships with the Ruby language when you install it.
- [Great intro resource.](http://guides.rubygems.org/rubygems-basics/)
- Let's try it together: `colorize`
  - Documentation on rubygems.org & GH
  - Install it
  - Play with it


---



## Local Variables in Ruby


There are lots of types of variables in ruby:
- local variables
- global variables
- instance variables
- class variables
- constants


But we're just going to focus on `local` variables right now. We'll talk more about the other types of variables when we learn about object-oriented programming in Ruby.


### Declaring variables: Javascript vs Ruby


Javascript:
``` javascript
var helloWorld = 'oh hai.';
```


Ruby:
``` ruby
hello_world = "oh hai."
```


What are some differences?
- JS: `camelCase` vs RB: `snake_case`
- No `var`
- No semicolon
- Single vs. double quotes


---


## Data types (cheatsheet)


---


## Data types continued: Arrays & hashes (cheatsheet)


---


### Puts & Gets
- A nifty way to print things and get user input from the CLI.
- Just like JS `console.log` and `prompt`.


```ruby
puts "How old are you?"

user_input = gets

puts "You are: #{user_input}"
```


### Gotchas
- *Note:* `gets` & `puts` are always strings.
- `gets` always has a new line after it, so you can use the `.chomp()` method to chomp off the new line.
  `gets.chomp()`


---


### Ruby conditionals


```ruby
puts "How old are you?"

user_input = gets.to_i

if user_input > 10
  puts "You are older than 10."
elsif user_input == 10
  puts "You are 10."
else
  puts "You are young."
end
```


```ruby
number = 5

if number.between?(1, 10)
  puts "The number is between 1 and 10"
elsif number.between?(11, 20)
  puts "The number is between 11 and 20"
else
  puts "The number is bigger than 20"
end
```


---


### Ruby loops & iterators
- Ruby provides **a lot** of ways to iterate and loop over arrays and hashes
- **Note:** Ruby loops do not create a new scope for variables, which means those variables are still available outside the loop. Therefore, a lot of ruby developers will use an iterator instead of a loop.

Loops:
- for
- while
- until

Common iterator methods:
- .each (non destructive)
- .each_with_index
- .map (makes a copy; non destructive)
- .collect
- etc.


Examples of for loop & each do
```ruby
arr = [1,2,3]

# for loop:
for element in arr
  element += 1
  puts "Value of element/iterator/local var is #{element}"
end

puts arr


# each do:
arr.each do |el|
  el += 1
  puts "Value of el/iterator/local var is #{el}"
end

puts arr
```


Example of `each do` and `each with index`:

```ruby
my_first_array = ['liza', 'hayes', 'ramo']

my_first_array.each do |name_part|
  puts "this is part of my name: #{name_part}"
end

my_first_array.each.with_index do |name_part, index|
  puts "name part: #{name_part}"
  puts "index: #{index}"
end
```


Example of loop vs. each scope:

```ruby
arr = ['a', 'b', 'c']
# for loop:
for element in arr
  puts "Value of element/iterator/local var is #{element}"
end

# this works:
puts element



# each do:
arr.each do |el|
  puts "Value of el/iterator/local var is #{el}"
end

# this does not work:
puts el
```


- Iterating over hashes:

```rb
my_first_hash = {first_name: 'liza', last_name: 'ramo'}

# option 1:
my_first_hash.each do |iterator|
  puts "iterator:", iterator
end

#=> iterator:
#=> first_name
#=> liza

#=> iterator:
#=> last_name
#=> ramo


#---------------------


# option 2:
my_first_hash.each do |key, value|
  puts key
  puts value
end

#=> first_name
#=> liza
#=> last_name
#=> ramo

my_first_arr_of_hashes = [
  { first_name: 'liza', last_name: 'ramo' },
  { first_name: 'Ethan', last_name: 'Friedman' }
]
```


- Example of looping over array of hashes:

```rb
arr_of_hashes = [
  {
    first_name: 'liza',
    last_name: 'ramo'
  },
  {
    first_name: 'Ethan',
    last_name: 'Friedman'
  }
]

arr_of_hashes.each do |key, value|
  puts key
  puts value
end

#=> {:first_name=>"liza", :last_name=>"ramo"}
#=> blank
```


- Example of looping over multi-dimensional hash:

```rb
multi_hash = {
  hair: 'brown',
  name: ['liza', 'hayes', 'ramo'],
  places_lived: {
    first: 'asheville',
    second: 'chapel hill',
    third: 'nyc'
  }
}

multi_hash.each do |key, value|
  puts key
  puts value
end


#=> hair                # key
#=> brown               # value

#=> name                # key
#=> liza                # value
#=> hayes               # value
#=> ramo                # value

#=> places_lived        # key
#=> {:first=>"asheville", :second=>"chapel hill", :third=>"nyc"}        # value
```


- Example of .each vs .map:
```rb
num_arr = [1,2,3]

# each:
eacharr = num_arr.each do |iterator|
  iterator += 1   
end

puts eacharr
# => 1
# => 2
# => 3


# map:
maparr = num_arr.map do |iterator|
  iterator += 1
end

puts maparr

# => 2
# => 3
# => 4
```


---


### Ruby built-in methods

Ruby has one hundred zillion more built-in methods than JS. There's no good way to teach them, you have to go explore the docs on your own & see all of them for yourself!

The methods are listed on the left-hand side. Bookmark these links.

Common methods you can call on [strings](http://ruby-doc.org/core-2.3.1/String.html).

```rb
.capitalize
.upcase
.swapcase
.chars
.chomp
.chop
.concat
.delete
.start_with?
.end_with?
.eql?
.include?
.replace
.insert
.prepend
.reverse
.size
.to_i
.to_s
.to_sym
```


Common methods you can call on [arrays](http://ruby-doc.org/core-2.3.1/Array.html).

Common methods you can call on [hashes](http://ruby-doc.org/core-2.3.1/Hash.html).

```rb
length/size/count
.delete
.delete_at
.empty?
.flatten **
.index **
.insert
.join **
.map
.each
.last
.pop
.push
.replace
.reverse
.select
.slice
.sort
.to_a
```




---


### Destructive & non destructive methods using the bang (!)
- Adding `!` to certain methods indicates that the original object will be altered.
- You can't just add a bang to any ruby method. Look at documentation for ones that accept it.


Examples: (string methods)
- .downcase
- .delete
- .reverse
- .map (array)


```rb
# create array:
a = ["a","b","c"]

# reverse it:
a.reverse
=> ["c", "b", "a"]

# inspect it: it's still the same
a
=> ["a", "b", "c"]

# reverse with bang = destructive to original:
a.reverse!
=> ["c", "b", "a"]

# inspect it:
a
=> ["c", "b", "a"]
```


---


## Ruby methods (cheatsheet)


---





#
