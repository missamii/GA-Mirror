class AuthorsController < ApplicationController

  def index
    # render json: {'authors controller': 'INDEX'}
    authors = Author.all
    render json: authors
  end

  def show
    author = Author.where(firstname: params[:firstname])
    render json: author
  end

  def create
    new_author = Author.new(firstname: params[:firstname], lastname: params[:lastname])
    if new_author.save
      render json: new_author
    else # otherwise render an error because we messed up.
      render json: {'error': new_author.errors}
    end

  end

  def update
    found_author = Author.where(firstname: params[:firstname])
    updated = found_author.update(firstname: params[:newFirstname], lastname: params[:lastname])

    if updated
      render json: updated
    else
      render json: {'error': updated.errors}
    end
  end

  def destroy
    authors_array = Author.where(firstname: params[:firstname])
    authors_array.each do |author|
      author.destroy
    end
  end

  def books_by_author
    authors_array = Author.where(firstname: params[:firstname])
    author_books = authors_array[0].books
    render json: author_books
  end

end
