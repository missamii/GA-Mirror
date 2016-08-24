class Author < ApplicationRecord
  # Setup 1:m association
  # When delete an author, delete all its books too 
  has_many :books, dependent: :destroy
end
