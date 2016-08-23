class Being
  attr_reader :species, :gender, :id
  @@count = 0

  def initialize species, gender, level = 1, hp_multiplier = 10, max_hp = level * hp_multiplier, current_hp = max_hp, stats = {}
    @species = species
    @gender = gender
    @level = level
    @hp_multiplier = hp_multiplier
    @current_hp = current_hp
    @max_hp = max_hp
    @stats = stats
    @id = @@count
    @@count += 1
  end

  def sex_change_operation new_gender
    @gender = new_gender
  end

  def heal hp
    @current_hp += [ hp , @max_hp - @current_hp ].min
  end

  def take_damage hp
    @current_hp -= [hp, @current_hp].min
    self.die if @current_hp <= 0
  end

  def die
    puts "See you in the next spawn!"
  end

  def Being.count
    @@count
  end
end

class NPC < Being
  @@professions = ["butcher", "tavern-keeper", "thief", "blacksmith",
  "guard", "doctor", "lord"]
  @@firstnames = ["Baba", "Joe", "Mimi", "Elena"]
  @@lastnames = ["Rabinowitz", "Kang", "Lo", "Merrell"]

  def initialize species, gender, level = 1, hp_multiplier = 10, max_hp = level * hp_multiplier, current_hp = max_hp, stats = {}, name = @@firstnames.sample + " " + @@lastnames.sample, profession = @@professions.sample, inventory = [], bankroll = rand(10...20)
    @profession = profession
    @name = name
    @inventory = []
    @bankroll = bankroll
    super species, gender, level, hp_multiplier, max_hp, current_hp, stats
  end
end
