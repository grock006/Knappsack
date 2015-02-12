class ItinerariesController < ApplicationController
	
	def index
    if current_user
		@itinerary = current_user.itineraries.all.order(created_at: :desc)
    end
	end

	def show
    	@itinerary = current_user.itineraries.find(params[:id])
  end

  def new
    	@itinerary = Itinerary.new
  end

  def create
    	@itinerary = current_user.itineraries.new(itinerary_params)

    if @itinerary.save
      redirect_to "/index"
    else
      render :new
    end
  end

  def edit
    @itinerary = current_user.itineraries.find(params[:id])
  end

  def update
    @itinerary = current_user.itineraries.find(params[:id])

    if @itinerary.update(itinerary_params)
      redirect_to "/index"
    else
      render :edit
    end
  end

  def destroy
    @itinerary = current_user.itinerary.find(params[:id])
    
    @itinerary.destroy
    
    redirect_to "/index"
  end

private

  def itinerary_params
    params.require(:itinerary).permit(:name, :description, :start_date, :end_date)
  end

end