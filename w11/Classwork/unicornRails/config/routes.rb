Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/unicorns" => "unicorns#index"
  get "/unicorns/:name" => "unicorns#show"
  post "unicorns/new" => "unicorns#create"

end
