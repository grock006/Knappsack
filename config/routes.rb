Rails.application.routes.draw do

	# root "application#index"
  root "application#index"
    
    resources :itineraries

    namespace :api do
    	resources :itineraries
  	end
    
	resources :events

	 namespace :api do
    	resources :events
  	end

end
