# Rails cheatsheet


### Getting started:
- `rails new <app_name> --api`
- `cd app_name`
- `rails server` --> localhost:3000
- See happy people

### Gemfile
- Require your gems: `pry-rails` and `awesome_print`
- Run `bundle install` after every gem addition

### Generate models:
- `rails generate model Unicorn`
- This command generates a model file & a corresponding migration file
- Naming conventions: capital, singular
  - --> AR takes name of model & turns it into lowercase plural
- Fill out model files with associations

### Migration files
- Generates cols in our table
- Fill in our models attributes
- AR data types:
  - t.string
  - t.integer
  - t.date
  - t.timestamps
  - t.references # the many table of a 1:m relationship
  - many many more

### Seed file
- Dummy data

### Rake our db
- `rake db:create` - creates our db
- `rake db:migrate` - reads migration file, creates tables, creates cols
- A migration file is only read once (unless you drop your db and redo)
- `rake db:seed`
- *Note:* in R5 you might see `rails` instead of rake
- `rake db:drop`

### See DB in terminal
- `rails console`
- `Unicorn.all`

### Create controller:
- `rails generate controller <Unicorns>`
- `rails generate controller <SiteAdmins>`
- OR `rails destroy controller <Unicorns>`
- Depending on the relationship, assign/push into array

### Create routes & corresponding controller methods
- In `config/routes.rb`
- `app/controllers/unicorns_controller.rb`

### Controller methods:
- Index, show, update, create, destroy

### Fill out CRUD in controller methods
- `Model` - Capital singular model name in controller = table in db
- Index method: use Tablename.all
- Show method: `unicorn = Unicorn.where(name: params[:name])`
- Create method: `.new`
- Update method: `.update`
- Destroy: `.delete`, `.destroy`, `.destroy_all`, `.delete_all`
- Destroy vs. delete:
  - Delete - simply remove the row(s) from the DB
  - Destroy - remove rows & perform any callbacks

### Validations
- Validations must go in the model
- presence, numericality, length, uniqueness

### Nested routes
- `/authors/liza/books`

















#
