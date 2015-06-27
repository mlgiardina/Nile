Rails.application.routes.draw do
  resources :users
  resources :products
  resources :orders

  get "/login" => "sessions#new"
  post "/logout" => "sessions#create"
  get "/logout" => "sessions#logout"

  root 'products#index'

end
