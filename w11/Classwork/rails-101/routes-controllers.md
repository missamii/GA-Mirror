
# Rails - Routes and Controllers lesson

Lesson Objectives:
- Review purpose of controllers & routes
- Review connection between controllers & routes
- 5 deadly routes & CRUD in Rails
- Make Rails cheatsheet as we go
- Learn the `rails new` command
- Learn the `rails generate` command
- Learn how to use Postman to test out API calls
- Make demo api app that receives incoming requests and routes to correct controller
- Learn how to use a Welcome controller
- Learn how to set the 'root' route of your app
- Learn how to make custom routes
- Compare Node backend to Rails backend
- Learn how to send requests using params


---


### Recap:
- Roles: DB, models, AR, controller, routes
- Path of a request in Rails
- Connection between Routes and Controllers


---


### 5 deadly routes
Index, Show, Create, Update, Destroy

**Index:** Shows us all instances of one entity, such as all unicorns, in our DB. By default this is a GET request.

**Show:** Shows us a single instance of an entity, such as a single unicorn. By default this is a GET request.

**Create:** This is like '/new' in Node - this is the method we want to activate when the FE sends over the data for a new unicorn. By default this is a POST request.

**Update:** This is the method we want to activate when our FE sends over updated data for a single unicorn. By default this is a PUT request.

**Destroy:** This is the method that we want to activate when our FE sends over data for which unicorn to destroy. By default this is a DELETE request.


---


### Hooray my_first_rails_app
- **Rails new:** `rails new <app_name> --api`
- **Startup your Rails server:** `rails server`
- Navigate to `localhost:3000`
- Hooray!


---


**Stahp.** Create your rails app & see it in the browser.


---


### Design your routes
Before we go further, let's take a moment to design out our routes. We know we need 5, so let's talk about the URL we want the user to navigate to and what we want to happen when they get there.


---


### Unicorns Controllers
The command to generate a new controller is:
- **`rails generate controller <ControllerName>`**
- Example: `rails generate controller Unicorns`

What does this do?
- Generates a `Unicorns Controller` for us
- Also generates tests for this model, which we don't care about right now.

How do we undo it?
- `rails destroy controller Unicorns`

Naming conventions for controllers:
- Rails prefers pluralization of the last word in the controller's name. Examples:
- `ClientsController` is preferable to `ClientController`
- `SiteAdminsController` is preferable to `SiteAdminController` or `SitesAdminsController`
- An exception is `ApplicationController`

(Advanced) Creating a controller with associated actions:
- `rails generate controller Unicorns index show create update destroy`


### Unicorns Routes
Let's make our first routes for unicorns! `/app/config/routes.rb`


---


**Stahp.** Generate your unicorn controller and make a few routes & corresponding controller methods.


---


### Welcome controller & random routes
What is the Welcome controller?

Let's say we want to create the routes 'about-us', 'contact', 'team-members', or 'tacos'.

Those don't have anything to do with CRUD, or with entities in our database, they're just one-off routes. We can put those in the Welcome controller.


---


**Stahp.** Create a welcome controller and create a few random routes.


---


### Parameters
**Reminder:** There are two kinds of `parameters` possible in a web application. The first are parameters that are sent as part of the URL, called `query string parameters`. The query string is everything after "?" in the URL: `www.mywebsite.com?user=1` -or- a variable in the URL: `/users/:id`

The second type of parameter is usually referred to as `POST data`. This information usually comes from an HTML form which has been filled in by the user. It's called POST data because it can only be sent as part of HTTP POST, PUT or DELETE requests through the request body. GET requests by default ignore any data you try to send with it in the request body. They can, however, send data through query strings in the URL.

Rails does not make any distinction between `query string parameters` and `POST parameters`, and both are available in the `params hash` in your controller.

In Rails, `params` is a hash containing the name of the controller, the specific action (or method), and the data you sent. It looks like this by default:


```ruby
{
  controller: welcome,
  action: about_us,
  yourData: { name: acme, address: 123 Carrot Street }, # via post data
  name: 'liza' # if sent via params
}
```


---


**Stahp.** Let's test out the two types of params with Postman.


---


### FYI: Application Controller

So what is the **Application Controller** that appears automatically with the `rails new` command? We won't be using it today, but it's good to know.

`ApplicationController` inherits from `ActionController::API`, which holds all of your rails routing logic with the public methods. The reason most people have an application controller, **which all other controllers inherit from**, is because it's a central place to handle things like ensuring users are logged in, request forgery stuff, filtering Params. Like any type of Ruby inheritance, it handles stuff you generally want all of your controllers to do.

From our special guest Alex who's coming in next week to talk about an enterprise-level Ruby app in production: "We use it to handle 404s, authentication, time zones, all that stuff."














#
