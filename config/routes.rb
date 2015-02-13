Rails.application.routes.draw do

<<<<<<< HEAD
  root "users#index"
  
  get '/signup' => 'users#new', as: :signup
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: :login
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy', as: :logout
=======
	# root "application#index"
  root "application#index"
    
    resources :itineraries
>>>>>>> greg

  resources :users 
  
	get "/index" => "application#index", as: :main

	get "/search" => "searches#index"
	get "/search/:id" => "searches#show"
    
  resources :itineraries
  resources :events

  namespace :api do
    resources :itineraries
    resources :events
    get "/searches" => "searches#index"
  end
end
