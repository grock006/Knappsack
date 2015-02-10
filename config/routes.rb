Rails.application.routes.draw do

  root "users#index"
  
  get '/signup' => 'users#new', as: :signup
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: :login
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy', as: :logout

  resources :users 
  
	get "/index" => "application#index"

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
