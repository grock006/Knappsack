Rails.application.routes.draw do

	root "application#index"

	get "/search" => "searches#index"
	get "/search/:id" => "searches#show", as: :searches
    
    resources :itineraries

    namespace :api do
    	resources :itineraries
  	end
    
	resources :events

	 namespace :api do
    	resources :events
  	end

end
