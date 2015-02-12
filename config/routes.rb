Rails.application.routes.draw do
  # get 'searches#index'

   scope 'api' do
    get "/searches" => "searches#index"
    # resources :searches 
  end

# get  'api/query' => 'searches#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".


  root "users#index"
  
  get '/signup' => 'users#new', as: :signup
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: :login
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy', as: :logout

  resources :users 
  
	get "/index" => "application#index", as: :main

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
