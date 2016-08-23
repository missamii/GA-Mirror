Rails.application.routes.draw do

  get "/books"                              => "book#index"
  get "/books/:id"                          => "book#show"
  get "/books/by-title/:title"              => "book#title"
  get "/books/by-author/:author"            => "book#author"
  get "/books/by-genre/:genre"              => "book#genre"
  get "/books/by-year-of-publication/:year" => "book#year"
  get "/books/by-publisher/:publisher"      => "book#publisher"
  post "/books/new"                         => "book#create"
  delete "/books/:id"                       => "book#destroy"
  put "/books/:id"                          => "book#update"

end
