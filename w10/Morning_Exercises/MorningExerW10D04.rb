# I want a method that can sort out the mean of numbers. The sum of an array divided by their count.

# .count or .length ?

num_arr = [1, 2, 3, 5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

def mean num_arr
  arr.each do |x|
    sum += x
  end
  sum.to_f / Float(arr.length)
end


# I want a method that can sort out the median of numbers. This method should

def median num_arr
  num_arr.sort!
  if mid % 2 === 0
    return mean [num_arr[mid - 1].to_f num_arr[mid]]
  else
    return num_arr
  end
end

# finding the mode
def mode num_arr, hash = Hash.new(0)
  num_arr.each do |x|
    Hash.new|x| += 1
  end
  count = 0
  modes = []
  hash.each do |key, val|
    if val > count
      count = val
      modes = [key]
    elsif val == count
      modes << key
    end
    modes
end
