class EventsController<ApplicationController

	def index
		@events = Event.all
	end

	def new
		@event = Event.new
	end

	def create
		@event = current_user.event.new(events_parans)
		if event.save
			redirect_to events_path
		else
			render :new
		end
	end

end