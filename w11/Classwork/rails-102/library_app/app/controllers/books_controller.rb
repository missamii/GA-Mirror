class BooksController < ApplicationController

  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.where(title: params[:title])
    # render json: book[0].author
    render json: book
  end

  def create
    # Add new book with specific author ID & genre ID
    new_book = Book.new(title: params[:title], year_pub: params[:year_pub], retail_price: params[:retail_price])

    new_book.author = Author.find(params[:author_id])
    new_book.genres << Genre.find(params[:genre_id])

    if new_book.save
      render json: new_book
    else # otherwise render an error because we messed up.
      render json: {'error': new_book.errors}
    end

  end

  def update
    found_book = Book.where(title: params[:title])
    updated = found_book.update(title: params[:newTitle], year_pub: params[:year_pub], retail_price: params[:retail_price])

    if updated
      render json: updated
    else
      render json: {'error': updated.errors}
    end
  end

  def destroy
    Book.delete_all(title: params[:title])
    render json: {'book': 'deleted'}
  end

end
