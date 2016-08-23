# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a1 = Author.create(firstname: 'liza', lastname: 'ramo')
a2 = Author.create(firstname: 'ethan', lastname: 'friedman')
a3 = Author.create(firstname: 'alana', lastname: 'ramo')

b1 = Book.create(title: 'gone with the wind', year_pub: 1882, retail_price: 1.99, author_id: 1)
b2 = Book.create(title: 'the golden compass', year_pub: 1992, retail_price: 1.99, author_id: 2)
b3 = Book.create(title: 'moby dick', year_pub: 1999, retail_price: 1.99, author_id: 3)

g1 = Genre.create(name: 'romance')
g2 = Genre.create(name: 'comedy')
g3 = Genre.create(name: 'horror')

# add associations - g2 empty on purpose
b1.genres.push(g1, g3)
b2.genres.push(g1)
b3.genres.push(g3)
