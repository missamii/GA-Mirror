
# Ruby loops & iterators

# Exercise:
# ---------------------------------- #

num_arr = [1,2,3]

num_hash = {
  purple_rain: 22,
  pangolins: 29,
  robots: 24
}

# - `each` over num_arr and puts each element
eacharr = num_arr.each do |arr|
  arr += 1
end

# - `each with index` over num_arr & puts each el & its index
num_arr.each.with.index do |el, index|
  puts "num_arr: #{el}"
  puts "index #{index}"

# - `map` over num_arr, adding 2 to each element

# - 'each' over num_hash & puts each key/val pair as a single entity

# - 'each' over num_hash & puts each key/val pair separately
