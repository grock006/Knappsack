class ItinerariesController < ApplicationController
	
	def index
		@itinerary = Itinerary.all
	end

	def show
    	@itinerary = Itinerary.find(params[:id])
  	end

  	def new
    	@itinerary = Itinerary.new
  	end

  	def create
    	@itinerary = Itinerary.new(itinerary_params)

    if @itinerary.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @itinerary = Itinerary.find(params[:id])
  end

  def update
    @itinerary = Itinerary.find(params[:id])

    if @itinerary.update(itinerary_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @itinerary = Itinerary.find(params[:id])
    
    @itinerary.destroy
    
    redirect_to root_path
  end

private

  def itinerary_params
    params.require(:itinerary).permit(:name, :description, :start_date, :end_date)
  end

end