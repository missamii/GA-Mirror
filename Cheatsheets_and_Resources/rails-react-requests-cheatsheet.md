# AJAX in Rails



### Configuring Rails to receive requests from a React FE

1- Change your react port

Both Rails API & React (using react create app) listen on port 3000, but only one app at a time can have that port. How do we fix that?

Start up your rails server as normal, then try to start up your react server. Follow the prompt :)


2- Enabling CORS in Rails

The next thing we have to do is enable CORS in your rails app. Go to your gemfile and uncomment the rack-cors gem, then bundle.


3- Configure Rails

Finally, we need to configure Rails to accept requests from anybody. Go to `config/initializers/cors.rb` and uncomment the code (not the comments. So, everything beginning with `Rails.application`). Then, delete `example.com` and replace it with `*`.  


---


### Making calls to external APIs in Rails
- Install the `httparty` gem in your Rails app
  - This is like the `request` package in node
- (If necessary) Create new route with corresponding controller and model. For example, a `post` to '/omdb' that performs the `trigger_omdb_api` method in the `omdb` controller.
- *Important:* This model will not inherit from AR and will not need a table in the DB. So instead of using the `rails generate model` command, you can just manually touch a new model file.





---


### Environment Variables in Rails

- Place your env vars in your bash profile
- Access them in Rails using `ENV["marvel_api_key"]`




















#
