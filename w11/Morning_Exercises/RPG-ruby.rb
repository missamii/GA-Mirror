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

# I think I'm hard coding hard playable characters. Still not getting this ruby syntax. @_@
class NPC < Being
  @professions = ["butcher"]
  @@firstnames = ["Tim"]
  @@lastnames = ["Ark"]
  @species = ["Elf"]
  super species, gender, level, hp_multiplier, max_hp, current_hp, stats
end

  def initialize species, gender, level = 1, hp_multiplier = 10, max_hp = level * hp_multiplier, current_hp = max_hp, stats = {}, name = @@firstnames.sample + " " + @@lastnames.sample, profession = @@professions.sample, inventory = [], bankroll = rand(10...20)
    @profession = profession
    @name = name
    @inventory = []
    @bankroll = bankroll
    super species, gender, level, hp_multiplier, max_hp, current_hp, stats
  end

  def buy item
    if self.check_bankroll item.value
      @bankroll -= item.value
      self.receive item
      return true
    else
      return nil
    end
  end

  def receive item
    @inventory << item
  end

  def sell item
    if self.check_inventory item
      @bankroll += item.value
      self.give item
      return true
    else
      return nil
    end
  end

  def give item
    if self.check_inventory item
      @inventory.delete_if { |i| i.name === item.name }
      return item
    else
      return nil
    end
  end

  private
  def check_bankroll amount
    amount <= @bankroll
  end

  def check_inventory item
    @inventory.find_index { |i|
      i.name === item.name
    }
  end
end

class Item
  attr_reader :name, :value

  def initialize name, value = 0
    @name = name
    @value = value
  end
end

class Weapon < Item
  attr_reader :damage

  def initialize name, damage = 0, value = 0
    @damage = damage
    super name, value
  end
end
