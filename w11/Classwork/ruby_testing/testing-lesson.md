# Software Testing

Schedule:
- `ruby-vars-scope-methods-cheatsheet.md` & `ruby-oop-cheatsheet.md`
  - Vehicle class exercise at the end
- Testing lesson
- Review Monkey exercise, then they finish
  - Use rspec cheatsheet
- Scrabbler - lab


### What is testing?
Tests make sure that our code is doing what it should.

Think about the way you code. You create a part of a web page, then you browse to that page to test it. In other words, to ensure that it is doing what you expect.

Then you add another feature. And test both features. Then you add a third feature and test... just the third feature.

Imagine if you had an automated way to see if your new changes fit your requirements and every requirement that came before this.

### Types of testing
There are a few levels of testing.

**Acceptance tests** verify our apps at the level of user interaction. They visit web pages, click on links, validate the DOM. In other words, testing the product as a whole to make sure a user can use it.

**Integration tests** check the interaction between objects.

**Regression testing** verifies that software previously developed and tested still performs correctly after it was changed or after it interfaced with other software.

**Unit tests** check the smallest level, like the functionality of a specific method.

There are many other types of testing, too. Security, accessibility, A/B, etc.

---

### What is RSpec?
RSpec is a testing framework for Ruby. RSpec makes it easier to write tests.

It's a Domain Specific Language (DSL) for writing specifications about your code. It was released in 2007, so it's ben around for a while. It is the defacto testing framework.

Other examples:
- Acceptance testing (capybara)
- Front-End testing (jasmine)
- Many more, like cucumber, mocha  

---
### Software development processes: TDD & BDD

#### Test Driven Development
- The idea that you should write your tests first, then write your code.
- Process:
  - Write your tests, watch them fail, then write your code, watch them pass  
  - Red, Green, Refactor.
  - We write a test that fails, indicating that the feature is not supported. Then, we adjust code until it passes (turns Green). Lastly, we refactor our app using the knowledge we gained from supporting the spec.


#### Behavior Driven Development
- Focuses on the business behaviors your code is implementing. It supports a team-centric workflow.
- Process:
  - The business person specifies behaviors they want to see in the system.
  - The developer asks questions based on their understanding of the system, while also writing down additional behaviors needed from a development perspective.
- This focus on behavior during development makes the test useful as verification that you’re building the right feature, not just that your code is correct.
- example:
```ruby
it "adds a reminder date when an invoice is created"
it "sends an email to the invoice's account's primary contact after the reminder date has passed"
it "marks that the user has read the email in the invoice"
```
- You don't care, for example, that the object has a name.
```ruby
it "has a name"
```

---

### What does an RSpec spec ("specification" or "test") look like?
- Monkey test - we do: watch tests fail, review tests, initialize method. You do: write monkey class to pass the tests.

### Syntax
- We'll look at `describe` and `it` blocks, and basic `expect` statements. RSpec has its own DSL (meaning it is written in ruby, but you can't use those functions outside of RSpec. Kind of like how you can't use Rails methods outside of Rails).


**Describe blocks:** This is where we declare which class we are testing. All of our tests will go inside this block.

``` ruby
describe ClassName do

end
```

**It blocks:** Where a specific method is tested.

``` ruby
describe ClassName do
  it "desribe the feature" do
    # tests go here
  end
end
```

**Basic expectation:** Where we define what we expect the state to be.

This works like jQuery's `$()` syntax. We use `expect(IUT)` to "wrap" the Item Under Test, so that we can call the `to` method on it. We then pass a "matcher" to the "expectation."

``` ruby
expect(object).to eq(something)
```

### Test isolation
When running unit tests, we expect each test to run "in isolation". To be separate from every other test. These tests manipulate our system. They add rows to the Database. They change existing information. They configure and tests the results. We don't want the configuration and/or changes in one test to affect another test.

RSpec uses this convention: 1. Setup 2. Test 3. Teardown

The setup is run prior to each test and a teardown is run following each test, which resets our system.

So, why isolation? It ensures our tests are stable & eliminates confusing dependencies.


#
