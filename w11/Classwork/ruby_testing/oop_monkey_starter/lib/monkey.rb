class Monkey
attr_accessor :name, :species, :foods_eaten

  def initialize name, species
    @name = name.capitalize
    @species = Monkey
    @foods_eaten = ['']
  end

  def eat food
    @foods_eaten << foods
  end

  def introduce
     "Hi my name is #{@name}. I am a #{species} and I like to eat #{foods_eaten}"
  end
end
