Rails.application.routes.draw do

  # FORMAT:
  # verb "/path" => "controller#index"

  # ROOT ROUTE (GET '/')
  root    "welcome#index"

  # WELCOME ROUTES
  get     "/about-us"           =>      "welcome#about_us"
  get     "/contact"            =>      "welcome#contact"
  get     "/welcome/liza"       =>      "welcome#liza"

  # UNICORNS ROUTES
  get     "/unicorns"           =>      "unicorns#index"
  get     "/unicorns/:name"     =>      "unicorns#show"
  post    "/unicorns/new"       =>      "unicorns#create"
  put     "/unicorns/:name"     =>      "unicorns#update"
  delete  "/unicorns/:name"     =>      "unicorns#destroy"

  # API ROUTES
  post     "/omdb"               =>      "omdb#trigger_omdb_api"
  post     "/marvel"             =>      "marvel#trigger_marvel_api"

end
