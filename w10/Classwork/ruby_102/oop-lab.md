# Ruby 102 lab

1- Explain the relationship between `.new` and `def initialize`.

2- What is the difference between `instance` and `class methods`? Give an example from the lesson.

3- Given this class, rewrite the getter & setter methods the shorter way (attr_):


```ruby
class Robot

  def initialize(name, model_num)
    @name = name
    @model_num = model_num
  end

  def get_my_name
    return @name
  end

  def get_my_model_num
    return @model_num
  end

  def change_my_name(new_name)
    @name = new_name
  end

end
```

4- Create a `Vehicle` class
- Initialize method:
  - Enable the class to be initialized with a `type`, a `color` & `fuel_level`, which has a default of 0.
  - Some options for types could be: truck, car, motorcycle, etc.
  - When initialized, the instance speaks its `type`, `color`, `fuel_level`
- Make it so that you can `get` and `set` all 3 of the above variables.
- Create the following methods:
  - (each of these methods take a parameter `speed`):
    - `accelerate` - increments `fuel_level`
    - `decelerate` - decrements `fuel_level`
  - `honk` - Makes the car beep.
  - Each take a car part as a parameter:
    - `something_broke`: when called, says what car part is broken
    - `car_shop`: when called, says what car part is being fixed.
- The end.
























#
