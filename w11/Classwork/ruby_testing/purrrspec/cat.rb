# REVIEW THIS CLASS THOROUGHLY BEFORE WRITING TESTS !!
# I HIGHLY ADVICE YOU TO PASTE THIS CODE IN PRY, MAKE A NEW CAT, AND TRY RUNNING ALL THE METHODS FIRST BEFORE YOU WRITE TESTS

class Cat
  attr_reader :feeling, :saying

  def initialize
    @belly_rubs = 0
  end

  def possible_emotions
    ["happy", "angry"]
  end

  def is_asleep_at time
    if time == 4
      @saying = "meow"
      return false
    else
      return true
    end
  end

  def rub_belly
    @belly_rubs = @belly_rubs + 1
    if @belly_rubs > 3
      @feeling = possible_emotions.last
      @saying = "hiss"
    else
      @feeling = possible_emotions.first
      @saying = "purr"
    end
  end

  def is_better_than_dog
    false
  end
end
