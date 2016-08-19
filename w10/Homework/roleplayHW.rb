class Being #the first class starts it all off!
  #a list of symbols
  attr_accessor :spieces, :gender, :level, :hp, :max_hp, :current_hp

  @@count = 0

  def initialize( opts = {} )
    # variables start here
    @spieces = opts[:spieces]
    @gender = opts[:gender]
    @level = opts[:level] || 1
    @hp = opt[:hp] || 5
    @current_hp =  @hp * @level
    @max_hp = @current_hp
    @@count += 1
    @id = @@count
    puts opts
  end #end of the ruby function

def self.count
   return @@count
 end

 def damage(hp) #another function
    @current_hp = @current_hp - hp
    if @current_hp <= 0
      self.die
    else
      return @current_hp
    end
  end

  def die
    puts "Oh no! the #{@species}, has died!"
  end
end

  class NPC < Being #start the class in class
    @name = opts[:name]
    @professions = opts[:professions] || ["fighter", "thief", "wizard", "ranger", "baker", "butcher", "candlestick maker"].sample
    @bankroll = opts[:bankroll] || @@random.rand(10..20)
    @inventory = opts[:inventory] || []
    super
  end
end #end class in a class
#I did a lot of video watching. Online reading, and asking questions. Also I have a book on Ruby I am reading. This took me hours to get up to. Though it's not completed all the way. I feel happy that I have this a shot.
