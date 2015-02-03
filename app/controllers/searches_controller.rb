class SearchesController < ApplicationController
  def index

    @params = { 
        term: @keywords,
        limit: 20,
        category_filter: @category_string,
       }
        @yelp_results = Yelp.client.search(@location, @params)
         @businesses = @yelp_results.businesses
  end
end
