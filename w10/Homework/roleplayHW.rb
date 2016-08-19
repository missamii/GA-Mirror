# I will prompt a question to start the game, puts ""

class Being
  attr_accessor :spieces, :gender, :level, :hp, :max_hp, :current_hp

  @@count = 0

  def initialize( opts = {} )
    @spieces = opts[:spieces]
    @gender = opts[:gender]
    @level = opts[:level] || 1
    @hp = opt[:hp] || 5
    @current_hp =  @hp * @level
    @max_hp = @current_hp
    @@count += 1
    @id = @@count
    puts opts
end

def self.count
   return @@count
 end

 def take_damage(hp)
    @current_hp = @current_hp - hp
    if @current_hp <= 0
      self.die
    else
      return @current_hp
    end
  end

  def die
    puts "#{@species}, the species has died!"
  end

end
