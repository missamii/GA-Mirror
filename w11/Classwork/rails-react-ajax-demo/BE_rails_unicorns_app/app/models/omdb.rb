class Omdb

  def self.make_call
    return HTTParty.get('http://www.omdbapi.com/?t=titanic+&y=&plot=short&r=json')
  end

end
