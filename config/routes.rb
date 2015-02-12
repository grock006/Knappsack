Rails.application.routes.draw do

  root "users#index"
  
  get '/signup' => 'users#new', as: :signup
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: :login
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy', as: :logout

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
