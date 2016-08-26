class OmdbController < ApplicationController

  def trigger_omdb_api
    data = OMDB.make_call

    title = params[:title]
    puts "TITLE!:", title
    data = HTTParty.get("http://www.omdbapi.com/?t=#{title}+&y=&plot=short&r=json")
    render json: data
  end

end
