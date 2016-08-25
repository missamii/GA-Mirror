class ScrabbleWord
  attr_reader :word
<<<<<<< HEAD

  def initialize word
    @@score = {a: 1, b: 3, c: 3, d: 2, e: 1,
              f: 4, g: 2, h: 4, i: 1, j: 8,
              k: 5, l: 1, m: 3, n: 1, o: 1,
              p: 3, q: 10, r: 1, s: 1, t: 1,
              u: 1, v: 4, w: 4, x: 8, y: 4,
              z: 10
              }
    @word = word.downcase

    def scrabble_score
      total = 0
      @word.each_char do |ltr|
        total += @@scrabble_score[ltr.to_sym]
      end
        return total
    end
  end
=======
  @@letter_scores = {
    a: 1, b: 3, c: 3, d: 2, e: 1,
    f: 4, g: 2, h: 4, i: 1, j: 8,
    k: 5, l: 1, m: 3, n: 1, o: 1,
    p: 3, q: 10, r: 1, s: 1, t: 1,
    u: 1, v: 4, w: 4, x: 8, y: 4,
    z: 10
  }

  def initialize word
    @word = word.downcase

  end

  def score
    score = 0
    @word.each_char do |ltr|
      score += @@letter_scores[ltr.to_sym]
    end
    score
  end

>>>>>>> 5e126ee6666c5d65758cefaf6538f218e1d37780
end
