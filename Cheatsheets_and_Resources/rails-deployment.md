# Deploying your Rails BE on Heroku


### Sources
- Heroku docs: https://devcenter.heroku.com/articles/getting-started-with-rails5
- Deployed Unicorns: https://stark-wildwood-43150.herokuapp.com


### Notes:
- This is only how to push your Rails BE to Heroku; you'll be pushing your React FE separately to Heroku the same way you did for P3.
- Your Rails BE will have its own separate repo from the FE.
- Your BE will have two `origins` (not branches): `origin` (GH) and `heroku`.


### Change your DB from sqlite to pg
- In your Gemfile, comment out `gem 'sqlite3'`
- Add `gem 'pg'`
- Bundle
- In `config/database.yml`, comment out everything and add this instead:

```ruby
default: &default
  adapter: postgresql
  encoding: unicode
  # For details on connection pooling, see rails configuration guide
  # http://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
```


### Specify ruby version
- Run `rbenv versions` to see which version of ruby you're running
- At the very end of the gemfile, specify that ruby version. It should look something like this on its own line:
  - `ruby "2.3.1"`


### Deploy
- `cd` into the BE directory
- `heroku create`
- add, commit
- `git push heroku master`


### Perform your DB migrations
- Heroku has its own command to rake:
  - `heroku run rake db:migrate`


### Helpful Heroku commands:
- `heroku open` -> opens the heroku url from your terminal
- `heroku logs`
- `heroku run rails console`


### Additional security
Remember when you configured Rails to accept requests from your React FE and you had to change some things in `config/initializers/cors.rb`? Now, instead of allowing `*` anybody to AJAX to your BE, you can change it to the URL of your hosted FE.










#
