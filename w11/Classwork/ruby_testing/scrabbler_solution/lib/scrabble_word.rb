class ScrabbleWord
  attr_reader :word, :current_score

  # Make a class var bc available to the class
  @@letter_scores = {
    a: 1, b: 3, c: 3, d: 2, e: 1,
    f: 4, g: 2, h: 4, i: 1, j: 8,
    k: 5, l: 1, m: 3, n: 1, o: 1,
    p: 3, q: 10, r: 1, s: 1, t: 1,
    u: 1, v: 4, w: 4, x: 8, y: 4,
    z: 10
  }

  def initialize(word)
    @word = word.downcase
  end

  def score
    @current_score = 0

    @word.split('')
    

    @word.each_char do |letter|
      @current_score += @@letter_scores[letter.to_sym]
    end

    return @current_score
  end

  def multiplier_score(multiplier)
    # if we use @current_score before we run the `score` method
    # it might not yet have calculated the score.
    # This way, we calculate it ourselves
    self.score * multiplier
  end

end
