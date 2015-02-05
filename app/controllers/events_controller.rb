class EventsController<ApplicationController

	def index
		@events = Event.all.order(created_at: :desc)
	end

	def new
		@event = Event.new
	end

	def create
		@event = Event.new(event_params)
		if @event.save
		 	 redirect_to events_path
		else
			 redirect_to new_event_path
		end
	end

	def event_params
		params.require(:event).permit(:name, :date, :start_time, :end_time, :category, :description, :rating, :main_url, :location)
	end

end