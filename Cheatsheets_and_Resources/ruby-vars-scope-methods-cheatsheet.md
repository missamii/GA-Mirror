# Ruby 102 • Variables, Scope & Methods cheatsheet


## Variables


**Global variable**
- Global scope
- Look like: `$a_variable = 'liza'`
- Available everywhere within your Ruby script.
- Think of them just like JS global variables.
- You won't be using these often, just like you don't use JS global variables often.


**Local variables**
- Local scope
- Look like: `a_variable = 'liza'`
- Restricted to the scope it was created in


**Constant**
- Local scope
- Cannot be changed or reassigned. In other words, they are "read only".
- Format: ALL_CAPS_UNDERSCORES_SNAKE_CASE
- `MY_NAME = 'liza'`
- Special amendment to above: I lied a little bit. `constants` were designed to be *thought of* as immutable. But, as is consistent with the pillars of the ruby language, which is that developing should make developers happy and developers should get to do what they want, `constants` can be changed if you want to. The ALL_CAPS format is simply to notify a developer that hey, this variable was created so you would know that this data should be thought of as read-only. So, what happens if we try to mutate it? You get a gentle warning.

```rb
# create the constant:
MY_NAME = "liza"

# call it:
MY_NAME
=> "liza"

# mutate it:
MY_NAME = "ethan"
=> warning!

# call it again:
MY_NAME = "ethan"
```


### Comparing `constants` and `symbols`
- Don't do that. They're like apples & oranges.
- A constant is a type of variable. We use variables as containers to store things. 
- A symbol is a type of data.
- A constant can store a symbol.
- Constants are mutable (but you shouldn't mutate them!!!); Symbols are definitely not mutable (because you can't access them to mutate them).   


---


**Instance variables**
- Look like: `@my_variable = 'liza'`
- Instance vars are somewhere in between global & local; there's nothing really comparable in JS.
- These vars are associated with a particular `instance` of a class, which is why they're called `instance vars`. As long as you’re in that object, you have access to them.
- Therefore, instance variables have object-level scope.
- Available only within a specific object, across all methods, in an instance of a class.
- Not available directly from class definitions.
- Every instance of a class has the same instance variables but with different values.


**Class variables**
- Look like: `@@name`
- are available to both class methods and instance methods.
- It is almost always a bad idea to use a class variable to store state. There are only a very few valid use cases where class variables are the right choice.
- Available from the class definition and any sub-classes. Not available from anywhere outside.


---


## Visualization of scope in Ruby

![](http://natashatherobot.com/wp-content/uploads/variable-scope-ruby.jpg)


---


## Class & Instance Methods

**Class methods**
- Define these methods with `self` before the method name: `self.say_hello`
- Called on the class: `User.say_hello`
- Can reference class variables
- Can't reference instance methods or variables


**Instance Methods**
- called on instances
- can reference instance vars
- can reference class vars


---


### Getter & Setter Methods

- "Getter" methods are methods whose sole purpose is to **return** the value of a particular instance variable
- "Setter" methods are methods whose sole purpose is to **set** the value of a particular instance variable
