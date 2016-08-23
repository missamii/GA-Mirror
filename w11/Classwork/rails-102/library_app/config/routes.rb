Rails.application.routes.draw do

  # AUTHORS ROUTES
  get     '/authors'                    =>    'authors#index'
  get     '/authors/:firstname'         =>    'authors#show'
  post    '/authors/new'                =>    'authors#create'
  put     '/authors/:firstname'         =>    'authors#update'
  delete  '/authors/:firstname'         =>    'authors#destroy'
  # nested route: books index route under an author
  get     '/authors/:firstname/books'   =>    'authors#books_by_author'

  # BOOKS ROUTES
  get     '/books'            =>    'books#index'
  get     '/books/:title'     =>    'books#show'
  post    '/books/new'        =>    'books#create'
  put     '/books/:title'     =>    'books#update'
  delete  '/books/:title'     =>    'books#destroy'


  # GENRES ROUTES
  get     '/genres'             =>    'genres#index'
  get     '/genres/:name'       =>    'genres#show'
  post    '/genres/new'         =>    'genres#create'
  put     '/genres/:name'       =>    'genres#update'
  delete  '/genres/:name'       =>    'genres#destroy'
  # nested: see all books in a specific genre
  get     '/genres/:name/books' =>    'genres#books_in_genre'
end
