module Api
  class ItinerariesController < ApplicationController

    def index
      itineraries = Itinerary.all
      render json: itineraries.to_json, only: :id
    end

    def show
      itinerary = Itinerary.find(params[:id])
      render json: {itinerary: itinerary, date_range: itinerary.date_range}
    end

    def create
      itinerary = Itinerary.new(itinerary_params)

      if itinerary.save
        render json: itinerary, location: [:api, itinerary]
      else
        render json: {itinerary: itinerary, errors: itinerary.errors.full_messages}, status: 422
      end
    end

  private
    def itinerary_params
      params.require(:itinerary).permit(:name, :description, :start_date, :end_date)
    end


  end
end