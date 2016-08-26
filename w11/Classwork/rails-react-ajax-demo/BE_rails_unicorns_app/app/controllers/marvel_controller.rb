class MarvelController < ApplicationController
  require 'digest/md5'


  def trigger_marvel_api
    char_name = params[:name]

    puts "MARVEL API KEY:", ENV["MARVEL_PUBLIC_API_KEY"]
    puts "MARVEL PRIVATE API KEY:", ENV["MARVEL_PRIVATE_API_KEY"]

    marvel_public_api_key = ENV["MARVEL_PUBLIC_API_KEY"]
    marvel_private_api_key = ENV["MARVEL_PRIVATE_API_KEY"]
    ts = Time.now.strftime('%s')
    hash = Digest::MD5.hexdigest(ts + marvel_private_api_key + marvel_public_api_key)

    fullQuery = "http://gateway.marvel.com:80/v1/public/characters?ts=#{ts}&apikey=#{marvel_public_api_key}&hash=#{hash}&name=#{char_name}"

    data = HTTParty.get(fullQuery)
    render json: data

  end

end
