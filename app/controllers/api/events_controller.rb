module Api
  class EventsController < ApplicationController

    def index
      events = Event.all
      render json: events.to_json, only: :id
    end

    def show
      event = Event.find(params[:id])
      render json: event.to_json
    end

    def create
      event = Event.new(event_params)

      if event.save
        render json: event, location: [:api, event]
      else
        render json: {event: event, errors: event.errors.full_messages}, status: 422
      end
    end

  private
    def event_params
      params.require(:event).permit(:title, :start, :end, :category, :description, :rating, :main_url, :location, :itinerary_id)
    end


  end
end