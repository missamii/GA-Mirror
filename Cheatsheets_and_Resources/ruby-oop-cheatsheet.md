# Ruby Object Oriented Programming Cheatsheet


### What is OOP?
Ruby is an object-oriented language. That means it's based on the idea that you'll build your application with objects in mind.

An object is a collection of related attributes (aka properties) and methods (aka behavior). You can think of an object as a little machine: it has displays you can read and buttons you can push.

When you write an object-oriented application, the idea is that you write the blueprints for these machines, and then you write a sequence of events your users can initiate in which these machines interact with each other.

### Class vs Instance

It's important to reiterate the difference between the class, and instances
created from that class:

* A class' name is capitalized , e.g. `Person`, and is a template for objects of that class.
* An instance is one specific object created using a class, e.g. `bob = Person.new("Bob", 10)`

### Vocabulary
- class: an object blueprint
- sub-class: a class that inherits from a parent class
- instance: an instance of a class
- self: an instance's way of referring to itself.

### Why OOP?

**1- Easy to Understand**
Objects help us build programs that model how we tend to think about the world.
Instead of a bunch of variables and functions (procedural style), we can group
relevant data and functions into objects, and think about them as individual,
self-contained units. This grouping of properties (data) and methods is called
*encapsulation*.

**2- Managing Complexity**
This is especially important as our programs get more and more complex. We can't
keep all the code (and what it does) in our head at once. Instead, we often want
to think just a portion of the code.

Objects help us organize and think about our programs. If I'm looking at code
for a Squad object, and I see it has associated *people*, and those people can
dance when the squad dances, I don't need to think about or see all the code
related to a person dancing. I can just think at a high level "ok, when a squad
dances, all it's associated people dance". This is a form of *abstraction*... I
don't need to think about the details, just what's happening at a high-level.

**3- Ensuring Consistency**
One side effect of *encapsulation* (grouping data and methods into objects) is
that these objects can be in control of their data. This usually means ensuring
consistency of their data.

Consider the bank account example... I might define a bank account object
such that you can't directly change it's balance. Instead, you have to use the
`withdrawl` and `deposit` methods. Those methods are the *interface* to the
account, and they can enforce rules for consistency, such as "balance can't be
less than zero".

**4- Modularity**
If our objects are well-designed, then they interact with each other in
well-defined ways. This allows us to refactor (rewrite) any object, and it
should not impact (cause bugs) in other areas of our programs.

**Note:** Remember how to load a file in `pry`?
  - `pry`
  - `load('./ruby_file.rb')`

---

## Defining Users
```rb
class User

  def initialize
    puts "I'm a new User"
  end

end
```

A class name must begin with a capital letter.

### `initialize` is a special method that runs whenever you type `.new`.

This is automatic in all Ruby classes.

```rb
# pry
User
# ...nothing happens
User.new
# "I'm a new User"
```

### You can pass arguments to `initialize`

`initialize` is a special method in that it's called by `.new`, but it behaves like any other method: you can pass arguments to it.

```rb
class User

  def initialize(firstname, lastname)
    puts "I'm a new User named #{firstname} #{lastname}"
  end

end
```
```rb
# pry
juan = User.new("Juan", "Juanson")
# I'm a new User named Juan Juanson
# => #<User:0x007f96f312b240>
```

### Instance variables

I'd like to have a method that prints the full name of the user.

In Ruby, normal local variables are available only inside the method in which they were created.

If you put an `@` before the variable's name, it's available inside the entire `instance` in which it was created.

This is an instance variable.

```rb
class User

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

end
```
```rb
# pry
juan = User.new("Juan", "Juanson")
# => #<User:0x007faf3903f670 @firstname="Juan", @lastname="Juanson">
juan.full_name
# => "Juan Juanson"
```


### Getting and setting

To get Juan's first name, I can't simply type `juan.firstname`. To **set** Juan's first name, I can't simply type `juan.firstname = "Jorge"`

The only things available **outside** an instance are its methods. `@firstname` is a property, not a method.

To make it "gettable" and "settable", I'll need to create getter and setter methods for it.

```rb
class User

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def get_firstname
    return @firstname
  end

  def set_firstname(firstname)
    @firstname = firstname
  end

end
```
```rb
# pry
juan = User.new("Juan", "Juanson")
# => #<User:0x007faf3903f670 @firstname="Juan", @lastname="Juanson">
puts juan.get_firstname
# "Juan"
juan.set_firstname("Jorge")
puts juan.get_firstname
# "Jorge"
```


### attr_accessor
Since getters and setters are so common, Ruby has a shortcut to create them: `attr_accessor`.

**Remember:**
- "Getter" methods are methods whose sole purpose is to **return** the value of a particular instance variable
- "Setter" methods are methods whose sole purpose is to **set** the value of a particular instance variable

In this case, we are creating `getter` & `setter` methods for the 2 instance variables in the `initialize` method:
```rb
class User
  attr_accessor :firstname, :lastname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

end
```
```rb
# pry
juan = User.new("Juan", "Juanson")
# => #<User @firstname="Juan", @lastname="Juanson">
puts juan.firstname
# "Juan"
juan.firstname = "Jorge"
puts juan.full_name
# "Jorge Juanson"
```

### `attr_accessor` is actually a shortcut for two other shortcuts.
- `attr_reader`
- `attr_writer`

```rb
class User
  attr_reader :firstname
  attr_writer :lastname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

end
```
```rb
juan = User.new("Juan", "Juanson")
juan.firstname
# => "Juan"
juan.lastname
# => Error!
juan.firstname = "Jorge"
# => Error!
juan.lastname = "Anderson"
juan.full_name
# => "Juan Anderson"
```

`attr_reader` creates a *getter* method only. Trying to do `juan.firstname = "Jorge"` will fail.

`attr_writer` creates a *setter* method only. Trying to do `puts juan.lastname` will fail.

`attr_accessor` creates getters and setters.

---
## Class-level stuff

### Attributes

I'd like to have a way of getting all users.

```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 1
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def count
    return @@all
  end

end
```
```rb
juan = User.new("Juan", "Juanson")
juan.count
# => 1
jorge = User.new("Jorge", "Jorgeson")
juan.count
# => 2
jorge.count
# => 2
steve = User.new("Steve", "Steveson")
juan.count
# => 3
jorge.count
# => 3
steve.count
# => 3
```

A variable name beginning with `@@` is a **class variable**. Every instance of a class has the same value for this variable. It cannot be accessed with `attr_accessor`

### Methods: Instance & class methods

`.full_name` is an *instance method*: it's called on an instance of User.

There are also methods you call on `User` itself. So far we've only seen `.new`.

```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 0
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def count
    return @@all
  end

  def User.new
    puts "I've hijacked a class method!"
  end

end
```
```rb
juan = User.new("Juan", "Juanson")
# "I've hijacked a class method!"
juan.firstname
# => Error!
```

A method name beginning with the class name is a **class method**. It is attached to the class itself, rather than to instances.

### Class attributes and methods together

`User.count` would make much more sense than `steve.count`.


```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 0
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def User.count
    return @@all
  end

end
```
```rb
juan = User.new("Juan", "Juanson")
# "I've hijacked a class method!"
juan.count
# => Error!
User.count
# => 1
```

## Self

`self` is a special variable that contains the current instance of an object (like `this` in Javascript). It's how the object refers to it*self*.

```rb
class User
  attr_accessor :firstname, :lastname
  @@all = []

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    puts "Creating #{self.firstname}"
    @@all.push(self)
  end

  def full_name
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def User.all
    return @@all
  end

end
```
```rb
juan = User.new("Juan", "Juanson")
# "Creating Juan"
jorge = User.new("Jorge", "Jorgeson")
# "Creating Jorge"
steve = User.new("Steve", "Steveson")
# "Creating Steve"
User.all
# => [#<User @firstname="Juan">, #<User @firstname="Jorge">, #<User @firstname="Steve">]
```

---


### Exercise
- Create a `Vehicle` class
- Enable the class to be initialized with a `type`, a `color` & `fuel_level`, which starts at 0.  
  - Types: truck, car, motorcycle
  - When initialized, says its `type`, `color`, `fuel_level`
- Make it so that you can get and set all 3 of these variables.
- Create the following methods.
  - Each take a parameter `speed`:
    - `accelerate` - increments `fuel_level`
    - `decelerate` - decrements `fuel_level`
  - `honk` - Makes the car beep
  - Each take a car part as a parameter:
    - `something_broke`: when called, says what car part is broken
    - `car_shop`: when called, says what car part is being fixed.






#
