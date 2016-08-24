# TESTING SOME STACKS AND QUEUES

For todays morning exercise, were going to practice how ruby handles classes. A few weeks ago we created Stack and Queue datatypes in JavaScript. Today, we are going to do the same thing, but in Ruby!

## If you forgot:

### Stack

A stack is an object that is LIFO. That is, Last In First Out. You can only add to the top of the stack, and you can only get the last thing added.

It should also hold onto a `storage` variable that cannot be accessed outside of the object, but only in the methods. It should have the following methods:

* `add`: adds an element to the top of the stack
* `remove`: removes and returns the item on the top of the stack.
* `peek`: returns, but does not remove, the item on the top of the stack.


### Queue

Queue is very similar to the stack, except that it is FIFO. That is: First In First Out. You can only add to the end of the queue, and retrieve items from the front of the queue.

It should also hold onto a storage variable that cannot be accessed outside of the object, but only in the methods. It should have the following methods:

* `add`: adds an element to the back of the queue.
* `remove`: removes and returns the element at the front of the queue.
* `peek`: returns, but does not remove, the item at the front of the queue.


## Testing

We are going to use a testing suite in ruby called rspec. In order to use rspec, you must first install it.

``` bash
  gem install rspec
```

Once rspec is installed, we can use the `rspec` command in our terminal. To do this, we must be in the root directory of our program (in this case be in this folder). Here, type 'rspec' into your terminal.

``` bash
  rspec
```

rspec knows to look in a folder called spec in order to run all of the files inside. This is where all of our tests live. Feel free to look inside to see what rspec tests look like.

My tests are expecting there to be two files inside of this folder: stack.rb and queue.rb. So work in those.

**HINT:** Start by creating a Queue class and a Stack class in each respective file. Then run `rspec` it should indicate which tests were passed and failed. You'll need "storage" -- what type of variable should it be? Etc. Make a change, run `rspec` see what happened and repeat.
