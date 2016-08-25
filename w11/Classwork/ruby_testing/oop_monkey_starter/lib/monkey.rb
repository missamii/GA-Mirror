class Monkey
attr_accessor :name, :species, :foods_eaten

<<<<<<< HEAD
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
=======
  attr_accessor :name, :species, :foods_eaten
  def initialize name, species
    @name = name.capitalize
    @species = species
    @foods_eaten = []
  end

  def eat food
    @foods_eaten << food
  end

  def introduce
    "Hi my name is #{@name}. I am a #{@species} and I like to eat #{@foods_eaten}."
>>>>>>> 5e126ee6666c5d65758cefaf6538f218e1d37780
  end
end
