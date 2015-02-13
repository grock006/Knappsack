# <<<<<<< HEAD
# class EventsController<ApplicationController

# 	def index
# 		@events = Event.all.order(created_at: :desc)
# 	end

# 	def new
# 		@event = Event.new
# 	end

# 	def create
# 		@event = Event.new(event_params)
# 		if @event.save
# 		 	 redirect_to events_path
# 		else
# 			 redirect_to new_event_path
# 		end
# 	end

# 	def event_params
# 		params.require(:event).permit(:name, :date, :start_time, :end_time, :category, :description, :rating, :main_url, :location)
# 	end

class EventsController < ApplicationController
	
	def index
		@event = Event.all
	end

	def show
    	@event = Event.find(params[:id])
  	end

  	def new
    	@event = Event.new
  	end

  	def create
    	@event = Event.new(event_params)

    if @event.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      redirect_to events_path
    else
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
    
    @event.destroy
    
    redirect_to events_path
  end

private

  def event_params
    params.require(:event).permit(:name, :date, :start_time, :end_time, :category, :description, :rating, :main_url, :location, :itinerary_id)
  end
  

end