class BookController < ApplicationController

  @@data = [
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
    ]
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
    publisher: "HarperPenguinRandomHouse"
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
    publisher: "Super Syed-an Books"
    genres: [
      "fantasy",
      "biography",
      "reference",
      "cooking"
    ]
  }
]
# I am really not sure I went about this correctly. :|
def index
  render json: {"Book Controller": @@data}
end

def show
  render json: {"Book controller": @@data[params[:id].to_i]}
end

def title
   render json: {"Book controller": params[:title]}
end

def author
   render json: {"Book controller": params[:author]}
end

def genre
   render json: {"Book controller": params[:genre]}
end

def year
   render json: {"Book controller": params[:year]}
end

def publisher
   render json: {"Book controller": params[:publisher]}
end

def create
   render json: {"Book Controller": params[:create]}
 end

 def destroy
   render json: {"Book Controller": params[:destroy]}
 end

 def update
   render json: {"Book Controller": params[:update]}
 end

end
