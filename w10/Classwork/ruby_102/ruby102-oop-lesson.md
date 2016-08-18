# Ruby 102: Object Oriented Programming lesson


Lesson Objectives:
- Explain the relationship between `.new()` and `def initialize()`
- Define class, subclass, instance, and self
- Properly define instance and class variables
- Distinguish whether a piece of data is best suited to being stored in a local, instance, or class variable
- Describe the relationship of attr_ and "getter" and "setter" methods
- Distinguish whether a piece of data is best suited to having its accessibility defined by attr_reader, attr_writer, attr_accessor or none of the above


---


### What is OOP?
Ruby is an object-oriented language. That means it's based on the idea that you'll build your application with objects in mind.

An object is a collection of related attributes (aka properties in JS) and methods (aka functions in JS).

You can think of an object as a little machine: it has displays you can read (attributes) and buttons you can push (methods).

When you write an object-oriented application, the idea is that you write the blueprints for these machines, called `classes`, and then you create duplicates of the classes, called `instances`, and customize them.


### Class vs Instance
It's imperative to understand the difference between a class vs an instance.

A class is a blueprint. An instance is an object generated from that blueprint.

* A class contains all the default attributes & actions of each instance. Class names are capitalized , e.g. `Person`, `User`, `Animal`.
* An instance is one specific object created from a class. The way we create instances is like this: `bob = Person.new()`


### Vocabulary
- **Class:** an object blueprint
- **Sub class:** a class that inherits from a parent class
- **Instance:** an instance of a class or sub class.
- **Self:** an instance's way of referring to itself. Kind of like `this` in JS.


### Why OOP?
**1- Easy to Understand**
Objects help us build programs that model how we tend to think about the world. For example, it's easy to imagine a class `Animal` that has eyes, noses, and limbs. From that blueprint, we can create `sub classes`, such as `Pandas`, `Lemurs`, and `Cats`. From each sub class, we can create `instances`, such as 3 new panda bears, 2 lemurs and a cat.

OOP allows us to group relevant data and functions into objects, and think about them as individual, self-contained units. This grouping of attributes (properties) and methods (functions) is called *encapsulation*.


**2- Managing Complexity**
This is especially important as our programs get more and more complex. We can't keep all the code (and what it does) in our head at once. Instead, we often want to think just a portion of the code.

Objects help us organize and think about our programs. If I'm looking at code for a Squad object, and I see it has associated *people*, and those people can dance when the squad dances, I don't need to think about or see all the code related to a person dancing. I can just think at a high level "ok, when a squad dances, all it's associated people dance". This is a form of *abstraction*... I don't need to think about the details, just what's happening at a high-level.


**3- Ensuring Consistency**
One side effect of *encapsulation* (grouping data and methods into objects) is that these objects can be in control of their data. This usually means ensuring consistency of their data.

Consider the bank account example... I might define a bank account object such that you can't directly change it's balance. Instead, you have to use the `withdrawal` and `deposit` methods. Those methods are the *interface* to the account, and they can enforce rules for consistency, such as "balance can't be less than zero".


**4- Modularity**
If our objects are well-designed, then they interact with each other in
well-defined ways. This allows us to refactor (rewrite) any object, and it should not impact (cause bugs) in other areas of our programs.


**Note:** Remember how to load a file in `pry`?
- `pry`
- `load 'ruby/ruby_file.rb'` => use relative path to file


---


## Let's talk about classes

Amazon is a site where **people** can place **orders** for **products**.
- People
- Orders
- Products


---


## Create the `User` class


```ruby
class User
  # some stuff will go here
end
```


We load up our ruby file in pry, then create an instance using the keyword `new`:

```bash
liza = User.new
=> #<User:0x007ffcca8c15f8>
```

That's it! We've created a class called `User` and an `instance` of this class called 'liza'. But our class doesn't do anything... yet.

Let's give it a method.

```ruby
class User

  def say_hello(name)
    puts "Oh hai, #{name}."
  end

end
```

Create a new user and call the `say_hello` method:

```bash
ethan = User.new
=> #<User:0x007ffcca8c15f8>

ethan.say_hello("Ethan")
=> "Oh hai, Ethan."
```

---


## The `initialize` method
`initialize` is a special method that runs whenever you type `.new`. This is automatic in all ruby classes.


```rb
class User

  def initialize
    puts "I'm a new User"
  end

end
```


```rb
# pry
User
# ...nothing happens

User.new
# "I'm a new User"
```


### You can pass arguments to `initialize`
`initialize` is a special method in that it's built in (therefore `initialize` is a reserved keyword in ruby), but it behaves like any other method: you can pass arguments to it.


```rb
class User

  def initialize(firstname, lastname)
    puts "I'm a new User named #{firstname} #{lastname}"
  end

end
```


```rb
# pry:
juan = User.new("Juan", "Juanson")
# I'm a new User named Juan Juanson
# => #<User:0x007f96f312b240>
```


### Instance variables

I'd like to have a way to get the first & last name of `juan`, the instance I just created.

```rb
# pry
juan = User.new("Juan", "Juanson")
# => #<User:0x007faf3903f670>

# sadface:
juan.firstname
# => NoMethodError: undefined method `firstname' for #<User:0x007ffae19ab670>
```


Uh oh. Even though I passed in a `firstname` and `lastname` when I created `juan`, I didn't do anything with them. Let's take a look at the `initialize` method. The arguments became `local variables` and died after the `initialize` method was over. Therefore, I don't have access to them. In Ruby, `local variables` are available only inside the method in which they were created. Kind of like `vars` in javascript.

In order to access the `firstname` & `lastname` of `juan`, we'll have to *create a method* to print the full name of the user.

If you put an `@` before the variable's name, it becomes an `instance variable` and it will be available inside the entire `instance` in which it was created, instead of just the method in which it was created.

Let's rewrite the initialize method to take two parameters and then turn them into `instance variables`. Then I'll be able to access `@firstname` and `@lastname` in any method throughout the entire instance.

I will write a method called `full_name` that has access to the instance variables `@firstname` & `@lastname`.

You can think of `instance variables` almost like JS global variables, except instead of being available throughout your entire ruby script like a global var, they are only available within the instance.


```rb
class User

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    return "Hello my name is #{@firstname} #{@lastname}"
  end

end
```


Now, when I create a new user, I can get their full name by calling the method `full_name` on them:

```rb
# pry
juan = User.new("Juan", "Juanson")
# => #<User:0x007faf3903f670 @firstname="Juan", @lastname="Juanson">

juan.full_name
# => "Juan Juanson"
```


Based on this code, the order of events will be as follows:
- I create a new user:
  - `juan = User.new("Juan", "Juanson")`
- The use of `.new` triggers the `initialize` method behind the scenes.
- So, I've called the `.initialize` method & passed it two args: "Juan" and "Juanson".
- When the `.initialize` method is called, it takes whatever two args it receives & turns them into instance vars, which can be used throughout the instance.



### Getting and setting attributes

Think about this...

If Juan were a JS object, I could **set** his first name by doing this: `juan.firstname = "Juan"`. Then, I could **retrieve** his first name like this: `juan.firstname`.

But this isn't JS.

So how do I **get** and **set** Juan's first name?

In ruby, the only things available outside of an instance are its methods. `@firstname` is a property, not a method.

To make it "gettable" and "settable", I'll need to create `getter` and `setter methods`.


```rb
class User

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def get_firstname
    return @firstname
  end

  def get_fullname
    return "#{@firstname.capitalize} #{@lastname.capitalize}"
  end

  def set_firstname(firstname)
    @firstname = firstname
  end

end
```

So what's going on here?

When we create a new user, we'll pass in two args: a first and last name.

The `initialize` method will take those args & turn them into instance variables.

Great! But so far we can't do anything with them yet. Turning them into instance variables simply makes them available throughout the instance, but it doesn't automatically **do** anything with them.

We want to be able to call `get_firstname` on a user & retrieve their first name.  

So, the entire purpose of `get_firstname` is simply to retrieve the instance var `@firstname`. It is a **getter** method.

Then we wrote a method called `get_fullname` whose sole purpose is, when called, to return the first name and last name of the user. It is also a **getter** method. It's sole purpose is to retrieve the variables `@firstname` and `@lastname` (with the added benefit of capitalization).

Great! But what if Juan changes his first name to Jorge? I need a way to **set** his first name.

The sole purpose of `set_firstname` is to take whatever arg we pass it ('Jorge') and assign it as the new value of the instance var `@firstname`.

Whew... ok let's see it in action:


```rb
# pry

# create a new user with the first & last names "Juan" & "Juanson":
juan = User.new("Juan", "Juanson")
# => #<User:0x007faf3903f670 @firstname="Juan", @lastname="Juanson">

puts juan.get_firstname
# => "Juan"

puts juan.get_fullname
# => "Juan Juanson"

# 'set' Juan's first name to something different:
juan.set_firstname("Jorge")

puts juan.get_firstname
# => "Jorge"
```


---


## attr_reader and attr_writer
That seems like a lot of work. I mean, all I wanted was Juan's first & last name.  

Luckily, getters and setters are so common that Ruby has a shortcut for them: `attr_reader` & `attr_writer`.

But why didn't you teach me this in the fiiirsstt place, Liza, UGH.

Because you wouldn't have understood! In web dev, you can't use shortcuts til you understand the long way to do things!

Now let's get started.


**Remember:**
- "Getter" methods are methods whose sole purpose is to **return** the value of a particular instance variable.
- "Setter" methods are methods whose sole purpose is to **set** the value of a particular instance variable.


In the following example, we eliminate the **getter** and **setter** methods we created earlier (`get_firstname`, `set_firstname`) and replace them with `attr_reader` and `attr_writer`.

You can see that we have an attr_reader (getter) for first name AND last name, which will allow us to retrieve both of those by calling `juan.firstname` and `juan.lastname`. Nifty!

But we only have an attr_writer (setter) for first name. That means we can do this: `juan.firstname = 'Jorge'`, but we cannot do this to set last name: `juan.lastname = 'Jorgeson'`.


```rb
class User
  attr_reader :firstname, :lastname
  attr_writer :firstname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

end
```


Let's see it in action:


```bash
juan = User.new("Juan", "Juanson")

juan.firstname
=> "Juan"

juan.lastname
=> "Juanson"

juan.firstname = "Jorge"

juan.firstname
=> "Jorge"

juan.lastname = "Jorgeson"
=> Error
```

Oops, why did we get that error? Because we only specified an `attr_writer` for first name, not last name.


---


### attr_accessor

attr_reader and attr_writer are super nifty. But we don't want any repeated code and it's kind of a pain to write this if we need to get & set both first and last name:

```rb
attr_reader :firstname, :lastname
attr_writer :firstname, :lastname
```

Luckily, Ruby has a shortcut for this!

UGHHH why didn't you show us this fiiiirst, Liza?

Stop whining, you know why.

Let's take a looksie:


```ruby
class User
  attr_accessor :firstname, :lastname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

end
```


Now we can **get** and **set** first name and last name easily!


---


### Recap of `attrs`

- `attr_reader` creates a *getter* method only.
- `attr_writer` creates a *setter* method only.
- `attr_accessor` creates getters and setters all at the same time. It takes the place of attr_reader and attr_writer.



LONG WAY:

```rb
class User

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def get_firstname
    return @firstname
  end

  def set_firstname(firstname)
    @firstname = firstname
  end

  def get_lastname
    return @lastname
  end

  def set_lastname(lastname)
    @lastname = lastname
  end

end
```


```bash
juan = User.new("Juan", "Juanson")

# get
juan.get_firstname
=> "Juan"

# get
juan.get_lastname
=> "Juanson"

# set
juan.set_firstname("Jorge")
=> "Jorge"

# set
juan.set_lastname("Jorgeson")
=> "Jorgeson"
```


SHORT WAY:

```ruby
class User
  attr_accessor :firstname, :lastname

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

end
```


```bash
juan = User.new("Juan", "Juanson")

# get
juan.firstname
=> "Juan"

# get
juan.lastname
=> "Juanson"

# set
juan.firstname = "Jorge"
=> "Jorge"

# set
juan.lastname = "Jorgeson"
=> "Jorgeson"
```


---


## Class-level stuff


All the things we did in the previous example allowed us to manipulate **instances** of a class (Juan). Now we're going to learn how to do **class-level** stuff (User).


### Attributes

I'd like to have a way to get all users.

```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 1
  end

  def count
    return @@all
  end

end
```


Cool, so now every time a new user is created, the `@@all` variable will increase by one. Let's make some users & test it out:  


```rb
juan = User.new("Juan", "Juanson")
juan.count
# => 1

jorge = User.new("Jorge", "Jorgeson")
jorge.count
# => 2

juan.count
# => 2

steve = User.new("Steve", "Steveson")
steve.count
# => 3

juan.count
# => 3

jorge.count
# => 3
```

What the... ??

A variable beginning with `@@` is a **class variable**. Every `instance` (Juan, Jorge, Steve) of a class has the **same** value for this variable. Note, it cannot be accessed with `attr_accessor`.

It doesn't really make sense to call `.count` on an instance, does it? I mean `juan.count => 3` doesn't logically let us know that there are 3 total instances of the User class. That info doesn't really pertain to the instance, it's really about the User class itself. Read on...


### Instance & class methods

Below, `.full_name` is an **instance method**: it's called on an **instance** of User. `juan.full_name`

There are also methods you call on the `User` class itself. These are called **class methods**. So far we've only seen `.new`. I bet you didn't even know it was a class method! `juan = User.new`

A method name beginning with the class name is a **class method**. It is attached to the class itself, rather than to instances.

`User.count` would make much more sense than `juan.count` or `steve.count`, right?


```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 1
  end

  def User.count
    return @@all
  end

end
```

Let's see it work:

```ruby
juan = User.new("Juan", "Juanson")

User.count
=> 1
```



### Hijacking

Let's have some fun for no reason at all.

Below, I've hijacked the `.new` and, because this function automatically triggers the `initialize` method, that one too.

```rb
class User
  attr_accessor :firstname, :lastname
  @@all = 0

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
    @@all += 0
  end

  def count
    return @@all
  end

  def User.new
    puts "I've hijacked the 'new' and 'initialize' methods!"
  end

end
```

Let's see it work:


```rb
juan = User.new("Juan", "Juanson")
# "I've hijacked the 'new' and 'initialize' methods!"

juan.firstname
# => Error!
```

Uh oh... That's not good. The `.new` method is reserved. But because ruby is nice, it let's you do it anyway.


---


### Setting defaults for instances

Ruby lets us define defaults for instances if no arguments are passed in at the time of creation.

```ruby
class Vehicle

  def initialize(color = 'blue', fuel_level = 0, type = 'Volvo')
    @type = type
    @color = color
    @fuel_level = fuel_level
  end

end
```

Let's try it out:

```bash
# Don't pass any args upon creation:
bob = Vehicle.new()
=> #<Vehicle:0x007faf02369828 @color="blue", @fuel_level=0, @type="Volvo">
```


### The options hash
That's so neat! This works great.

But what if we want to initialize a new vehicle with the color 'red' and the type 'bmw', but leave fuel_level as the default?

Ruby is expecting the args in the order we passed them. That means when we initialize our new vehicle, if we do this, we will get unexpected results:

```ruby
my_car = Vehicle.new("red", "BMW")
# => my_car @color = "red", fuel_level = "BMW", type = "Volvo"
```

Whoops, that's not what we wanted at all.

Let's take a look at the options hash...

Essentially what's happening below is IF the user passed a particular argument, set that arg as an instance method, otherwise use the default provided.

If a particular arg was not passed, the value will automatically be `nil`, which is `false` in Ruby, so it would default to whatever's on the other side of the OR statement.


```ruby
class Vehicle
  attr_accessor :type, :color, :fuel_level

  def initialize( opts = {} )
    @type = opts[:type] || 'Volvo'
    @color = opts[:color] || 'blue'
    @fuel_level = opts[:fuel_level] || 0
    puts opts
  end
end
```

```ruby
# opts is just an empty hash
opts = { }

# when we create a new instance, the hash will get filled.
my_car = Vehicle.new("BMW")

# now the opts hash looks like this:
opts = { :type => "BMW" }

# That means...
opts[:type] # => "BMW", which is a truthy value

# But...
opts[:color] # => `nil`, which is falsey.
```


---


## One or two last things before `inheritance`...

### Private methods
**What is it?** A method that an instance can't call directly.

**Why?** Private methods offer some protection.

In the below example, `bottle` can call the `verse` method, but not the `line_one` method. However, `verse` can call the `line_one` method.

Interesting...

```ruby
class Bottles
  def verse
    line_one
  end

  private
  def line_one
    "99 bottles of beer on the wall"
  end
end


---


bottle_one = Bottle.new

bottle_one.verse
=> "99 bottles...."

bottle_one.line_one
=> error
```


---


### Self

`self` is a special variable that contains the current instance of an object. It's a lot like `this` in Javascript. It's how the object refers to *itself*.

There are two uses that we'll look at: 1- for instance variables in the attr_ and 2- class methods.

1- Why would you use `self` over an instance variable? You would do this if you needed to customize the method that attr_ provides for you.

2- You would use `self.method_name` over `User.method_name` if you needed to change the name of the class later on, and some other reasons.

Let's change the `@@all` variable into an array. We'll use it to store new user instances.

```rb
class User
  attr_accessor :firstname, :lastname

  @@all = []

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname

    # puts "Creating #{self.firstname}"
    puts "Creating #{@firstname}"

    @@all.push(self)
  end

  def show_firstname
    # return @firstname
    return self.firstname
  end

  # def User.show_all
  def self.show_all
    return @@all
  end

end
```

Let's see how it works:

```rb
juan = User.new("Juan", "Juanson")
# => "Creating Juan"

jorge = User.new("Jorge", "Jorgeson")
# => "Creating Jorge"

steve = User.new("Steve", "Steveson")
# => "Creating Steve"

User.show_all
# =>
[
  #<User:0x007fa5dc23a7d8 @firstname="Juan", @lastname="Juanson">,
  #<User:0x007fa5dc1aab60 @firstname="Jorge", @lastname="Jorgeson">,
  #<User:0x007fa5dc0974d0 @firstname="Steve", @lastname="Steveson">
]
```



---


# Ruby Inheritance

Just like we get traits from our parents, we can use a feature called inheritance to create multiple classes (children) that share, or **inherit** properties and methods from their parent.

**Note:** class variables and inheritance: It's best practice to avoid class variables because some tricky things can happen when inheritance is brought into the mix. Instead, a common practice is to create a **helper class**, which performs the same functionality that a class variable would, but without the headaches introduced by inheritance. That is beyond the scope of this lesson, but it might be nice to know for future exploration.


## Sub classes
Let's say we have a class called `Being`. There are two types of beings: `Person` and `Animal`.

`Being`
- Have a name, a noise they can make, eyes and limbs
- Tell you how many eyes they have.

`Person`
- Have a name, a noise they can make, eyes and limbs
- Tell you how many eyes they have.
- Can speak their name

`Animal`
- Have a name, a noise they can make, eyes and limbs
- Tell you how many eyes they have.
- Can make a noise appropriate for their animal type ("moo", "meow", "woof", etc.)

We can think of `Person` and `Animal` as two `sub classes` of the class `Being`. See how the two sub classes share some traits of their parent class? Those traits are inherited.


```ruby
class Being
  attr_accessor :name, :noise, :eyes, :limbs

  def initialize ( name = nil, noise = nil, eyes = 2, limbs = 4 )
    @name = name
    @noise = noise
    @eyes = eyes
    @limbs = limbs
  end

  def how_many_eyes
    puts "I have #{@eyes} eyes!"
  end
end

class Person < Being
  def speak_name
    puts "Oh hey, my name's #{@name}!"
  end
end

class Animal < Being
  def make_noise
    puts "I make this noise: #{@noise}!"
  end
end
```

Let's see it in action:
```bash
liza = Being.new("Liza")
=> #<Being:0x007f81d30e3060 @eyes=2, @limbs=4, @name="Liza", @noise=nil>

ethan = Person.new("Ethan")
=> #<Person:0x007f81d205dd80 @eyes=2, @limbs=4, @name="Ethan", @noise=nil>

syed = Animal.new("Syed", "moo")
=> #<Animal:0x007f81d330e8d0 @eyes=2, @limbs=4, @name="Syed", @noise="moo">

liza.how_many_eyes
# => I have 2 eyes!

ethan.how_many_eyes
# => I have 2 eyes!

syed.how_many_eyes
# => I have 2 eyes!

syed.make_noise
# => I make this noise: moo!

syed.speak_name
# => NoMethodError!
```

We can see that Liza, Ethan and Syed have access to `how_many_eyes`. Ethan has access to a method `speak_name` that Syed does not. Conversely, Syed can access `make_noise`, but Ethan cannot. Liza cannot access any of these methods. Inheritance flows down, not up.


---


That's so neat, but it doesn't really make sense that the `Being` class contains the attr_ `noise` because that only pertains to an Animal instance.

Let's fix that: I removed `@noise` from the Being class and put it in the Animal class.

```ruby
class Being
  attr_accessor :name, :eyes, :limbs

  def initialize ( name = nil, noise = nil, eyes = 2, limbs = 4 )
    @name = name
    @eyes = eyes
    @limbs = limbs
  end

  def how_many_eyes
    puts "I have #{@eyes} eyes!"
  end

end

class Person < Being
  def speak_name
    puts "Oh hey, my name's #{@name}!"
  end
end

class Animal < Being
  attr_accessor :noise

  def initialize(noise)
    @noise = noise
  end

  def make_noise
    puts "I make this noise: #{@noise}!"
  end
end
```

Now let's test it out:


```bash
syed = Animal.new("Syed", "moo")
# => #<Animal:0x007f81d319e810 @noise="moo">

syed.name
=> nil
```

Uh oh. He doesn't have a name.

What happened? The `initialize` method in the Animal class **overrode** the `initialize` class in the Being class.













#
