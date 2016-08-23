Rails.application.routes.draw do

  get "/books"                              => "books#index"
  get "/books/:id"                          => "books#show"
  get "/books/by-title/:title"              => "books#title"
  get "/books/by-author/:author"            => "books#author"
  get "/books/by-genre/:genre"              => "books#genre"
  get "/books/by-year-of-publication/:year" => "books#year"
  get "/books/by-publisher/:publisher"      => "books#publisher"
  post "/books/new"                         => "books#create"
  delete "/books/:id"                       => "books#destroy"
  put "/books/:id"                          => "books#update"

end
