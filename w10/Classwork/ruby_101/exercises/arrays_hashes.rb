
# Ruby arrays and hashes

# Do these in pry & write down your answers


# Array exercises:
# ---------------------------------- #

# - Create an array with 5 elements containing the names of students in WDI Robots and store it in a variable called `my_friends`.
# - Access friend #3.
# - Push or shovel another name into your array.
# - Remove the last one because you decided you don't like him/her anymore.
# - Ok, that's enough about arrays.

class_names = ['elena', 'hiro', 'shreiya', 'joe', 'dan']
class_names[2]
class_names.push('nate')
class_names.delete('nate')



# Hash exercises:
# ---------------------------------- #
# - Create a hash `my_hobbies` with three keys: most_favorite, middle_favorite, last_favorite.
# - Access each of the three values individually.
# - Return all of the keys from the hash & store in a variable `keys`
# - Return all of the values from the hash & store in a variable `values`
# - Add a hobby to the end of your hash
# - Now delete that hobby because you decided you hate that hobby.


my_hobbies = {most_favorite: 'bass', middle_favorite: 'singing', last_favorite: 'beach'}
my_hobbies[:most_favorite]
my_hobbies.key[:most_favorite]
