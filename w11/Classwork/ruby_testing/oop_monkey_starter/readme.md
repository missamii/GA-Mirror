# Monkies

**Note:** [Ruby string methods](http://ruby-doc.org/core-2.2.0/String.html) are your friends.

Create a `Monkey` class in `lib/monkey.rb`, which has the following attributes:
* name - (a string)
* species - (a string)
* foods_eaten - (an array)

And the following methods:
* eat(food) - adds the food (a string) to the list of foods eaten
* introduce - introduces self, with name, species, and what it's eaten.

## Goal

Run tests using `rspec` from inside the `oop_monkey` folder (not in any subfolders). Write code in your Monkey class to make the tests pass.

Note:
* You should not need to alter the `monkey_spec` file in any way (except for the bonus below).
* You shouldn't need to run `ruby lib/monkey.rb` or use the `ruby` command at all -- just `rspec`.
* You can completely ignore the `.rspec` and `spec_helper.rb` files.

## Bonus

Uncomment the bonus tests in `spec/monkey_spec` and make them pass.
