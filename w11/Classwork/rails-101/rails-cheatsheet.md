# Rails cheatsheet

Routes:
- Index, show, update, create, destroy


Get started
- `rails new <app_name> --api`
- `cd app_name`
- `rails server` --> localhost:3000
- See happy people
- Create controller:
  - `rails generate controller <Unicorns>`
  - `rails generate controller <SiteAdmins>`
  - OR `rails destroy controller <Unicorns>`
- Create routes & corresponding controller methods
  - `config/routes.rb`
  - `app/controllers/unicorns_controller.rb`
