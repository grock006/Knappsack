class SearchesController < ApplicationController

require 'uri'
# respond_to :json
  def index

        @limit_by_number = params[:limit]

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

        @access_token = OAuth::AccessToken.new(
          consumer, token, token_secret)


  def search(term, location, limit)
        path = URI.encode "/v2/search?term=#{term}&location=#{location}&limit=#{limit}"
        # result = JSON.parse(@access_token.get(path).body)
        result = @access_token.get(path).body

    return result 
  end   

   @result = search('cafe', 'alhambra', @limit_by_number)

    # # @limit = params[:limit]

    # @location = "Los Angeles"
    # @params = { 
    #     term: 'cafe',
    #     limit: 3 ,
    #     category_filter: 'cafes',
    #     sort: 0
    #    }
    #     @yelp_results = Yelp.client.search(@location, @params)
    #      @businesses = @yelp_results.businesses
    #      # @businesses = JSON.parse(@businesses.to_s)
    #      # @businesses = @businesses.to_s

    render json: @result
  end


end
