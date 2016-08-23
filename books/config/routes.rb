Rails.application.routes.draw do

  # Book Routes
    # all books
    get "/books"                                => "books#index"
    # will fetch a book by id
    get "/books/:id"                            => "books#book_by_id"
    # will send the book with that title.
    get "/books/by-title/:title"                => "books#book_by_title"
    # will send the book by that author
    get "/books/by-author/:author"              => "books#book_by_author"
    # will send all books of that genre
    get "/books/by-genre/:genre"                => "books#book_by_genre"
    # will send all books published in the given year
    get "/books/by-year-of-publication/:year"   => "books#book_by_year"
    # will send all books published by a given publishing house
    get "/books/by-publisher/:publisher"        => "books#book_by_publisher"
    # will add a new book to your array of sample data (see below)
    post "/books/new"                           => "books#create"
    # will delete that book
    delete "/books/:id"                         => "books#destroy"
    # will update that book
    put "/books/:id"                            => "books#update"

end
