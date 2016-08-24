class GenresController < ApplicationController

  def index
    genres = Genre.all
    render json: genres
  end

  def show
    genre = Genre.where(name: params[:name])
    render json: genre
  end

  def create
    new_genre = Genre.new(name: params[:name])

    if new_genre.save
      render json: new_genre
    else # otherwise render an error because we messed up.
      render json: {'error': new_genre.errors}
    end
  end

  def update
    found_genre = Genre.where(name: params[:name])
    updated = found_genre.update(name: params[:newName])

    if updated
      render json: updated
    else
      render json: {'error': updated.errors}
    end
  end

  def destroy
    Genre.delete_all(name: params[:name])
    render json: {'genre': 'deleted'}
  end

  def books_in_genre
    genres_array = Genre.where(name: params[:name])
    books_in_genre = genres_array[0].books
    render json: books_in_genre
  end

end
