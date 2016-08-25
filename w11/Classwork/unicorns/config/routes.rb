Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#FORUMLA:
#verb "/path" => 'controller#method'

#ROOT ROUTES ('www.tiffany-lo.net/')
# root "welcome#index"

# WELCOME ROUTES
# get "/welcome/index" => 'welcome#index'
# get "/about-us" => "welcome#about_us"
# get "/contact" => "welcome#contact"
# get "welcome/tiffany" => "welcome#tiffany"

#UNICORN ROUTES
  get "/unicorns" => "unicorns#index"
  get "/unicorns/:name" => "unicorns#show"
  post "unicorns/new" => "unicorns#create"
  put "/unicorns/:name" => "unicorns#update"
  delete "/unicorns/:name" => "unicorns#destroy"

end
