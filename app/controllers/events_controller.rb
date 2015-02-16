class EventsController < ApplicationController
	
	def index
		@event = current_user.event.all
	end

	def show
    	@event = current_user.event.find(params[:id])
  	end

  	def new
    	@event = current_user.events.new
  	end

  	def create
    	@event = current_user.events.new(event_params)

    if @event.save
      redirect_to main_path
    else
      render :new
    end
  end

  def edit
    @event = current_user.events.find(params[:id])
  end

  def update
    @event = current_user.events.find(params[:id])

    if @event.update(event_params)
      redirect_to main_path
    else
      render :edit
    end
  end

  def destroy
    @event = current_user.events.find(params[:id])
    
    @event.destroy
    
    redirect_to main_path
  end

private

  def event_params
    params.require(:event).permit(:title, :start, :begin_time, :stop_time, :category, :description, :rating, :main_url, :location, :itinerary_id)
  end
    

end