class SearchesController < ApplicationController
	def index
		@itinerary = Itinerary.all
	end

	def show
		@itinerary = Itinerary.find(params[:id])
	end
end