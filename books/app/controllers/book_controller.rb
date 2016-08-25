class BookController < ApplicationController

def index
  render json: data
end

def show
  render json: data.select{|b| b[:id] == params[:id].to_i}.first
end

def title
   render json: data.select{|b| b[:title] == params[:title]}.first
end

def author
   render json: data.select{|b| b[:author] == params[:author]}.first
end

def genre
   render json: data.select{|b| b[:genres].include?(params[:genre])}
end

def year
   render json: data.select{|b| b[:year] == params[:year].to_i}
end

def publisher
   render json: data.select{|b| b[:publisher] == params[:publisher]}
end

def create
  books = data
  new_book = {
    id: books.size+1,
    title: params[:title],
    author: params[:author],
    year: params[:year].to_i,
    genres: params[:genres],
    publisher: params[:publisher]
  }
  books << new_book
   render json: books
end

 def destroy
   render json: {"Book Controller": params[:destroy]}
 end

 def update
   render json: {"Book Controller": params[:update]}
 end
private
def data
  [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "JK Rowling",
    year: 1997,
    genres: [
      "children",
      "fantasy"
    ],
    publisher: "Scholastic"
  },
  {
    id: 2,
    title: "Profiles in Courage",
    author: "John F. Kennedy",
    year: 1957,
    genres: [
      "biography",
      "politics"
    ],
    publisher: "Harper & Brothers"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genres: [
      "science fiction"
    ],
    publisher: "Arrakis Press"
  },
  {
    id: 4,
    title: "A Brilliant Book",
    author: "Ethan Friedman",
    year: 2017,
    genres: [
      "science fiction",
      "politics"
    ],
    publisher: "Scholastic"
  },
  {
    id: 5,
    title: "Liza's pretty good book",
    author: "Liza Ramo",
    year: 1965,
    publisher: "HarperPenguinRandomHouse",
    genres: [
      "biography",
      "childrens"
    ]
  },
  {
    id: 6,
    title: "Syed's also pretty okay book",
    author: "Syed Salahuddin",
    year: 1997,
    publisher: "Super Syed-an Books",
    genres: [
      "fantasy",
      "biography",
      "reference",
      "cooking"
    ]
  }
]
  end
end
