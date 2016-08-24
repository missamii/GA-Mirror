require_relative '../cat'

RSpec.describe Cat do

# should create a new instance of Cat before running each test.
  before :each do
  end

# should confirm that running Cat.new will
# successfully create a new object that's an instance of Cat
# it shouldn't have any feelings or sayings yet
  describe '#new' do
  end

# should confirm that running Cat.is_asleep_at [time] will
# set Cat.saying to "meow" and return false if time = 4
# return true if time != 4
  describe '#is_asleep_at' do
  end

#should confirm that running Cat.rub_belly 3 times will have Cat.saying = "purr" and Cat.feeling = "happy". Continuing to run Cat.rub_belly should have Cat.saying = "hiss" and Cat.feeling = "angry"
  describe '#rub_belly' do
  end

#should confirm that running Cat.is_better_than_dog will always return false
  describe '#is_better_than_dog' do
  end
end
