Rails.application.routes.draw do

  get "/book"                              => "book#index"
  get "/book/:id"                          => "book#show"
  get "/book/by-title/:title"              => "book#title"
  get "/book/by-author/:author"            => "book#author"
  get "/book/by-genre/:genre"              => "book#genre"
  get "/book/by-year-of-publication/:year" => "book#year"
  get "/book/by-publisher/:publisher"      => "book#publisher"
  post "/book/new"                         => "book#create"
  delete "/book/:id"                       => "book#destroy"
  put "/book/:id"                          => "book#update"

end
