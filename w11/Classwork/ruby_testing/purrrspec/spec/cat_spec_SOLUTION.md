require_relative '../cat'

RSpec.describe Cat do
  before :each do
    @cat = Cat.new
  end

# should confirm that running Cat.new will
# successfully create a new object that's an instance of Cat
# it shouldn't have any feelings or sayings yet
  describe '#new' do
    it 'should take no arguments and return a cat object with no feelings or sayings yet' do
      expect(@cat).to be_an_instance_of Cat
      expect(@cat.feeling).to equal(nil)
      expect(@cat.saying).to equal(nil)
    end
  end

# should confirm that running Cat.is_asleep_at [time] will
# set Cat.saying to "meow" and return false if time = 4
# return true if time != 4
  describe '#is_asleep_at' do
    it 'should set @saying to "meow and return false if time = 4; return true otherwise"' do
      @wakey = @cat.is_asleep_at 4
      expect(@wakey).to equal(false)
      expect(@cat.saying).to eq('meow')
      @sleepy = @cat.is_asleep_at 5
      expect(@sleepy).to equal(true)
    end
  end

#should confirm that running Cat.rub_belly 3 times will have Cat.saying = "purr" and Cat.feeling = "happy". Continuing to run Cat.rub_belly should have Cat.saying = "hiss" and Cat.feeling = "angry"
  describe '#rub_belly' do
    it 'should return feeling = happy and saying = purr 3 times and then piss off the cat' do
      3.times do
        @cat.rub_belly
        expect(@cat.saying).to eq('purr')
        expect(@cat.feeling).to eq('happy')
      end
      @cat.rub_belly
      expect(@cat.saying).to eq('hiss')
      expect(@cat.feeling).to eq('angry')
    end
  end

  describe '#is_better_than_dog' do
    it 'should always return false' do
      @falsey = @cat.is_better_than_dog
      expect(@falsey).to equal(false)
    end
  end
end
