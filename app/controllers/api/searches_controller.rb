module Api
  class SearchesController < ApplicationController

  require 'uri'
    def index

    def search(term, location, limit, category)

          api_host = 'api.yelp.com'
    
          consumer_key    = 'ESlz921hij6-PRs8ZiV1kA'
          consumer_secret = 'S6O1af3CNeH5_eD4PpT9gWwtmo4'
          token           = 'KXhADDeDjbhuA7Up2x-uv4CKA4YYtsvb'
          token_secret    = 'Yq8chwYEexx5DWEPTAM98Ck3pU4'


          consumer = OAuth::Consumer.new(
            consumer_key,
            consumer_secret,
            {:site => "http://#{api_host}"}
          )

          @access_token = OAuth::AccessToken.new(consumer, token, token_secret)
          path = URI.encode "/v2/search?term=#{term}&location=#{location}&limit=#{limit}&category_filter=#{category}"
          result = @access_token.get(path).body
      return result 
    end   

    @result = search(params[:term], params[:location], params[:limit], params[:category])
      render json: @result
    end


  end

end