# Rails Intro & Overview lesson


### Lesson objectives
- Rails history
- Learn about the 5 main parts of a Rails app
- Learn the appropriate place for logic in Rails


---


- MVC
  - Day 1: controllers & routes
  - Day 2: models, AR, DB & external API calls 
  - Day 3 & 4: views (react FE)

---


## Part I: History & importance

### History
Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of **2004**. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:
- Ruby programming language
- Model-View-Controller architecture
- Programmer happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions. Rails heavily emphasizes "Convention over Configuration." This means that a programmer only needs to code the non-standard parts of a program. By default, a Rails app expects you to follow **specific patterns,  folder structures and naming conventions.** This means you need to learn these conventions, but also means that once you learn them, you save time by not having to set up a lot of the configuration you'd otherwise need to set up manually.

Basically, Rails has a lot of rules. If you follow them, you'll be happy & write less code for common functionality.

Over the years, Rails has indeed made it easier for beginners to dive into web development and build large complex applications. Some popular websites built on Rails include Twitter (at one point), GitHub and, of course, 37signals' very own Basecamp. Although it has often been criticized for performance and bloat, Rails continues its iterations with an ever-growing developer community and a huge ecosystem.

Remember, Rails is just a ruby gem. You installed it using this command: `gem install rails`.


### Why Rails
You may be wondering why should we use Rails over Node/Express for our backend?

Node has no rules. We can add packages at our leisure that perform common functionality for us (remember `body-parser`, `cors`, `express`, etc.?), but otherwise we have to write everything ourselves. It's also customary to use Node with a Mongo DB.

In addition, you might not find too many companies using Node for enterprise-size applications/websites yet. This is for a lot of reasons. There are theories that Rails apps scale better, but I've also heard the opposite is true. Some people don't like to use Mongo because unstructured data over time can become scary. In addition, Rails has been around a lot longer, and when those startups were building their apps, Rails was the best tool out there.

Rails also has a huge, huge community of enthusiasts that are known for their friendliness to beginners. Remember **Matz**? He's the creator of Ruby. There's an acronym in the Ruby community - MINASWAN. Everything Ruby and Rails is built for happiness. Another reason for choosing Rails is because it's easy to find Rails developers. There are lots of JS developers, but they might not be familiar with Node.

There are lots and lots of other options for backend frameworks besides Node & Rails. There's Django, Laravel, ASP.net, etc. etc.


---


## Part II: The main parts of a Rails app


### The path of a request in a Rails app
FE --> Router --> Controller --> Model --> DB --> Controller manipulates the data & sends it back to the FE as JSON


### Models
Remember when we defined the `entities` of an app (books, authors, library branches)? Those were our ruby classes. From there, we created many `instances` of each of those entities.  

In Rails, ruby classes are called `Models` and they represent one table each in our database.

So, what data goes in a model? The same info you would put in a ruby class - attributes and methods.


### Active Record   
`Active Record` (AR) is like the middleman between our `models` and our `SQL database`.

AR is a framework for `Object Relational Mapping`, a technique that connects the entities of an application (models) to tables in a relational database. What does that mean? AR makes our tables 'smart'. AR does the following:
- Represents models and their data.
- Configures associations between these models.
- Represents inheritance hierarchies through related models.
- Validates models before they get persisted to the database.
- Performs database operations in an object-oriented fashion.

Okay so what does any of that mean?

If you think about it, `models` don't perform any of these operations. Models just define the data that should be associated with each `entity`.

But databases also don't perform these functions. DBs just hold data for us, they don't manipulate it in any way.

We need something smart to do all these things for us. Active Record!!!


### Routes
In a Rails app, a request hits the `routes` first. Rails routes live in the `app/config/routes.rb` file.

Remember, `a verb + a path = a route`. It's the same format in Rails as it is in Node.

Let's say we wanted to define two routes (verb + path) in our app. The first one is 'GET' (verb) to '/unicorns' (path) that will show us all the unicorns in our database, and the second one is 'GET' to '/unicorns/:name' that would show us a single unicorn based on the name we give it.

Rails routes function the exact same way as they do in Node apps - they act as event listeners.

Specifying routes in the `routes.rb` file is easy, it looks like this:

```rb
get "/unicorns"
get "/unicorns/:name"
```

You define the verb + path combo you want to listen for, and when your app hears it, it will perform the code you specify.

More specifically, it will send the request to the correct `controller`. All we have to do is specify *which* controller to send it to, and *which method inside that controller* it should perform.

So, in this instance, our `routes.rb` file would look something like this:

```rb
  get "/unicorns"           =>    'unicorns#index'
  get "/unicorns/:name"     =>    'unicorns#show'
```

When you read the above lines, you should say to yourself:
"When my rails app receives a GET request to '/unicorns', look inside the `unicorns` controller for the `index` method."

Same thing with the 2nd request.


### Controllers
Controllers contain methods. These methods are only triggered when the router hears a request that specifies that method.

When our FE sends a specific request ('GET' to '/unicorns') to our BE, what do we want to happen? We want to send the request to the `unicorns` controller and perform the `index` method. The `index` method is the Rails way of saying 'show me all of one collection'. More on that later.

Similarly, when the BE receives a request for a 'GET' to '/unicorns/:name' ('/unicorns/liza'), the router will tell it to go to the `unicorns` controller and look in the `show` method for what to do.

In this case, our controller will look something like this:
```rb
def index
  render json: {'unicorns controller': 'this is a list of all unicorns'}
end

def index
  render json: {'welcome': 'this is data for a single unicorn'}
end
```

We're rendering dummy data above. Tomorrow we'll add in how to pull data from the DB.


---


### Where should logic go: Models vs. Controllers
In general, all of the logic that has to do with a class' behavior (let's say a Todo item) should live in the `model`. Perhaps a Todo item knows how to 'mark_complete', which sets a data attribute 'completed' to true.

A `controller`, on the other hand, should handle requests, parameters, sessions, data, cookies, etc.


---


### Resources:
- http://guides.rubyonrails.org/getting_started.html
- http://guides.rubyonrails.org/command_line.html

































#
